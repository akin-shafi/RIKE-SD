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
.home-menu .search-backdrop{
    background: rgba(0,0,0,0.6);
    color: #fff;
    border-radius: 10px;
}

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

.header {
  text-align: center;
}

.title {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.text-center {
  text-align: center;
}

.app-my-2 {
  margin-top: 8px;
  margin-bottom: 8px;
}

/* Responsive Styles */

@media (max-width: 600px) {
  .title {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .app-my-2 {
    margin-top: 4px;
    margin-bottom: 4px;
  }
}
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

.search-backdrop{
  background: rgba(0,0,0,0.6);
  color: #fff;
  border-radius: 10px
}
.search-box {
    width: 350px;
    position: relative;
    display: flex;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
  }
  
  .search-input {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 15px 45px 15px 15px;
    background-color: #eaeaeb;
    color: #6c6c6c;
    border-radius: 6px;
    border:none;
    transition: all .4s;
  }
  
  .search-input:focus {
    border:none;
    outline:none;
    box-shadow: 0 1px 12px #b8c6db;
    -moz-box-shadow: 0 1px 12px #b8c6db;
    -webkit-box-shadow: 0 1px 12px #b8c6db;
  }
  
  .search-btn {
    background-color: transparent;
    font-size: 18px;
    padding: 6px 9px;
    margin-left:-45px;
    border:none;
    color: #6c6c6c;
    transition: all .4s;
    z-index: 10;
  }
  
  .search-btn:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: black;
  }
  
  .search-btn:focus {
    outline:none;
    color:black;
  }
  
  /* Responsive Styles */

@media (max-width: 600px) {
  .search-box {
    width: 100%;
    max-width: 350px;
  }
}
  .icon-menu {
    text-align: center;
  }
  
  .icon-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  .icon-menu li {
    margin: 0 30px;
  }
  
  .icon-menu a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #000;
  }
  
  .icon-menu .icon {
      color: #8a8a8a;
      display: block;
      font-size: 2.0625rem;
      width: 33px;
      margin: 0 auto;
      position: relative;
  }
  .icon-menu .icon:hover {
      color:#0c4700
  }
  .icon-menu .badge {
    /* background-color: red; */
    color: #fff;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 12px;
    position: relative;
    top: -15px;
    left: 20px;
    background: #555;
      padding: 3px 5px 1px 5px;
      display: inline-block;
      border-radius: 3px;
      font-size: .8125rem;
      font-style: normal;
  }
  
  
  .icon-menu .item-name {
    font-size: 14px;
    margin-top: 4px;
  }
  
  
  /* Responsive Styles */
  
  @media (max-width: 600px) {
    .icon-menu ul {
      flex-wrap: wrap;
    }
    
    .icon-menu li {
      margin: 10px;
    }
    
    .icon-menu .badge {
      font-size: 10px;
      top: -10px;
      left: 8px;
    }
    
    .icon-menu .item-name {
      font-size: 12px;
      margin-top: 2px;
    }
  }

</style>