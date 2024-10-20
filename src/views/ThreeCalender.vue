<template>
<div class="height">
  <table>
    <tr>
      <th colspan="16" class="caption"> Three D Calender ( 2D-85 Z & 3D-600 Z ) <br>
      Viber & Telegram -- 09770166499</th>
    </tr> 



    <tr>
    <th> Year <br> Time</th>
     <th>2014</th>
     <th>2015</th>
     <th>2016</th>
     <th>2017</th>
     <th>2018</th>
     <th>2019</th>
     <th>2020</th>
     <th>2021</th>
     <th>2022</th>
     <th>2023</th>
     <th>2024</th>

   
    </tr>


    <tr v-for="threeCalender in threeCalenders" :key="threeCalender">
    <td class="id">{{threeCalender.id}} </td>
    <td class="am">{{threeCalender.a}} </td>
    <td class="am">{{threeCalender.b}} </td>
    <td class="am">{{threeCalender.c}} </td>
    <td class="am">{{threeCalender.d}} </td>
    <td class="am">{{threeCalender.e}} </td>
    <td class="am">{{threeCalender.f}} </td>
    <td class="am">{{threeCalender.g}} </td>
    <td class="am">{{threeCalender.h}} </td>
    <td class="am">{{threeCalender.i}} </td>
    <td class="am">{{threeCalender.j}} </td>
    <td class="am">{{threeCalender.k}} </td>
    </tr>


  </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      threeCalenders:[
        {id:1,a:902,b:351,c:371,d:157,e:823,f:"079",g:774,h:395,i:159,j:519,k:979},
        {id:2,a:149,b:537,c:800,d:672,e:853,f:134,g:227,h:307,i:308,j:411,k:"063"},
        {id:3,a:245,b:864,c:364,d:116,e:915,f:824,g:403,h:603,i:597,j:417,k:395},
        {id:4,a:318,b:237,c:686,d:453,e:415,f:650,g:938,h:538,i:905,j:652,k:603},
        {id:5,a:404,b:151,c:918,d:863,e:559,f:628,g:446,h:422,i:867,j:873,k:626},
        {id:6,a:866,b:704,c:720,d:785,e:"073",f:767,g:"***",h:270,i:618,j:907,k:481},
        {id:7,a:406,b:260,c:609,d:729,e:229,f:331,g:"***",h:787,i:919,j:906,k:598},
        {id:8,a:297,b:466,c:459,d:656,e:"038",f:324,g:"***",h:727,i:642,j:"019",k:116},
        {id:9,a:523,b:421,c:737,d:891,e:629,f:526,g:"095",h:579,i:"012",j:903,k:690},
        {id:10,a:198,b:881,c:825,d:630,e:117,f:461,g:567,h:972,i:196,j:272,k:593},
        {id:11,a:920,b:742,c:816,d:142,e:131,f:"055",g:967,h:861,i:807,j:872,k:504},
        {id:12,a:477,b:"049",c:460,d:360,e:623,f:647,g:258,h:517,i:417,j:605,k:503},
        {id:13,a:728,b:507,c:764,d:327,e:324,f:765,g:286,h:725,i:405,j:530,k:336},
        {id:14,a:391,b:677,c:932,d:519,e:602,f:"006",g:391,h:261,i:594,j:453,k:"041"},
        {id:15,a:842,b:363,c:"004",d:431,e:117,f:476,g:811,h:750,i:583,j:782,k:867},
        {id:16,a:763,b:"094",c:684,d:224,e:510,f:787,g:997,h:475,i:332,j:478,k:606},
        {id:17,a:269,b:148,c:650,d:143,e:760,f:388,g:"083",h:935,i:703,j:812,k:662},
        {id:18,a:615,b:825,c:102,d:714,e:643,f:197,g:893,h:171,i:669,j:202,k:665},
        {id:19,a:409,b:630,c:947,d:494,e:515,f:564,g:"051",h:372,i:106,j:446,k:962},
        {id:20,a:608,b:211,c:438,d:726,e:840,f:375,g:404,h:"037",i:106,j:951,},
        {id:21,a:804,b:283,c:383,d:391,e:903,f:223,g:661,h:761,i:789,j:990,},
        {id:22,a:449,b:350,c:"069",d:"005",e:840,f:522,g:994,h:258,i:805,j:"097",},
        {id:23,a:354,b:255,c:286,d:596,e:564,f:924,g:303,h:235,i:"093",j:757,},
        {id:24,a:704,b:217,c:712,d:234,e:867,f:541,g:628,h:"068",i:196,j:544,},
       
      ]
    }
  }
};
</script>

<style scoped>
.height{
  background: #fefefe;
  border: 1px solid #ddd;
  margin-bottom: 0px;
  align-items: center;
  max-height: 86.5vh;
  overflow: scroll;
  justify-content: center;
 
}
table,tr,td,th{
  margin: 1px auto;
  border: 1px solid black;
  border-collapse: collapse;
  justify-content: center;
  text-align: center;
  display: -moz-grid;
  border-radius: 5px;
  color: black;
  font-size: 11px;
  font-weight: bol;

}
.caption{
  padding: 10px 15px;
  font-size: 1.1rem;
  color: rgb(207, 8, 207);
  font-weight: bold;

}
td{
  font-size: 12px;
  font-weight: bold;
}
th{
  color: rgb(255, 0, 0);
  padding: 8px 1px;

}
.am{
  padding: 7px 2px;
}
.id{
  color: blue;
  font-weight: bold;
  font-size: 0.9rem;
}

</style>