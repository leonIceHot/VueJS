<template>
  <div id="app">
    <v-treeview :items="items" item-key="id" open-all>
      <template v-slot:label="{ item }">
        <a :href="generateUrl(item)" style="margin-right: 1em;">{{ item.name }}</a>
      </template>
    </v-treeview>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: "https://helpdreams.moe.edu.tw/",
    url2: "https://sloan.bot.com.tw/newsloan/login/SLoanLogin.action",
    items: [
      {
        id: 1,
        name: "政府機關",
        children: [
          { id: 2, name: "教育部圓夢助學網" },
          { id: 3, name: "臺灣銀行就學貸款入口網" },
          { id: 4, name: "大葉大學獎助學金專區" },
          { id: 5, name: "學校公布欄、各系所公告及網頁" }
        ],
      },
    ],
  }),
  methods: {
    generateUrl(items) {
      return this.url.replace(items.id=2);
      return this.ur2.replace(items.id=3);
    },
  },
};
</script>