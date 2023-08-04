<template>
  <div>
    <v-container>
      <StepsVue v-for="item in content" :countSteps="item.countSteps" :heading="item.heading" :content="item.content" :imgUrl="item.imgUrl" />
    </v-container>
    <HelpSection sectionHeading="Your preferred carriers are not on Truckpedia? " sectionHeadingNew="Invite them to simplify your operations!" :helpContent="helpContent"/>
  </div>
</template>

<script>
import HelpSection from "./components/HelpSection.vue";
import StepsVue from "./components/Steps.vue"
import stepOne from "../../assets/images/howitworks/shipperStepOne.svg";
import stepTwo from "../../assets/images/howitworks/brokerStepTwo.svg";
import stepThree from "../../assets/images/howitworks/brokerStepThree.svg";
import Icon1 from "../../assets/images/howitworks/compliance.png";
import Icon2 from "../../assets/images/howitworks/technology.png";
import Icon3 from "../../assets/images/howitworks/simplicity.png";
const content = [
  {
    countSteps : "STEP 1",
    heading: "Real-time access to the capacities and rates of your preferred carriers.",
    content: "Worked with 50,000 preferred carriers only once and then forgot about them? That won't happen on Truckpedia. You can have real-time access to any carrier's capacities and rates.",
    imgUrl: stepOne
  },
  {
    countSteps : "STEP 2",
    heading: "Negotiate and book your trucks",
    content: "You can chat directly with carriers on Truckpedia. Finalize your rates and tender rate confirmation directly to them through Truckpedia.",
    imgUrl: stepTwo
  },
  {
    countSteps : "STEP 3",
    heading: "Receive geo-fencing updates and instant POD upon delivery",
    content: `We don't just allow any carrier to join Truckpedia. Their ELD and tracking devices must be linked before they can access our platform. You will be notified when they arrive at and depart from shippers and receivers. We also provide a driver app that sends scanned Proof of Delivery (POD) to you instantly.`,
    imgUrl: stepThree
  }
];
const helpContent = [
  {
    imgUrl: Icon1,
    heading : `Eliminate double brokers`,
    content : `We don't just allow any carrier to join Truckpedia. Every truck must have 24/7 tracking visibility to get approved. This way, you have guaranteed tracking and geo-fencing capabilities for every single load from the assigned carrier.`
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
  name: "Brokers",
  components: {
    HelpSection,
    StepsVue
  },
  data() {
    return {
      content: content,
      helpContent : helpContent
    };
  },
};
</script>