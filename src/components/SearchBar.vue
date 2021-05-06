<template>
  <input
    type="text"
    placeholder="Type to search..."
    v-model="inputVal"
    v-on:input="valueChanged"
    class="h-10 w-2/5 pl-3 rounded-l-full focus:outline-none ring-4 ring-indigo-300"
  />
</template>

<script>
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
