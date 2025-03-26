import React from 'react';

const Country = ({ country }) => {

    const { name, flags, independent, population } = country
    console.log(country)


    return (
        <div style={{
            border: "2px solid yellow",
            borderRadius: "5px",
            padding: "9px",
            display: 'flex',
            gap: "5px"

        }} >
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width:"50%"
            }} >
                <img style={{
                    width: "100%"
                }} src={flags?.png} alt="" />
            </div>
            <div>
                <h3>Name: {name?.common}  </h3>
                <h4>Independent: {independent ? <span style={{ background: "green", padding: "5px", borderRadius: "5px" }} >YES</span> : <span style={{ background: "red", padding: "5px", borderRadius: "5px" }} >NO</span>}  </h4>
                <h5>Population: {population} peoples </h5>
            </div>
        </div>
    );
};

export default Country;