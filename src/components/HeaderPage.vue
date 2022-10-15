<template>
<div class="header">
    <div class="header_main-col6">
            <div class="header_main_left">
                <div class="name1">LET’S 
                EXPLORE UNIQUE 
                CLOTHES.</div>
                <div class="name2">Live for Influential and Innovative fashion!</div>
                <div class="name3">SHOP NOW</div>
            </div>
            <div class="header_main_right">
                <div class="header_main_right_img">
                    <img src="@/assets/nom1.png" alt="">
                </div>
            </div>
    </div>
</div>
</template>

<script>
export default {
name:'HeaderPage',
data(){
    return{
        search:''
    }
}
}
</script>

<style lang="scss" >
    .header{
        max-width:1400px;
        height:900px;
        background-color: #fff;
    }
    // header top stsrt finish>>>>>>
    .header_top-col6{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 489px;
        margin:8px 40px 48px 40px;
    }
    .span_left{
        display:flex;
        align-items:center;

    }
    .span_left .fashion{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 45px;
    }
    .ul_right {
        width: 619.5px;
        height: 46.5px;
        display: flex;
        align-items: center;
        padding: 0px;
        gap: 30px;

    }
    .ul_right ul li{
        margin-left:18px;
        display:flex;
        align-items:center;
    }
    .ul_right ul li:hover{
        cursor:pointer;
        color:aqua;
    }
    .ul_right ul{
        display:flex;
        margin-left:10px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16.5px;
        line-height: 25px;
        letter-spacing: 0.01em;
        list-style-type: none;
    }
    .button{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:10px;
        width:100px;
        height:46px;
        background:black;
        color: white;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.03em;
        border-radius:5px;
    }
    .button:hover{
        cursor:pointer;
        border:solid 1px black;
        color:black ;
        background:white;
    }
    // header top end kones>>>>>


    // header_main strat

    .header_main-col6{
        display:flex;
        justify-content:space-around;
        margin:0px 20px 0px 20px;
        width: 1290px;
        height: 638.37px;
        background: #F4F6F5;
        border-radius: 39.4737px;
    }
    .name1{
        width: 355.5px;
        height: 354.4px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 90px;
        z-index:1;
    }
    .header_main_right img{
        width: 600px;
        height: 530px;
    }
    .header_main_right{
        margin-top:106px;
    }
    .header_main_left{
        margin-top:50px;
        width: 600px;
        height: 530px;
    }
    .header_main_left div{
        margin-bottom:29px;
    }
    .name2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
        letter-spacing: -0.05em;
        color: #191818;
    }
    .name3{
        display:flex;
        justify-content:center;
        align-items:center;
        width: 165.75px;
        height: 61.5px;
        background:black;
        color:white;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 22.5px;
        line-height: 34px;
        letter-spacing: -0.05em;
        color: #FFFFFF;
        border-radius:5px;
    }
    .name3:hover{
        cursor:pointer;
        background:white;
        color:black;
        border:solid 1px black;
    }
</style>