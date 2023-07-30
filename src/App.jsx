import { useState, useEffect } from 'react';
import Headlines from './components/Headlines';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import axios from 'axios';
import errImg from './assets/404cat.jpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { dataGet } from './utils/dataServices';

//for switching between links - this could/will be replaced by envs
//as of the current testing, it seems like it makes a lot of network calls | be careful with guardian api
//though dev version does do everything twice? so maybe cut that number in half?
const MOCKDATA = 'http://localhost:3000/mockApiResponse';
const GUARDIANAPI = 'https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=1cd9ce21-3d13-487a-8493-d972f9903814';

function App() {
  const [newsData, setNewsData] = useState([])

  const getData = async () => {
    try {
      const getNewsData = await dataGet(GUARDIANAPI); //LINK TO API GOES HERE

      const RESULTS = getNewsData.data.response.results;
      setNewsData(RESULTS);

    } catch (err) {
      console.log("cannot reach server")
      setNewsData([]);
    }
  }


  useEffect(() => {
    getData();
    // window.scrollTo(0, 0) //https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js
  }, [])

  //last minute update, if there is no connection to the server  then it displays the 404 image + some text (maybe it would be neater if it was in a relevant file?)
  //it is worth refactoring that line so it isn't so long but I like the effect
  //could do the same if someone tries and article link but something for the future
  return (
    <>
      <div className='container'>
        <Header></Header>
        <div className='row'>
        </div>
        <Routes>
          <Route path='/' element={newsData.length > 0 ? <Headlines newsData={newsData} /> : <div>< img src={errImg} className='img-fluid rounded mx-auto d-block' alt='404 - not found' /><h1 className='text-center fs-2 col-md-4 mx-auto'> 404 - Cannot retrieve information </h1></div>} />
          <Route path='/article/:id' element={<Article newsData={newsData} />} />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
