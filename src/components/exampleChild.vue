<template>
    <el-input v-model="childvalue" placeholder="输入数值" @input="childToF"></el-input>
</template>

<script>
export default {
    data(){
        return{
            childvalue:this.fromFvalue,
        }
    },
    props:{
        fromFvalue:{
            type:String,
            default:'',
        }
    },
    mounted(){
        this.a()
    },
    watch:{
        fromFvalue(){
            this.childvalue = this.fromFvalue
        }
    },
    methods:{
        childToF(){
            this.$emit('getCdata',this.childvalue)
        },
        a(){
            let arr =[1,2,3,4,5,6,7,8,9]
            console.log(Array.isArray(arr))
        }
    }
}
</script>

<style>

</style>