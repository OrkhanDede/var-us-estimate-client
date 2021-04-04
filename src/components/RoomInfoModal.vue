<template>
  <div>
    <b-modal
      size="lg"
      no-close-on-backdrop
      no-close-on-esc
      v-model="isVisible"
      dialog-class="quick-add-modal"
      title="Your Meeting is Ready!"
      @hidden="onModalHidden"
    >
      <div class="d-flex flex-column">
        <span
          >Share this meeting link with others that you want in the
          meeting</span
        >
        <div class="d-flex flex-row justify-content-between room-link-content">
          <input
            type="text"
            disabled
            class="copyable-link"
            v-model="copyableURL"
          />
          <b-button
            variant="outline-primary"
            v-clipboard:copy="copyableURL"
            @click="copyURL"
            >Copy</b-button
          >
        </div>
      </div>
      <template #modal-footer="">
        <b-button variant="success" @click="join"> Join </b-button>
      </template>
    </b-modal>
    <div class="elem-alert">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        Meeting link copyed
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomInfoModal",
  data() {
    return {
      isVisible: false,
      copyableURL: "",
      dismissSecs: 3,
      dismissCountDown: 0,
    };
  },
  props: {
    value: {
      required: true,
      default: true,
    },
    link: {
      required: true,
      default: "defaul value",
    },
    id: {
      required: true,
      default: undefined,
    },
  },
  watch: {
    value: {
      handler: function (val) {
        console.log("🚀 ~ file: RoomInfoModal.vue ~ line 33 ~ val", val);
        this.isVisible = val;
      },
      deep: true,
    },
    link: {
      handler: function (val) {
        this.copyableURL = val;
      },
    },

    isVisible: {
      handler: function (val) {
        this.$emit("input", val);
      },
      deep: true,
    },
  },
  mounted() {
    this.isVisible = this.value;
  },
  methods: {
    onModalHidden() {},
    showModal() {
      this.isVisible = true;
    },
    join() {
      this.$router.push({ name: "app", params: { id: this.id } });
      this.isVisible = true;
    },
    copyURL() {
      this.dismissCountDown = this.dismissSecs;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>

<style scoped>
.room-link-content {
  background-color: #f1f3f4;
}
.room-link-content input.copyable-link {
  width: 100%;
  padding-left: 10px;
}
.elem-alert {
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 999999999;
}
</style>