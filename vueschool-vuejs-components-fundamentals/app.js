Vue.component('plan', {
    template: '#plan-template',
    props:['name']
})

new Vue({
    el:'#app',
    //add data with  plans array to loop through in the markup
    data: {
        plans: ['The Single','The Curious', 'The Addict']
    }
})