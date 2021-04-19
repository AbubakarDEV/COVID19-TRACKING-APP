import React, { useEffect } from 'react';
import styles from "./App.module.css";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";
import image from './images/image.png';
function App() {
  const [apidata,setApidata]=React.useState("")
  const [country,setCountry]=React.useState("")

  const getdata =async () => {
    const data =await fetchData();
    setApidata(data)
  }
  useEffect(() => {
    getdata()
  },[])
  const handleCountryChange=async(country)=>{
    // console.log(country)
    const fetchdata =await fetchData(country);
    // console.log(fetchdata)
    setApidata(fetchdata,country)
    
  }
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={apidata} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={apidata} country={country}/>
    </div>
  );
}

export default App;