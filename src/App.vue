<template>
  <nav>
    <div class="container">
        <div class="header">
          <div class="header_top-col6">
        <div class="span_left">
            <span class="img_left">
                <img src="@/assets/fashi.png" alt="">
            </span>
            <span class="fashion">FASHION</span>
          </div>
          <div class="ul_right">
            <ul>
                <li>CATALOGUE</li>
                <li>FASHION</li>
                <li>FAVOURITE</li>
                <li>LIFESTYLE</li>
              </ul> 
              <div class="button">
                SingUp
              </div>
            </div>
            
          </div>
          <HeaderPage/>
        </div>
        <div class="project_section">
          <Projects/>
          
        </div>
        <div class="mainPage">
          <Maincenter/>
        </div>
        <div class="header_section">
          <headersection/>
        </div>
        <div class="footerpage">
          <footername/>
        </div>
        <div class="mobilapp">
          <mobilpage/>
        </div>
        <div class="textwi">
          <textwhiten/>
        </div>
        <div class="footerbott">
          <bottomnewpage/>
        </div>
      </div>
    
  </nav>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import Projects from '@/components/HeaderBottom.vue';
import Maincenter from '@/components/MainPage.vue';
import headersection from '@/components/SectionPage.vue';
import footername from '@/components/FooterPage.vue';
import mobilpage from '@/components/MobilApp.vue';
import textwhiten from '@/components/TextWhite.vue';
import bottomnewpage from '@/components/BigBottom.vue';
export default({
  components:{
    HeaderPage,
    Projects,
    Maincenter,
    headersection,
    footername,
    mobilpage,
    textwhiten,
    bottomnewpage,

  }
})
</script>

<style lang="scss" > 

</style>