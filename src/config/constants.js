export default {
  /*
   * Google Map Autocomplete Options
   */
  googleMapAutoCompleteOptions: { fields: ['geometry', 'formatted_address', 'address_components'] },

  roles: [
    {
      label: 'Carrier',
      value: 'carrier'
    },
    {
      label: 'Broker',
      value: 'ba'
    },
    {
      label: 'Shipper',
      value: 'sa'
    }
  ]
}
