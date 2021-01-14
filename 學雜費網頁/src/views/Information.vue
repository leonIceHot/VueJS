<template>
  <v-app>
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title primary-title class="justify-center">{{Info.chartData1.txt11}}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              <v-btn icon href="https://helpdreams.moe.edu.tw/">{{Info.chartData1.txt1}}</v-btn>
            </div>
            <div>
              <v-btn
                icon
                href="https://sloan.bot.com.tw/newsloan/login/SLoanLogin.action"
              >{{Info.chartData1.txt2}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/perk.php">{{Info.chartData1.txt3}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/">{{Info.chartData1.txt4}}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title primary-title class="justify-center">{{Info.chartData2.txt21}}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              <v-btn icon href="http://sis.dyu.edu.tw/RWD/">{{Info.chartData2.txt1}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/">{{Info.chartData2.txt2}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/">{{Info.chartData2.txt3}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/cdc4300/article-27">{{Info.chartData2.txt4}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/perk.php">{{Info.chartData2.txt5}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/perk.php">{{Info.chartData2.txt6}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/perk.php">{{Info.chartData2.txt7}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/perk.php">{{Info.chartData2.txt8}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/">{{Info.chartData2.txt9}}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title primary-title class="justify-center">{{Info.chartData3.txt31}}</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>
              <v-btn icon href="https://helpdreams.moe.edu.tw/">{{Info.chartData3.txt1}}</v-btn>
            </div>
            <div>
              <v-btn icon href="https://sloan.bot.com.tw/newsloan/login/SLoanLogin.action">{{Info.chartData3.txt2}}</v-btn>
            </div>
            <div>
              <v-btn icon href="http://sa.dyu.edu.tw/ulc2701/perk.php">{{Info.chartData3.txt3}}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import InfoJson from "../assets/json/information.json";

export default {
  data() {
    return {
      Info: InfoJson,
    };
  },
};
</script>