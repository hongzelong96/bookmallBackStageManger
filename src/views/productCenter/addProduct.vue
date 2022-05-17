<template>
  <edit-product :isUpdate ='false'></edit-product>
</template>

<script>
import editProduct from "./components/editProduct.vue"
export default {
  name:'addproduct',
  components:{
    editProduct
  }
}
</script>

<style>

</style>