<template>
  <div class="home">
        <!-- <nav-title>
                <template v-slot:body>
                      <h2>这是来自于Home组件</h2>
                      <h4>sadhjklasfhjksalfh</h4>
                </template>
         </nav-title>
        <ny-card></ny-card> -->
        <!-- <common></common> -->
        <!-- <ny-node></ny-node>
        <NyDialog></NyDialog> -->
        <!-- <over-flow></over-flow> -->
         <keep-alive>
               <component :is="iscomponent" :value='value' @curClick='curClick'></component>
         </keep-alive>
        <router-link to="/About">goAbout</router-link>
  </div>
</template>

<script>
export default {
    data(){
          return{
                iscomponent:'',
                value:20
          }
    },
    created(){
       setTimeout(()=>{
             this.iscomponent = 'requestCom'
       },2000)
    },
    methods:{
          curClick(){
                this.value = ++this.value
          }
    }
}
</script>
