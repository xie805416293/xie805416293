<template>
    <div class="box">
        <div class="box1"></div>
        <div class="box2" @click="gotoPage">
            <div class="rect"></div>
            <h3>用一个div模拟textarea的实现</h3>
            <div class="edit" contenteditable="true">
                这里是可以编辑的内容，配合容器的 overflow ，多行截断，自定义滚动条，简直好用的不要不要的。
            </div>
        </div>
        <div class="box3" @click="gotoback"></div>     
    </div>
</template>
<script>
import objFun from './number';
import { mapState, mapGetters , mapActions, mapMutations} from 'vuex';
export default {
    created () {
        const str = this.$route;
        const org = this.fun(1, 2);
        console.log(this.show,'show');
        
    },
    computed: {
        ...mapState('user', ['show'])
        
    },
    methods: {
        gotoPage() {
            window.open("http://www.runoob.com");
        },
        fun(num1, num2) {
            const num = num1 + num2;
            if (num2 + 1 > 100) {
                return num;
            } else {
                return this.fun(num, num2 + 1)
            }
        },
        gotoback() {
            // window.history.back(-1)
        }
    },
}
</script>
<style scoped>
.rect { /*三角形*/
    width: 0;
    height: 0;
    background-color: #fff;
    border-right: 100px solid transparent;
    border-left: 100px solid transparent;
    border-top: 100px solid rgb(29, 156, 194);
    border-bottom: 100px solid transparent;
}
.box{
    width: 100%;
    height: 500px;
    display:flex;
}
.box1,.box3{
    width: 100px;
    height: 500px;
    background-color: blue;
}
.box2{
    flex: 1;
    height: 500px;
    background-color: green;
}
.edit{
    width: 300px;
    height: 200px;
    padding: 5px;
    border: solid 1px #ccc;
    resize: both;
    overflow:auto;
}
</style>