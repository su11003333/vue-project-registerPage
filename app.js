new Vue({
    el: '#app',
    data: {
      event:{
        eventData: ' August 14th - 16th',
        eventTitle: 'Summer Festival!',
        eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
      },
      newNameText:'',
      guestName: [],
      formSubmitClass: '',
      appStyles:{
        marginTop:'25px',
      },
      eventCapacity: 25,
      eventCapacityPercentage:0
    },
    methods: {
      formSubmitted: function(){
        if(this.newNameText.length>0 && this.eventCapacityPercentage<100){
            this.guestName.push(this.newNameText)
            this.newNameText= ''
            this.formSubmitClass= "submitted"
            this.eventCapacityPercentage= this.guestName.length/(this.eventCapacity/100)
        }
      },
      keyPressed: function(){
        console.log('enter has been clicked')
      }
    },
    computed: {
      sortNames: function(){
        return this.guestName.sort();
      }
    },
    watch: {
      guestName: function(data){
        console.log('it has been changed');
        //用來觀察存在的資料
      }
    },
    filters: {
      toUpper: function(value) {
        return value.toUpperCase()
      },
      formatName: function(value){
        return value.slice(0,1).toUpperCase()+ value.slice(1).toLowerCase()
      }
    }
});


new Vue({
  el:'#navigation',
  data: {
    appName: 'Guest List',
    navLinks: [
      {name:"Home",id:1,url:""},
      {name:"Upcoming events", id:2, url:""},
      {name:"Guest Benefits", id:3,url:""},
      {name:"Latest News", id:4,url:""}
    ]
  }
})
