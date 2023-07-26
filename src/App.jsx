import { useState, useEffect } from 'react';
import Headlines from './components/Headlines';
import axios from 'axios';

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    try {
      const getNewsData = await axios.get('http://localhost:3000/mockApiResponse');

      const RESULTS = getNewsData.data.response.results;
      const mapTest = RESULTS.map(result => ({
        id: result.id,
        type: result.type
      }));
      setNewsData(mapTest);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    // console.log("newsData:", newsData);
    // getData()
  }, [newsData]);

  return (
    <>
      <h1>test 2222</h1>
      {/* {newsData.map(res => {
        id: res.id
      })} */}
      <Headlines newsData={newsData}></Headlines>
    </>
  )
}

export default App
