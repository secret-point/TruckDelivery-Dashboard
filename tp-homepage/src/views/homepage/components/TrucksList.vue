<template>
  <div class="truck-list" v-if="truckList.data.length">
    <div class="truck-header">
      <p class="font-bold">Trucks we found</p>
      <span class="total-result">{{ this.truckList.data.length }} results</span>
    </div>
    <div class="truck-list-table p-5">
      <table>
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
                  <img :src="field[col.column].logoUrl" alt="logo" class="logo" />
                  <div class="flex flex-col ml-3">
                    <span class="font-medium">{{ field[col.column].name }}</span>
                    <!-- <star-rating
                      v-model="rating"
                      :starSize="15"
                      :increment="0.5" 
                    ></star-rating> -->
                  </div>
                </div>
                <span v-else :class="{ 'font-bold': col.column === 'rate' }">{{
                  field[col.column]
                }}</span>
              </div>
            </td>
            <td><v-btn color="primary" @click="goToReserve"> Reserve </v-btn></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'TruckList',
  components: {
    StarRating
  },
  props: {
    availableTrucks: {
      default: []
    }
  },
  watch: {
    availableTrucks: {
      handler(val) {
        this.truckList.data = val.availableTrucks
      }
    }
  },
  data() {
    return {
      rating: null,
      truckList: {
        header: [
          { name: 'Carrier Name', column: 'company' },
          { name: 'Max Weight', column: 'maxWeight' },
          { name: 'Rate', column: 'rate' }
        ],
        data: []
      }
    }
  },
  methods: {
    goToReserve(){
      this.$router.push('reserve')
    }
  }
}
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
    table {
      border-spacing: 0px;
      width: 100%;
      tr {
        th {
          font-weight: 600;
          color: #626262;
          font-size: 0.9rem;
          text-align: left;
          padding: 20px;
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
            padding-top: 1.25rem;
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
