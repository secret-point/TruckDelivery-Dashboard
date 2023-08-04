<template>
    <v-container>
      <StepsVue v-for="item in content" :countSteps="item.countSteps" :heading="item.heading" :content="item.content" :contentSecond="item.contentSecond" :imgUrl="item.imgUrl" />
    </v-container>
    <HelpSection sectionHeading="Whenever you need a truck," subSectionHeading="We're here to help" :helpContent="helpContent"/>
</template>

<script>
import HelpSection from "./components/HelpSection.vue";
import StepsVue from "./components/Steps.vue";
import Icon1 from "../../assets/images/howitworks/compliance.png";
import Icon2 from "../../assets/images/howitworks/technology.png";
import Icon3 from "../../assets/images/howitworks/simplicity.png";
import stepOne from "../../assets/images/howitworks/shipperStepOne.svg";
import stepTwo from "../../assets/images/howitworks/shipperStepTwo.svg";
import stepThree from "../../assets/images/howitworks/shipperStepThree.svg";

const content = [
  {
    countSteps : "STEP 1",
    heading: "Browse",
    content: "Start by typing in your “Pickup”, “Delivery”, and “Equipment Type.” Add in your “Pick up date”. Then click search.",
    imgUrl: stepOne
  },
  {
    countSteps : "STEP 2",
    heading: "Select",
    content: "Explore through our list of vetted carriers to fit your needs.",
    contentSecond: "Once you've found what you're looking for, book in just a few clicks.", 
    imgUrl: stepTwo
  },
  {
    countSteps : "STEP 3",
    heading: "Book with Confidence",
    content: `Finalize your booking and you're all set! Keep in touch with your carrier through Truckpedia and have real- time visibility, along with freight security through GPS tracking 
                on every truck.You can also contact Truckpedia anytime for additional support.`,
    imgUrl: stepThree
  }
]
const helpContent = [
  {
    imgUrl: Icon1,
    heading : `Compliance`,
    content : `Truckpedia performs background check on all carriers. We don't just stop here, we also give them advanced tools to make your life easy.`
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
  name: "Shippers",
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


