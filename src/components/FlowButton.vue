<template>
  <div class="text-center">
    <input type="" />
    <button
      @click="count++"
      class="mx-2 h-9 w-32 border border-solid border-purple-500 rounded-full"
    >
      {{ msg }}
    </button>
  </div>
</template>

<script>
export default {
  name: "FlowButton",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
