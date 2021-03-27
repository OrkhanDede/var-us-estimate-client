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
                  <a href="#" class="">Create new room</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
