<template>
  <div class="truck-list container" v-if="truckList.data.length">
    <div class="truck-header">
      <!-- <p class="font-bold">Trucks we found {{ this.truckList.data.length }} results</p> -->
      <!-- <span class="total-result">{{ this.truckList.data.length }} results</span> -->
      <div class="container mx-auto">
        <p class="font-bold text-center">
        <b>{{ truckList.data.length }}</b> carriers found for route
        <b>{{ origin.city }}</b
        >, <b>{{ origin.state }}</b> to <b>{{ destination.city }}</b
        >, <b>{{ destination.state }}</b
        >, pickup dates from <b>{{ startDate }}</b> to <b>{{ endDate }}</b
        >, <b>{{ distance }}</b> miles.
      </p>
      </div>
    </div>
    <div class="truck-list-table p-5">
      <table class="container mx-auto">
        <thead>
          <tr>
            <th v-for="(column, i) in truckList.header" :key="i">
              {{ column.name }}
            </th>
            <!-- <th></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(field, i) in truckList.data" :key="i">
            <td v-for="(col, i) in truckList.header" :key="i">
              <div class="td-description">
                <div v-if="col.column === 'company'" class="flex items-center">
                  <v-rating
                    v-model="favRating"
                    density="compact"
                    color="#FBBC05"
                    readonly
                    length="1"
                    size="small"
                  ></v-rating>
                  <img
                    v-if="field[col.column].logoUrl"
                    :src="field[col.column].logoUrl"
                    alt="logo"
                    class="logo ml-4"
                  />
                  <div class="flex flex-column ml-3 items-center">
                    <p style="position: relative; bottom: -6px"
                      ><span class="font-weight-bold text-uppercase">{{
                        field[col.column].name
                      }}</span></p
                    >
                    <v-rating
                      v-model="rating"
                      class="mr-3"
                      density="compact"
                      color="#FBBC05"
                      readonly
                      size="small"
                    ></v-rating>
                    <!-- <star-rating
                      v-model="rating"
                      :starSize="15"
                      :increment="0.5" 
                    ></star-rating> -->
                  </div>
                </div>
                <span
                  style="color: #1877f2"
                  v-else
                  :class="{ 'font-bold': col.column === 'rate' }"
                  >{{ toFixed(field[col.column]) }}</span>
              </div>
            </td>
            <td
               class="float-right"><v-btn
                color="primary"
                class="text-capitalize"
                @click="goToReserve(field)"
              >
                Reserve
              </v-btn></td
            >
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { calculateDistance, toFixed } from "@/helpers/helper";
export default {
  name: "TruckList",
  components: {
    StarRating,
  },
  props: {
    availableTrucks: {
      default: [],
    },
    destination: {
      type: Object,
    },
    origin: {
      type: Object,
    },
    date: {
      type: String,
    },
  },
  watch: {
    availableTrucks: {
      handler(val) {
        this.truckList.data = val.availableTrucks;
        this.distance = calculateDistance(
          this.origin.lat,
          this.origin.lng,
          this.destination.lat,
          this.destination.lng
        );
        this.startDate = this.date.split("to")[0];
        this.endDate = this.date.split("to")[1]
          ? this.date.split("to")[1]
          : this.date.split("to")[0];
      },
    },
  },
  data() {
    return {
      rating: 5,
      favRating: 0,
      truckList: {
        header: [
          { name: "Carrier Name", column: "company" },
          { name: "Max Weight", column: "maxWeight" },
          { name: "Rate", column: "rate" },
        ],
        data: [],
        distance: "",
        startDate: null,
        endDate: null,
      },
    };
  },
  methods: {
    toFixed(value) {
      if(typeof value === "number"){
       return toFixed(value, 2);
      }
      return value
    },
    // id:undefined,
    // estimatedPrice:null,
    // deliveryType:'',
    // maxWeight:null,
    // rate:null,
    // logoUrl:'',
    // name:'',
    // distance:null,
    // dates:null
    goToReserve(truckDetails) {
      const token = localStorage.getItem("access_token");
      if (token) {
        const {company,maxWeight,rate} = truckDetails
        const payload = {
          ...company,maxWeight,rate,date:this.date,distance:this.distance
        }
        this.$store.dispatch("truck/setTruckDetails", payload);
        this.$router.push("reserve");
      } else {
        this.$router.push({name: 'login'});
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.truck-list {
  margin-top: 30px;
  .truck-header {
    background: #f9f8f8;
    padding: 20px 30px;
    .total-result {
      font-size: 1rem;
    }
  }
  .color-primary {
    color: #1877f1;
  }
  .truck-list-table {
    width: 100%;
    padding:0 30px;
    table {
      border-spacing: 0px;
      width: 100%;
      tr {
        th {
          font-weight: 00;
          color: #626262;
          font-size: 0.9rem;
          text-align: left;
          padding: 8px;
          &:first-child {
            padding-left: 56px;
          }
        }
        td {
          padding: 6px 10px;
          padding-top: 5px;
          padding-bottom: 3px;
          border-bottom: 3px solid #f9f8f8;
          text-align: left;
          font-size: 0.9rem;
          line-height: 2;
          color: #626262;
          .td-description {
            padding-top: 0.25rem;
            padding-bottom: 1.25rem;
          }
          .logo {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
}
</style>
