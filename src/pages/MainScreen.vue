<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <div class="div-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group row">
              <input
                type="text"
                class="form-control col-md-8"
                id="formGroupExampleInput"
                placeholder="Pin "
              />
              <button type="submit" class="btn btn-primary col-md-4">
                Join
              </button>
            </div>
            <div class="form-group row">
              <a href="#" class="" @click="showModal">Create new room</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <b-modal id="modal-1" title="create room" ok-title="create">
          <template #modal-header="">
            <h5>Modal Header</h5>
          </template>
          <b-container fluid>
            <h3>Room created success</h3>
          </b-container>
          <template #modal-footer="">
            <b-button size="sm" variant="danger" @click="cancel_post()">
              Cancel
            </b-button>
            <b-button size="sm" variant="success" @click="ok_clicked()">
              OK
            </b-button>
          </template>
        </b-modal>
      </div>
    </div>
    <room-info-modal
      v-model="isRoomInfoModalVisible"
      v-bind:link="meetingLink"
      v-bind:id="meetingId"
    ></room-info-modal>
  </div>
</template>

<script>
import { getTest } from "@/api/user";
import RoomInfoModal from "@/components/RoomInfoModal";
import { createRoom } from "@/api/room";
//import notify from "@/utils/notify";
export default {
  name: "MainScreen",
  components: {
    "room-info-modal": RoomInfoModal,
  },
  data() {
    return {
      isRoomInfoModalVisible: false,
      meetingLink: undefined,
      meetingId: 0,
      postData: {
        name: "orkhan_test_room_from_vue",
      },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    showModal() {
      this.$store.commit("setLoadingShow", true);
      createRoom(this.postData)
        .then((response) => {
          console.log("room created:");
          console.log(response);
          this.meetingLink = "localhost:8080/app/" + response.roomId;
          this.meetingId = response.roomId;
          this.isRoomInfoModalVisible = true;
        })
        .finally(() => {
          this.$store.commit("setLoadingShow", false);
        });
    },
    ok_clicked() {
      this.$store.commit("setLoadingShow", true);
      getTest()
        .then((response) => {
          console.log("response test get data");
          console.log(response);
        })
        .finally(() => {
          this.$store.commit("setLoadingShow", false);
        });
      this.$bvModal.hide("modal-1");
    },
    cancel_post() {
      console.log("cancel clicked");
    },
  },
};
</script>

<style scoped>
</style>
