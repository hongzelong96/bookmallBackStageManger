<template>
  <!-- <svg :class="svgClass" aria-hidden="true"> -->
  <svg :class="svgClass">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  data() {
    return {
      size: "1.2em",
    };
  },
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
    sizeStyle: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.sizeStyle == "big") {
        if (this.className) {
          return "svg-icon-big " + this.className;
        } else {
          return "svg-icon-big";
        }
      }
      else if(this.sizeStyle == "normal"){
        if (this.className) {
          return "svg-icon " + this.className;
        } else {
          return "svg-icon";
        }
      }
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.18em;
  fill: currentColor;
  overflow: hidden;
}
.svg-icon-big {
  width: 2em;
  height: 2em;
  vertical-align: -0.18em;
  fill: currentColor;
  overflow: hidden;
}
</style>