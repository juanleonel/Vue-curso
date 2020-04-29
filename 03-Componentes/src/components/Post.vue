<!-- primero se crea el componete-->
<!-- segundo se crea el script-->
<!-- tercero se crea el estilo-->
<template>
        <div class="">
           <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">body</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                
                <td>{{post.id}}</td>
                <td>{{post.titulo}}</td>
                <td>{{post.body}}</td>
                </tr>           
            </tbody>
            </table>
        </div>
</template>

<script>
export default {
    name: 'EjemploPost',
    data(){
        return {
                posts:[
                    {id:1, titulo:'post 1', body:'kkwnwkfwñfe'},
                    {id:2, titulo:'post 2', body:'kkwnwkfwñfe'},
                    {id:3, titulo:'post 3', body:'kkwnwkfwñfe'}
                ]
        }
    }
}
</script>

<style >

</style>