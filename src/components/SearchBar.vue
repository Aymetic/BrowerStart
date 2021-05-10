<template>
  <input
    id="search-bar"
    type="text"
    placeholder="Type to search..."
    v-model="inputVal"
    v-on:input="valueChanged"
    class="h-12 w-2/5 pl-3 rounded-l-xl rounded-r-none focus:outline-none"
  />
</template>

<script>
import "../css/main.css";
export default {
  name: "SearchBar",
  props: {
    label: String,
    inputVal: String,
  },
  data() {
    return {};
  },
  methods: {
    valueChanged() {
      this.$emit("valueChanged", this.inputVal);
    },
  },
};
</script>
