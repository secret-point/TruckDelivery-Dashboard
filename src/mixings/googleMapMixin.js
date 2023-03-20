export default {
  data () {
    return {
      GMAPS: null
    }
  },

  async created () {
    try {
      const {maps} = await this.$gmapApiPromiseLazy()
      this.GMAPS = maps
    } catch (error) {
      // this.$vs.notify({
      //   color: 'danger',
      //   title: 'Error',
      //   text: error.response.data.message
      // })
    }
  },

  methods: {
    async getGoogleMapDistanceBetween (directionRequest, callback) {
      if (!this.GMAPS) return callback(null, 'ERROR')

      await new this.GMAPS.DirectionsService()
        .route({travelMode: 'DRIVING', ...directionRequest}, async function (response, status) {
          await callback(response, status)
        })
    },

    async getGoogleDistanceBetweenMultipleRoutes (routes = []) {
      let distance = 0

      for (const routeKey in routes) {
        await this.getGoogleMapDistanceBetween(routes[routeKey], async (response) => {
          const directionsData = response.routes[0].legs[0]
          if (!directionsData) return 0

          distance += +directionsData.distance.value
        })
      }

      return distance
    },

    async getGeocoderLatLng (address) {
      const Geocoder = new this.GMAPS.Geocoder()

      return await Geocoder.geocode({address})
    }
  }
}
