import React from 'react'
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';


function MenuComponent(props) {
  const navigate = useNavigate()
    const items=[
        {
            label:'Home',
            key:'/home'
            
        },
        
        {
            label:'Products',
            key:'/products'
            
        }
    ]
    const handleMenuClick=(item)=>{
      console.log('click',item)
      navigate(item.key)
    }
  return (
    <Menu
    defaultSelectedKeys={['1']}
    // defaultOpenKeys={['sub1']}
    mode="inline"
    theme="dark"
    // inlineCollapsed={collapsed}
    items={items}
    onClick={handleMenuClick}
  />
  )
}

export default MenuComponent