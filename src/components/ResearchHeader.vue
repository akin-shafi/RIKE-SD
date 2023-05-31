<template>
    <section class="sub-menu container-fluid bg-white border-bottom   border-top" style="">
        <div class="icon-menu">
            <ul>
                <li class="">
                    <router-link to="/profile">
                        <span class="item-name">Profiles</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/researchOutput">
                        <span class="item-name">Research output</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/project">
                        <span class="item-name">Projects</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/theses">
                        <span class="item-name">Student Theses</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/equipment-database">
                        <span class="item-name">Equipment Database</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/research-centers">
                        <span class="item-name">Research centers</span>
                    </router-link>
                </li>
                <!-- <li>
                    <router-link href="#">
                        <span class="item-name"></span>
                    </router-link>
                </li> -->
            </ul>
        </div>

    </section>  
</template>

<style scoped>
.sub-menu{
    z-index: 1000; 
    position:relative
}
.icon-menu ul {
    margin-top: 20px;
}
.icon-menu ul li{
    font-weight: normal;
}
.icon-menu ul li:hover{
    font-weight: bold;
    color: rgb(11, 76, 2);
    border-bottom: 2px solid rgb(11, 76, 2);
}

.icon-menu ul .active{
    font-weight: bold;
    color: rgb(11, 76, 2);
    border-bottom: 2px solid rgb(11, 76, 2);
}
</style>>