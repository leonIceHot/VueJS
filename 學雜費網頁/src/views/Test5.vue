<style>
p {
  text-align: left;
}
</style>

<template>
  <v-app id='inspire'>
    <!--Table1-->
    <v-data-table
      dense
      :headers='everything.headers'
      :items='everything.tables'
      :items-per-page='5'
      item-key='name'
      class='elevation-1'
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class='flex text-center'>
              <h2>{{everything.text1.txt0}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div>
      <p>{{everything.text1.txt1}}</p>
      <p>{{everything.text1.txt2}}</p>
    </div>

    <!--Table2-->
    <v-data-table
      dense
      :headers='everything.headers'
      :items='everything.tests'
      :single-expand='singleExpand'
      item-key='name'
      :expanded.sync='expanded'
      show-expand
      class='elevation-1'
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class='flex text-center'>
              <h2>{{everything.text2.txt0}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item='{ headers , item }'>
        <td :colspan='headers.length'>
          <v-data-table dense :headers='everything.headers2' :items='item.subItem'></v-data-table>
        </td>
      </template>
    </v-data-table>
    <div>
      <p>{{everything.text2.txt1}}</p>
    </div>

    <!--Table3-->
    <v-data-table
      dense
      :headers='everything.headers3'
      :items='everything.tables3'
      :items-per-page='5'
      item-key='name'
      class='elevation-1'
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class='flex text-center'>
              <h2>{{everything.text3.txt0}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div>
      <p>{{everything.text3.txt1}}</p>
    </div>

    <!--Table4-->
    <v-data-table
      dense
      :headers='everything.headers4'
      :items='everything.tables4'
      :items-per-page='5'
      item-key='name'
      class='elevation-1'
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer>
            <v-toolbar-title class='flex text-center'>
              <h2>{{everything.text4.txt0}}</h2>
            </v-toolbar-title>
          </v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
    <div>
      <p>{{everything.text4.txt1}}</p>
      <p>{{everything.text4.txt1}}</p>
    </div>
  </v-app>
</template>

<script>
import EverythingJson from "../assets/json/everything.json";

export default {
  data() {
    return {
      everything: EverythingJson,
    };
  },
};
</script>