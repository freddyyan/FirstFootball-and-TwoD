<template>
<table class="cards">
  
  <router-link to="/twocalender">
    <h2> 2D ( AM & PM) <br> 12-01 နှင့် 4-30 <br> ကလင်ဒါ
    </h2>
  </router-link>


    <router-link to="/threecalender">
    <h2> 3D <br> 2014 - 2024 <br> ကလင်ဒါ
    </h2>
  </router-link>

  
  <router-link to="/twoam">
    <h2> 2D <br> 12-01 သီးသန့် <br> ကလင်ဒါ
    </h2>
  </router-link>


  <router-link to="/twopm">
    <h2> 2D <br> 4-30 သီးသန့် <br> ကလင်ဒါ
    </h2>
  </router-link>



</table>


  <h5>
    555MIX - ( 1 Unit - 1 Kyats ) <br> 
    SPORTS899 - ( 1 Unit - 1 Kyats ) <br>
    2D - 85Z <br>
    3D - 600Z
  </h5>

  
  <h6>
    နှစ်သက်ရာကို အကောင့်ဖွင့် မောင်းကစား ကော်မရှင်ဘောနက် 10 ရာခိုင်နှုန်း ပြန်လည်ပေးပါတယ် ။ 
    မောင်းကဒ် 10000 ကဒ်ကို 1000ကျပ် ၊ 5000 ကဒ်ကို 500ကျပ် ပြန်လည်ရရှိမှာဖြစ်ပါတယ် ။ 
    မိတ်ဆွေရဲ့ ယုံကြည်စိတ်ချစွာ ရွေးချယ်ခြင်းအတွက် 
     5000 ကျပ်မှစပြီး စမ်းသပ်လေ့လာနိုင်ပါတယ်နော် ။ 
    ၃ မိနစ်အတွင်း အမြန်ဆုံး အကောင်းဆုံး ဝန်ဆောင်မှုအတွက် <br> <br>
    Viber & Telegram & Hotline တို့မှ ဆက်သွယ်နိုင်ပါကြောင်း ။ 
  </h6>
  
  <footer>
    <a href="viber://chat/?number=959956113143">Viber</a>
    <a href="http://t.me/triple3agent">Telegram</a>
    <a href="tel:09956113143">Hotline</a>
  </footer>
</template>

<script>
export default {
 
};



</script>

<style scoped>


.cards {
  max-width: 1200px;
  margin: 10px auto;
  display: grid;
  gap: 0.5rem;
  background-color: transparent;
  border-radius: 20px;
}

@media (min-width: 300px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

h2{
  display: flexbox;
  background-color: rgb(105, 199, 223);
  padding: 0;
  border-radius: 10px;
  color: rgb(185, 4, 185);
  line-height:35px ;
  font-size: 1.2rem;
}
.router-link.active h2{
  text-decoration: none;
}


h5{
  color: rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgb(206, 243, 250);
  font-size: 16px;
  text-align: left;
  justify-content: center;
  line-height: 27px;
  margin-top: 3px;
  padding-left: 20px;
  padding-top: 5px;
  margin-bottom: 2px;
}

h6{
  font-size: 10px;
  font-weight: bold;
  color: rgb(238, 196, 8);
  margin-bottom: 10px;
  background-color: rgb(16, 26, 25);
  text-align: left;
  padding: 6px 7px;
  border-radius: 10px;
}
footer {
  display: flex;
  justify-content: space-around;
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
}
</style>