<template>
<div class="textwhite">
    <div class="textwhitesmall">
        <div class="span1">
            <span class="spannewtext">
                JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </span>
        </div>
        <div class="span2">
            <span class="spannewtext1">
                Type your email down below and be young wild generation
            </span>
        </div>
        <div class="span3">
            <div class="inputtype">
                <input type="search" name="" id="" placeholder="Add your email here" required>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'TextWhite',
data(){
    return{
        search:'',
    }
}
}
</script>

<style lang="scss">
.textwhite{
    max-width:1440px;
    height:400px;
    background: #E5C643;
    display:flex;
    justify-content: center;
    align-items: center;
}
.span1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 70px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
}
.spannewtext1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
}
.span1{
    width:497px;
}
.inputtype{
    margin-left:49px;
}
.inputtype input{
    border-style:none;
    text-decoration: none;
    width:350px;
    height:40px;
    background: #FFFFFF;
    border-radius: 10px;
}

</style>