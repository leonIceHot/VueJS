<template>
  <div class="plan">
    <v-alert type="info" color="#8A2BE2">
      <p v-for="user in plans" :key="user.io">{{user.txt}}</p>
    </v-alert>
  </div>
</template>

<script>
import PlanJson from "../assets/json/plan.json";

export default {
  data() {
    return {
      plans: PlanJson,
    };
  },
};
</script>