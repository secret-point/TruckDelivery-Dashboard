<template>
  <v-card>
    <v-card-title class="card-title">Safety Ratings</v-card-title>
    <v-card-text class="card-content">
      <v-row>
        <v-col cols="2">
          <h6>
            {{ companyInfo.dotNumber }}
            <!-- {{ companyInfo.dotNumber }} - {{ companyInfo.mcNumber }} -->
          </h6>
          <h6>
            {{ companyInfo.legalName }}
          </h6>
        </v-col>
        <v-col cols="10" class="safety-section">
          <v-row>
            <v-col cols="12">
              <v-list-item
                :prepend-avatar="items.total.prependAvatar"
                :title="items.total.title"
                :subtitle="items.total.subtitle"
              >
              </v-list-item>
            </v-col>
          </v-row>
          <v-row class="category-list">
            <v-col cols="6">
              <div class="category-list-container">
                <div
                  v-for="(item, index) in items.categories"
                  :key="index"
                  class="category-list-item"
                >
                  <v-img
                    :src="item.prependAvatar"
                    alt="Image"
                    class="item-image"
                  >
                    <template v-slot:placeholder>
                      <div class="blank-logo"></div>
                    </template>
                  </v-img>
                  <p class="category-item-title">{{ item.title }}</p>
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <v-table class="pa-4">
                <thead>
                  <tr>
                    <th>Severity</th>
                    <th>Category</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Moderate</td>
                    <td>Safety</td>
                    <td>Carrier has BASIC alert in one category.</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Safety',
  data() {
    return {
      items: {
        total: {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Overall assessment using checklist',
          subtitle: 'Moderate',
        },
        categories: [
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/7.jpg',
            title: 'Authority',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Insurance',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Safety/CSA-e',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Operations',
          },
          {
            prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Other',
          },
        ],
      },
    };
  },
  computed: {
    companyInfo() {
      return this.$store.state.fmcsaCarrier.selectedFmcsaCarrier;
    },
  },
};
</script>

<style>
.category-list-container {
  display: flex;
  justify-content: space-between;
  padding: 16px;
}

.category-list-item {
  text-align: center;
}

.item-image {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
  margin: auto;
}

.category-item-title {
  margin-top: 10px;
  font-size: 14px;
}

.card-section {
  border-radius: 8px;
  border: 1px solid #3975eb26;
  margin: 16px 0px;
  padding: 16px 0px;
}

.safety-section {
  .v-table > .v-table__wrapper > table {
    border-collapse: collapse;
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td,
  .v-table > .v-table__wrapper > table > tbody > tr > th,
  .v-table > .v-table__wrapper > table > thead > tr > td,
  .v-table > .v-table__wrapper > table > thead > tr > th,
  .v-table > .v-table__wrapper > table > tfoot > tr > td,
  .v-table > .v-table__wrapper > table > tfoot > tr > th {
    padding: 0px;
    height: 30px;
    border: 1px solid #e8e8e8;
    font-size: 14px;
  }

  .v-table > .v-table__wrapper > table > thead > tr > th {
    background-color: #f6f6f6;
  }
}
</style>
