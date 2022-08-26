import { Radio } from 'antd';
import React from 'react';


function Home() {
  
    return (
        <Radio.Group name="radiogroup" defaultValue={1}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    )
}

export default Home