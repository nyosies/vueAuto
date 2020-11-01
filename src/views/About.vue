<template>
  <div class="about">
    <h1>This is an about page</h1>
     <button @click="back">返回</button>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>
