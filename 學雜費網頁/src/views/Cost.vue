<template>
  <div class="standard">
    <div id="nav">
      <router-link to="/standard3">收費標準</router-link>|
      <router-link to="/average">平均教學成本</router-link>|
      <router-link to="/ratio">教學成本比率</router-link>|
      <router-link to="/evaluation">教育支出估算</router-link>|
      <router-link to="/information1">助學措施資訊</router-link>|
      <router-link to="/everything">各項金額、人數與比率</router-link>
    </div>
    <router-view />
  </div>
</template>
