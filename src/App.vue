<template>
  <h1 class="text-7xl text-center text-green-500 m-5">Hello, Vue</h1>
  <div align="center"><img alt="Vue logo" src="./assets/mylogo.png" /></div>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div class="text-center">
    <SearchBar @valueChanged="setBtnWord" label="type to search..." />
    <SearchButton v-bind:word="searchBarVal" label="搜索" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SearchButton from "./components/SearchButton.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  props: {
    searchBarVal: String,
  },
  data() {
    return {
      searchBarVal: "ceshi",
    };
  },
  components: {
    HelloWorld,
    SearchButton,
    SearchBar,
  },
  methods: {
    setBtnWord(data) {
      this.searchBarVal = data;
    },
  },
};
</script>
