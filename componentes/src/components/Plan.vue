<template>
    <div>
        <div @click="seleccionar()" class="plan" :class="{'plan-activo':seleccinado}">
            <div class="descripcion"> 
                <span class="titulo">{{nombre}}</span>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'Plan',
    props: {
        nombre:{
          type:String,
          default:'Plan 1 - Principiante',
          required: true
        }, 
        precio:Number
    },
    data(){
        return {
            seleccinado: false
        }
    },
    methods:{
        seleccionar(){
            var obj = {
                select_:this.nombre,
                seleccionado: !this.seleccinado
            };
            this.$emit('select_', obj);
            this.seleccinado = !this.seleccinado
        }
    }
}
</script>

<style>

</style>