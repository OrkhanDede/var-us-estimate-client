<template>
  <div class="var-users">
    <div v-for="user in users" class="var-user" :key="user.id">
      <div class="var-user-img">
        <img
          src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
          alt="Retail Admin"
        />
      </div>
      <div class="var-user-name">
        <span class="name"
          >{{ user.name }}
          <span style="color: #28a745" v-if="user.isHost">(Host)</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      required: false,
    },
  },
  //
};
</script>