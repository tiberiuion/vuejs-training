Vue.component('plan-picker', {
    template: '#plan-picker-template',
    //data now becomes a function?
    data() {
        return {
           plans: ['The Single','The Curious', 'The Addict']
        }
    }
})

Vue.component('plan', {
    template: '#plan-template',
    props:{
        name: {
            type: String,
            required: true
        }
    }
})

new Vue({
    el:'#app'
})