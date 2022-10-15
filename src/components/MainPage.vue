<template>
  <div class="main_top-col6">
    <div class="main_top_contine">
        <div class="main_top_top">
            <span class="newtop">
                NEW ARRIVALS
            </span>
        </div>
       <div class="main_top_center-col6">
          <div class="main_top1">
            <div class="img_top_main">
                <img src="@/assets/Rectangle1.png" alt="">
            </div>
            <div class="name_left_main">
                <div class="col_name">
                    <div class="col_name1">Hoodies & Sweetshirt</div>
                    <div class="col_name2">Explore Now!</div>
                </div>
                <div class="texkt">
                    <div class="center_name3">
                        <img src="@/assets/rightkes.png" alt="">
                    </div>
                </div>
            </div>
          </div>
          <div class="main_top2">
            <div class="img_top_main">
                <img src="@/assets/Rectangle2.png" alt="">
            </div>
            <div class="name_center_main">
                <div class="center_name">
                    <div class="center_name1">Coats & Parkas</div>    
                    <div class="center_name2">Explore Now!</div>
                </div>
                <div class="texkt1">
                    <div class="center_name3">
                        <img src="@/assets/rightkes.png" alt="">
                    </div>
                </div>
            </div>
          </div>    
          <div class="main_top3">
            <div class="img_top_main">
                <img src="@/assets/Rectangle3.png" alt="">
            </div>
            <div class="name_right_main">
                <div class="right_name">
                    <div class="right_name1">Tees & T-Shirt</div>
                    <div class="right_name2">Explore Now!</div>
                </div>
                
                <div class="texkt2">
                    <div class="center_name3">
                        <img src="@/assets/rightkes.png" alt="">
                    </div>
                </div>
            </div>
            
          </div>
       </div> 
    </div>
    </div>
</template>

<script>
export default {
name:'MainPage',
data(){
    return{
        search:''
    }
}
}
</script>

<style lang="scss">
*{
    margin:0;
    padding:0;
}
.main_top-col6{
    max-width: 1638px;
    height: 967px;
}
.main_top_top{
    margin:12px 0px 0px 0px;
}
.main_top_center-col6{
    max-width: 1638px;
    height: 808px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin:27px 50px 0px 30px;
    padding: 0px;
    gap: 91px;
}
.main_top1{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 368px;
    height: 590px;
    padding: 0px;
}
.main_top2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 368px;
    height: 590px;
}
.main_top3{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 368px;
    height: 590px;
}
.img_top_main img{
    width: 364px;
    height: 470px;
}
.name_left_main{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 131px;
    width: 363px;
    height: 76px;

}
.name_center_main{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 131px;
    width: 363px;
    height: 76px;
}
.name_right_main{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 131px;
    width: 363px;
    height: 76px;
}
.center_name3 img{
    width:34px;
    height:22px;
}
.center_name3 img:hover{
    cursor: pointer;
    background-blend-mode: darken;
    mix-blend-mode: multiply;
    color:black;
}
.col_name{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 7px;
    width: 321px;
}
.center_name{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 7px;
    width: 230px;
}
.right_name{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 7px;
    width: 209px;

}
.col_name1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #191919;
}
.col_name2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.04em;
    color: #7F7F7F;
}
.newtop{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 50px;
    letter-spacing: 0.06em;
    color: #000000;
    margin:0px 0px 0px 50px; 
}
.center_name1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #191919;
}
.center_name2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.04em;
    color: #7F7F7F;
}
.right_name1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #191919;
}
.right_name2{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.04em;
    color: #7F7F7F;
}
</style>