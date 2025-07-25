import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Product from './page/Product';
import AddProduct from './page/AddProduct';
import {Routes, Route } from 'react-router-dom';
import Layout from './componets/layouts/Layout';
import FavouriteItem from './page/Favouriteitem';
function App() {
  return <Layout>
    <Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/product' element={<Product/>}></Route>
  <Route path='/product/Add' element={<AddProduct/>}></Route>
  <Route path='/product/favourite'element={<FavouriteItem/>}></Route>
  
  </Routes>
  </Layout>
}

export default App;
