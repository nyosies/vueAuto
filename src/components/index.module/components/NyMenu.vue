<template>
    <div class="NyMenu ">
        <div class="redius">{{menu}}</div>
         <div class="menu_item">
             <div>1</div>
             <div>1</div>
              <div>1</div>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:{
        menu:{
            type:String,
             default:'菜单'
        }
    }
}
</script>
<style scoped>
.NyMenu{
        position: fixed;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items:center;
        /* color: #fff; */
        font-weight: 600;
        flex-direction: row-reverse;
    }
    .redius{
         display: flex;
        justify-content: center;
        align-items:center;
        width: 70px;
        height: 70px;
        z-index: 1;
        border-radius:50%;
        background: gold;
        margin: 0 5px 5px 0;
    }
    .menu_item>div{
        display:flex;
        justify-content:center;
        align-items: center;
    }
    .menu_item>div:first-child{
          width: 70px;
        height: 70px;
        z-index: 1;
        border-radius:50%;
        background: bisque;
         
    }
     .menu_item>div:nth-child(2){
        width: 70px;
        height: 70px;
        z-index: 1;
        border-radius:50%;
        background: #666;
     }
</style>