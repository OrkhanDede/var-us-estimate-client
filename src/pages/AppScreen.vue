<template>
  <div class="row">
    <h1>APP</h1>
    <p>id:{{ id }}</p>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div class="card min-height-800 m-0">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
            <div class="users-container">
              <div class="chat-search-box">
                <div class="btn btn-info" style="width: 100%">room-1</div>
              </div>
              <users-in-room :users="users"></users-in-room>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
            <div class="selected-user">
              <!-- settings -->
              <div class="col-lg-12 settings-icons">
                <div class="setting">
                  <font-awesome-icon
                    icon="cog"
                    @click="
                      () => {
                        this.AppState.areYouEstimated = false;
                      }
                    "
                  />
                </div>
              </div>
            </div>

            <fibonacci-card-items
              :meeting-id="id"
              v-if="AppState.state == 1 && !AppState.areYouEstimated"
            ></fibonacci-card-items>

            <div
              class="my-flex-center"
              style=""
              v-if="AppState.state == 0 && AppState.isHost"
            >
              <p class="please-wait-text">
                Make sure everyone you send the link to is coming to the meeting
              </p>
              <p>Then press the start button to start the session</p>
              <button
                class="btn point-action-btn btn-success"
                @click="StartSession"
              >
                Start
              </button>
            </div>
            <div
              class="my-flex-center"
              style=""
              v-if="AppState.state == 0 && !AppState.isHost"
            >
              <p class="please-wait-text">
                Please wait for the host to start the session
              </p>
            </div>
            <estimated-users
              :meeting-id="id"
              :isHost="AppState.isHost"
              v-if="AppState.areYouEstimated"
            ></estimated-users>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UsersInRoom from "@/components/UsersInRoom";
import EstimatedUsers from "@/components/EstimatedUsers";
import FibonacciCardItems from "@/components/FibonacciCardItems";

import { getUsersByRoom } from "@/api/user";
import { getRoomState, startSession } from "@/api/room";
import eventBus from "../main.js";

export default {
  components: {
    "users-in-room": UsersInRoom,
    "fibonacci-card-items": FibonacciCardItems,
    "estimated-users": EstimatedUsers,
  },
  data() {
    UsersInRoom;
    return {
      id: undefined,
      users: [],
      AppState: {
        state: 0,
        roomId: "",
        isHost: false,
        points: [],
        areYouEstimated: false,
      },
    };
  },
  mounted() {
    if (this.isAppIdxist) {
      this.id = this.$route.params.id;
      this.GetMeetingState();
      this.GetUsers();
    } else {
      console.log("id not found");
    }
  },
  created() {
    eventBus.$on("estimated", (e) => {
      if (e == undefined) {
        return;
      }

      this.AppState.areYouEstimated = true;
    });
    eventBus.$on("nextSession", (response) => {
      console.log("next000000000000");
      this.AppState.isHost = response.isHost;
      this.AppState.state = response.state;
      this.AppState.areYouEstimated = false;
    });
  },
  computed: {
    isAppIdxist() {
      return (
        this.$route.params &&
        this.$route.params.id &&
        this.$route.params.id != null
      );
    },
  },
  methods: {
    GetUsers() {
      getUsersByRoom(this.id)
        .then((response) => {
          console.log(
            "🚀 ~ file: AppScreen.vue ~ line 61 ~ .then ~ response",
            response
          );
          this.users = response;
        })
        .finally(() => {});
    },
    GetMeetingState() {
      getRoomState(this.id)
        .then((response) => {
          console.log(
            "🚀 ~ file: AppScreen.vue ~ line 117 ~ .then ~ response",
            response
          );
          this.AppState.isHost = response.isHost;
          this.AppState.state = response.state;
        })
        .finally(() => {});
    },
    StartSession() {
      startSession(this.id)
        .then((response) => {
          console.log(
            "🚀 ~ file: AppScreen.vue ~ line 117 ~ .then ~ response",
            response
          );
          this.AppState.isHost = response.isHost;
          this.AppState.state = response.state;
        })
        .finally(() => {});
    },
  },
};
</script>