<template>
<div class="mobilepage">
    <div class="leftmobilpage">
        <div class="leftmobilebottom">
            <span class="textspan1">
                DOWNLOAD APP &
                GET THE VOUCHER!
            </span>
            <span class="textspan2">
                Get 30% off for first transaction using
                Rondovision mobile app for now.
            </span>
        </div>
        <div class="imgmobilebottomtop">
            <div class="imgmoilebottom">
                <span>
                    <img src="@/assets/iphone.png" alt="">
                </span>
                <span>
                    <img src="@/assets/android.png" alt="">
                </span>
            </div>
        </div>
    </div>
    <div class="rightmobilepage">
        <div class="imgagemobile">
            <img src="@/assets/Mobile_app.png" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
name:'MobilApp',
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
.mobilepage{
    max-width: 1400px;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.leftmobilpage{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 65px;
}
.leftmobilebottom{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 41px;
}
.imgmobilebottomtop{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 19px;
}
.textspan1{
    width:277px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #000000;
}
.textspan2{
    width:250px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: -0.04em;
}
.imgmobilebottomtop img{
    width:146px;
}
.imgagemobile img{
    width: 310px;
}

</style>