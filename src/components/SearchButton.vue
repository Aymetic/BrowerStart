<template>
  <button
    @click="jump"
    class="h-12 w-28 text-white rounded-r-full focus:outline-none bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-300 bg-25%"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "SearchButton",
  props: {
    label: String,
    word: String,
    clickNum: Number,
  },
  data() {
    return {
      count: 0,
      clickNum: 0,
    };
  },
  create() {
    this.setMsg();
  },
  methods: {
    jump() {
      if (this.clickNum == 0)
        alert("做出来才发现，我是真的木有美术天赋！！！\n太丑啦😀");
      this.clickNum++;
      window.open("https://www.baidu.com/s?ie=utf-8&wd=" + this.word, "_blank");
    },
  },
};
</script>
