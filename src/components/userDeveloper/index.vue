<template>
  <div>
    <div class="contanier">
      <img style="width: 50px; height: 50px" src="../../../static/avatar.png" />
      <div class="Textholder">
        <div>
          <span style="font-size: 25px">{{ name }}</span
          ><span style="font-size: 20px; color: grey; margin-left: 15px">{{
            updateTime
          }}</span>
        </div>
        <div class="RichText">
          {{ behavior }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
    },
    updateTime: {
      type: String,
    },
    behavior: {
      type: String,
    },
  },
};
</script>

<style scoped>
.contanier {
  margin-top: 8px;
  display: flex;
  /* align-items: center; */
  height: 100px;
}
.Textholder {
  flex: 1;
  margin-left: 20px;
  /* display: flex; */
}
.RichText {
  margin-top: 8px;
  height: 65px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>