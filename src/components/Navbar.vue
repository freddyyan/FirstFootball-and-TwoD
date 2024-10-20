<template>
  <div class="contener">
    <div class="group">
      <p class="text">
        ဟိတ် ! ဟိတ် !... သိပြီးပြီလား ? Triple-3 မှာ ( 555MIX - SPORTS899 ) အကောင့်ဖွင့်ပြီး မောင်းကစားသူများအတွက် 
        မောင်းကော်မရှင်ဘောနက် 10 ရာခိုင်နှုန်းထိ ပြန်လည်ပေးနေတယ်ဆိုတာ ! ဟုတ်ပါတယ် ။ 
        မောင်းကဒ် - 10000 ကဒ်ကစား 1000 ကျပ် ၊ 5000 ကဒ်ကစားး 500 ကျပ် ကို ရလာဒ်ထွက်ပြီးတာနဲ့ အကောင့်ထဲ ပြန်လည်ရရှိမှာဖြစ်ပါတယ် ။ 
        မောင်းအဆကို 100 ထိပဲ ကစားလို့ရမယ့် စည်းကမ်းချက်လေးရှိနေပါတယ်နော် ။ 
        မိတ်ဆွေက မောင်း အဆ မကန့်ပဲ 11 သင်းထိ အဆ အများကြီးကစားချင်တယ်ဆိုလည်း ကော်မရှင် ဘောနက် နည်းပြီး အဆင်ပြေအာင် ဆောင်ရွက်ပေးနေပါတယ်နော် ။ 
        ကစားသူများ အဆင်ပြေပြီး စိတ်ချမ်းသာနေဖို့သာ အဓိကပါ ။ 
        မိတ်ဆွေက ဘော်ဒီ မောင်းတွဲကစားသူ ၊ မောင်းအသင်းနည်းနည်းကစားတက်သူဆို ရွေးချယ်သင့်ပါတယ် ။ 
        ဒါပြင် 2D ကို ပိတ်ဂဏန်းမရှိ ထိပ် ပိတ် ပတ်သီး လွတ်လပ်စွာ ကစားလို့ရပြီး ( 2D 85-Z နှင့် 3D 600-Z ) ပေးထားပါတယ် ။
        ထိပ်စီး သီးသန့် ကစားတက်သူမိတ်ဆွေကတော့ ( Z-80 ) နဲ့ လက်ခံပါတယ်နော် ။ 
        စိတ်ဝင်စားလို့ ဆက်သွယ်လိုပါက Viber and Telegram - ( 09 956 113 143 ) ကိုဆက်သွယ်နိုင်ပါတယ်ခင်ဗျ ။ 
        ငွေသွင်း ငွေထုတ်အတွက်ကိုလည်းနိုင်ငံခြားမှ မိတ်ဆွေများအတွက်ပါ အဆင်ပြေအောင် ဆောင်ရွက်ပေးနေပါတယ် ။ 
        5000 ကျပ်မှစပြီး လေ့လာ စမ်းသပ်ကြည့်ပါမိတ်ဆွေ အကောင်းဆုံးသော ရွေးချယ်မှုဖြစ်ကြောင်း ကိုယ်တိုင် တွေ့ရပါမယ်နော် ။ အွန်လိုင်းမှာ
        အလိမ်အညာတွေများနေတာမို့ ကစားတက်သူ မိတ်ဆွေများ အကောင်းဆုံးသော အေးဂျင့်များမှာ အဆင်ပြေစွာ ဆော့ကစားနိုင်ကြပါစေခင်ဗျ ။     
      </p>
    </div>
  </div>
  <header>
    <router-link to="/"> 2D Live</router-link> ||
    <router-link to="/livechat">LiveChat</router-link> ||
    <router-link to="/football"> Football</router-link> ||
    <router-link to="/highlights">Calenders</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style >
header {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  padding: 9px 3px;
  background-color: #827e8a;
  border-radius: 10px;
  margin-bottom: 5px;
  margin: 5px auto;
}

header a {
  color: #eeeef5;
  text-decoration: none;
  margin: auto;
  font-weight: bold;
  font-size: 15px;
}
header a.router-link-active {
  color: #0315b8;
  font-weight: bold;
}
.group {
  position: relative;
  height: 30px;
  margin: 8px auto;
  overflow: hidden;
  background-color: rgb(12, 12, 18);
  border-bottom: 2px solid rgb(28, 5, 240);
  border-top: 2px solid rgb(7, 7, 255);
  font-weight: bold;
}
.group .text {
  position: absolute;
  margin: 4px;
  width: max-content;
  color: #fbe80e;
  font-weight:bold;
  animation: RightToleft 100s infinite linear;
  font-size: 13px;
  padding: 10px auto;
}

@keyframes RightToleft {
  from {
    transform: translate(10%);
  }
  to {
    transform: translate(-100%);
  }
}


</style>