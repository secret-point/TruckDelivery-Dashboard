<template>
  <div class="truck-list">
    <div class="truck-header">
      <p class="font-bold">Trucks we found</p>
      <span class="total-result">143,934 results</span>
    </div>
    <div class="truck-list-table p-5">
      <table>
        <tr>
          <th v-for="(column, i) in truckList.header" :key="i">
            {{ column.name }}
          </th>
          <th></th>
        </tr>
        <tr v-for="(field, i) in truckList.data" :key="i">
          <td v-for="(col, i) in truckList.header" :key="i">
            <div class="td-description">
              <div
                v-if="col.column === 'carrierName'"
                class="flex items-center"
              >
                <img :src="field[col.column].logo" alt="logo" class="logo" />
                <div class="flex flex-col ml-3">
                  <span class="font-medium">{{
                    field[col.column].companyName
                  }}</span>
                  <!-- <star-rating
                    v-model="rating"
                    :starSize="15"
                    :increment="0.5"
                  ></star-rating> -->
                </div>
              </div>
              <span
                v-else
                :class="{ 'color-primary font-bold': col.column === 'rate' }"
                >{{ field[col.column] }}</span
              >
            </div>
          </td>
          <!-- <td><vs-button color="#1877f1" type="filled">Reserve</vs-button></td> -->
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "TruckList",
  components: {
    StarRating,
  },
  data() {
    return {
      rating: null,
      truckList: {
        header: [
          { name: "Carrier Name", column: "carrierName" },
          { name: "Pick Up Date", column: "pickupDate" },
          { name: "Delivery", column: "delivery" },
          { name: "Total Miles", column: "miles" },
          { name: "Max Weight", column: "maxWeight" },
          { name: "Truck Type", column: "truckType" },
          { name: "Rate", column: "rate" },
        ],
        data: [
          {
            carrierName: {
              companyName: "Spot Edge Trucking",
              logo: "https://ezpapel-test.s3.us-west-2.amazonaws.com/public/company/c66a2cf0-30c7-46d8-9d85-7b94f43a14fd.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYLC5NVY2AJ4CAD6Y%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T142745Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=d82d308aa03e2088a24090265a7597619c265e77764c7e7a59967ccf7bc2bbc4",
            },
            pickupDate: "Dec 9, 08:08",
            delivery: "Dec 12, 12:08",
            miles: "737",
            maxWeight: "Sample",
            truckType: "Van",
            rate: "$3210",
          },
          {
            carrierName: {
              companyName: "Spot Edge Trucking",
              logo: "https://ezpapel-test.s3.us-west-2.amazonaws.com/public/company/c66a2cf0-30c7-46d8-9d85-7b94f43a14fd.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYLC5NVY2AJ4CAD6Y%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T142745Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=d82d308aa03e2088a24090265a7597619c265e77764c7e7a59967ccf7bc2bbc4",
            },
            pickupDate: "Dec 9, 08:08",
            delivery: "Dec 12, 12:08",
            miles: "737",
            maxWeight: "Sample",
            truckType: "Van",
            rate: "$3210",
          },
          {
            carrierName: {
              companyName: "Spot Edge Trucking",
              logo: "https://ezpapel-test.s3.us-west-2.amazonaws.com/public/company/c66a2cf0-30c7-46d8-9d85-7b94f43a14fd.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYLC5NVY2AJ4CAD6Y%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T142745Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=d82d308aa03e2088a24090265a7597619c265e77764c7e7a59967ccf7bc2bbc4",
            },
            pickupDate: "Dec 9, 08:08",
            delivery: "Dec 12, 12:08",
            miles: "737",
            maxWeight: "Sample",
            truckType: "Van",
            rate: "$3210",
          },
          {
            carrierName: {
              companyName: "Spot Edge Trucking",
              logo: "https://ezpapel-test.s3.us-west-2.amazonaws.com/public/company/c66a2cf0-30c7-46d8-9d85-7b94f43a14fd.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYLC5NVY2AJ4CAD6Y%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T142745Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=d82d308aa03e2088a24090265a7597619c265e77764c7e7a59967ccf7bc2bbc4",
            },
            pickupDate: "Dec 9, 08:08",
            delivery: "Dec 12, 12:08",
            miles: "737",
            maxWeight: "Sample",
            truckType: "Van",
            rate: "$3210",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.truck-list {
  margin-top: 30px;
  .truck-header {
    background: #f9f8f8;
    padding: 20px 30px;
    .total-result {
      font-size: 12px;
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
          font-size: 13px;
        }
        td {
          padding: 6px 10px;
          padding-top: 5px;
          padding-bottom: 3px;
          border-bottom: 3px solid #f9f8f8;
          text-align: left;
          font-size: 0.85rem;
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
