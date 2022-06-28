import axios from "axios";
import React, { useEffect, useState } from "react";
import image1 from "../images/image1.png";
import {BsHeart} from "react-icons/bs";

type Props = {
    price:string,
    location:string,
    image:string,

  };


const Card: React.FC<Props> = ({price,location,image}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="card"
    >
     <BsHeart color="white" />

      <p className="price-maison">{price}</p>
      <p className="location-maison">{location}</p>
    </div>
  );
};
export default Card;
