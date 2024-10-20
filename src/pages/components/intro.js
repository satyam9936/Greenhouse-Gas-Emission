import React ,{useState} from 'react';
import { Card, Tooltip } from 'antd';
const Intro = () =>{
    return(
        <center><Card title="International Greenhouse Gas Emissions Dataset Visualization" style={{ width: 1000 }}>
        GHG (Greenhouse Gas) emission inventories are developed by Parties to the Convention using scientific and methodological guidance from the Intergovernmental Panel on Climate Change (IPCC), such as 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Revised Guidelines for National Greenhouse Gas Inventories (1996), IPCC Good Practice Guidance and Uncertainty Management in National Greenhouse Gas Inventories (2000) and IPCC Good Practice Guidance on Land Use, Land-use Change and Forestry (2003).<a href="https://www.kaggle.com/unitednations/international-greenhouse-gas-emissions" target='_blank'>(As per Kaggle)</a>
        <br></br>
        So you may not find information regarding a few countries, here.
              </Card></center>
    )
}
export default Intro;