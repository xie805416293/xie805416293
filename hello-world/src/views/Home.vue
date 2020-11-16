<template>
    <div> 
        <p @click="gotoNext">{{text}}</p>
        <label>点击</label>
        <keep-alive v-if="$route.meta.keepAlive">
            缓存页面上数据
        </keep-alive>
    </div>
</template>
<script>
import { mapState, mapGetters , mapActions, mapMutations} from 'vuex';
export default {
    data() {
        return {
            text: '谢仁丛'
        }
    },
    computed: {  
    ...mapState(['showCase']),
    ...mapGetters(['VilbleEnter']),
    ...mapState('user', ['count'])  
    },
    created() {
        console.log(this.showCase);
        console.log(this.VilbleEnter);
        console.log(this.count);
        console.log(this.$store.state);
        console.log(this.setdata());
        this.setdata()
        const arr = [1,2,6,9,4,3,5,2,1];
        

        for (let i = 0;i < arr.length; i++) { 
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] < arr[j + 1]){ 
                    const s = arr[j]; 
                    arr[j] = arr[j+1]; 
                    arr[j+1] = s; 
                } 
            }
        }
        console.log(arr)
    },
    activated() {
        console.log('监听返回操作')
    },
    methods: {
        gotoNext() {
            this.$router.push({
                name: 'user',
                params: {
                    code: '1'
                }
            })
        },
        ...mapMutations('user', ['setdata'])
    },
    beforeRouteEnter(to, from, next) {
      console.log(to, from, next)
      next()
    },
}
</script>