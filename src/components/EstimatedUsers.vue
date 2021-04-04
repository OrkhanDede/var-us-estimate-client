<template>
  <div class="container">
    <div class="col col-lg-12 user-point-loading">
      <div class="row">
        <div style="width: 100%; margin-bottom: 10px">
          <div v-if="!isHost">
            <h3>Loading.......</h3>
            <p class="please-wait-text">
              Please wait for the host to share(stop) all of point
            </p>
          </div>
          <div v-if="isHost">
            <div v-if="!showEstimate">
              <p class="please-wait-text">
                You can click the stop button to end the session and let
                everyone see the points.
              </p>
              <button
                class="btn point-action-btn btn-success"
                @click="shareAndStop"
              >
                Stop & Share
              </button>
            </div>
            <div v-if="showEstimate">
              <p class="please-wait-text">
                You can click the stop button to end the session and let
                everyone see the points.
              </p>
              <div class="btns-next-and-close">
                <button
                  class="btn point-action-btn btn-primary"
                  @click="nextSession"
                >
                  Next Session
                </button>
                <button
                  class="btn point-action-btn btn-danger"
                  @click="closeSession"
                >
                  Close the meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col col-lg-12 user-point-table">
      <div
        class="col col-lg-12 user-point-table-item"
        v-for="estimate in estimates"
        :key="estimate.id"
      >
        <div class="row">
          <div class="col-lg-9 user-point-name-and-img">
            <img
              src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
              alt="Retail Admin"
            />
            <span>{{ estimate.userFullName }}</span>
          </div>
          <div class="col-lg-3 user-point-name-and-img">
            <span v-if="!showEstimate">****</span>
            <span v-if="showEstimate"> {{ estimate.point }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEstimatePoint, startNextSession } from "@/api/room";
import eventBus from "../main.js";

export default {
  props: ["meetingId", "isHost"],
  data() {
    return {
      estimates: [],
      showEstimate: false,
    };
  },
  mounted() {
    console.log("estimated falan");
    this.getEstimates();
  },
  methods: {
    shareAndStop() {
      this.showEstimate = true;
    },
    nextSession() {
      startNextSession(this.meetingId)
        .then((response) => {
          console.log(
            "🚀 ~ file: EstimatedUsers.vue ~ line 89 ~ .then ~ response",
            response
          );
          eventBus.$emit("nextSession", response);
        })
        .finally(() => {});
    },
    closeSession() {
      this.$router.push("/");
    },
    getEstimates() {
      getEstimatePoint(this.meetingId)
        .then((response) => {
          console.log(
            "🚀 ~ file: EstimatedUsers.vue ~ line 89 ~ .then ~ response",
            response
          );
          this.estimates = response;
          console.log(response);
        })
        .finally(() => {});
    },
  },
};
</script>
<style scoped="css">
.btns-next-and-close {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btns-next-and-close .btn-primary {
  margin-right: 10px;
}
</style>