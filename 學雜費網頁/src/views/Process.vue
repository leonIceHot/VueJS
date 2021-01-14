<template>
  <div>
    <p style="text-align:center" v-for="user in process" :key="user.io">{{user.txt}}</p>
    <br />
    <li v-for="(item,index) in process" :key="index">
      <img :src="item.img" />
    </li>
  </div>
</template>

<script>
import ProcessJson from "../assets/json/process.json";

export default {
  data() {
    return {
      process: ProcessJson,
    };
  },
};
</script>