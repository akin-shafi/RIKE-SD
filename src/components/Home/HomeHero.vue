<template>
    <div class="b-img home-bg position-relative">
        <main class="header-content container pt-5">
            
            <div class="d-flex flex-column justify-content-between aside-left">
            <p class="text-white fs-1">
                <span class="fw-bold">Innovative</span>
                solutions for <span class="fw-bold">sustainable</span> development in <span
                class="fw-bold underline">Africa</span>.
            </p>
            <p class="text-white">Harnessing the Power of Innovation for Sustainable Development in Africa: Driving
                Positive Impact Across the Continent.</p>
            <div class="d-flex justify-content-between align-items-center w-50 w-sm-100 mb-3">
                <div class="d-flex align-items-center">
                <img src="@/assets/Icon.png" class="img-fluid me-3" alt="Talent">
                <span class="s2b-text-primary">Talent</span>
                </div>
                <div class="d-flex align-items-center">
                <img src="@/assets/icon1.png" class="img-fluid me-3" alt="Research">
                <span class="s2b-text-primary">Research</span>
                </div>
                <div class="d-flex align-items-center">
                <img src="@/assets/Icon2.png" class="img-fluid me-3" alt="Value">
                <span class="s2b-text-primary">Value</span>
                </div>
            </div>
            <div>
                <a href="#" class="btn s2b-text-bg-primary">Get involved</a>
            </div>
            </div>

            <div class="d-flex flex-column text-end bg-light p-2 aside-right">
            <div class="b-img b-img-1 grid" style="height: 226px;">
                <button class="btn rounded-circle">
                <img src="@/assets/play.png" class="img-fluid" alt="Play"></button>
            </div>
            <div class="b-img b-img-2 grid my-2" style="height: 226px;">
                <button class="btn rounded-circle">
                <img src="@/assets/play.png" class="img-fluid" alt="Play"></button>
            </div>
            <div class="b-img b-img-3 grid" style="height: 226px;">
                <button class="btn rounded-circle">
                <img src="@/assets/play.png" class="img-fluid" alt="Play"></button>
            </div>
            </div>
        </main>
    </div>
    
</template>

<script setup>

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
</style>
  