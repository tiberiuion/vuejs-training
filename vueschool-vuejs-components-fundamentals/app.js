//locally defined component
//can be importent into other components to be used and discarded as needed
//cannot be used outside the components where it's defined
let PlanComponent = {
    template: '#plan-template',
    props:{
        name: {
            type: String,
            required: true
        }
    }
}

//this is a globally registered component
//generally it's not ideal
Vue.component('plan-picker', {
    template: '#plan-picker-template',
    //components is an object
    components: {
        //it goes
        //tagname (that will eventually be used in HTML tempalte): name of the variable in which the component was defined
        //plan component cannot be used outside plan-picker component
        plan: PlanComponent
    },
    data() {
        return {
           plans: ['The Single','The Curious', 'The Addict']
        }
    }
})


new Vue({
    el:'#app'
})