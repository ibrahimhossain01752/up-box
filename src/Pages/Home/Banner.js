import React from 'react';
// import './Banner.css';
import box from '../../assets/images/box 1.png';

const Banner = () => {
    return (
//      <div class="row row-cols-1 row-cols-sm-2 ">
//           <div class="box-con">
//              <div class="container">
//   {/* <div class="row "> */}
//    <div class="col-md-4 col-sm-6 ">
//    <h2>Look good without leaving your house.</h2>
//                     <p>Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the leatest trends and send them directly to your door every month.</p>  
//    </div>
//    <div class="col-md-8 col-sm-6 banner-main ">
//         <img src={box}/>
//    </div>
 
// </div>
//        </div>
//      </div>

<div class="container-fluid bg-primary">
<div class="row">
<div class="col-md-6">
<h1>I Live in a Bangladesh</h1>
</div>
<div class="col-md-6">
<img class="w-100 h-100" src={box} />
</div>
</div>
</div>



    );
};

export default Banner;