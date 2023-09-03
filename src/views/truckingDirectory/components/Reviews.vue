<template>
  <v-card>
    <v-card-title class="card-title">Reviews</v-card-title>
    <v-card-text class="card-content">
      <v-row>
        <v-col cols="12">
          <p></p>
        </v-col>
      </v-row>
      <v-list>
        <template v-for="(item, index) in items" :key="item.title">
          <div class="review-section">
            <v-list-item
              :prepend-avatar="item.prependAvatar"
              :title="item.title"
            >
              <template v-slot:title>
                <p>
                  <span>
                    {{ item.title }}
                  </span>
                  <span class="review-posted-date">
                    Posted on {{ item.posted_date }}
                  </span>
                </p>
              </template>
              <template v-slot:subtitle>
                <v-rating
                  :model-value="item.rating"
                  readonly
                  half-increments
                  density="compact"
                />
              </template>
            </v-list-item>
            <v-list-item>
              {{ item.content }}
            </v-list-item>
          </div>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Reviews',
  data() {
    return {
      items: [
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'John Smith',
          rating: 3,
          posted_date: 'July 22, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisi eu libero fermentum sollicitudin. Donec vel eleifend dolor, eget semper urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'John Smith',
          rating: 3.5,
          posted_date: 'July 22, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisi eu libero fermentum sollicitudin. Donec vel eleifend dolor, eget semper urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'John Smith',
          rating: 4.5,
          posted_date: 'July 22, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisi eu libero fermentum sollicitudin. Donec vel eleifend dolor, eget semper urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'John Smith',
          rating: 3.5,
          posted_date: 'July 22, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisi eu libero fermentum sollicitudin. Donec vel eleifend dolor, eget semper urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'John Smith',
          rating: 3.2,
          posted_date: 'July 22, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisi eu libero fermentum sollicitudin. Donec vel eleifend dolor, eget semper urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        },
      ],
    };
  },
};
</script>

<style>
.review-section {
  border-radius: 8px;
  border: 1px solid #3975eb26;
  margin: 16px 0px;
  padding: 16px 0px;

  .review-posted-date {
    color: #bcbcbc;
    float: right;
  }
}
</style>
