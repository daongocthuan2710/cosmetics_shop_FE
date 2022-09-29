import React  from 'react';
import { useEffect, useState } from 'react';
import productApi from './api/productApi';
import './App.css';
import User_Routes from './routes/user_routes/index.js';
function App() {
  // demo API Modules
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try{
        const params = { _page: 1, _limit: 10};
        const response = await productApi.getAll(params);
        console.log('Fetch products successfully:', response);

        setProductList(response.data);
      } catch (error){
        console.log('Failed to fetch product list:', error);
      }
    }
    fetchProductList();
  }, []);

  return (
    <User_Routes/>
  );
}

export default App;
