<template>
  <div>
    <div id="howWorked">
      <v-row class="align-center">
        <v-col cols="12" md="6" sm="12">
          <div class="left">
            <p class="steps">{{ countSteps }}</p>
            <h2 class="heading">{{ heading }}</h2>
            <p class="description">
              {{ content }}
            </p>
            <p class="description mt-15">
              {{ contentSecond }}
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <div class="d-flex align-center justify-center img-frame">
            <img :src="imgUrl" style="width: 100%;" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
<script>


export default {
  name: "Steps",
  props: {
    countSteps: {
      type : String,
      default : ''
    },
    heading: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    contentSecond: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
#howWorked {
  margin-bottom: 100px;

  .right {
    border: 1px solid #D9D9D9;
    display: flex;
    min-height: 166px;
    padding: 0px 39px 0px 38px;
    justify-content: center;
    align-items: center;
  }

  .left {
    .steps {
      color: var(--primary-blue, #3975EB);
      font-weight: 400;
      line-height: 100%;
      font-size: 1rem;
    }

    .heading {
      color: var(--primary-blue, #3975EB);
      font-weight: 600;
      line-height: 140%;
      padding-bottom: 32px;
      font-size: 1.7rem;
    }

    .description {
      color: #1E1E1E;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 160%;

    }
  }
}

.img-frame {
  width: 100%;
  height: 100%;
}

@media (min-width: 992px) {
  .heading {
    max-width: 85%;
  }
}

@media (min-width : 1440px) {
  .description {
    max-width: 60%;
  }
  .heading {
    max-width: 55%;
  }
}
</style>
  