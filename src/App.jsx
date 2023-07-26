import { useState, useEffect } from 'react';
import Headlines from './components/Headlines';
import axios from 'axios';

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    try {
      const getNewsData = await axios.get('http://localhost:3000/mockApiResponse');
      // setNewsData(JSON.parse(getNewsData));
      // setNewsData(getNewsData.data.results[0]);
      // console.log("here", JSON.parse(getNewsData));
      // console.log("here111111111", getNewsData.data.results);

      setNewsData(getNewsData.data.response.results);
      console.log("2222222222222", getNewsData.data.response.results);
      const mapTest = newsData.map(result => ({
        id: result.id,
        type: result.type
      }));
      setNewsData(mapTest)
      console.log("maptest", mapTest)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData();

  }, [])

  return (
    <>
      <h1>test 2222</h1>
      {newsData}
    </>
  )
}

export default App
