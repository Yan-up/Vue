<template>
    <div id="app">
        <div class="navigation-bar">
            <h2>鞋子卖场</h2>
            <div class="select">
                <p v-for="item in selectList" :key="item.id" :class="item.type === type ? 'on' : ''"
                    @click="type = item.type">
                    {{ item.name }}
                </p>
            </div>
        </div>
        <ShoeStore :msgList="msgList"></ShoeStore>
    </div>
</template>

<script>
import "@/assets/css/default.css"; // 引入全局样式
import ShoeStore from "@/components/ShoeStore.vue";
export default {
    name: "App",
    components: {
        ShoeStore,
    },
    data() {
        return {
            type: 0,
            selectList: [
                {
                    id: 1,
                    name: "全部商品",
                    type: 0,
                },
                {
                    id: 2,
                    name: "男鞋",
                    type: 1,
                },
                {
                    id: 3,
                    name: "女鞋",
                    type: 2,
                },
            ],

            productList: [
                {
                    id: 1,
                    img: '1.jpg',
                    details: '欧洲站潮牌男鞋百搭新款小白',
                    price: '￥278',
                    type: 1
                },
                {
                    id: 2,
                    img: '2.jpg',
                    details: '回力男鞋帆布鞋低帮网球田径',
                    price: '￥79',
                    type: 1
                },
                {
                    id: 3,
                    img: '3.jpg',
                    details: '李宁跑步鞋男网面透气男666',
                    price: '￥278',
                    type: 1
                },
                {
                    id: 4,
                    img: '4.jpg',
                    details: '王小毒】星河灿烂●芭蕾666',
                    price: '￥289',
                    type: 2
                },
                {
                    id: 5,
                    img: '5.jpg',
                    details: '尖头高跟鞋女细跟2022年',
                    price: '￥148',
                    type: 2
                },
                {
                    id: 6,
                    img: '6.jpg',
                    details: '漆皮黑色高跟鞋时尚浅口666',
                    price: '￥179',
                    type: 2
                }
            ]
        }
    },
    provide() {
        return {//向ShoeDetails传changeMyprice这个方法
            changeMyprice: this.changeMyprice
        }
    },
    computed: {
        msgList() {
            if (this.type === 0) {
                return this.productList;
            }
            return this.productList.filter(item => item.type === this.type);
        }
    },
    methods: {
        changeMyprice(price, id) {//修改价格
            this.productList = this.productList.map((item) => {
                if (item.id === id) {
                    item.price = `￥${price}`
                }
                return item;
            })
        }
    }
};
</script>
<style lang="scss">
#app {
    width: 1200px;
    margin: 10px auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .navigation-bar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & h2 {
            color: #999;
            font-weight: lighter;
        }

        & .select {
            display: flex;

            & p {
                cursor: pointer;
                margin-left: 10px;

                &.on {
                    color: #f00;
                }
            }
        }
    }
}
</style>