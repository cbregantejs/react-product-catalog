import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'
import React, { useEffect, useState } from 'react';
import GridProducts from './components/GridProducts'

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true)
      setItems(result)
    },
    (error) => {
      setIsLoaded(true)
      setError(error)
    })
  }

  return (
    <>
      <Layout title='Catalogo de productos'>
        <GridProducts products={items} error={error} isLoaded={isLoaded} ></GridProducts>
      </Layout>
    </>
  );
}

export default App;
