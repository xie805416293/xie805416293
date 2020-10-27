<template>
    <div class="box">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>
</template>
<script>
export default {
    created () {
        const str = this.$route;
        console.log(str);
        const org = this.fun(1, 2);
        console.log(org);
        const a= {}
        console.log(a);
        console.log(window)
    },
    methods: {
        fun(num1, num2) {
            const num = num1 + num2;
            if (num2 + 1 > 100) {
                return num;
            } else {
                
                return this.fun(num, num2 + 1)
            }
        }
    },
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 100px;
    display:flex;
}
.box1,.box3{
    width: 100px;
    height: 100px;
    background-color: blue;
}
.box2{
    flex: 1;
    height: 100px;
    background-color: green;
}
</style>