import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        proD1 :[{
            "gooodsId": "001",
            "gooodsName": "香烟",
            "price": 15,
            "count": 1,
            "goodsPic": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3155877623,2659659639&fm=26&gp=0.jpg",
            'ischecked' : false
        }, {
            "gooodsId": "002",
            "gooodsName": "啤酒",
            "price": 19,
            "count": 12,
            "goodsPic": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=364940872,3717760142&fm=26&gp=0.jpg",
            'ischecked' : false

        }, {
            "gooodsId": "003",
            "gooodsName": "香烟",
            "price": 15,
            "count": 1,
            "goodsPic": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3155877623,2659659639&fm=26&gp=0.jpg",
            'ischecked' : false

        }, {
            "gooodsId": "004",
            "gooodsName": "啤酒",
            "price": 19,
            "count": 12,
            "goodsPic": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=364940872,3717760142&fm=26&gp=0.jpg",
            'ischecked' : false

        }, {
            "gooodsId": "005",
            "gooodsName": "香烟",
            "price": 15,
            "count": 1,
            "goodsPic": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3155877623,2659659639&fm=26&gp=0.jpg",
            'ischecked' : false

        }, {
            "gooodsId": "006",
            "gooodsName": "啤酒",
            "price": 19,
            "count": 12,
            "goodsPic": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=364940872,3717760142&fm=26&gp=0.jpg",
            'ischecked' : false

        }],
    },
    getters:{
        sum(state,getters){
            let sum = 0;
            state.proD1.map((item)=>{
                sum += item.price*item.count
            })
            return sum
        }
    },
    mutations:{
        mul(state,payload){
            if(payload.count > 1){
                payload.count-- 
            }else{
                payload.count =1
            }
            
        },
        del(state,payload){
            state.proD1.splice(payload,1)
        }
    }
})

