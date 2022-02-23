const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedInput: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      //event.preventDefault(); to avoid refresh we can use it but we will deal with vue modifiers
      alert("submitted");
    },
    confirmInput() {
      this.confirmedInput = this.name;
    },
  },
});

app.mount('#events');
