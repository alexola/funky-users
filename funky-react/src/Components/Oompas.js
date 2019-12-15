import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Oompas() {
    const [data, setData] = useState({ results: [] });
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1',
        );
        setData(result.data);
      };
      fetchData();
    }, []);
    return (
      <ul className="item">
        {data.results.map(item => (
          <li key={item.id}>
            <img className="photo" src={item.image} />
            <a href={item.url}></a>
            <h3 className="fullName">{item.first_name} {item.last_name}</h3>
            <p className="gender">{item.gender}</p>
            <p className="profession">{item.profession}</p>
          </li>
        ))}
      </ul>
    );
  }
  


export default Oompas;