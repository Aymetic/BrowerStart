<template>
  <h1 class="text-center">{{ msg }}</h1>
  <div class="text-center">
    <button
      @click="
        count++;
        if (count == 5) alert('别点啦！');
      "
      class="focus:outline-none"
    >
      可以点我点我试试: {{ count }}
    </button>
  </div>
  <p class="text-center">
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
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
};
</script>
