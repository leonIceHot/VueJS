<template>
  <v-app>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1">
      <template v-slot:item.col1="{ item }">{{setMoneyNum(item.col1)}}</template>
      <template v-slot:item.col3="{ item }">{{setMoneyNum(item.col3)}}</template>
      <template v-slot:item.col5="{ item }">{{setMoneyNum(item.col5)}}</template>
    </v-data-table>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    headers: [
      {
        text: "支出項目學年度",
        align: "end",
        sortable: false,
        value: "name",
        width: "15%",
      },
      { text: "106", value: "col1", align: "end", width: "10%" },
      { text: "經常支出(%)", value: "col2", align: "end", width: "10%" },
      { text: "107", value: "col3", align: "end", width: "10%" },
      { text: "經常支出(%)", value: "col4", align: "end", width: "10%" },
      { text: "108", value: "col5", align: "end", width: "10%" },
      { text: "經常支出(%)", value: "col6", align: "end", width: "10%" },
    ],
    desserts: [
      {
        name: "董事會支出",
        col1: 1993787,
        col2: 0.12,
        col3: 1263563,
        col4: 0.08,
        col5: 449434,
        col6: 0.03,
      },
      {
        name: "行政管理支出",
        col1: 169996029,
        col2: 10.45,
        col3: 160682835,
        col4: 10.53,
        col5: 147293810,
        col6: 10.67,
      },
      {
        name: "教學研究及訓輔支出",
        col1: 1111119742,
        col2: 68.27,
        col3: 1054131086,
        col4: 69.1,
        col5: 943666834,
        col6: 68.35,
      },
      {
        name: "獎助學金支出",
        col1: 149704219,
        col2: 9.2,
        col3: 147727988,
        col4: 9.68,
        col5: 120829607,
        col6: 8.75,
      },
      {
        name: "推廣教育支出",
        col1: 55518143,
        col2: 3.41,
        col3: 51555694,
        col4: 3.38,
        col5: 41832573,
        col6: 3.03,
      },
    ],
  }),
  methods: {
    setMoneyNum(num) {
      var formatter = new Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 3,
      });
      return formatter.format(num);
    },
  },
};
</script>
