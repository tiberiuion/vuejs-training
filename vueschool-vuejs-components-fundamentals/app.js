// vue components have a name and options object like so
// Vue.component('name', {config object});
Vue.component('click-counter', {
    template: '<button @click="count++">{{count}}</button>',
    //unlike the Vue instanc, a component's data is not an object but a function which returns an object
    data(){
        return {
            count: 0
        }
    }
})

new Vue({
    el: '#app'
})