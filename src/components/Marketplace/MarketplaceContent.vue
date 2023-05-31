<template>
    <section class="container-fluid bg-dark py-5 mb-3 page-header hero-bg">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 d-flex justify-align-center  search-backdrop">
                    <div class="col-8 p-4" style=" margin: 0 auto;">
                        <div class="header">
                            <h4 class="title text-center"> Welcome to the RikeSD Research Marketplace</h4>
                            <div class="text-center app-my-2">Search by topic</div>
                        </div>
                        <div class="search-box">
                            <input class="search-input" type="text" placeholder="Search something..">
                            <button class="search-btn"><i class="fas fa-search"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="container border-bottom mb-3">
        <div class="icon-menu">
            <ul>
                <li>
                    <a href="#">
                        <Icon icon="et:profile-male" class="icon"  :inline="true"  />
                        <span class="badge">10</span>
                        <span class="item-name">Profiles</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon icon="ion:book-outline" class="icon"  :inline="true" />
                        <span class="badge">10</span>
                        <span class="item-name">Research output</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon icon="raphael:cube" class="icon"  :inline="true" />
                        <span class="badge">10</span>
                        <span class="item-name">Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon icon="ph:student-thin" class="icon"  :inline="true"/>
                        <span class="badge">10</span>
                        <span class="item-name">Student Theses</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon icon="mdi:state-machine" class="icon"  :inline="true"/>
                        <span class="badge">10</span>
                        <span class="item-name">Equipment Database</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Icon icon="iconoir:home" class="icon"  :inline="true" />
                        <span class="badge">10</span>
                        <span class="item-name">Research units</span>
                    </a>
                </li>
            </ul>
        </div>

    </section>  

    <section class="container my-5">
        <h1>Discover RIKESD's research</h1>
        <p>Research at RIKESD (Research for impact, Knowledge base economy and Sustainable Development) is dedicated to improving lives and creating a sustainable world. By using our portal, you can explore comprehensive information about all the research conducted at RIKESD, ranging from funding details to published journal articles.</p>
        
        <p>To find content that piques your interest, simply use the search bar above. You can search by specific names or subject areas to learn about our researchers, their expertise, our organizational units, collaborations, projects, and outputs. By exploring these connections, you can gain valuable insights into our research ecosystem.</p>

        <p>Are you interested in collaborating with us? We offer support for organizations seeking to innovate for a competitive advantage. This can involve research collaborations, consultations, business incubation, or engaging with our students and utilizing our state-of-the-art facilities. To identify relevant experts or to learn more about our business opportunities, you can utilize our research portal or visit our business pages.</p>
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>


</style>