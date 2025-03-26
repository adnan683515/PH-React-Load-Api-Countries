import React, { use } from 'react';
import Country from '../Country/Country';
import './app.css'

const Countries = ({ countriesPromies }) => {

    const data = use(countriesPromies)
    return (
        <div>

            <h1 style={{
                textAlign: "center"
            }}>Traveling Countries: {data.length} </h1>

            <div className='countryContainer' >


                {
                    data.map(country => <Country key={country.cca3}  country={country} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;