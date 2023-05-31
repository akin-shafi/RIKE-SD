<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 border-end p-3">
                <h5>Filters for Profiles</h5>
                <div>Sustainable Development Goals</div>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" name="sdg" value="SDG 3">
                            SDG 3 - Good Health and Well-being (772)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="sdg" value="SDG 13">
                            SDG 13 - Climate Action (316)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="sdg" value="SDG 7">
                            SDG 7 - Affordable and Clean Energy (307)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="sdg" value="SDG 16">
                            SDG 16 - Peace, Justice and Strong Institutions (272)
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="sdg" value="SDG 12">
                            SDG 12 - Responsible Consumption and Production (245)
                        </label>
                    </li>
                </ul>
            </div>

            <div class="col-lg-9 p-3">
                <div class="pb-2"><small>1 - 50 out of 3,314 results</small> </div>
                <div class="profile-card-container">
                    <div class="profile-card">
                        <div class="profile-picture">
                            <img src="https://researchportal.bath.ac.uk/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png" alt="Profile Picture">
                        </div>
                        <div class="profile-details">
                            <h3>Andrea Abbas</h3>
                            <p>Professor of the Sociology of Higher Education</p>
                            <p>Email: A.Abbas@bath.ac.uk</p>
                            <p>Department of Education - Professor</p>
                            <p>Research Centers: Centre for Research in Education in Asia (CREA), Centre for Qualitative Research</p>
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="profile-picture">
                            <img src="https://researchportal.bath.ac.uk/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png" alt="Profile Picture">
                        </div>
                        <div class="profile-details">
                            <h3>Taghried Abdelmagid</h3>
                            <p>Professor of the Sociology of Higher Education</p>
                            <p>Email: T.I.M.Abdelmagid@bath.ac.uk</p>
                            <p>Department of Architecture & Civil Engineering - Postgraduate Research Student, Lecturer</p>
                            <p></p>
                        </div>
                    </div>
                    <div class="profile-card">
                        <div class="profile-picture">
                            <img src="https://researchportal.bath.ac.uk/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png" alt="Profile Picture">
                        </div>
                        <div class="profile-details">
                            <h3>Andrea Abbas</h3>
                            <p>Professor of the Sociology of Higher Education</p>
                            <p>Email: A.Abbas@bath.ac.uk</p>
                            <p>Department: Department of Education - Professor</p>
                            <p>Research Centers: Centre for Research in Education in Asia (CREA), Centre for Qualitative Research</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
ul li{list-style: none;}

.profile-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

.profile-card {
    flex-basis: calc(33.33% - 20px);
    margin-bottom: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    /* align-items: center; */
    /* background-color: #f7f7f7; */
}

.profile-picture {
    flex-basis: 30%;
    padding: 5px;
}

.profile-picture img {
    /* width: 100%; */
    height: auto;
    padding: 2px;
    width: 50px;
    float: left;
    margin-right: 15px;
    border: 1px solid #025f21
}

.profile-details {
    flex-basis: 70%;
    padding: 5px;
}

.profile-details h3 {
    margin-top: 0;
    font-size: 1.3125rem;
    margin-bottom: 5px;
}
.profile-details p {
    font-size: .875rem;
}

@media (max-width: 767px) {
    .profile-card {
        flex-basis: 100%;
    }
}
</style>