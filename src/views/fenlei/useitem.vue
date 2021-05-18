<template>

     <li class="category-item">
              <div class="item-tit">
                <div class="item-tit-con">
                    <!-- <div class="text">
                        家常菜
                    </div> -->
                   <router-link :to="{path:dealRecipetit(currentItem)}">
                        <img :src="currentItem.image_url" alt="" class="item-img">
                   </router-link>
                </div>
              </div>
              <div class="item-info">
<van-grid :column-num="3" :gutter="15">
 
      <van-grid-item v-for="cook in currentItem.cs" :key="cook.id"  :text="cook.name" @click="onRecipeitem(cook)"/>
 
</van-grid>
              </div>
            </li>
</template>
<script>
import Vue from 'vue';
import { Grid,GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
function renderColor(){
    //6 位 0-f
   var arr = [];
   for(var i =0;i<3;i++){
       let rand = parseInt(Math.random()*256)
       arr.push(rand)
   }
   return arr;
   
}

export default {
    props:{
        currentItem:{
            type:Object
        }
    },
    created(){
        console.log('item created');
        console.log(this.currentItem);
    },
    methods:{
        renderColor,
        setColor:function(){
            let arr = renderColor()
           return {
               font:`rgb(${arr[0]},${arr[1]},${arr[2]})`,
               bg:`rgba(${arr[0]},${arr[1]},${arr[2]},0.2)`
           }
        },
         dealRecipe(value){
            var str = value.split('?')[1]
            let obj={};
            str.split('&').forEach(item=>{
                obj[item.split('=')[0]]=item.split('=')[1]
            })
           return obj.key||'西餐';
        },
        dealRecipetit(value){
            if(value.ju){
                return '/caipu?key='+this.dealRecipe(value.ju)+'&_vs=400'
            }
                return '/caipu?key=西餐&_vs=400'
        },
        onRecipeitem(item){
            
            let link = this.dealRecipetit(item)
            this.$router.push(link)
        }
    },
    // filters:{
    //     dealRecipe(value){
    //         var str = value.split('?')[1]
    //         let obj={};
    //         str.split('&').forEach(item=>{
    //             obj[item.split('=')[0]]=item.split('=')[1]
    //         })
    //        return obj.key||'西餐';
    //     }
    // }
}
</script>
<style lang="scss" scoped>
::v-deep .van-grid-item__content--surround::after{
    border-width: 4px;
}
::v-deep .van-sidebar-item .van-sidebar-item--select::before{
    right: 0;
    left: auto;
  background:orange;
}
::v-deep .van-sidebar{
  width: 100%;
}
::v-deep .van-grid-item__content{
  padding: 6px 0px;
  font-size: 14px;
  border-radius: 10px;
  overflow: hidden;
}
.category-item{
  margin: 20px 0px;
    .item-tit{
      margin-bottom: 10px;
      padding: 0px 15px;
      
      .item-tit-con{
        
        width: 100%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        img{
            width: 100%;
        }
      }
    }
  }
</style>