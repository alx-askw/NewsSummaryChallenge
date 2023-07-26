import { useState, useEffect } from 'react';
import Headlines from './components/Headlines';
import axios from 'axios';

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    try {
      const getNewsData = await axios.get('http://localhost:3000/mockApiResponse');

      const RESULTS = getNewsData.data.response.results;
      setNewsData(RESULTS);

    } catch (err) {
      // console.log(err)
      console.log("cannot reach server")
      setNewsData([]);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <h1>DF Gazette</h1>
      {newsData.map(item => (
        <Headlines key={item.id} newsData={item}></Headlines>
      ))}
    </>
  )
}

export default App
