<template>
  <button
    id="btn"
    @click="jump"
    class="btn h-12 w-28 text-white rounded-r-xl rounded-l-none focus:outline-none"
  >
    {{ label }}
  </button>
</template>

<script>
import "../css/main.css";
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
