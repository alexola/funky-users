import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Oompas() {
    const [data, setData] = useState({ results: [] });
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?',
        );
        setData(result.data);
      };
      fetchData();
    }, []);

    const isGender = (gender) => {
        if (gender === "F"){
            return 'Female'
        } else if (gender === "M"){
            return 'Male'
        } else {
            console.error('No gender')
        }
    }

 
    return (

      <Router>
      <ul className="item">
        {data.results.map(item => (
          <li key={item.id}>
            <img className="photo" src={item.image} />
            <h3 className="fullName">{item.first_name} {item.last_name}</h3>
            <p className="gender">{isGender (item.gender)}</p>
            <p className="profession">{item.profession}</p>
          </li>
        ))}
      </ul>
      </Router>  
    );
  }
  


export default Oompas;