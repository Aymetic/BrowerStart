<template>
  <button
    @click="jump"
    class="mx-2 h-9 w-32 text-white rounded-full focus:outline-none bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-300 bg-25%"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "FlowButton",
  props: {
    label: String,
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    jump() {
      alert("自己搜去吧");
      window.open("https://baidu.com", "_blank");
    },
  },
};
</script>
