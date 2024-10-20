<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div
        class="single"
        v-for="message in formattedMessages"
        :key="message.id"
        :class="{ user: isUserMessage(message) }"
      >
        <span class="created_at">{{ message.created_at }}</span>
        <span class="message">{{ message.message }}</span>
      
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from "vue";
import { db } from "../firebase/config.js";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    let messages = ref([]);
    let msgBox = ref(null);

    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    });

    let formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: formatTime };
      });
    });

    const isUserMessage = (message) => {
      // Add logic to check if the message was sent by the current user
      // Example: return message.senderID === currentUserID;
      return false; // Placeholder for now
    };

    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
          let document = { ...doc.data(), id: doc.id };
          doc.data().created_at && results.push(document);
        });
        messages.value = results;
      });

    return { messages, formattedMessages, msgBox, isUserMessage };
  },
};
</script>

<style scoped>
.chat-window {
  background: #b4a976;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 2px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 70vh;
  max-height: 74vh;
  overflow: hidden;
  position: relative;
}

.messages {
  flex-grow: 1;
  width: 100%;
  max-height: 73vh;
  overflow-y: auto;
  padding: 5px;
  scrollbar-width: thin;
  font-weight: bold;
  scrollbar-color: #888 #e0e0e0;
}

.messages::-webkit-scrollbar {
  width: 5px;
}

.messages::-webkit-scrollbar-track {
  background: #e0e0e0;
}

.messages::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.single {
  margin: 5px;
  padding: 7px 15px;
  background-color: #e1f5fe;
  border-radius: 15px;
  word-wrap: break-word;
  width: 100%;
  text-align: left;
  max-width: 70%;
  font-size: 14px;
  line-height: 1;
}

.message {
  display: block;
  margin-bottom: 2px;
  font-weight: 700;
  color: black;
}

.created_at {
  display: inline;
  color: #cb0c0c;
  font-size: 12px;
  text-align: right;
  font-weight: bold;
}

.single.user {
  background-color: #dcedc8;
  align-self: flex-end;
}

.single.user:before {
  border-color: transparent transparent transparent #dcedc8;
  left: auto;
  right: -10px;
}

@media (max-width: 600px) {
  .chat-window {
    height: 85vh;
    padding: 15px 10px;
  }

  .single {
    max-width: 85%;
    font-size: 14px;
  }

  .created_at {
    font-size: 10px;
  }
}
</style>
