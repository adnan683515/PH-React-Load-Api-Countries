import React, { useState } from 'react';
import './county.css'
const Country = ({ country }) => {

    const { name, flags, independent, population } = country
    console.log(country)

    const [visited, setVisited] = useState(false)



    const handleVisit = () => {
        // way-1
        // visited? setVisited(false):setVisited(true)

        //way-2
        setVisited(!visited)


        //way-3
        // if(visited){
        //     setVisited(false)
        //     return;
        // }
        // setVisited(true)
    }

    return (
        <div className={`countryCard ${visited && `countryCard-Visited`}` } >
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%"
            }} >
                <img style={{
                    width: "100%",
                    borderRadius: "5px"
                }} src={flags?.png} alt="" />
            </div>
            <div>
                <h3>Name: {name?.common}  </h3>
                <h4>Independent: {independent ? <span style={{ background: "green", padding: "5px", borderRadius: "5px" }} >YES</span> : <span style={{ background: "red", padding: "5px", borderRadius: "5px" }} >NO</span>}  </h4>
                <h5>Population: {population} peoples </h5>
                <button onClick={handleVisit} >{
                    visited ? "visited" : "Not visited"
                }</button>
            </div>
        </div>
    );
};

export default Country;