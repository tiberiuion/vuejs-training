//this is a globally registered component
//generally it's not ideal
Vue.component('plan-picker', {
    template: '#plan-picker-template',
    //data now becomes a function?
    data() {
        return {
           plans: ['The Single','The Curious', 'The Addict']
        }
    }
})


//locally defined component
//can be importent into other components to be used and discarded as needed
let PlanComponent = {
    template: '#plan-template',
    props:{
        name: {
            type: String,
            required: true
        }
    }
}

new Vue({
    el:'#app'
})