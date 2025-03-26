import React, { use } from 'react';
import Country from '../Country/Country';


const Countries = ({ countriesPromies }) => {

    const data = use(countriesPromies)
    return (
        <div>

            <h1 style={{
                textAlign: "center"
            }}>Traveling Countries: {data.length} </h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px"
            }} >


                {
                    data.map(country => <Country key={country.cca3}  country={country} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;