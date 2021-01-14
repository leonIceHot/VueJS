<style>
p {
  text-align: left;
}
</style>
<template>
  <v-app id="inspire">
    <v-data-table
      dense
      :headers="average.headers"
      :items="average.tables"
      :items-per-page="10"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class="flex text-center">
              <h2>{{average.text.txt}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div>
      <p>{{average.text.txt1}}</p>
      <p>{{average.text.txt2}}</p>
      <p>{{average.text.txt3}}</p>
    </div>
  </v-app>
</template>

<script>
import AverageJson from "../assets/json/average.json";

export default {
  data() {
    return {
      average: AverageJson,
    };
  },
};
</script>