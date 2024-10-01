<template>
  <form @submit.prevent="handleSubmit" class="chat-input">
    <textarea
      placeholder="Type your message here..."
      v-model="message"
      @keydown.enter="handleSubmit"
    ></textarea>
    <button type="submit" class="icon-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-send"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
        />
      </svg>
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import useCollection from "../composable/useCollection.js";
import { timestamp } from "../firebase/config.js";

export default {
  setup() {
    let message = ref("");
    let { error, addDoc } = useCollection("messages");

    let handleSubmit = async () => {
      if (message.value.trim() === "") return;
      let chat = {
        message: message.value,
        created_at: timestamp(),
      };
      await addDoc(chat);
      message.value = "";
    };

    return { message, handleSubmit };
  },
};
</script>

<style scoped>
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
  border-top: 1px solid #ddd;
}

textarea {
  flex: 1;
  resize: none;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 16px;
  margin-right: 10px;
  background-color: #fff;
}

.icon-button {
  background-color: transparent;
  border: none;
  padding: 0;
  color: #007bff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.send-icon {
  width: 24px;
  height: 24px;
  color: #007bff;
  transition: color 0.3s ease;
}

.icon-button:hover .send-icon {
  color: #0056b3;
}

@media (max-width: 600px) {
  textarea {
    font-size: 14px;
  }

  .send-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
