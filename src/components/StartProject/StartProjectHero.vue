<template>
    <div class="container-fluid bg-dark pt-5 pb-1 page-header">
        <div class="container py-1">
            <div class="header">
                <h3 class="title text-center text-light mb-3"> 
                    <Icon icon="et:profile-male" class="icon"  :inline="true"  />
                    Bring your creative project to life.
                    <!-- Unleash the potential of your creative project. -->
                    <!-- Transform your creative project into a vibrant reality. -->
                </h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10 d-flex justify-align-center  search-backdrop">
                    <div class="col-8 p-2" style=" margin: 0 auto;">
                        <div class="">
                           

                            <form v-if="currentPage === 1" @submit.prevent="submitPrimaryCategory" class="needs-validation row" novalidate>
                              <h3 class="text-center">First, let’s get you set up. </h3>
                              <h6 class="col-md-12 text-center my-4">Select a primary category and subcategory for your new project.</h6>
                              <div class="col-md-6 mb-3">
                                <label for="category" class="form-label">Category:</label>
                                <select id="category" v-model="primaryCategory" class="form-select" required :class="{ 'is-invalid': !primaryCategory }">
                                  <option value="" disabled>Select a category</option>
                                  <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                                </select>
                                <div class="invalid-feedback">Please select a category.</div>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="subCategory" class="form-label">Sub Category:</label>
                                <select id="subCategory" v-model="subCategory" class="form-select" required :class="{ 'is-invalid': !subCategory }">
                                  <option value="" disabled>Select a subcategory</option>
                                  <option v-for="subCategory in getSubCategories(primaryCategory)" :value="subCategory.id" :key="subCategory.id">{{ subCategory.name }}</option>
                                </select>
                                <div class="invalid-feedback">Please select a subcategory.</div>
                              </div>
                              <div class="col-md-12 mb-3 d-flex justify-content-end">
                                <button type="submit" class="btn btn-success">Next</button>
                              </div>
                            </form>

                            <form v-if="currentPage === 2" @submit.prevent="submitMoreSubCategory" class="needs-validation row" novalidate>
                                <h3 class="text-center">Select one more subcategory. </h3>
                                <h6 class="col-md-12 text-center my-4">It’ll help us provide more relevant guidance for your project.</h6>
                                <div class="col-md-6 mb-3">
                                    <label for="additionalCategory" class="form-label">Additional Category:</label>
                                    <select id="additionalCategory" v-model="additionalCategory" class="form-select" required>
                                      <option value="" disabled>Select an additional category</option>
                                      <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                                    </select>
                                    <div class="invalid-feedback">Please select an additional category.</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                  <label for="additionalSubCategory" class="form-label">Additional Sub Category:</label>
                                  <select id="additionalSubCategory" v-model="additionalSubCategory" class="form-select" required>
                                    <option value="" disabled>Select an additional subcategory</option>
                                    <option v-for="subCategory in getSubCategories(additionalCategory)" :value="subCategory.id" :key="subCategory.id">{{ subCategory.name }}</option>
                                  </select>
                                  <div class="invalid-feedback">Please select an additional subcategory.</div>
                                </div>
                                <div class="col-md-12 mb-3 d-flex justify-content-between">
                                    <button type="button" class="btn btn-secondary" @click="goToPreviousPage">Previous</button>
                                    <button type="submit" class="btn btn-success">Next</button>
                                </div>
                            </form>

                            <form v-if="currentPage === 3" @submit.prevent="submitLocation" class="needs-validation row" novalidate>
                                
                                <h3 class="text-center">Last one—set a location for your project.</h3>
                                <h6 class="col-md-12 text-center my-4">
                                    Pick your country of legal residence if you’re raising funds as an individual. 
                                    If you’re raising funds for a business or nonprofit, 
                                    select the country where the entity’s tax ID is registered.
                                </h6>
                                <div class="mb-3">
                                    <label for="country" class="form-label">Select a country:</label>
                                    <select id="country" v-model="selectedCountry" class="form-select" required>
                                    <!-- options for countries -->
                                    </select>
                                    <div class="invalid-feedback">Please select a country.</div>
                                </div>
                                <div class="col-md-12 mb-3 d-flex justify-content-between">
                                    <button type="button" class="btn btn-secondary" @click="goToPreviousPage">Previous</button>
                                    <button type="submit" class="btn btn-success">Submit</button>
                                </div>
                            </form>

                            <form v-if="currentPage === 4" @submit.prevent="submitSignupForm" class="needs-validation row" novalidate>
                                <h6 class="col-md-12 text-center my-4">Sign Up</h6>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email:</label>
                                    <input type="email" id="email" v-model="email" class="form-control" required>
                                    <div class="invalid-feedback">Please enter a valid email address.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password:</label>
                                    <input type="password" id="password" v-model="password" class="form-control" required>
                                    <div class="invalid-feedback">Please enter a password.</div>
                                </div>
                                <div class="col-md-12 mb-3 d-flex justify-content-end">
                                    <button type="button" class="btn btn-secondary" @click="goToPreviousPage">Previous</button>
                                    <button type="submit" class="btn btn-success">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { categories } from './data.js';


  const currentPage = ref(1);
  const primaryCategory = ref('');
  const subCategory = ref('');
  const additionalCategory = ref('');
  const additionalSubCategory = ref('');

  const selectedCountry = ref('');
  const email = ref('');
  const password = ref('');


  function getSubCategories(categoryId) {
    const selectedCategory = categories.find(category => category.id === Number(categoryId));
    return selectedCategory ? selectedCategory.subCategories : [];
  }

  
  function submitPrimaryCategory() {
    if (validateForm()) {
      currentPage.value = 2;
    }
  }

  function submitMoreSubCategory() {
    if (validateForm()) {
      currentPage.value = 3;
    }
  }

  function submitLocation() {
    if (validateForm()) {
      currentPage.value = 4;
    }
  }

function submitSignupForm() {
  if (validateForm()) {
    // Handle form submission
  }
}

function goToPreviousPage() {
  currentPage.value -= 1;
}

function validateForm() {
  const form = document.querySelector('form.needs-validation');
  if (form.checkValidity()) {
    form.classList.remove('was-validated');
    return true;
  } else {
    form.classList.add('was-validated');
    return false;
  }
}


// Fetch categories from API
// onMounted(fetchCategories);

// async function fetchCategories() {
//   try {
//     const response = await fetch('https://example.com/api/categories');
//     const data = await response.json();
//     categories.value = data;
//   } catch (error) {
//     console.error(error);
//     // Handle error
//   }
// }

// Watch for changes in the selected category and fetch corresponding subcategories
// watch(primaryCategory, fetchSubCategories);

// async function fetchSubCategories() {
//   if (primaryCategory.value) {
//     try {
//       const response = await fetch(`https://example.com/api/categories/${primaryCategory.value}/subcategories`);
//       const data = await response.json();
//       subCategories.value = data;
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   } else {
//     subCategories.value = [];
//   }
// }

// Rest of the form functions... 
  </script>
  