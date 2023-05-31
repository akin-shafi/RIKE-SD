<template>
    <div class="container-fluid bg-dark py-5 mb-5 page-header">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 d-flex justify-align-center  search-backdrop">
                    <div class="col-8 p-4" style=" margin: 0 auto;">
                        <div class="header">
                            <h4 class="title text-center"> 
                                <Icon icon="et:profile-male" class="icon"  :inline="true"  />
                                 Find Research Output
                            </h4>
                        </div>
                        <div class="search-box">
                            <input class="search-input" type="text" placeholder="Search something..">
                            <button class="search-btn"><i class="fas fa-search"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
</template>

<style scoped>
.icon{
    color:aliceblue !important
}
</style>