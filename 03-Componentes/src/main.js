import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;
/*
Vue.component('saludo', {
    template: '<h1>Saludo</h1>'
});

var componente1 = Vue.extend({
    template: '<h1> {{ subtitulo }} </h1>',
    data() {
        return {
            subtitulo: 'Introduccion a componentes.'
        }
    }
});



var componente2 = Vue.extend({
    template: '<h3>{{subtitulo}}</h3>',
    data() {
        return {
            subtitulo: 'Listado de frameworks JS'
        }
    }
});

var componente3 = Vue.extend({
    template: '<div> <ul> <framework v-for="fra in frameworks" :key="fra.id"> {{ fra.titulo }} </framework> </ul> </div>',
    data() {
        return {
            frameworks: [
                { id: 1, titulo: 'Vue' },
                { id: 2, titulo: 'Angular' },
                { id: 3, titulo: 'React' }
            ]
        }
    }
});

Vue.component('componente-saludo', {
    data() {
        return {
            titulo: 'Introduccion a componentes'
        }
    },
    methods: {
        display() {
            alert("ok");
        }
    }
});
Vue.component('componente-titulo', componente2);
Vue.component('componente-lista', componente3);
Vue.component('framework', {
    template: '<li> <slot> </slot> </li>'
});
*/
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})