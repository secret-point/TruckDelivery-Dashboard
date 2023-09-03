<template>
  <div class="page-container">
    <v-container>
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-btn class="custom-btn text-none" @click="goBack"
                >Go back</v-btn
              >
              <v-btn class="custom-btn text-none">Claim your page</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="d-flex">
                <div class="flex-1-0">
                  <v-img
                    :src="companyDetail.logo"
                    height="143"
                    aspect-ratio="1/1"
                    width="143"
                  >
                    <template v-slot:placeholder>
                      <div class="blank-logo"></div>
                    </template>
                  </v-img>
                </div>
                <div class="flex-1-0 pa-4">
                  <h2>{{ companyDetail.legalName }}</h2>
                  <p>
                    Carrier &nbsp;&nbsp;&nbsp; DOT:
                    {{ companyDetail.dotNumber }} &nbsp;&nbsp;&nbsp; MC:
                    {{ companyDetail.mcNumber }}
                  </p>
                  <p>
                    <v-icon
                      icon="mdi-map-marker"
                      size="xs"
                      color="info"
                    ></v-icon>
                    {{ companyDetail.phyStreet }}, {{ companyDetail.phyCity }},
                    {{ companyDetail.phyState }} {{ companyDetail.phyZip }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- <v-row>
            <span
              v-for="(tabName, componentName) in componentNames"
              :key="componentName"
              @click="showComponent(componentName)"
              :class="[
                'custom-nav-item',
                { active: activeComponent === componentName },
              ]"
            >
              {{ tabName }}</span
            >
          </v-row> -->
        </v-card-text>
      </v-card>
      <CompanyOverview class="card-section" ref="overviewComponent" />
      <CarrierProfile class="card-section" />
      <!-- <Reviews class="card-section" ref="reviewComponent" />
      <Safety class="card-section safety-section" ref="safetyComponent" /> -->
      <Authority class="card-section authority-section" />
      <InspectionAndCrash class="card-section inspection-section" />
      <Insurance class="card-section insurance-section" />
      <Operations class="card-section operations-section" />
      <DriversAndEquipments class="card-section drivers-section" />
    </v-container>
  </div>
</template>

<script>
import CompanyOverview from './components/CompanyOverview.vue';
import CarrierProfile from './components/CarrierProfile.vue';
import Reviews from './components/Reviews.vue';
import Safety from './components/Safety.vue';
import Authority from './components/Authority.vue';
import InspectionAndCrash from './components/InspectionAndCrash.vue';
import Insurance from './components/Insurance.vue';
import Operations from './components/Operations.vue';
import DriversAndEquipments from './components/DriversAndEquipments.vue';

export default {
  components: {
    CompanyOverview,
    CarrierProfile,
    Reviews,
    Safety,
    Authority,
    InspectionAndCrash,
    Insurance,
    Operations,
    DriversAndEquipments,
  },
  props: {
    company: Object,
  },
  data() {
    return {
      activeComponent: 'Overview', // Set the default component
      companyDetail: {},
    };
  },

  async created() {
    await this.fetchCompanyDetail();
  },

  methods: {
    showComponent(componentName) {
      this.activeComponent = componentName;

      if (componentName === 'Overview') {
        const overviewComponent = this.$refs.overviewComponent;
        if (overviewComponent) {
          overviewComponent.$el.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (componentName === 'Reviews') {
        const reviewComponent = this.$refs.reviewComponent;
        if (reviewComponent) {
          reviewComponent.$el.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (componentName === 'SafetyRatings') {
        const safetyComponent = this.$refs.safetyComponent;
        if (safetyComponent) {
          safetyComponent.$el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    getCompanyDetailLink(companyDetail) {
      return `https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&query_string=${companyDetail.dotNumber}`;
    },
    async fetchCompanyDetail() {
      const query = {
        fmcsaCarrierId: this.companyInfo.fmcsaCarrierId,
      };
      this.companyDetail = await this.$store.dispatch(
        'fmcsaCarrier/getCarrierDetail',
        query
      );
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    companyInfo() {
      return this.$route.query;
    },
    componentNames() {
      return {
        Overview: 'Overview',
        Reviews: 'Reviews',
        SafetyRatings: 'Safety Ratings',
      };
    },
  },
};
</script>

<style>
.page-container {
  background-color: #3975eb0d;
  color: #181818;
}

.page-content {
  margin-top: 64px;
}

.blank-logo {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
}

.custom-nav-item {
  padding: 10px 0px;
  margin: 0px 16px;
  font-size: 24px;
  cursor: pointer;
}

.custom-nav-item.active {
  color: #3975eb;
  border-bottom: 4px solid #3975eb;
}

.custom-btn {
  margin-right: 20px;
  background-color: #7367f0;
}

.card-section {
  margin-top: 32px;
}
</style>
