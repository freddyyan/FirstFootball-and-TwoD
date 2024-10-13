<template>
  <!-- Live Time is Here -->
  <div v-if="twoDeeLive" class="wrapper">
    <div class="container">
      <div class="two-live">{{ twoDeeLive.live.twod }}</div>
      <div class="time">Time ( {{ twoDeeLive.live.time }} )</div>
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
      <div class="time">Morning - {{ twoDeeLive.result[1].open_time }}</div>
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
      <div class="time">Evening - {{ twoDeeLive.result[3].open_time }}</div>
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
    let error = ref("");
    let show = true;

    let load = async () => {
      try {
        let response = await fetch("https://api.thaistock2d.com/live");
        let datas = await response.json();
        twoDeeLive.value = datas;
      } catch (err) {
        error.value = err.message;
      }
    };
    load();
    return { twoDeeLive, error, show };
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

.wrapper .container .two-live {
  animation: Key 1s ease-in-out infinite;
}

@keyframes Key {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(-5%, 5%);
  }
}

.wrapper .container-2 {
  background: pink;
}

/* line number 6 is အချိန်  */
/* line number 26 is မနက် */
/* line number 47 is ညနေ */
</style>
