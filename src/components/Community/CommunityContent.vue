<template>
    <section class="container-fluid bg-dark py-5 mb-5 page-header hero-bg">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <div class="page-title">
                        <h1 id="main-content" class="page-heading">
                            Community  &amp; Researchers
                        </h1>
                        <h2 class="page-subheading">
                            We help people stay connected as a community.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container bg-light">
        <div class="row d-none">
           <div class="col-lg-3">
                <div class="card border-0 my-2 text-center">
                    <span>Researcher</span>
                </div>
            </div>
           <div class="col-lg-3">
                <div class="card border-0 my-2 text-center">
                    <span>Students</span>
                </div>
           </div>
           <div class="col-lg-3">
                <div class="card border-0 my-2 text-center">
                    <span>Industries</span>
                </div>
           </div>

           <div class="col-lg-3">
                <div class="card border-0 my-2 text-center">
                    <span>Funders</span>
                </div>
           </div>
        </div>

        <div class="row my-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <!-- <i class="fa fa-3x fa-graduation-cap app-text-secondary mb-4"></i> -->
                        <Icon icon="ion:book-outline" class=" fa-3x app-text-secondary mb-4"/>
                        <h5 class="mb-3 h-title">Researchers</h5>
                        <p>We facilitate meaningful connections among researchers, fostering collaboration and innovation in a dynamic global network.</p>
                        <button class="btn btn-lg rike-bg-secondary" @click="joinCom">Join now</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <Icon icon="fluent-emoji-high-contrast:student" class="fa-3x app-text-secondary mb-4" />
                        <h5 class="mb-3 h-title">Students</h5>
                        <p>Connecting students worldwide for diverse opportunities, fostering global collaboration, and enabling transformative learning experiences through our comprehensive network.</p>
                        <button class="btn btn-lg rike-bg-secondary" @click="joinCom">Join now</button>

                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <!-- <i class="fa fa-3x fa-home app-text-secondary mb-4"></i> -->
                        <Icon icon="iconoir:industry" class="fa-3x app-text-secondary mb-4"/>
                        <h5 class="mb-3 h-title">Industries</h5>
                        <p>We facilitate industry connections, fostering collaboration and synergy across sectors, enhancing innovation and driving collective growth. Through strategic networking, we bridge gaps, unlock potential, and create valuable opportunities for industries to connect, thrive, and create a lasting impact.</p>
                        <button class="btn btn-lg rike-bg-secondary" @click="joinCom">Join now</button>

                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;">
                <div class="service-item text-center pt-3">
                    <div class="p-4">
                        <Icon icon="ri:refund-2-fill" class="fa fa-3x app-text-secondary mb-4"/>
                        <h5 class="mb-3 h-title">Funders</h5>
                        <p>Unlocking opportunities, we connect funders globally, catalyzing impactful collaborations and empowering change-makers.</p>
                        <button class="btn btn-lg rike-bg-secondary" @click="joinCom">Join now</button>

                    </div>
                </div>
            </div>
        </div>
    </section>

    
  <ModalComp :show="joinCommununityModal" :size="'modal-sm'" @close="joinCommununityModal = false">
    <template #header>
      <h4 class="modal-title text-danger">Alert</h4>
    </template>

    <template #body>
      <h3 class="text-center">Are you sure?</h3>
      <p class="text-center"><i>You won't be able to revert this!</i></p>
    </template>

    <template #footer>
      <button type="button" class="btn btn-sm btn-primary d-block ms-auto" :class="{ disabled: loading }"
        @click="proceedToDelete">
        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
        <span>Proceed</span>
      </button>
    </template>
  </ModalComp>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import ModalComp from "@/components/ModalComp.vue";

const joinCommununityModal = ref(false);

const joinCom = () => {
    joinCommununityModal.value = true;
}
</script>
<style scoped>
.hero-bg {
    background-color: #000;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* style="background-image:url(https://farm5.staticflickr.com/4750/39533109984_38b02e7a34_k_d.jpg);" */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("https://farm5.staticflickr.com/4750/39533109984_38b02e7a34_k_d.jpg");
    position: relative;
}

/* @media print, screen and (min-width: 64em){
    .hero-bg {
        min-height: 560px;
    }
} */
.page-title h1 {
    color: #fff;
}

.page-title h2 {
    color: #fff;
    font-size: 1.2rem;
}

.h-title {
    text-decoration: underline;
    font-weight: bold;
}

@media print,
screen and (min-width: 64em) {
    .hero .page-heading {
        font-size: 48px;
        line-height: 67px;
    }
}
</style>
