import { useState, useEffect } from 'react';
import Headlines from './components/Headlines';
import axios from 'axios';

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    try {
      const getNewsData = await axios.get('http://localhost:3000/response');
      // setNewsData(JSON.parse(getNewsData));
      setNewsData(getNewsData.data.results);
      // console.log("here", JSON.parse(getNewsData));
      console.log("here111111111", getNewsData.data.results);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData();

  }, [])

  return (
    <>
      <h1>test</h1>
      <Headlines newsData={newsData}></Headlines >
    </>
  )
}

export default App
