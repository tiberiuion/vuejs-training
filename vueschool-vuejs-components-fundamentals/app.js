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

//this is now a locally registered component
let PlanPickerComponent = {
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
}


new Vue({
    el:'#app',
    //usually good practice to register one component globally and execute code inside it
    components: {
        //same principle as above, we want tag-name: component name
        //Vue is smart and can convert camelcase to kebab-case like so we can use PlanPicker and still use <plan-picker> in the HTML
        'plan-picker': PlanPickerComponent
    }
})