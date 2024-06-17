import React, { Component } from "react";
import icon1 from "./icons8-facebook (3).svg"
import icon2 from "./icons8-instagram.svg"
import icon3 from "./icons8-messenger.svg"
import icon4 from "./icons8-twitter (1).svg"

import './footer.css'
class Fotter extends  Component{

    render(){
    return(
        <>

  
        <div className='container-fluid footer-component ' id="mainDiv"  >
        <div className='row' id="fotter_row"  >
       
        <div className=' col-4 col-md-4 col-lg-3 mt-3 mb-3'  >
            <h5>Team</h5>
             <p>Magic
             <br></br>
             &#128512;
         </p>
      
        </div>
          
        <div className='col-4 col-md-4 col-lg-3 mt-3 mb-3' >
        <h5 >my acounts</h5>
        <div  id="icons_div">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
        </div>
      </div>

      <div className='col-4 col-md-4 col-lg-3 mt-3 mb-3' >
        <h6  id="developer_txt">developers</h6>
        <p>
          aml , salma
            <br />
            ahmed
          
        </p>
     
      </div>

         </div>
         </div>
         <div  id="copyRight_txt" >
            
        
              <p  id="down-txt">CopyRight &copy; your website 2023</p>
           
            </div>
              </>

    );}
}

export default Fotter ;

