import logo from './logo.svg';
import './App.css';
import { fetchAllProducts } from './lib/sanity/productServices';
import {useEffect, useState} from 'react'
import FrontPage from './pages/FrontPage';
import {Routes, Route} from 'react-router-dom'

function App() {
  
  const [prods, setProds] = useState(null)

  const getProducts = async () => {
    const data = await fetchAllProducts()
    setProds(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  //console.log(prods)

  return (
    <Routes>
      <Route index element={<FrontPage products={prods}/>}/>
    </Routes>
    )
}

export default App;
