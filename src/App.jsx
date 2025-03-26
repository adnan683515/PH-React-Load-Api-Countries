

import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'

const countriesPromies = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())


function App() {


  return (
    <>



      <Suspense fallback={<p>country loading</p>} >

        <Countries  countriesPromies={countriesPromies} ></Countries>

      </Suspense>




    </>
  )
}

export default App
//<> </> Fragment