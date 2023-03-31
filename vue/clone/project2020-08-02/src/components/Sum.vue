<template>
    <div>
           <p class="bottom">
                <input type="checkbox" >
                <span>全选</span>
                <span>取消全选</span>
                <span>Total:{{sum}}￥元</span>


                <button>结 算</button>


            </p>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    
     computed:{
       
        ...mapGetters(['sum'])
    },
}
</script>