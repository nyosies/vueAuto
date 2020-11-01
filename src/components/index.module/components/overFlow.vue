<template>
  <div>
    <div class="overflow">
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
      <div class="box">
        <div>1个盒子</div>
      </div>
    </div>
    <ny-menu></ny-menu>
  </div>
</template>
<style scoped>
.overflow {
  display: flex;
  flex-flow: wrap;
  background:rgba(0,100,11,0.3);
  min-height: 100vh;
}
.overflow > .box {
  box-sizing: border-box;
  width: 50%;
  height: 300px;
  padding: 10px;
}
.box > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>