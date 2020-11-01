<template>
    <div class="common">
         <div class="common_left">
             <div>1</div>
             <div>2</div>
             <div>3</div>
         </div>
         <div class="common_core">
             <div>5</div>
             <div>6</div>
             <div>7</div>
         </div>
         <div class="common_right">
             <div>8</div>
             <div>9</div>
             <div>10</div>
         </div>
    </div>
</template>
<style scoped>
    .common{
        width: 100vw;
        /* height:100vh; */
       background: #3333;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
    }
    .common>div{
        width: 30%;
    }
    .common_left{
        
    }
    .common_core{}
    .common_right{}
    .common_left>div,.common_core>div,.common_right>div{
        width: 100%;
        height: 700px;
    }
    .common_left>div{
        background: red;
    }
    .common_core>div{
        background:#fff;
    }
    .common_right>div{
        background: #f67000;
    }
</style>