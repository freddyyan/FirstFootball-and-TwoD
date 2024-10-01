<template>
  <div class="wrapper">
    <div class="wrap-chat">
      <ChatWindow />
      <ChatChild />
    </div>
  </div>
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

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
}

.wrapper .wrap-chat {
  width: 700px;
}
</style>
