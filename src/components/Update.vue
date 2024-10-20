<template>
  <table>
    <caption class="caption">
      5-10-2024 ( တနင်္လာနေ့ ) အတွက် ပေါက်ကြေး
    </caption>
    <tr class="cards" id="helo">
      <th>Home <br>( အိမ်ရှင် )</th>
      <th>Over/Under <br>( ဂိုးပေါင်းကြေး )</th>
      <th>Away <br>( အဝေးကွင်း )</th>
    </tr>

    <!--  အောက်ပိုင်း အသင်း နာမည် နှင့် ကြေးများသာ သက်ဆိုင်သည် ။ -->

    <!--   ပထမ လိဂ် စလာမည်  -->

    <div>
      <div>
        <caption>
          ပရီးမီးယားလိဂ် ပွဲစဥ်များ
        </caption>
        <div v-for="football in premiers" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

      <!-- ဒုတိယ လိဂ် လာမည်  -->

      <div>
        <caption>
          အီတလီစီးရီးအေ ပွဲစဥ်များ
        </caption>
        <div v-for="football in series" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

      <!-- တတိယ လိဂ် လာမည်  -->

      <div>
        <caption>
          စပိန်လာလီဂါ ပွဲစဥ်များ
        </caption>
        <div v-for="football in spains" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

      <!-- စတုတ္ထ လိဂ် လာမည် -->

      <div>
        <caption>
          ဂျာမန်ဘွန်ဒက်လီဂါ ပွဲစဥ်များ
        </caption>
        <div v-for="football in bundes" :key="football">
          <tr class="cards"> 
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>

       <!-- ပဥ္စမ လိဂ် လာမည်  -->

      <div>
        <caption>
          ပြင်သစ်လီဂူး ပွဲစဥ်များ
        </caption>
        <div v-for="football in leagues" :key="football">
          <tr class="cards">
            <th class="home">{{ football.home }}</th>
            <th class="odd">{{ football.odds }}</th>
            <th class="away">{{ football.away }}</th>
          </tr>
        </div>
      </div>






    </div>

<!--       တိုက်ရိုက် လွှင့်မည့် အပိုင်းလာမည် -->
      <div class="live">
            <a href="https://v3.streameast.to/"> ဘောလုံးပွဲလိဂ် အစုံ တိုက်ရိုက်ကြည့်ရန် နှိပ်ပါ ။ </a>
          
      </div>
    <!--  စာပိုဒ်လာမည်  -->

    <h6>
    မိတ်ဆွေရဲ့ ယုံကြည်စိတ်ချစွာ ရွေးချယ်ခြင်းအတွက် <br>
    5000 ကျပ်မှ စပြီး စမ်းသပ်လေ့လာနိုင်ပါတယ်နော် ။ <br>
    ၃ မိနစ်အတွင်း အမြန်ဆုံး အကောင်းဆုံး ဝန်ဆောင်မှုအတွက် <br>
    Viber & Telegram & Hotline တို့မှ ဆက်သွယ်နိုင်ပါကြောင်း ။ 
  </h6>

  <footer>
    <a href="viber://chat/?number=959956113143">Viber</a>
    <a href="http://t.me/triple3agent">Telegram</a>
    <a href="tel:09956113143">Hotline</a>
  </footer>


  </table>
</template>

