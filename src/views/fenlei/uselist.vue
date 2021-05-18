<template>
    <div>
           <ul class="category-list">
               <div v-for="item in currentlist.cs" :key="item.id" >
                   <!-- 有个坑 我们在当前便利的元素上不一定能访问到item和index 但是便利的里面一定能访问到 哦哦 -->
                   <category-item :currentItem="item">
           </category-item>
               </div>
           
          </ul>
    </div>
</template>
<script>
import categoryItem from './useitem'

export default {
    data(){
        return {
            id:this.currentlist.id,
        }
    },
    props:{
        currentlist:{
            type:Object
        }
    },
  components:{
    categoryItem
  }
}
</script>
<style lang="scss" scoped>

</style>