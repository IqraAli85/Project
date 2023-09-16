import React from 'react'
import { Tabs } from 'antd'
import Products from "./Products/index"
function Profile() {
  return (
    <div>
         <Tabs defaultActiveKey='1'>
              <items tab="Products" key="1">
                   <Products />
              </items>
              <items tab="Bids" key="2">
                   <h1> Bids </h1>
              </items>
              <items tab="Generals" key="3">
                   <h1> Generals </h1>
              </items>
         </Tabs>
    </div>
  )
}

export default Profile
