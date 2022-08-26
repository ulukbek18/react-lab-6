import React, {useState} from 'react';
import {Routes,Route} from 'react-router-dom'
import {Layout} from 'antd'
import './App.css';
import 'antd/dist/antd.css';
import Home from './containers/Home/Home';
import MenuComponent from './components/MenuComponent/MenuComponent';
import Products from './components/Products/Products';

const {Sider}=Layout


function App() {
  const [collapsed,setCollapsed]=useState(false)
  return (
    <Layout
    style={{minHeight:'100vh'
    }}
    >
      <Sider 
      collapsible
      collapsed={collapsed}
      onCollapse={(value)=>setCollapsed(value)}
      >
      <MenuComponent/>

      </Sider>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
