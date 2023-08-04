<template>
    <div>
        <v-card flat>
            <v-card-text>
                <v-expansion-panels elevation-0>
                    <v-expansion-panel class="mb-6 " elevation-0>
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            What is Truckpedia?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            What makes Truckpedia a better choice than other platforms?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            Is Truckpedia trying to replace freight brokers?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            How does Truckpedia ensure the safety and reliability of carriers and brokers?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            What are the fees for using Truckpedia?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            How does Truckpedia work?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            How do I sign up for Truckpedia?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            What are the benefits of using Truckpedia?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            How do carriers get paid for transporting a load using Truckpedia?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel class="mb-6">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            How do I report a problem with a load or a user on Truckpedia?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'FaqGeneral',
}
</script>

<style>

.v-expansion-panel__shadow{
    display: none;
}
.v-expansion-panel:not(:first-child)::after{
    border-top-style: hidden;
}
button{
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
}

span.v-expansion-panel-title__overlay{
    display: none;
}

.v-expansion-panel-title--active > .v-expansion-panel-title__overlay, 
.v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true] > 
.v-expansion-panel-title__overlay{
    opacity: 0 !important;
}
.v-expansion-panel--active > .v-expansion-panel-title{
    color: #3975EB;
}
.v-expansion-panel--active > .v-expansion-panel-title,
.v-expansion-panel-text
{
    background-color: #3975EB0D;
}
</style>