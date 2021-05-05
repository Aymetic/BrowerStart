<template>
  <h1 class="text-center">{{ msg }}</h1>
  <div class="text-center">
    <button
      @click="
        count++;
        alwaysClick(count);
      "
      class="focus:outline-none"
    >
      点我可以玩~: {{ count }}
    </button>
  </div>
  <p class="text-center">这本是一个浏览器主页，奈何还没有完工，咕咕咕🕊</p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    alwaysClick(count) {
      if (count % 5 == 0) alert("哎就是玩~");
    },
  },
};
</script>
