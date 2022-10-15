<template>
<div class="section">
    <div class="main_section">
        <ul>
            <li><img class="img1" src="@/assets/hm.png" alt=""></li>
            <li><img class="img2" src="@/assets/obey.png" alt=""></li>
            <li><img class="img3" src="@/assets/shopfly.png" alt=""></li>
            <li><img class="img4"  src="@/assets/lacoste.png" alt=""></li>
            <li><img class="img5" src="@/assets/levis.png" alt=""></li>
            <li><img class="img6" src="@/assets/amazon.png" alt=""></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
name:'HeaderBottom',
data(){
    return{
        search:''
    }
}
}
</script>

<style lang="scss">
    *{
        padding:0;
        margin:0;
    }
    .main_section{
        margin-top:-120px
    }
.main_section{
    max-width: 1920px;
    height: 86px;
    background: #EBD96B;
}
.main_section ul{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type:none;
    flex-direction: row;
}
.main_section ul li{
    display:flex;
    align-items: center;
    width: 100px;
    height: 50px;
    margin:22px 40px 15px 25px;
}
.img1{
    width:110px;
    height:40px;
    
    background-blend-mode: darken;
    mix-blend-mode: multiply;
}
.img2{
    width:110px;
    height:40px;
    mix-blend-mode: multiply;
    
}
.img3{
    width:100px;
    height:58px;
    mix-blend-mode: multiply;
}
.img4{
    margin-bottom: 15px;
    width:110px;
    height:75px;
    mix-blend-mode: multiply;
    order: 3;
}
.img5{
    width:120px;
    height:60px;
    mix-blend-mode: multiply;
    order: 4;
}
.img6{
    width:110px;
    height:50px;
    mix-blend-mode: multiply;
    order: 5;
}
.img1:hover{
    cursor:pointer;
    transition-duration: 500ms;
    border-radius:5px;
    box-shadow:5px 5px 5px 5px grey;
    background-blend-mode: darken;
    mix-blend-mode: multiply;
}
.img2:hover{
    cursor:pointer;
    transition-duration: 500ms;
    border-radius:5px;
    box-shadow:5px 5px 5px 5px grey;
    background-blend-mode: darken;
    mix-blend-mode: multiply;
}
.img3:hover{
    cursor:pointer;
    transition-duration: 500ms;
    border-radius:5px;
    box-shadow:5px 5px 5px 5px grey;
    background-blend-mode: darken;
    mix-blend-mode: multiply;
}
.img4:hover{
    cursor:pointer;
    transition-duration: 500ms;
    border-radius:5px;
    box-shadow:5px 5px 5px 5px grey;
    background-blend-mode: darken;
    mix-blend-mode: multiply;
}
.img5:hover{
    cursor:pointer;
    transition-duration: 500ms;
    border-radius:5px;
    box-shadow:5px 5px 5px 5px grey;
    background-blend-mode: darken;
    mix-blend-mode: multiply;
}
.img6:hover{
    cursor:pointer;
    transition-duration: 500ms;
    border-radius:5px;
    box-shadow:5px 5px 5px 5px grey;
    background-blend-mode: darken;
    mix-blend-mode: multiply;
}
</style>