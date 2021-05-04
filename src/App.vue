<template>
  <h1 class="text-7xl text-center text-green-500 m-5">Hello, Vue</h1>
  <div align="center"><img alt="Vue logo" src="./assets/mylogo.png" /></div>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div class="text-center">
    <SearchBar label="type to search..." />
    <FlowButton label="搜索" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FlowButton from "./components/FlowButton.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FlowButton,
    SearchBar,
  },
};
</script>
