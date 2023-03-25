<template>
  <div>
    <div v-if="icon === 'van'">
      <svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 7.13462V12H1V1H11.8M19 7.13462L13.825 1H11.8M19 7.13462H11.8V1"
          stroke-width="0.8"
        />
        <circle
          cx="5.5"
          cy="12.5"
          r="2.1"
          stroke-width="0.8"
        />
        <circle
          cx="14.5"
          cy="12.5"
          r="2.1"
          stroke-width="0.8"
        />
      </svg>
    </div>
    <div v-if="icon === 'reefer'">
      <svg
        width="19"
        height="15"
        viewBox="0 0 19 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.4 3.77049V11.4426M7.8 3.77049V11.4426M11.2 3.77049V11.4426M14.8125 3.77049V11.4426M1 1V14H18V1H1Z"
          stroke-width="0.8"
        />
      </svg>
    </div>
    <div v-if="icon === 'flatbed'">
      <svg
        width="26"
        height="15"
        viewBox="0 0 26 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.75 5.76923L20.4578 1.44231M24.75 5.76923V9.80769M24.75 5.76923H20.4578V1.44231M20.4578 1.44231H17.5964M17.5964 1.44231V0M17.5964 1.44231V8.65385M17.5964 8.65385H1L1.57229 11.25H24.75V9.80769M17.5964 8.65385H19.3133L20.4578 9.80769H24.75"
          stroke-width="0.8"
        />
        <circle cx="4.75" cy="12.5" r="2.1" stroke-width="0.8" />
        <circle cx="18.5" cy="12.5" r="2.1" stroke-width="0.8" />
      </svg>
    </div>
    <div v-if="icon === 'step_deck'">
      <svg
        width="25"
        height="14"
        viewBox="0 0 25 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5854 0V2.82609M15.5854 10.7391V2.82609M15.5854 2.82609H19.5122M19.5122 2.82609L24 7.63043M19.5122 2.82609V7.63043H24M24 7.63043V11.8696L23.1585 13H17.5488M1 8.76087V10.7391H12.2195V8.19565H15.5854V5.65217H9.97561V8.19565H1V8.76087Z"
          stroke-width="0.8"
        />
      </svg>
    </div>
    <div v-if="icon === 'power_only'">
      <svg
        width="25"
        height="16"
        viewBox="0 0 25 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.1636 12.4L16.5 10.9909L2.12727 11.2727V10.4273L1.28182 10.1455L1 9.01818H16.2182L20.1636 10.1455V12.4ZM20.1636 12.4V13.5273H22.7L24.3909 11.8364V6.2M15.3727 8.73636V1.12727M15.3727 0V1.12727M15.3727 1.12727H19.8818M19.8818 1.12727L24.3909 6.2M19.8818 1.12727V6.2H24.3909"
          stroke-width="0.8"
        />
        <circle
          cx="4.09996"
          cy="12.9636"
          r="2.13636"
          stroke-width="0.8"
        />
        <circle
          cx="9.73631"
          cy="12.9636"
          r="2.13636"
          stroke-width="0.8"
        />
        <circle
          cx="17.6273"
          cy="12.9636"
          r="2.13636"
          stroke-width="0.8"
        />
      </svg>
    </div>
    <div v-if="icon === 'conestoga'">
      <svg
        width="25"
        height="14"
        viewBox="0 0 25 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.425 10.5H1V8.28947H1.825M19.425 10.5V9.11842L18.325 8.28947H16.675M19.425 10.5H23.275L24.1 9.11842V5.80263M1.825 8.28947H4.025M1.825 8.28947V1.65789M1.825 0.828947V1.65789M4.025 8.28947V0.828947M4.025 8.28947H6.5M6.5 8.28947V0.828947M6.5 8.28947H8.975M8.975 8.28947V0.828947M8.975 8.28947H11.175M11.175 8.28947V0.828947M11.175 8.28947H13.375M13.375 8.28947V1.65789M13.375 8.28947H16.675M13.375 0.828947V1.65789M1.825 1.65789H13.375M16.675 0V1.65789M16.675 8.28947V1.65789M16.675 1.65789H19.975M19.975 1.65789L24.1 5.80263M19.975 1.65789V5.80263H24.1"
          stroke-width="0.8"
        />
        <circle cx="4.85002" cy="11.55" r="2.05" stroke-width="0.8" />
        <circle cx="17.45" cy="11.55" r="2.05" stroke-width="0.8" />
      </svg>
    </div>
    <div v-if="icon === 'box_truck'">
      <svg
        width="23"
        height="16"
        viewBox="0 0 23 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.037 4.62963V13.1852H1V1H16.037V4.62963ZM16.037 4.62963H18.8889M18.8889 4.62963L22 8.25926M18.8889 4.62963V8.25926H22M22 8.25926V12.1481L21.2222 13.1852H18.3704"
          stroke-width="0.8"
        />
        <circle cx="16.5556" cy="12.926" r="1.93333" stroke-width="0.8" />
        <circle cx="4.11117" cy="12.926" r="1.93333" stroke-width="0.8" />
      </svg>
    </div>
    <div v-if="icon === 'sprinter'">
      <svg
        width="21"
        height="14"
        viewBox="0 0 21 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1296 5.33333H19.7778L20.5 6.2963V8.22222M17.1296 5.33333L14.963 1M17.1296 5.33333H14.963V1M14.963 1H1V8.22222M1 8.22222V10.8704H20.5V8.22222M1 8.22222H20.5"
          stroke-width="0.8"
        />
        <circle cx="16.4074" cy="11.1111" r="1.76667" stroke-width="0.8" />
        <circle cx="4.85185" cy="11.1111" r="1.76667" stroke-width="0.8" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TruckTypeIcons",
  props: {
    icon: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
svg {
  stroke: #626262;
  /* fill: #626262; */
}
.active-type {
  svg {
    stroke: #fff !important;
    /* fill: #fff!important; */
  }
}
</style>
