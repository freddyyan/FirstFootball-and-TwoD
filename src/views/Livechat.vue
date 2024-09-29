<template>

  <ChatWindow />
    <ChatChild />
</template>

<script>
import ChatWindow from "../components/ChatWindow.vue";
import ChatChild from "../components/ChatChild.vue";
export default {
  components: {
    ChatChild,
    ChatWindow,
  },
};
</script>

<style>
</style>