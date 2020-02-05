import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// componentes

var componente1 = Vue.extend({
  data(){
    return{
      titulo: ' Hola introduccion a componentes '
    }
  },
  template: '<h1> {{titulo}} </h1>'
});

Vue.component('saludo', componente1);

Vue.component('titulo', {
  data(){
    return{
      titulo:'Listado de frameworks JavaScript'
    }
  },
  methods:{
    display:function(){
      alert("Templates en line");
    }
  }
});
 
Vue.component('lista-frameworks', {
  template: '<ul>'
           +'<li> Vue JS </li>'
           +'<li> React </li>'
           +'<li> Angular </li>'
           +'</ul>'
});

/* eslint-disable no-new */
new Vue({
  el: '#app'
  
})
