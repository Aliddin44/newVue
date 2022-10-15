<template>
<div class="header_section">
    <div class="header_section_top">
        <div class="header_section_left">
            <img src="@/assets/yellowsister.png" alt="">
        </div>
        <div class="header_section_right">
             <div class="span"></div>
            <div class="Payday">PAYDAY SALE NOW </div>
            <div class="Spend">Spend minimal $100 get 30% off voucher code for your next purchase</div>
            <div class="June1">
                <ul>
                    <li class="jun2">1 June - 10 June 2021</li>
                    <li class="terms">*Terms & Conditions apply</li>
                </ul>
            </div>
            <div class="button">SHOP NOW</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'SectionPage',
data(){
    return{
        search:''
    }
}
}
</script>

<style lang="scss">
.header_section_top{
    max-width: 1924px;
    margin-top:-295px;
    height: 700px;
    display:flex;
    background: linear-gradient(1.32deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%);
}
.header_section_left img{
    width: 720px;
    height: 700px;
}
.header_section_right{
    width: 666.39px;
    height: 684.76px;
    margin:82px 0px 0px 0px;
}
.yulduzlar img{
    width: 76.14px;
    height: 76.05px;
    transform: matrix(0.89, -0.45, 0.46, 0.89, 0, 0);
}
.span{
    width: 411.43px;
    height: 114.37px;
    background: #FFFFFF;
    transform: matrix(1, -0.03, 0.03, 1, 0, 0);
}
.Payday{
    position:relative;
    margin-top:-119px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 98.608px;
    line-height: 137px;
}
.Spend{
    font-family: 'Poppins';
    width:460px;
    font-style: normal;
    font-weight: 500;
    font-size: 24.0402px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #231300;
}
.June1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10.46px;
}
.June1 ul{
    list-style-type:none;
}
.jun2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24.0402px;
    line-height: 52px;
    letter-spacing: 0.02em;
    color: #000000;
}
.terms{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24.0402px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #000000;
}
.button{
    width: 154.62px;
    height: 64.33px;
}
.button:hover{
    cursor:pointer;
    background: linear-gradient(1.32deg, #E0C340 0.13%, #DFC23E 3.97%, #E1C441 7.2%, #E3C743 10.13%, #E4C542 12.98%, #E6C744 15.99%, #E7C845 19.52%, #E5C643 23.96%, #E6C945 30.43%, #E3C743 36.49%, #E9CA48 42.49%, #EDCE49 49.35%, #F0D44C 55.42%, #F4D84F 61.43%, #F6DA52 65.74%, #F7DB53 72.23%, #F9DD55 77.43%, #F9DF56 83.84%, #FAE157 91.52%, #F9DF56 97.87%);
}
</style>