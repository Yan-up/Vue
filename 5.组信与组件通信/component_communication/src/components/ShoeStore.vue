<template>
    <div id="commodity-component">
        <ShoeDetails v-for="item in msgList" :key="item.id" :item="item">
        </ShoeDetails>
    </div>
</template>

<script>
import ShoeDetails from "./ShoeDetails.vue";
export default ({
    name: "ShoeStore",
    components: {
        ShoeDetails,
    },
    props: {
        msgList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
        }
    }
});
</script>
<style lang="scss">
#commodity-component {
    width: 1000px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
</style>
