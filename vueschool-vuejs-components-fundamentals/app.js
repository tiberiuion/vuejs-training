let PlanComponent = {
    template: '#plan-template',
    props:{
        name: {
            type: String,
            required: true
        }
    },
    //setup selected property to be manipulated via the method below
    data () {
        return {
            selected: false
        }
    },
    //add method that turns selected property to true
    methods: {
        select() {
            this.selected = true
        }
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
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
    components: {
        'plan-picker': PlanPickerComponent
    }
})