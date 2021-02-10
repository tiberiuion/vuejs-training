Vue.component('plan', {
    template: '#plan-template',
    //props also accepts an object where the props become keys and the data type is the value
    //props also accept other objects. This opens up options to set the type, default value and even if required or not.
    props:{
        name: {
            type: String,
            default: 'The Essential',
            required: true
        }
    }
})

new Vue({
    el:'#app',
    //add data with  plans array to loop through in the markup
    data: {
        plans: ['The Single','The Curious', 'The Addict']
    }
})