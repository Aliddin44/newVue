<template>
  <div class="footerpage">
    <div class="footerpagetop">
        <div class="main_top_top">
            <span class="newtop">
                NEW ARRIVALS
            </span>
        </div>
    </div>
        <div class="footerpagenametop">
            <div class="leftpage">
                <div class="image_topfoter">
                    <img src="@/assets/leftimage.png" alt="">
                </div>
                <div class="nametextfooter">
                    <div class="textnamepagenow">
                        <span class="spannewfirst">
                            Trending on instagram
                        </span>
                        <span class="spannewfirstleft">
                            Explore Now!
                        </span>
                    </div>
                    <div class="image_rightname">
                        <img src="@/assets/rightkes.png" alt="">
                    </div>
                </div>
            </div>
            <div class="rightpage">
                <div class="image_topfoterright">
                    <img src="@/assets/rightname.png" alt="">
                </div>
                <div class="nametextfooterright">
                    <div class="textnamepagenowright">
                        <span class="spannewfirstright">
                            All Under $40
                        </span>
                        <span class="spannewfirstright1">
                            Explore Now!
                        </span>
                    </div>
                    <div class="image_rightnameright">
                        <img src="@/assets/rightkes.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'FooterPage',
data(){
    return{
        search:""
    }
}
}
</script>

<style lang="scss">
*{
    padding:0;
    margin:0;
}
.footerpagenametop{
    display:flex;
    justify-content: space-around;
    align-items:center;
    //margin:0px 30px 0px 30px;
}
.footerpage{
    max-width:1400px;
    height: 554px;
}
.image_topfoter img{
    width:570px;
    height:400px;
}
.image_topfoterright img{
    width:570px;
    height:400px;

}
.nametextfooterright{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 405px;
}
.nametextfooter{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 318px;
}
.textnamepagenow,.textnamepagenowright{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
}
.spannewfirst ,.spannewfirstright{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #000000;
}
.spannewfirstleft,.spannewfirstright1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #7F7F7F;
}
</style>