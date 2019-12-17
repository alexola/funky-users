import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter , Route, Link, Switch } from "react-router-dom";
import { render } from '@testing-library/react';



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


    const OompasPage = () => {
      return (
        <>
          {data.results.map(( index) => (
            <h5 key={index}></h5>
            
          ))}
        </>
      );
    };


// Oompa's profile page 


    const UserOompa = ({ match }) => {
      const {
        params:{ oompaId }
      } = match
      return (
        <div className="profileInfo">
          <div className="userPhoto">
            <img alt="oompa-profile" src={data.results[oompaId -1].image} />
          </div>
          <div className="userInfo">
            <h3 className="fullName">
              {data.results[oompaId -1].first_name} {data.results[oompaId -1].last_name}
            </h3>
            <p className="gender">{isGender (data.results[oompaId -1].gender)}</p>
            <p className="profession">{data.results[oompaId -1].profession}</p>
            <p className="userSong">{data.results[oompaId -1].favorite.song}</p>
          </div>
        </div>
      )
    } 

    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={OompasPage} />
        <Route exact path="/user/:oompaId" component={UserOompa} />
        <div>
        <h1 className="mainTitle">Find your Oompa Loompa</h1>
        <h2 className="secondTitle">There are more than 100k!</h2>
        <ul className="item">
          {data.results.map(item => (
            <li key={item.id}>
              <img alt="oompa" className="photo" src={item.image} />
                <h3 className="fullName">
                  <Link to={`/user/${item.id}`}>{item.first_name} {item.last_name}</Link>
                </h3>
              <p className="gender">{isGender (item.gender)}</p>
              <p className="profession">{item.profession}</p>
            </li>
          ))}
        </ul>
        </div>
      </Switch>  
    </BrowserRouter>      
    );
  }



export default Oompas;