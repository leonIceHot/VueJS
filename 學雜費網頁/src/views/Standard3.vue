<template>
  <v-app>
    <div>
      <template>
        <v-tabs>
          <v-tab>{{total.text.txt1}}</v-tab>
          <v-tab-item>
            <!--Table1-->
            <v-data-table
              dense
              :headers="total.headers"
              :items="total.tables"
              :items-per-page="10"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
              <template v-slot:item.sem109="{ item }">{{setMoneyNum(item.sem109)}}</template>

              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{total.text.txt1}}</h2>
                    </v-toolbar-title>
                  </v-spacer>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-tab-item>

          <!--Table2-->
          <v-tab>{{total.text.txt2}}</v-tab>
          <v-tab-item>
            <v-data-table
              dense
              :headers="total.headers2"
              :items="total.tables2"
              :items-per-page="15"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
              <template v-slot:item.sem109="{ item }">{{setMoneyNum(item.sem109)}}</template>
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{total.text.txt2}}</h2>
                    </v-toolbar-title>
                  </v-spacer>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-tab-item>

          <v-tab>{{total.text.txt3}}</v-tab>
          <v-tab-item>
            <v-data-table
              dense
              :headers="total.headers3"
              :items="total.tables3"
              :items-per-page="10"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
              <template v-slot:item.sem109="{ item }">{{setMoneyNum(item.sem109)}}</template>
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{total.text.txt3}}</h2>
                    </v-toolbar-title>
                  </v-spacer>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-tab-item>

          <v-tab>{{total.text.txt4}}</v-tab>
          <v-tab-item>
            <v-data-table
              dense
              :headers="total.headers4"
              :items="total.tables4"
              :items-per-page="10"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
              <template v-slot:item.sem109="{ item }">{{setMoneyNum(item.sem109)}}</template>
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{total.text.txt4}}</h2>
                    </v-toolbar-title>
                  </v-spacer>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs>
      </template>
    </div>
    <div align="left">
      <div v-html="total.text.src1"></div>
    </div>
  </v-app>
</template>

<script>
import totalardJson from "../assets/json/total.json";

export default {
  data() {
    return {
      total: totalardJson,
    };
  },
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
