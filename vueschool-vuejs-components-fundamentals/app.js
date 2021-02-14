let PlanComponent = {
    template: '#plan-template',
    props:{
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    computed:{
        isSelected(){
            return this.name === this.selectedPlan
        }
    },
    //add method that turns selected property to true
    methods: {
        select() {
            //emits event called select 
            //first prameter is mandatory but the second one is optional. In this case the second param is some data and this is called a payload
            this.$emit('select', this.name)
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
           plans: ['The Single','The Curious', 'The Addict'],
           selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
}

new Vue({
    el:'#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
})