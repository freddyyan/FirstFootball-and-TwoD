<template>
<div class="height">
  <table>
    <tr>
      <th colspan="11" class="caption"> Two D Calender ( 2D-85 Z & 3D-600 Z ) <br>
      Viber & Telegram -- 09770166499</th>
    </tr> 
    <tr class="date-time">
      <th rowspan="2">Date & Time</th>
      <th >Mon</th>
      <th >Tue</th>
      <th >Wed</th>
      <th >Thu</th>
      <th >Fri</th>
    </tr>
    <tr class="show-time">
      <td> 4-30 </td>
      
      <td> 4-30 </td>
      
      <td> 4-30 </td>
      
      <td> 4-30 </td>
      
      <td> 4-30 </td>
      
    </tr>
    <tr v-for="twoCalender in twoCalenders" :key="twoCalender" >
    <td class="date"> {{twoCalender.date}}</td>
    <td class="am">{{twoCalender.pma}} </td>
 
    <td class="am">{{twoCalender.pmb}} </td>
  
    <td class="am">{{twoCalender.pmc}} </td>
  
    <td class="am">{{twoCalender.pmd}} </td>
   
    <td class="am">{{twoCalender.pme}} </td>
  
    </tr>
  </table>

  </div>
</template>

<script>
export default {
  data(){
    return{
      twoCalenders:[
        {date:"15/04/2024",ama:"**",pma:"**",amb:"**",pmb:"**",amc:44,pmc:42,amd:75,pmd:27,ame:38,pme:87},
        {date:"22/04/2024",ama:"00",pma:29,amb:94,pmb:62,amc:"02",pmc:"06",amd:22,pmd:73,ame:22,pme:49},
        {date:"29/04/2024",ama:47,pma:71,amb:50,pmb:56,amc:"**",pmc:"**",amd:54,pmd:53,ame:47,pme:22},
        {date:"06/05/2024",ama:"**",pma:"**",amb:51,pmb:77,amc:71,pmc:31,amd:86,pmd:97,ame:91,pme:"01"},
        {date:"13/05/2024",ama:89,pma:"07",amb:11,pmb:74,amc:52,pmc:45,amd:35,pmd:22,ame:35,pme:81},
        {date:"20/05/2024",ama:52,pma:"02",amb:72,pmb:34,amc:"**",pmc:"**",amd:74,pmd:46,ame:98,pme:88},
        {date:"27/05/2024",ama:70,pma:78,amb:10,pmb:"05",amc:17,pmc:38,amd:25,pmd:20,ame:34,pme:64},
        {date:"03/06/2024",ama:"**",pma:"**",amb:37,pmb:25,amc:23,pmc:20,amd:32,pmd:10,ame:72,pme:49},
        {date:"10/06/2024",ama:61,pma:74,amb:69,pmb:"00",amc:33,pmc:96,amd:52,pmd:87,ame:62,pme:64},
        {date:"17/06/2024",ama:23,pma:99,amb:17,pmb:"01",amc:27,pmc:22,amd:97,pmd:97,ame:98,pme:13},
        {date:"24/06/2024",ama:86,pma:34,amb:46,pmb:44,amc:77,pmc:53,amd:20,pmd:60,ame:84,pme:66},
        {date:"01/07/2024",ama:18,pma:51,amb:44,pmb:84,amc:"03",pmc:"04",amd:46,pmd:40,ame:89,pme:97},
        {date:"08/07/2024",ama:51,pma:"09",amb:39,pmb:21,amc:94,pmc:80,amd:45,pmd:78,ame:32,pme:49},
        {date:"15/07/2024",ama:62,pma:33,amb:73,pmb:18,amc:24,pmc:95,amd:44,pmd:60,ame:"03",pme:46},
        {date:"22/07/2024",ama:"**",pma:"**",amb:68,pmb:49,amc:"03",pmc:89,amd:20,pmd:88,ame:53,pme:18},
        {date:"29/07/2024",ama:"**",pma:"**",amb:17,pmb:98,amc:"04",pmc:61,amd:42,pmd:55,ame:62,pme:80},
        {date:"05/08/2024",ama:55,pma:74,amb:21,pmb:10,amc:79,pmc:55,amd:51,pmd:50,ame:52,pme:73},
        {date:"12/08/2024",ama:"**",pma:"**",amb:55,pmb:96,amc:94,pmc:92,amd:56,pmd:49,ame:90,pme:"07"},
        {date:"19/08/2024",ama:49,pma:88,amb:73,pmb:20,amc:50,pmc:35,amd:63,pmd:34,ame:85,pme:75},
        {date:"26/08/2024",ama:68,pma:19,amb:43,pmb:14,amc:67,pmc:25,amd:78,pmd:12,ame:66,pme:72},
        {date:"02/09/2024",ama:77,pma:44,amb:36,pmb:"01",amc:63,pmc:97,amd:"00",pmd:86,ame:"00",pme:44},
        {date:"09/09/2024",ama:91,pma:34,amb:13,pmb:36,amc:51,pmc:"01",amd:76,pmd:85,ame:31,pme:97},
        {date:"16/09/2024",ama:"09",pma:30,amb:29,pmb:"03",amc:54,pmc:78,amd:57,pmd:48,ame:83,pme:97},
        {date:"23/09/2024",ama:83,pma:"03",amb:21,pmb:"03",amc:61,pmc:88,amd:80,pmd:30,ame:"03",pme:59},
        {date:"30/09/2024",ama:56,pma:30,amb:66,pmb:68,amc:89,pmc:"03",amd:36,pmd:38,ame:98,pme:59},
        {date:"07/10/2024",ama:48,pma:"00",amb:"09",pmb:"05",amc:68,pmc:73,amd:11,pmd:21,ame:"00",pme:"03"},
        {
          date: "14/10/2024",
          ama: "**",
          pma: "**",
          amb: 81,
          pmb: "03",
          amc: 80,
          pmc: 14,
          amd: 18,
          pmd: 25,
          ame: "85",
          pme: "20",
        },
      ]
    }
  }
};
</script>

<style scoped>
.height{
  background: #f4f3f2;
  border: 1px solid #ddd;
  margin-bottom: 2px;
  align-items: center;
  max-height: 86.5vh;
  overflow: scroll;
  justify-content: center;
 
}
table,tr,td,th{
  margin: 5px auto;
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px 3px;
  justify-content: center;
  text-align: center;
  display: -moz-grid;
  border-radius: 5px;
  color: green;


}
.caption{
  padding: 10px 5px;
  font-size: 1.1rem;
  color: rgb(207, 8, 207);
  font-weight: bold;

}
.am{
  padding: 10px 5px;
  color: black;
}
td{
  font-size: 11px;
  font-weight: bold;
    letter-spacing: 1.3px;
}
tr,th, .date-time{
  color: rgb(255, 0, 0);
  padding: 2px 1px;
  margin: 3px 2px;
}
tr,th, .time{
  padding: 5px 10px;
  font-size: 1rem;
}

td, .show-time{
  font-size: 1rem;
}
.date{
  font-weight: bold;
  color:blue;
  font-size: 13px;
}
</style>