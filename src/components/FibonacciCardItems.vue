<template>
  <div class="row">
    <div class="my-flex" v-if="!showSingleCard">
      <div class="col-md-3 digit-box height-100" @click="clickPoint(1)">
        <span>1</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint(2)">
        <span>2</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint(3)">
        <span>3</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint(5)">
        <span>5</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint(8)">
        <span>8</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint(13)">
        <span>13</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint(21)">
        <span>21</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint(34)">
        <span>34</span>
      </div>
      <div class="col-md-3 digit-box height-100" @click="clickPoint('--')">
        <span>-</span>
      </div>
    </div>
    <div class="my-flex-center" v-if="showSingleCard">
      <fibonacci-card-single-item
        :value="selectedPoint"
        :meeting-id="meetingId"
      ></fibonacci-card-single-item>
    </div>
  </div>
</template>
<script>
import FibonacciCardSingleItem from "@/components/FibonacciCardSingleItem";
import eventBus from "../main.js";
export default {
  props: ["meetingId"],
  data() {
    return {
      selectedPoint: undefined,
      showSingleCard: false,
    };
  },
  created() {
    eventBus.$on("estimated", (e) => {
      console.log("estimated:" + e);
      if (e == undefined) {
        this.showSingleCard = false;
      }
    });
  },
  components: {
    "fibonacci-card-single-item": FibonacciCardSingleItem,
  },
  methods: {
    clickPoint(value) {
      this.selectedPoint = value;
      this.showSingleCard = true;
    },
  },
};
</script>