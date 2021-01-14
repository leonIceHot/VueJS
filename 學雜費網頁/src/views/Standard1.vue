<style>
p {
  text-align: left;
}
</style>

<template>
  <v-app id="inspire">
    <!--Table1-->
    <v-data-table
      dense
      :headers="headers"
      :items="tables"
      :items-per-page="10"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class="flex text-center">
              <h2>大學部學費收費標準</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>

    <!--Table2-->
    <v-data-table
      dense
      :headers="headers2"
      :items="tables2"
      :items-per-page="15"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class="flex text-center">
              <h2>大學部雜費收費標準</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div align="left">
      <a href="http://ao.dyu.edu.tw/public/public_2.html" target="_blank">收費標準公告區</a>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: '學院別',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '108學年度', value: 'sem108' },
      { text: '109學年度', value: 'sem109' },
      { text: '調整率', value: 'ratio' },
      { text: '調整', value: 'change' },
    ],
    tables: [
      {
        name: '工學院、護健學院醫材系所',
        sem108: 39330,
        sem109: 39330,
        ratio: 0,
        change: '-',
      },
      {
        name: '管理學院、護健學院運健系、觀餐學院觀光系及休管系',
        sem108: 37597,
        sem109: 37597,
        ratio: 0,
        change: '-',
      },
      {
        name: '設藝學院',
        sem108: 39330,
        sem109: 39330,
        ratio: 0,
        change: '-',
      },
      {
        name: '外語學院',
        sem108: 37597,
        sem109: 37597,
        ratio: 0,
        change: '-',
      },
      {
        name: '生資學院',
        sem108: 39330,
        sem109: 39330,
        ratio: 0,
        change: '-',
      },
      {
        name: '觀光餐旅學院',
        sem108: 39330,
        sem109: 39330,
        ratio: 0,
        change: '-',
      },
      {
        name: '護健學院護理系及視光系',
        sem108: 39660,
        sem109: 39660,
        ratio: 0,
        change: '-',
      },
    ],
    headers2: [
      {
        text: '學院別',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '108學年度', value: 'sem108' },
      { text: '109學年度', value: 'sem109' },
      { text: '調整率', value: 'ratio' },
      { text: '調整', value: 'change' },
    ],
    tables2: [
      {
        name: '工學院、護健學院醫材系所',
        sem108: 13418,
        sem109: 13418,
        ratio: 0,
        change: '-',
      },
      {
        name: '管理學院、護健學院運健系、觀餐學院觀光系及休管系',
        sem108: 8273,
        sem109: 8273,
        ratio: 0,
        change: '-',
      },
      {
        name: '設藝學院',
        sem108: 13418,
        sem109: 13418,
        ratio: 0,
        change: '-',
      },
      {
        name: '外語學院',
        sem108: 7621,
        sem109: 7621,
        ratio: 0,
        change: '-',
      },
      {
        name: '生資學院',
        sem108: 13418,
        sem109: 13418,
        ratio: 0,
        change: '-',
      },
      {
        name: '觀光餐旅學院',
        sem108: 13418,
        sem109: 13418,
        ratio: 0,
        change: '-',
      },
      {
        name: '護健學院護理系及視光系',
        sem108: 16300,
        sem109: 16300,
        ratio: 0,
        change: '-',
      },
    ],
  }),
};
</script>
