<template>
  <!-- Live Time is Here -->
  <div v-if="twoDeeLive" class="wrapper">
    <div class="container" :class="{ animated: isAnimated }">
      <div class="two-live">{{ twoDeeLive.live.twod }}</div>
      <div class="time"> ထွက်မည့်အချိန် ( {{ twoDeeLive.live.time }} )</div>
      <div class="set-value">
        <div>
          <p>Set</p>
          <div class="numbers">
            {{ twoDeeLive.live.set }}
          </div>
        </div>

        <div>
          <p>Value</p>
          <div class="numbers">
            {{ twoDeeLive.live.value }}
          </div>
        </div>
      </div>
    </div>
    <!-- 12-00 Time  is Here-->
    <div class="container">
     
      <div class="time-love">မနက် ( {{ twoDeeLive.result[1].open_time }} )</div>
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
        <div>
          <p>2D</p>
           <div class="numbering">{{ twoDeeLive.result[1].twod }}</div>
        </div>
      </div>
    </div>

    <!-- 4-30 Time is Here -->
    <div class="container">
  
      <div class="time-love"> ညနေ (  {{ twoDeeLive.result[3].open_time }} )</div>
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
           <div>
            <p>2D</p>
             <div class="numbering">{{ twoDeeLive.result[3].twod }}</div>
           </div>
      </div>
    </div>


    <footer>
    <a href="viber://chat/?number=959956113143">Viber</a>
    <a href="http://t.me/triple3agent">Telegram</a>
    <a href="tel:09956113143">Hotline</a>
  </footer>
   <h6>
    မိတ်ဆွေရဲ့ ယုံကြည်စိတ်ချစွာ ရွေးချယ်ခြင်းအတွက် 5000 <br>
    ကျပ်မှ စပြီး စမ်းသပ်လေ့လာနိုင်ပါတယ် ။ <br>
    ၃ မိနစ်အတွင်း အမြန်ဆုံး အကောင်းဆုံး ဝန်ဆောင်မှုအတွက် <br>
    Viber & Telegram & Hotline တို့မှ ဆက်သွယ်နိုင်ပါကြောင်း ။ 
  </h6>
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
    }, 2000); // Fetch data every 3 seconds

    return { twoDeeLive, error, isAnimated };
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  max-width: 700px;
  margin: 25px auto 5px;
  border-radius: 10px;
  color: #ffffff;
  max-height: 84vh;
  margin-bottom: 5px;
}
.wrapper .container {
  margin-bottom: 7px;
  background: #cd362b;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding-bottom: auto;
}

/* Add a new class for animation */
.wrapper .container.animated .two-live {
  animation: Key 1s ease infinite;
}

.wrapper .container .two-live {
  font-size: 110px;
  font-weight: bold;
  color: rgb(3, 165, 3);
}
.wrapper .container .numbers{
  animation: Key 1s ease-in-out infinite;
  color:rgb(2, 21, 68);
  font-size: 25px;
  font-weight: bold;
}
.wrapper .container .solid {
  border-top: 1px solid #eeeeee;
}
.wrapper .container .set-value {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.wrapper .container .set-value .numbers {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
}
.time-love{
  font-size: 17px;
  color: yellow;
  font-weight: bold;

}
.time{
  font-size: 0.8rem;
  color: yellow;
  font-weight: bold;
  
}
.set-value,p{
  color: rgb(251, 251, 251);
  font-size: 17px;
  font-weight: bold;
}
.numbering{
  font-size: 21px;
  font-weight: 800;
  color: yellow;
}
.number{
  color:rgb(2, 21, 68);
  font-size: 17px;
}

@keyframes Key {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(-2%);
  }
}


footer {
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  margin-top: 7px;
}
a {
  background-color: rgb(151, 144, 144);
  padding: 5px 20px;
  text-decoration: none;
  border-radius: 5px;
  color: rgb(6, 17, 233);
  border-bottom: 2px solid rgb(3, 183, 248);
  border-top: 2px solid rgb(3, 183, 248);
  font-size: 1.1rem;
  font-weight: 800;
}
h6{
  color: rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgb(206, 243, 250);
  font-weight: 100pt;
  text-align: center;
  justify-content: center;
  display: flex;
  margin-top: 7px;
  padding: 5px 2px;
  margin-bottom: 0;
  font-size: 10px;
}

</style>
