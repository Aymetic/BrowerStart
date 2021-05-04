<template>
  <h1 class="text-9xl text-center text-blue-600">hello world</h1>
  <div align="center"><img alt="Vue logo" src="./assets/mylogo.png" /></div>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div>
    <FlowButton msg="搜索" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import FlowButton from "./components/FlowButton.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    FlowButton,
  },
};
</script>
