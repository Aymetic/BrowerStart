<template>
  <input
    type="text"
    placeholder="type to search..."
    v-model="msg"
    class="h-9 w-2/5 pl-3 rounded-l-full focus:outline-none border-black border-2"
  />
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    label: String,
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {},
};
</script>
