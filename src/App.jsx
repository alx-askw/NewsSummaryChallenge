import { useState, useEffect } from 'react';
import Headlines from './components/Headlines';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

//for switching between links - this could/will be replaced by envs
//as of the current testing, it seems like it makes a lot of network calls | be careful with guardian api
//though dev version does do everything twice? so maybe cut that number in half?
const MOCKDATA = 'http://localhost:3000/mockApiResponse';
// const GUARDIANAPI = 'https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=1cd9ce21-3d13-487a-8493-d972f9903814';

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    try {
      const getNewsData = await axios.get(MOCKDATA);

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
        <div className='row'>
          {newsData.map(item => (
            <Headlines key={item.id} newsData={item} ></Headlines> //probably have to worry about on click per article here
          ))}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
