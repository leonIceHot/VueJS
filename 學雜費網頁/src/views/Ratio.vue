<style>
p {
  text-align: left;
}
</style>

<template>
  <v-app id="inspire">
    <v-data-table
      dense
      :headers="ratio.headers"
      :items="ratio.tables"
      :items-per-page="10"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class="flex text-center">
              <h2>{{ratio.text.txt1}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div>
      <p>{{ratio.text.txt2}}</p>
    </div>
  </v-app>
</template>

<script>
import RatioJson from "../assets/json/ratio.json";

export default {
  data() {
    return {
      ratio: RatioJson,
    };
  },
};
</script>