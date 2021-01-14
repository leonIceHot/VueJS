<template>
  <v-simple-table dense>
    <template v-slot:top>
      <v-toolbar flat>
        <v-spacer>
          <v-toolbar-title class="flex text-center">
            <h2>{{infos.text.txt01}}</h2>
          </v-toolbar-title>
        </v-spacer>
      </v-toolbar>
    </template>

    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">{{infos.text.txt1}}</th>
          <th class="text-left">{{infos.text.txt2}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{infos.Data1.txt11}}</td>
          <td>
            <ol>
              <li style="text-align: left">
                <div v-html="infos.Data1.src1"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data1.src2"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data1.src3"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data1.src4"></div>
              </li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>{{infos.Data2.txt21}}</td>
          <td>
            <ol>
              <li style="text-align: left">
                <div v-html="infos.Data2.src1"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src2"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src3"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src4"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src5"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src6"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src7"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src8"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data2.src9"></div>
              </li>
            </ol>
          </td>
        </tr>
        <tr>
          <td>{{infos.Data3.txt31}}</td>
          <td>
            <ol>
              <li style="text-align: left">
                <div v-html="infos.Data3.src1"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data3.src2"></div>
              </li>
              <li style="text-align: left">
                <div v-html="infos.Data3.src3"></div>
              </li>
            </ol>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import InformationJson from "../assets/json/information.json";

export default {
  data() {
    return {
      infos: InformationJson,
    };
  },
};
</script>