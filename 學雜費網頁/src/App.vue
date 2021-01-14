<template>
  <div id="app">
    <div id="title1">
      <v-app>
        <div>
          <v-tabs>
            <v-tab>{{total.text.txt1}}</v-tab>
            <v-tab-item>
              <!--Table1-->
              <h2 style="text-align: center">{{total.text.txt1}}</h2>
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
              </v-data-table>
            </v-tab-item>

            <!--Table2-->
            <v-tab>{{total.text.txt2}}</v-tab>
            <v-tab-item>
              <h2 style="text-align: center">{{total.text.txt2}}</h2>
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
              </v-data-table>
            </v-tab-item>

            <v-tab>{{total.text.txt3}}</v-tab>
            <v-tab-item>
              <h2 style="text-align: center">{{total.text.txt3}}</h2>
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
              </v-data-table>
            </v-tab-item>

            <v-tab>{{total.text.txt4}}</v-tab>
            <v-tab-item>
              <h2 style="text-align: center">{{total.text.txt4}}</h2>
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
              </v-data-table>
            </v-tab-item>
          </v-tabs>
        </div>
        <div align="left">
          <div v-html="total.text.src1"></div>
        </div>
      </v-app>
    </div>

    <div id="title2">
      <v-app id="inspire">
        <h2 style="text-align: center">{{total.text2.txt}}</h2>
        <v-data-table
          dense
          :headers="total.headers5"
          :items="total.tables5"
          :items-per-page="10"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:item.teaching="{ item }">{{setMoneyNum(item.teaching)}}</template>
          <template v-slot:item.student="{ item }">{{setMoneyNum(item.student)}}</template>
          <template v-slot:item.average="{ item }">{{setMoneyNum(item.average)}}</template>
        </v-data-table>
        <div>
          <p>{{total.text2.txt1}}</p>
          <p>{{total.text2.txt2}}</p>
          <p>{{total.text2.txt3}}</p>
        </div>
      </v-app>
    </div>

    <div id="title3">
      <v-app id="inspire">
        <h2 style="text-align: center">{{total.text6.txt1}}</h2>
        <v-data-table
          dense
          :headers="total.headers6"
          :items="total.tables6"
          :items-per-page="10"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:item.standard="{ item }">{{setMoneyNum(item.standard)}}</template>
          <template v-slot:item.cost="{ item }">{{setMoneyNum(item.cost)}}</template>
        </v-data-table>
        <div>
          <p>{{total.text6.txt2}}</p>
        </div>
      </v-app>
    </div>

    <div id="title4">
      <v-app id="inspire">
        <!--Table1-->
        <h2 style="text-align: center">{{total.text41.txt0}}</h2>
        <v-data-table
          dense
          :headers="total.headers7"
          :items="total.tables7"
          :items-per-page="10"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:item.family="{ item }">{{setMoneyNum(item.family)}}</template>
          <template v-slot:item.school="{ item }">{{setMoneyNum(item.school)}}</template>
        </v-data-table>
        <div>
          <p>{{total.text41.txt1}}</p>
          <p>{{total.text41.txt2}}</p>
          <p>{{total.text41.txt3}}</p>
          <p>{{total.text41.txt4}}</p>
          <p>{{total.text41.txt5}}</p>
          <p>{{total.text41.txt6}}</p>
          <p>{{total.text41.txt7}}</p>
          <p>{{total.text41.txt8}}</p>
        </div>

        <!--Table2-->
        <h2 style="text-align: center">{{total.text42.txt0}}</h2>
        <v-data-table
          dense
          :headers="total.headers8"
          :items="total.tables8"
          :items-per-page="15"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:item.room="{ item }">{{setMoneyNum(item.room)}}</template>
          <template v-slot:item.cost="{ item }">{{setMoneyNum(item.cost)}}</template>
        </v-data-table>
        <div>
          <p>{{total.text42.txt1}}</p>
          <p>{{total.text42.txt2}}</p>
          <p>{{total.text42.txt3}}</p>
          <p>{{total.text42.txt4}}</p>
        </div>
      </v-app>
    </div>

    <div id="title5">
      <v-simple-table dense>
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer>
              <v-toolbar-title class="flex text-center">
                <h2 style="text-align: center">{{total.text5.txt01}}</h2>
              </v-toolbar-title>
            </v-spacer>
          </v-toolbar>
        </template>

        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">{{total.text5.txt1}}</th>
              <th class="text-left">{{total.text5.txt2}}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center">{{total.Data1.txt11}}</td>
              <td>
                <ol>
                  <li style="text-align: left">
                    <div v-html="total.Data1.src1"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data1.src2"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data1.src3"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data1.src4"></div>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">{{total.Data2.txt21}}</td>
              <td>
                <ol>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src1"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src2"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src3"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src4"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src5"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src6"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src7"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src8"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data2.src9"></div>
                  </li>
                </ol>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">{{total.Data3.txt31}}</td>
              <td>
                <ol>
                  <li style="text-align: left">
                    <div v-html="total.Data3.src1"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data3.src2"></div>
                  </li>
                  <li style="text-align: left">
                    <div v-html="total.Data3.src3"></div>
                  </li>
                </ol>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <div id="title6">
      <v-app id="inspire">
        <h2 style="text-align: center">{{total.text61.txt0}}</h2>
        <!--Table1-->
        <v-data-table
          dense
          :headers="total.headers9"
          :items="total.tables9"
          :items-per-page="5"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:item.sem106="{ item }">{{setMoneyNum(item.sem106)}}</template>
          <template v-slot:item.sem107="{ item }">{{setMoneyNum(item.sem107)}}</template>
          <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
        </v-data-table>
        <div>
          <p>{{total.text61.txt1}}</p>
          <p>{{total.text61.txt2}}</p>
        </div>

        <!--Table2-->
        <h2 style="text-align: center">{{total.text62.txt0}}</h2>
        <v-data-table
          dense
          :headers="total.headers10"
          :items="total.tests10"
          :single-expand="singleExpand"
          item-key="name"
          :expanded.sync="expanded"
          show-expand
          class="elevation-1"
        >
          <template v-slot:item.sem106="{ item }">{{setMoneyNum(item.sem106)}}</template>
          <template v-slot:item.sem107="{ item }">{{setMoneyNum(item.sem107)}}</template>
          <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
          <template v-slot:expanded-item="{ headers , item }">
            <td :colspan="headers.length">
              <v-data-table dense :headers="total.headers10" :items="item.subItem"></v-data-table>
            </td>
          </template>
        </v-data-table>
        <div>
          <p>{{total.text62.txt1}}</p>
        </div>

        <!--Table3-->
        <h2 style="text-align: center">{{total.text63.txt0}}</h2>
        <v-data-table
          dense
          :headers="total.headers11"
          :items="total.tables11"
          :items-per-page="5"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:item.sem106="{ item }">{{setMoneyNum(item.sem106)}}</template>
          <template v-slot:item.sem107="{ item }">{{setMoneyNum(item.sem107)}}</template>
          <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
        </v-data-table>
        <div>
          <p>{{total.text63.txt1}}</p>
        </div>

        <!--Table4-->
        <h2 style="text-align: center">{{total.text64.txt0}}</h2>
        <v-data-table
          dense
          :headers="total.headers12"
          :items="total.tables12"
          :items-per-page="5"
          item-key="name"
          class="elevation-1"
        >
          <template v-slot:item.sem106="{ item }">{{setMoneyNum(item.sem106)}}</template>
          <template v-slot:item.sem107="{ item }">{{setMoneyNum(item.sem107)}}</template>
          <template v-slot:item.sem108="{ item }">{{setMoneyNum(item.sem108)}}</template>
        </v-data-table>
        <div>
          <p>{{total.text64.txt1}}</p>
          <p>{{total.text64.txt2}}</p>
        </div>
      </v-app>
    </div>

    <div id="title7">
      <v-alert type="info" color="#8A2BE2">
        <p>{{total.txt}}</p>
      </v-alert>
    </div>

    <div id="title8">
      <v-alert type="info" color="#8A2BE2">
        <p>{{total.txt}}</p>
      </v-alert>
    </div>

    <div id="title9">
      <v-alert type="info" color="#8A2BE2">
        <p>{{total.txt}}</p>
      </v-alert>
    </div>

    <div id="title10">
      <p style="text-align:center">{{total.id10.txt}}</p>
      <br />
      <li>
        <img :src="total.id10.img" style="display:block; margin:auto;" />
      </li>
    </div>
  </div>
</template>

<script>
import InformationJson from "./assets/json/total.json";

export default {
  data() {
    return {
      total: InformationJson,
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