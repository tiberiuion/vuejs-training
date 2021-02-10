Vue.component('plan', {
    template: '#plan-template',
    //props also accepts an object where the props become keys and the data type is the value
    props:{
        name: String,
        price: Number
    }
})

new Vue({
    el:'#app',
    //add data with  plans array to loop through in the markup
    data: {
        plans: ['The Single','The Curious', 'The Addict']
    }
})