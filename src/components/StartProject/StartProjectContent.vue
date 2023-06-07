<template>
    <div class="container">
        <div class="grid-col-12">
            <h2 class="type-38 cooper-light mb15">
                A RikeSD project cohort does more than raise money. It builds community around your work.
            </h2>
        </div>

        <div class="faq-container my-5">
            <div class="faq-question">
                <!-- <h3>Question 1</h3> -->
                <h3 class="cooper-light type-24">What can I use RikeSD cohort to fund?</h3>
            </div>
            <div class="faq-answer">
                <p>
                    RikeSD Cohort is specifically for creative projects in the following categories: 
                    Art, Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music,
                    Photography, Publishing, Technology, and Theater. Make an album, write a book, 
                    create an immersive theater experience, score a film — you name it. Read more about our project guidelines.
                </p>
            </div>
        </div>
        <div class="faq-container">
            <div class="faq-question">
                <h3 class="cooper-light type-24">
                    Who can I get pledges from?
                </h3>
            </div>
            <div class="faq-answer">
                <p class="">
                    Support always begins with people you know. Friends, 
                    fans, and the communities you’re a part of will likely be some of your earliest supporters, 
                    not to mention your biggest resources for spreading the word about your project.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

.faq-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.faq-question {
    flex-basis: 45%;
}

.faq-answer {
    flex-basis: 45%;
}

h2 {
    margin-top: 0;
}

.grid-container [class*='grid-col-'] {
    vertical-align: top;
    float: left;
    position: relative;
    width: 100%;
    padding-left: 6px;
    padding-right: 6px;
}

.grid-col-12 {
    width: calc(12/12 * 100%) !important;
}

.type-38 {
    font-size: 2.8rem;
    line-height: 3.2rem;
}

.cooper-light {
    font-family: "Cooper Light", Georgia, Times, "Times New Roman", serif;
}
.type-24 {
    font-size: 1.5rem;
    line-height: 3rem;
}
</style>