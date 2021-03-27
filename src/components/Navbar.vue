<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" tag="a" class="navbar-brand"> Navbar </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link
          to="/"
          tag="li"
          class="nav-item"
          active-class="active"
          exact
        >
          <a class="nav-link">Home</a>
        </router-link>
        <router-link
          to="/app"
          tag="li"
          class="nav-item"
          active-class="active"
          exact
        >
          <a class="nav-link">App</a>
        </router-link>
        <router-link
          to="/user"
          tag="li"
          class="nav-item"
          active-class="active"
          exact
        >
          <a class="nav-link">User</a>
        </router-link>
        <router-link
          to="/host"
          tag="li"
          class="nav-item"
          active-class="active"
          exact
        >
          <a class="nav-link">Host</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>