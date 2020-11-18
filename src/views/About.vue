<template>
  <div class="about">
    <Navbar class="inner-nav"/>
    <h1>This is an about page</h1>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name:'AboutUs',
  components:{
    Navbar,Footer
  }
  
}
</script>