<template>
    <v-container>
      <StepsVue v-for="item in content" :countSteps="item.countSteps" :heading="item.heading" :content="item.content" :imgUrl="item.imgUrl" />
    </v-container>
    <HelpSection sectionHeading="Whenever you need a truck," subSectionHeading="We're here to help" :helpContent="helpContent"/>
</template>

<script>

import StepsVue from "./components/Steps.vue"
import HelpSection from "./components/HelpSection.vue";
import stepOne from "../../assets/images/howitworks/carrierStepOne.svg";
import stepTwo from "../../assets/images/howitworks/carrierStepTwo.svg";
import stepThree from "../../assets/images/howitworks/carrierStepThree.svg";
import Icon1 from "../../assets/images/howitworks/compliance.png";
import Icon2 from "../../assets/images/howitworks/technology.png";
import Icon3 from "../../assets/images/howitworks/simplicity.png";


const content = [
  {
    countSteps : "STEP 1",
    heading: "Share your capacities and rates",
    content: "Post your capacities and rates for each lane you service. Let the world know what you can cover! ",
    imgUrl: stepOne
  },
  {
    countSteps : "STEP 2",
    heading: "Connect your ELD/Tracking devices to Truckpedia",
    content: "It's mandatory to provide real-time tracking before you can share your trucks with shippers and brokers.",
    imgUrl: stepTwo
  },
  {
    countSteps : "STEP 3",
    heading: "Accept and move",
    content: `When shippers send a request to book your trucks, you will be notified and see details while providing real-time tracking and communicating directly with shippers until the load is completed.`,
    imgUrl: stepThree
  }
];
const helpContent = [
  {
    imgUrl: Icon1,
    heading : `Transparency`,
    content : `Truckpedia platform is designed primarily for carriers, and then for shippers and brokers.
`
  },
  {
    imgUrl: Icon2,
    heading : `Technology`,
    content : `Truckpedia is the first platform to provide carriers with a suite of advanced tools, making the lives of shippers and brokers easier!`
  },
  {
    imgUrl: Icon3,
    heading : `Simplicity`,
    content : `Being simple is difficult. Our core is simplifying the entire trucking industry with technology for carriers, shippers, and brokers`
  },
]
export default {
  name: "Carrier",
  components: {
    StepsVue,
    HelpSection
},
  data() {
    return {
      content: content,
      helpContent : helpContent
    };
  },
};
</script>
