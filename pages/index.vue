<template>
<section class="section">
    <carousel></carousel>
    <about-us></about-us>
    <service></service>
    <how-we-work></how-we-work>
    <time-line></time-line>
    <our-work></our-work>
    <team></team>
    <advantages></advantages>
    <contact></contact>
</section>
</template>

<script>
import Carousel from "../components/Carousel"
import AboutUs from "../components/AboutUs"
import Service from "../components/Service"
import HowWeWork from "../components/HowWeWork"
import TimeLine from "../components/TimeLine"
import OurWork from "../components/OurWork"
import Team from "../components/Team"
import Advantages from "../components/Advantages"
import Contact from "../components/Contact"
export default {
  components: {
    Carousel,AboutUs,Service,HowWeWork,TimeLine,OurWork,Team,Advantages,Contact
  }
}
</script>

<style>

</style>
