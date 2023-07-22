export default {
  /*
   * Google Map Autocomplete Options
   */
  googleMapAutoCompleteOptions: {
    fields: ["geometry", "formatted_address", "address_components"],
  },

  roles: [
    {
      label: "Carrier",
      value: "carrier",
    },
    {
      label: "Broker",
      value: "broker", // TODO: must change
    },
    {
      label: "Shipper",
      value: "shipper", // TODO: must change
    },
  ],
  allowedRegisterRoles: [
    {
      label: "Broker",
      value: "broker", // TODO: must change
    },
    {
      label: "Shipper",
      value: "shipper", // TODO: must change
    },
  ],
};
