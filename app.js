const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedInput: "",
      // fullname:"",
      lastName:"",
    };
  },
  watch: {
counter(value){
  if(value>50){
    const that=this;
    setTimeout(function(){
      that.counter=0;
    },2000)
     //here the watcher shine when we have a condition where we need to change a propertie
  }
}

    /* name(value){
      if(value===''){
        this.fullname='';
      }
      this.fullname=value + ' ' + this.lastName;
    },
    lastName(value){
      if(value===''){
        this.fullname='';
      }
      this.fullname=this.name + ' ' + value
    } */
  },
  computed:{
    fullname(){
      console.log('Running again ...');
     if(this.name==='' || this.lastName===''){
       return '';

     }
     return this.name + ' ' +this.lastName; //So easy just replace with the prop to change it Conclusion: the use of computed can change multiple prop instead of the use of watcher    
    }
  },
  methods: {
    outputFullname(){
      console.log('Running again ...');
      if(this.name===''){
        return '';
      }
        return this.name + ' ' +'Ouadrani';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    /* setName(event, lastName) {
      this.name = event.target.value  + " " + lastName ;
    } */
    setName(event) {
      this.name = event.target.value ;
    },
    submitForm(event) {
      //event.preventDefault(); to avoid refresh we can use it but we will deal with vue modifiers
      alert("submitted");
    },
    confirmInput() {
      this.confirmedInput = this.name;
    },
    resetInput(){
      this.name='';
    }
  },
});

app.mount('#events');


