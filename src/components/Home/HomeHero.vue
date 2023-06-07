<template>
    <div class="b-img home-bg position-relative">
      <main class="container pt-5">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <div class="">
              <!-- <div> -->
                <p class="text-white fs-1">
                  <span class="fw-bold">Innovative</span> solutions for <span class="fw-bold">sustainable</span> development in <span class="fw-bold underline">Africa</span>.
                </p>
                <p class="text-white">Driving Positive Impact Across the Continent.</p>
                <div class="w-100 mb-3">
                  <router-link to="/startproject" class="btn btn-success me-3 mb-2">
                    <Icon icon="heroicons-outline:light-bulb" /> 
                    Start a project
                  </router-link>

                  <router-link to="/project" class="btn btn-success me-3 mb-2">
                    <Icon icon="ic:sharp-search" /> Discover
                  </router-link>

                  <router-link to="/project" class="btn btn-success me-3 mb-2">
                    <Icon icon="ion:diamond-outline" /> MarketPlace
                  </router-link>

                  <router-link to="/project" class="btn btn-success me-3 mb-2">
                    <Icon icon="carbon:collaborate" /> Collaborate
                  </router-link>

                  <router-link to="/project" class="btn btn-success me-3 mb-2">
                    <Icon icon="arcticons:invest" /> Fund a research
                  </router-link>

                  <router-link to="/project" class="btn btn-success me-3 mb-2">
                    <Icon icon="solar:ferris-wheel-line-duotone" /> RDI Infrastructure
                  </router-link>

                  
                </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="d-flex flex-column text-end bg-light p-2 aside-right">
              <div class="b-img b-img-1 grid" style="height: 226px;">
                <button class="btn rounded-circle">
                  <img src="@/assets/play.png" class="img-fluid" alt="Play">
                </button>
              </div>
              <div class="b-img b-img-2 grid my-2" style="height: 226px;">
                <button class="btn rounded-circle">
                  <img src="@/assets/play.png" class="img-fluid" alt="Play">
                </button>
              </div>
              <div class="b-img b-img-3 grid" style="height: 226px;">
                <button class="btn rounded-circle">
                  <img src="@/assets/play.png" class="img-fluid" alt="Play">
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>    
    </div>
    
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style>
.b-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.home-bg {
  background-image: url(../../assets/home-bg.png);
  height: 100vh;
}

.header-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 90%;
}

.b-img-1 {
  background-image: url(../../assets/technology.png);
}

.b-img-2 {
  background-image: url(../../assets/technology1.png);
}

.b-img-3 {
  background-image: url(../../assets/technology2.png);
}

.aside-left {
  /* width: 500px; */
  height: 60vh;
}

.aside-right {
  width: 522px;
  height: 80vh;
  margin-left: auto;
}

.grid {
  display: grid;
  place-items: center;
}

@media screen and (max-width: 900px) and (min-width: 320px) {
  .home-bg {
    height: auto;
  }

  .header-content {
    grid-template-columns: 1fr;
  }

  .w-sm-100 {
    width: 90% !important;
  }

  .nav-link {
    color: #000 !important;
  }

  .aside-left {
    width: 100%;
    height: 30vh;
  }

  .aside-right {
    width: 100% !important;
    height: auto;
    margin: 120px 0 14px;
  }
}

.list-group {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
}

.list-group-item {
  background-color: #f0f0f034;
  padding: 10px;
  margin-bottom: 1px;
  cursor: pointer;
  color: #FFF;
}

.list-group-item:hover {
  /* background-color: #FFAE01; */
  background-color: #f5b95f;
}
.btn a{text-decoration: none;}
</style>
  