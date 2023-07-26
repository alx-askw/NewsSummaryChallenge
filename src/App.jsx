import { useState, useEffect } from 'react';
import Headlines from './components/Headlines';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    try {
      const getNewsData = await axios.get('http://localhost:3000/mockApiResponse');

      const RESULTS = getNewsData.data.response.results;
      setNewsData(RESULTS);

    } catch (err) {
      console.log("cannot reach server")
      setNewsData([]);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <div className='container'>
        <Header></Header>
        {newsData.map(item => (
          <Headlines key={item.id} newsData={item}></Headlines>
        ))}
      </div>
    </>
  )
}

export default App