<script>
export default {
  data() {
    return {


      // ပထမ လိဂ် လာမည်


      premiers: [
        { home: "အာဆင်နယ် 1-100", odds: "( 3-20 )", away: "ချဲလ်ဆီး" },
        { home: "စပါး L-80", odds: "( 3+80 )", away: "နယူးကာဆယ် 1-20" },
      ],


      // ဒုတိယလိဂ် လာမည်

        series: [
        { home: "အီတလီ 1-100", odds: "( 3-20 )", away: "ချဲလ်ဆီး" },
        { home: "စပါး L-80", odds: "( 3+80 )", away: "နယူးကာဆယ် 1-20" },
        {
          home: "မန်ယူနိုက်တက် 1-50",
          odds: "( 3+50 )",
          away: "မန်စီးတီး 1-30",
        },
        { home: "အာဆင်နယ် 1-100", odds: "( 3-20 )", away: "ချဲလ်ဆီး" },
        { home: "စပါး L-80", odds: "( 3+80 )", away: "နယူးကာဆယ်" },
        {
          home: "မန်ယူနိုက်တက် 1-50",
          odds: "( 3+50 )",
          away: "မန်စီးတီး 1-30",
        },
        
      ],

      // တတီယ လိဂ် လည်မည်


      spains: [
        { home: "ဘိုင်ယန် 1-100", odds: "( 3-20 )", away: "ချဲလ်ဆီး" },
        { home: "စပါး L-80", odds: "( 3+80 )", away: "နယူးကာဆယ် 1-20" },
        {
          home: "မန်ယူနိုက်တက် 1-50",
          odds: "( 3+50 )",
          away: "မန်စီးတီး 1-30",
        },
        { home: "အာဆင်နယ် 1-100", odds: "( 3-20 )", away: "ချဲလ်ဆီး" },
      
      ],


      // စတုတ္ထလိဂ်လာမည်


      bundes: [
        { home: "တိုရိနို 1-100", odds: "( 3-20 )", away: "ချဲလ်ဆီး" },
        { home: "စပါး L-80", odds: "( 3+80 )", away: "နယူးကာဆယ် 1-20" },
        {
          home: "မန်ယူနိုက်တက် 1-50",
          odds: "( 3+50 )",
          away: "မန်စီးတီး 1-30",
        },
        { home: "အာဆင်နယ် 1-100", odds: "( 3-20 )", away: "ချဲလ်ဆီး" },
        { home: "စပါး L-80", odds: "( 3+80 )", away: "နယူးကာဆယ်" },
        
      ],


      // ပဥ္မမ လိဂ် လာမည် ။

      leagues: [
        { home: "ပါးမား -100", odds: "( 8-30 )", away: "ချဲလ်ဆီး" },
        { home: "စပါး L-80", odds: "( 3+80 )", away: "နယူးကာဆယ် 1-20" },
      ],


      // အပိတ် နောက်ဆုံးအပိုင်း 
    };
  },
};
</script>

<style scoped>
table {
  background: #8c898d;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 2px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 87vh;
  overflow: scroll;
}
caption {
  border: 1px solid rgb(0, 0, 0);
  margin: 7px;
  font-weight: 900;
  color: white;
  font-size: 15px;
  text-align: center;
  justify-content: center;
  display: flex;
  border: 1.5pt solid rgb(235, 205, 13);
  border-radius: 8px;
  background: rgb(14, 78, 76);
  padding: 5px 30px;
}

tr {
  margin: 7px auto;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  background-color: black;
  border: 1px solid rgb(190, 180, 180);
}

th {
  font-size: 9pt;
  border-radius: 5px;
  color: rgb(253, 253, 253);
  font-weight: bold;
  padding: 2px 3px;
}
td{
  border-radius: 5px;
  color: rgba(236, 213, 6, 0.959);
  font-weight: bold;
}



#helo{
  padding: 15px 20px;
}
.home{
  padding-left: 5px;
}
.odd{
  padding: 5px;
}

.cards {
  max-width: 1200px;
  margin: 2px auto;
  display: grid;
  gap: 1rem;
  background-color:rgb(5, 4, 4);
  border-radius: 10px;
  text-align: center;
  padding: 5px 1px;
  border: 1px solid rgb(252, 253, 253);
}
@media (min-width: 300px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.matches {
  max-width: 1200px;
  display: grid;
  background-color:rgb(14, 6, 6);
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgb(252, 253, 253);
  font-size: 1rem;
  padding: 4px 5px;
  gap: 0.3rem;
}
@media (min-width: 300px) {
  .matches {
    grid-template-columns: repeat(1, 1fr);
  }
}
h6{
  color: rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgb(191, 243, 243);
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 5px 30px;
  margin: 10px auto;
  font-size: 11px;
}
footer {
  display: flex;
  justify-content: space-between;
  background-color: transparent;
}
a {
  background-color: rgb(229, 236, 235);
  padding: 5px 20px;
  text-decoration: none;
  border-radius: 5px;
  color: rgb(6, 17, 233);
  border-bottom: 2px solid rgb(3, 183, 248);
  border-top: 2px solid rgb(3, 183, 248);
  font-size: 1.1rem;
  font-weight: 800;
  margin: 5px 10px;
}
.live{
  margin: 15px auto;
}
.live a{
  padding: 15px 10px;
  border: 2px solid rgb(247, 246, 244);
  color: yellow;
  background-color: black;
  font-size: 1rem;

}
</style>