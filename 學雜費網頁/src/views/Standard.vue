<template>
  <v-app>
    <div>
      <template>
        <v-tabs>
          <v-tab>{{stand.text.txt1}}</v-tab>
          <v-tab-item>
            <!--Table1-->
            <v-data-table
              dense
              :headers="stand.headers"
              :items="stand.tables"
              :items-per-page="10"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{stand.text.txt1}}</h2>
                    </v-toolbar-title>
                  </v-spacer>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-tab-item>

          <!--Table2-->
          <v-tab>{{stand.text.txt2}}</v-tab>
          <v-tab-item>
            <v-data-table
              dense
              :headers="stand.headers2"
              :items="stand.tables2"
              :items-per-page="15"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{stand.text.txt2}}</h2>
                    </v-toolbar-title>
                  </v-spacer>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-tab-item>

          <v-tab>{{stand.text.txt3}}</v-tab>
          <v-tab-item>
            <v-data-table
              dense
              :headers="stand.headers3"
              :items="stand.tables3"
              :items-per-page="10"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{stand.text.txt3}}</h2>
                    </v-toolbar-title>
                  </v-spacer>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-tab-item>

          <v-tab>{{stand.text.txt4}}</v-tab>
          <v-tab-item>
            <v-data-table
              dense
              :headers="stand.headers4"
              :items="stand.tables4"
              :items-per-page="10"
              item-key="name"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-spacer>
                    <v-toolbar-title class="flex text-center">
                      <h2>{{stand.text.txt4}}</h2>
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
      <a href="http://ao.dyu.edu.tw/public/public_2.html" target="_blank">收費標準公告區</a>
    </div>
  </v-app>
</template>

<script>
import StandardJson from "../assets/json/standard.json";

export default {
  data() {
    return {
      stand: StandardJson,
    };
  },
};
</script>
