<template>
  <div class="single-box">
    <span class="close" @click="close">X</span>
    <span class="digit">{{ value }}</span>
    <span class="btn btn-success" @click="estimate">Estimate</span>
  </div>
</template>
<script>
import eventBus from "../main";
import { estimatePoint } from "@/api/room";
export default {
  props: ["meetingId", "value"],

  methods: {
    close() {
      eventBus.$emit("estimated", undefined);
    },
    estimate() {
      estimatePoint(this.meetingId, this.value)
        .then((response) => {
          console.log(
            "🚀 ~ file: AppScreen.vue ~ line 117 ~ .then ~ response",
            response
          );
          eventBus.$emit("estimated", this.value);
        })
        .finally(() => {});
    },
  },
};
</script>