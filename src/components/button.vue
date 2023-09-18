<template>
  <button type="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  },
};
</script>
<style>
</style>