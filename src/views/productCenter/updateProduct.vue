<template>
  <edit-product :isUpdate="true"></edit-product>
</template>

<script>
import editProduct from "./components/editProduct.vue";
export default {
  name: "Update",
  components: { editProduct },
};
</script>

<style>
</style>