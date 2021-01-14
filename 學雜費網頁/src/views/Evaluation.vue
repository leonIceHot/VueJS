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
      :headers="evaluate.headers"
      :items="evaluate.tables"
      :items-per-page="10"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class="flex text-center">
              <h2>{{evaluate.text1.txt0}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div>
      <p>{{evaluate.text1.txt1}}</p>
      <p>{{evaluate.text1.txt2}}</p>
      <p>{{evaluate.text1.txt3}}</p>
      <p>{{evaluate.text1.txt4}}</p>
      <p>{{evaluate.text1.txt5}}</p>
      <p>{{evaluate.text1.txt6}}</p>
      <p>{{evaluate.text1.txt7}}</p>
      <p>{{evaluate.text1.txt8}}</p>
    </div>

    <!--Table2-->
    <v-data-table
      dense
      :headers="evaluate.headers2"
      :items="evaluate.tables2"
      :items-per-page="15"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class="flex text-center">
              <h2>{{evaluate.text2.txt0}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div>
      <p>{{evaluate.text2.txt1}}</p>
      <p>{{evaluate.text2.txt2}}</p>
      <p>{{evaluate.text2.txt3}}</p>
      <p>{{evaluate.text2.txt4}}</p>
    </div>
  </v-app>
</template>

<script>
import EvaluationJson from "../assets/json/evaluation.json";

export default {
  data() {
    return {
      evaluate: EvaluationJson,
    };
  },
};
</script>