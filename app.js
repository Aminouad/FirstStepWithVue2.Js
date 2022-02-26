const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedInput: "",
      fullname:"",
      lastName:"",
    };
  },
  watch: {
    name(value){
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
    }
  },
  computed:{
    /* fullname(){
      console.log('Running again ...');
     if(this.name===''){
       return '';

     }
     return this.name + ' ' +'Ouadrani';   
    } */
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


