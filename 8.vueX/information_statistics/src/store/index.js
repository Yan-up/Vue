import Vue from 'vue'
import vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(vuex)
const store = new vuex.Store({
    state: {
        tableList: [
            {
                id: '1',
                name: '张三',
                age: 18,
                alone: '2',//是否独生 1是 2否,
                isCity: '1',//是否城市 1是 2否,
                vaccine: '1',//疫苗 1是 2否
                phone: '18712165555',
                idCard: '43068196606066664',
                address: '上海市普陀区金沙江路 1518',
            },
            {
                id: '2',
                name: '李四',
                age: 22,
                alone: '1',//是否独生 1是 2否,
                isCity: '2',//是否城市 1是 2否,
                vaccine: '1',//疫苗 1是 2否
                phone: '18715698555',
                idCard: '45687811545456455',
                address: '上海市普陀区金沙江路 1518',
            },
        ]
    },
    getters: {//计算属性,根据状态数据计算出一个新的数据
        /* aloneNum() {
        return state.tableList.reduce((total, item) => {
        if (item.alone === '1') {
        return total + 1
        } else {
        return total
        }
        }, 0)
        } */
        //简写
        aloneNum: state => state.tableList.reduce((total, item) => item.alone === '1' ? total + 1 : total, 0),
        cityNum: state => state.tableList.reduce((total, item) => item.isCity === '1' ? total + 1 : total, 0),
        vaccineNum: state => state.tableList.reduce((total, item) => item.vaccine === '1' ? total + 1 : total, 0),
        ageNum: state => state.tableList.reduce((total, item) => item.age >= 18 ? total + 1 : total, 0)
    },
    mutations: {
        addTableList(state, obj) {//新增
            state.tableList.push(obj);
        },
        editTableList(state, obj) {//编辑
            // 简写
            state.tableList = state.tableList.map(item => item.id === obj.id ? obj : item)
            /* state.tableList.map(item => {
            if (item.id === obj.id) {
            item = obj
            }
            return item
            }) */
        },
        deleteTadList(state, arr) {//删除
            state.tableList = state.tableList.filter(item => !arr.includes(item.id))
        }

    },
    plugins: [createPersistedState()]//页面持久化插件
})
export default store//导出