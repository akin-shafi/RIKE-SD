
<template>
   <div class="bg-dark">
      <div class="line-pattern"></div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="@/assets/logo1.png" class="img-fluid" alt="R2B">
          </a>

          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="iconify" data-icon="ic:baseline-menu-open"
              style="display: inline-block;width: 1.5em;height: 1.5em;color:#fff;"></span>
          </button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="@/assets/logo1.png" class="img-fluid" alt="R2B">
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav mx-auto mb-lg-0">
                <li class="nav-item me-3">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item me-3">
                  <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item me-3">
                  <router-link class="nav-link" to="/team">Team</router-link>
                </li>
                <li class="nav-item me-3">
                  <router-link class="nav-link" to="/event">Events</router-link>
                </li>
                <li class="nav-item me-3">
                  <router-link class="nav-link" to="/">Research and impact</router-link>
                </li>
              </ul>

              <div class="d-flex">
                <ul class="navbar-nav mb-2 mb-lg-0">
                  <li class="nav-item me-3">
                    <router-link class="nav-link" to="/blog">Blog</router-link>
                  </li>
                  <li class="nav-item">
                    <a href="#involved" class="btn s2b-text-bg-primary">Get involved</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      
    </div>
</template>
<script setup></script>


<style scoped>

</style>