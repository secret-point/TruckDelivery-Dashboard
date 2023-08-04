<template>
    <div>
        <div class="bg">
            <v-container>
                <div class="heading mb-12">
                    <h2>{{ sectionHeading }}</h2>
                    <h2>{{ sectionHeadingNew }}</h2>
                    <h3>{{ subSectionHeading }}</h3>
                </div>
                <v-row justify="space-between">
                    <v-col cols="12" md="4" lg="3" v-for="item in helpContent">
                        <div class="cards">
                            <img :src="item.imgUrl" alt="" style="object-fit: contain;" />
                            <h2>{{ item.heading }}</h2>
                            <p>{{ item.content }}</p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HelpSection',
    props: {
        sectionHeading:{
            type : String,
            default : '',
        },
        sectionHeadingNew:{
            type : String,
            default : '',
        },
        subSectionHeading: {
            type : String,
            default: '',
        },
        helpContent:{
            type : Array,
            default : [],
        },
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">
.bg {
    background-color: #f5f8fe;
    padding: 104px 40px;
        .heading {
            padding-bottom: 50px;

            h2 {
                font-size: 2rem;
            }

            h3 {
                font-size: 2rem;
                font-weight: 400;
            }
        }

        .cards {
            h2 {
                margin-bottom: 0px;
                padding: 15px 0px;
            }
        }
}

@media (max-width : 991px) {
    .bg {
        padding: 25px 0px;
        margin-bottom: 100px;

        .container {
            padding: 0px 25px;
        }

    }
}

@media (max-width : 568px) {
    .bg {
        padding: 25px 0px;
        margin-bottom: 100px;

        .container {
            padding: 0px 25px;
        }

    }
}</style>