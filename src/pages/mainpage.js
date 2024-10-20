import React ,{useState} from 'react';
import { Suspense } from 'react';
import "antd/dist/antd.css";
import {LoadingOutlined} from '@ant-design/icons';

// importing pages/components through React.lazy(). Improves page performance.
const InputPage = React.lazy(() => import('./components/input'));
const Show = React.lazy(() => import('./components/table'));
const Chart = React.lazy(()=>import ('./components/chart'))
const Intro = React.lazy(()=>import('./components/intro'))
const MainPage = props => {
    const { query, history, country, category } = props;
    return (
      <Suspense fallback={<div style={{marginTop:'300px', marginLeft:'700px'}}><LoadingOutlined style={{color:'blue',fontSize:'100px'}}/></div>}>
        <h1 style={{textAlign:'center'}}>International Greenhouse Gas Emissions Data Visualization</h1>
        <br></br>
        <Intro/>
        <br></br>
        <InputPage history={history} />
        <br></br>
        <Chart history={history}/>
        <br></br>
        <Show/>
       
     </Suspense>
    );
  };
  export default MainPage