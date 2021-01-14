<template>
  <div class="plan">
    <div id="nav">
      <router-link to="/situation">使用情況</router-link>|
      <router-link to="/alteration">調整理由、計算方式</router-link>|
      <router-link to="/expenditure">支用計畫</router-link>
    </div>
    <router-view />
  </div>
</template>
