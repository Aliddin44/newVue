<template>
<div class="footerbottnew">
    <div class="footerfile">
        <div class="footertopfile">
            <div class="footername1">FASHION</div>
            <div class="footername2">Complete your style with awesome clothes from us.</div>
            <div class="footername3">
                <div class=""><img src="@/assets/fasebook.png" alt=""></div>
                <div class=""><img src="@/assets/instagram.png" alt=""></div>
                <div class=""><img src="@/assets/twiter.png" alt=""></div>
                <div class=""><img src="@/assets/int.png" alt=""></div>
            </div>
        </div>
        <div class="footercenterfile">
            <ul>
                <li>Company</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Support</li>
                <li>Careers</li>
            </ul>
        </div>
        <div class="footerrightsmall">
            <ul>
                <li>Quick Link</li>
                <li>Share Location</li>
                <li>Orders Tracking</li>
                <li>Size Guide</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div class="footerrightfile">
            <ul>
                <li>Legal</li>
                <li>Terms & conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
name:'BigBottom',
data(){
    return{
        search:""
    }
}
}
</script>

<style lang="scss">
.footerbottnew{
    max-width:1400px;
    height: 250px;
    background: #000;
}
.footerbottnew img:hover{
    cursor:pointer;
}
.footerfile{
    display:flex;
    justify-content: space-around;
    align-items:center;
}

.footertopfile{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
}
.footername1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 60px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
}
.footername2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #8E8E8E;
}
.footername3 img{
    width:30px;
    height:30px;
}
.footername3{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 14px;
}
.footerfile ul li{
    margin:10px 0px 10px 0px;
}
.footerfile ul{
    color:white;
    list-style-type: none;
}
.footerfile ul li:hover{
 cursor:pointer;
 color:aquamarine;
}
</style>