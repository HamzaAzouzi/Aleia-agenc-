import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/card";

const Home: React.FC<any> = () => {
  const [allMaisons, setAllMaisons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3006/maisons").then(function (response) {
      // handle success
      console.log(response.data);
      setAllMaisons(response.data);
    });
  }, []);
  return (
    <div className="container-home">
      <div className="section1">
        <h1 className="title">We are an award winning interior design Agency</h1>
        <button type="button">
            <span>
                            View all properties

            </span>
        <svg width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7H0V9H1V7ZM53.7071 8.70711C54.0976 8.31658 54.0976 7.68342 53.7071 7.29289L47.3431 0.928932C46.9526 0.538408 46.3195 0.538408 45.9289 0.928932C45.5384 1.31946 45.5384 1.95262 45.9289 2.34315L51.5858 8L45.9289 13.6569C45.5384 14.0474 45.5384 14.6805 45.9289 15.0711C46.3195 15.4616 46.9526 15.4616 47.3431 15.0711L53.7071 8.70711ZM1 9H53V7H1V9Z" fill="black"/>
        </svg>

        </button>
      </div>
      <div className="container-cards">
        {allMaisons.map((maison: any) => (
          <Card key={maison.id} {...maison} />
        ))}
      </div>
    </div>
  );
};
export default Home;
