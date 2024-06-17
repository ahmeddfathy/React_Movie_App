import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  const [data2, setData] = useState([]);
    async function getData() {
   
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);

}
  useEffect(() => {
 
    getData();
    console.log('done')
  }, []);


  return (
    <div className="container">
      <div className="row" id="cardRow" >
        {data2.map((val, ind) => (
          <div className="col-lg-4 col-10 col-md-6" key={ind}>
            <div className="card mt-4 " style={{ width: "17rem" }}>
              <img  className="card-img-top" src={val.image} id="imgg"  alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">${val.price}</p>
                <a href="#" className="btn btn-primary justify-content-center">
                  details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
