<template>
  <button
    @click="jump"
    class="h-9 w-28 text-white rounded-r-full focus:outline-none bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-300 bg-25% transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"
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
      alert("自己搜去吧😀");
      window.open("https://baidu.com", "_blank");
    },
  },
};
</script>
