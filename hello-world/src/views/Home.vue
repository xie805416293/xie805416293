<template>
    <div> 
        <p @click="gotoNext">{{text}}</p>
        <label>点击</label>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: '谢仁丛'
        }
    },
    methods: {
        gotoNext() {
            this.$router.push({
                name: 'user',
                params: {
                    code: '1'
                }
            })
        }
    },
}
</script>