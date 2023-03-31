<template>
    <div>
         <ul class="body">
                <li v-for="(item,index) in proD1" :key='item.gooodsId'>
                    <div>
                        <input type="checkbox" name="" class="checkbox"  >
                        <img :src="item.goodsPic" alt="">
                        <span class="name" v-text='item.gooodsName'></span>
                    </div>

                    <span>{{item.price}}元</span>
                    <div>
                        <button class="btn-right" @click="mul(item)">-</button>
                        <input type="text" v-model.number="item.count">
                        <button class="btn-left" @click="++item.count">+</button>
                    </div>

                    <i>￥{{item.price*item.count}}元</i>
                    <b class="iconfont icon-lajixiang" @click='del(index)'></b>
                </li>
            </ul>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return {
            
        }
  
    },
    computed:{
        ...mapState(['proD1']),
       
    },
    methods:{
        ...mapMutations(['mul','del'])
    }
}
</script>