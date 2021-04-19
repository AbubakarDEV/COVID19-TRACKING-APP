import React, { useEffect } from 'react';
import styles from "./App.module.css";
import { Cards, Charts, CountryPicker } from "./components";
import { fetchData } from "./api";
function App() {
  const [apidata,setApidata]=React.useState("")
  const getdata =async () => {
    const data =await fetchData();
    setApidata(data)
  }
  useEffect(() => {
    getdata()
  },[])
  return (
    <div className={styles.container}>
      <Cards data={apidata} />
    </div>
  );
}

export default App;