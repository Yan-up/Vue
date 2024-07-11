<template>
    <div id="shoe-details">
        <img :src="require(`../assets/image/${item.img}`)" alt="" />
        <p>{{ item.details }}</p>
        <div class="price">
            <p>{{ item.price }}</p>
            <button v-if="bool" @click="bool = false">修改价格</button>
            <div class="modify-price" v-else>
                <input type="text" name="text" placeholder="输入修改金额" v-model="price" />
                <button @click="onEdit">确认</button>
                <button @click="bool = true">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShoeDetails",
    props: {
        item: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            bool: true,
            price: ''
        }
    },
    //接收changeMyprice这个方法
    inject: ['changeMyprice'],
    methods: {
        onEdit() {
            let price = Number(this.price)
            if (!price) {
                return alert('请输入正确价格')
            }
            this.changeMyprice(price, this.item.id)
            this.price = ''
            this.bool = true
        }
    }
};
</script>

<style lang="scss">
#shoe-details {
    width: 200px;
    height: 300px;
    margin: 10px 50px;
    padding: 10px 10px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid #000;

    & img {
        width: 150px;
        height: 150px;
        margin: 0 auto;
    }

    &>p {
        width: 100%;
        overflow: hidden;
        /* 隐藏超出容器的内容 */
        text-overflow: ellipsis;
        /* 超出部分用省略号显示 */
        white-space: nowrap;
        /* 文本不换行 */
    }

    & .price {
        height: 70px;
    }
}
</style>