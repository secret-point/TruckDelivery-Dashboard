<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-expansion-panels elevation-0>
            <!-- Truckpedia Frequently Asked Questions (FAQ) -->
          <v-expansion-panel class="mb-6" elevation-0>
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                What is Truckpedia?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Truckpedia is an innovative shipping platform that facilitates
              connections between carriers and shippers. By functioning as a
              marketplace, it enables carriers to discover shippers and helps
              shippers locate the right carriers to transport their loads,
              forging relationships and efficiencies previously unattainable.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                What makes Truckpedia a better choice than other platforms?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Truckpedia stands out from other platforms as it operates as a
              fully transparent marketplace, directly linking carriers to
              shippers, much like the Airbnb model but applied to the trucking
              industry. Importantly, we are not freight brokers. Truckpedia
              utilizes cutting-edge technology to empower 90% of carriers, who
              historically lacked the necessary tech resources and capacity, to
              form productive relationships with shippers.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                Is Truckpedia trying to replace freight brokers?
            </v-expansion-panel-title>
            <v-expansion-panel-text
              >No, Truckpedia isn't attempting to replace brokers. Instead,
              we're providing an alternative resource for shippers. Importantly,
              Truckpedia is also beneficial to brokers. Due to the real-time
              carrier capacity, double broker, and tracking challenges that
              brokers often face with carriers, we extend our technology to
              brokers as well, enhancing their operations and decision-making
              process.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                What are the fees for using Truckpedia?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Truckpedia is free for shippers. The platform charges a commission
              fee of 3% for each load that is transported using the platform
              from carriers.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                How do I sign up for Truckpedia?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              You can sign up for Truckpedia by visiting our website and filling
              out the registration form. Once you submit the form, our team will
              review your application and get back to you with further
              instructions.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                How does Truckpedia work?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Truckpedia allows shippers to search for available trucks based on
              their location and preferences. Once a carrier is selected for a
              load, they can communicate and arrange for transportation.
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                What are the benefits of using Truckpedia?
            </v-expansion-panel-title>
            <v-expansion-panel-text
              >Truckpedia simplifies the shipping process by connecting carriers
              and shippers in one platform. It saves time and money for both
              parties by eliminating the need for manual searches and
              negotiations. Carriers can share their capacities and rates in our
              marketplace, and shippers can easily find suitable carriers for
              their loads.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
                How does Truckpedia ensure the safety and reliability of carriers and brokers?

            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Truckpedia verifies the identity and insurance of all carriers
              before they can use the platform. We also equip carriers with the
              technology to ensure real-time tracking, communication, and
              sharing documents. We also monitor user activity and have a rating
              system that allows shippers to rate each load based on their
              experiences.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
              How do carriers get paid for transporting a load using Truckpedia?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Truckpedia provides a payment system where shippers can securely
              pay carriers for their services. Once the transportation is
              completed, the shipper releases the payment to carriers. Or if
              carriers need instant pay, Truckpedia offers same-day payment for
              2%.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="mb-6">
            <v-expansion-panel-title expand-icon="mdi-menu-down">
              How do I report a problem with a load or a user on Truckpedia?
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              If you encounter any problems with a load or a user on Truckpedia,
              you can contact our support team through the platform. We will
              investigate the issue and take appropriate actions to resolve it.
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FaqGeneral",
};
</script>

<style>
.v-expansion-panel__shadow {
  display: none;
}
.v-expansion-panel:not(:first-child)::after {
  border-top-style: hidden;
}
button {
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
}

span.v-expansion-panel-title__overlay {
  display: none;
}

.v-expansion-panel-title--active > .v-expansion-panel-title__overlay,
.v-expansion-panel-title[aria-haspopup="menu"][aria-expanded="true"]
  > .v-expansion-panel-title__overlay {
  opacity: 0 !important;
}
.v-expansion-panel--active > .v-expansion-panel-title {
  color: #3975eb;
}
.v-expansion-panel--active > .v-expansion-panel-title,
.v-expansion-panel-text {
  background-color: #3975eb0d;
}
</style>
