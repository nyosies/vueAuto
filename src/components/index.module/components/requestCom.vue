<template>
    <div>
        <h1>{{name}}</h1>
         <h3>{{value}}</h3>
        <button @click='cur'>click</button>
    </div>
</template>
<script>
  export default{
    props:{
        name:{
            type:String,
            default:'这是异步组件'
        },
         value:{
             type:Number,
             default: 0
         }
    },
     data(){
         return{
            
         }
     },
     methods:{
         cur(){
           this.$emit('curClick',this.vlaue)
         }
     }
  }
</script>