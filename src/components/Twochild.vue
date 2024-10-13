<template>
  <!-- Live Time is Here -->
  <div v-if="twoDeeLive" class="wrapper">
    <div class="container" :class="{ animated: isAnimated }">
      <div class="two-live">{{ twoDeeLive.live.twod }}</div>
      <div class="time">အချိန် ( {{ twoDeeLive.live.time }} )</div>
      <hr class="solid" />
      <div class="set-value">
        <div>
          <p>Set</p>
          <div class="number">
            {{ twoDeeLive.live.set }}
          </div>
        </div>

        <div>
          <p>Value</p>
          <div class="number">
            {{ twoDeeLive.live.value }}
          </div>
        </div>
      </div>
    </div>
    <!-- 12-00 Time  is Here-->
    <div class="container">
      <div class="two-live">{{ twoDeeLive.result[1].twod }}</div>
      <div class="time">မနက် - {{ twoDeeLive.result[1].open_time }}</div>
      <hr class="solid" />
      <div class="set-value">
        <div>
          <p>Set</p>
          <div class="number">
            {{ twoDeeLive.result[1].set }}
          </div>
        </div>

        <div>
          <p>Value</p>
          <div class="number">
            {{ twoDeeLive.result[1].value }}
          </div>
        </div>
      </div>
    </div>

    <!-- 4-30 Time is Here -->
    <div class="container">
      <div class="two-live">{{ twoDeeLive.result[3].twod }}</div>
      <div class="time">ညနေ - {{ twoDeeLive.result[3].open_time }}</div>
      <hr class="solid" />
      <div class="set-value">
        <div>
          <p>Set</p>
          <div class="number">
            {{ twoDeeLive.result[3].set }}
          </div>
        </div>

        <div>
          <p>Value</p>
          <div class="number">
            {{ twoDeeLive.result[3].value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let twoDeeLive = ref("");
    let previousLiveData = ref(null); // Store the previous API data
    let isAnimated = ref(false);
    let error = ref("");
    let timeout = null;

    let load = async () => {
      try {
        let response = await fetch("https://api.thaistock2d.com/live");
        let datas = await response.json();

        // Compare with the previous data
        if (
          JSON.stringify(datas.live) !== JSON.stringify(previousLiveData.value)
        ) {
          // Data has changed, start the animation
          isAnimated.value = true;

          // Clear previous timeout and set a new one for 3 minutes (180000ms)
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(() => {
            isAnimated.value = false;
          }, 180000); // 3 minutes
        }

        // Update the previous live data for comparison
        previousLiveData.value = datas.live;
        twoDeeLive.value = datas;
      } catch (err) {
        error.value = err.message;
      }
    };

    // Load data initially
    load();

    // Optionally, you can set an interval to recheck the data periodically
    setInterval(() => {
      load();
    }, 30000); // Fetch data every 30 seconds

    return { twoDeeLive, error, isAnimated };
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  color: #fff;
}
.wrapper .container {
  margin-bottom: 10px;
  background: rgb(60, 115, 250);
  background: linear-gradient(
    90deg,
    rgba(60, 115, 250, 1) 0%,
    rgba(60, 115, 250, 1) 100%
  );
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding-bottom: 16px;
}

/* Add a new class for animation */
.wrapper .container.animated .two-live {
  animation: Key 1s ease-in-out infinite;
}

.wrapper .container .two-live {
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
}
.wrapper .container .solid {
  border-top: 1px solid #eee;
}
.wrapper .container .set-value {
  display: flex;
  justify-content: space-around;
}
.wrapper .container .set-value .number {
  font-size: 16px;
  font-weight: bold;
}

@keyframes Key {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(-5%, 5%);
  }
}
</style>
