import React , {useState} from 'react';
import {useEffect} from 'react';
import data from '../output.json';
import { Chart } from 'react-charts'
import { Row, Col, Card, Select , Button, Typography, Tooltip} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
import setPath from '../setpath';
import sortFunction from './sort';
const { Option } = Select;

const Graph= props =>{
    const [countryList,setcountryList]=useState([]); // initializing country list for dropdown
    const [categoryList,setcategoryList]=useState({}); // initializing category list for dropdown
    const [countrySelect,setcountrySelect]=useState(''); // initializing value of country to be sent to url
    const [categorySelect,setcategorySelect]=useState(''); // initializing value of category to be sent to url
    const [dataChartList,setdataChartList]=useState([]); // initializing data array for plottting graph
    const [progress,setProgress]=useState(false); // checking value loading or not, or data present or not
const updateCountry = value => setcountrySelect(value); // updates countrySelect
const updateCategory = value => setcategorySelect(value); // updates categorySelect
// updates parameter of url
const updationValue=()=>
{
    var b=[];
    const url= setPath({ country: countrySelect,category: categorySelect  });
    props.history.push(`?${url}`); // sets parameter values of url
    for(var k=0;k<data.data.length;k++)
    {
        var a=[];
        // for plotting chart
        if(data.data[k].country_or_area===countrySelect && data.data[k].category=== categorySelect)
        {
           a.push(parseInt(data.data[k].year)); // pushes each year to local varaible a (array)
           a.push(parseFloat(data.data[k].value)); // pushes each value to local variable a (array) after changing it from string to float
           b.push(a); // pushes 2d array a to b (array)
        }
       
    }
    console.log('map',b.sort(sortFunction));
    setdataChartList(b.sort(sortFunction)); //updates dataChartList and b.sort(sortFunction) sorts the list data in ascending order
    console.log('datachartlist',dataChartList);
         setProgress(true); // update progress

}
// dataChart contains values for plotting graph
 const dataChart = React.useMemo(
    () => [
      {
        label: 'Value of emission',
        data: dataChartList,
      },
    ],
    [dataChartList,setProgress]
  )
 // axes is for the axes of the graph
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom',show:[1990,1991] },
      { type: 'linear', position: 'left' }
    ],
    [dataChartList,setProgress]
  )
  // called when function unmounts to collect values of country and category for the respective dropdowns
    const country =()=>{
        var a=[];
        var b={};
        for ( var i=0;i<data.data.length;i++)
        {
            a.push(data.data[i].country_or_area); //pushing country name to local variable a (array)
            //pushing key and value pair to local variable b (object)
            if (data.data[i].category === 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                b['carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent']='CO2';
               }
               else if (data.data[i].category === 'greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                 b['greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent']='Greenhouse Gases';
                 }
                 else if (data.data[i].category === 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                    b['methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent']='CH4';
                 }
                 else if (data.data[i].category === 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                    b['nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent']='N2O';
                 }
                 else if(data.data[i].category === 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent'){
                    b['sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent']='SF6';
                 }
                 else if(data.data[i].category === 'hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent')
                 {
                    b['hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent']='HFCs';
                 }
                 else if(data.data[i].category === 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent'){
                    b['unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent']='HFCs & PFCs unspecified mix';
                 }
                 else if(data.data[i].category === 'nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent')
                 {
                    b['nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent']='NF3';
                 }
                 else if (data.data[i].category === 'perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent')
                 {
                    b['perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent']='PFCs';
                 }
                 else if (data.data[i].category === 'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent')
                 {
                    b['greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent']='Greenhouse Gases(including indirect CO2)';
                 }
        }
        a = a.filter(function(item, pos) {
            return a.indexOf(item) == pos; //filters the duplicate values
        })
        setcountryList(a); // updating countryList
        setcategoryList(b); //updating categoryList
        
    }
    //called when the function unmounts
    useEffect(() => {
        console.log('data',data.data);
        country();
        console.log('countrylist',categoryList);
        console.log('mount it!');
    }, []);
    console.log('datachartList',dataChartList)
    console.log('countrylist',categoryList);
    return(
        <div id="search">
        <br></br>
         <br></br>
      <Row justify="space-around">
 
   <Col span={8}>
   <center><Card title="Input Country and Parameter" style={{ width: 300 }} extra={<Tooltip title="Plot showing year along X-axis and values of emission of the parameter along Y-axis">
              <InfoCircleOutlined style={{ color: 'blue' }} />
            </Tooltip>}>
   
            
   <Select style={{ width: 200 }} placeholder='Select Country' showSearch onChange={updateCountry}>
       {countryList.map(country=> <Option key={country} value={country}>{country}</Option>)}
    </Select>
    <br></br>
    <br></br>
    <Select style={{ width: 200 }} placeholder='Select Parameter(Category)' showSearch onChange={updateCategory}>
    {Object.entries(categoryList).map(([key, value]) => (
                    <Option key={key} value={key}>
                      {value}
                    </Option>
                  ))}
    </Select>
    <br></br>
    <br></br>
    <Button type="primary" onClick={updationValue}>Search</Button></Card></center>
     </Col>
      
   <Col span={13}>
   {progress===false ? (<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'300px'}}>
      <h3 style={{textAlign:'center'}}>Select country and parameter(category of emission) and see how the values of emission have changed over years! Simply select the values and see the line chart appearing in this space.</h3>
    </div>):(<div>{dataChartList.length===0 ? (<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'300px'}}>
      <h3 style={{textAlign:'center'}}>Sorry! No data to show.</h3>
    </div>):(<div
      style={{
        width: '700px',
        height: '300px'
      }}
      className="chart"
    >
      <Chart data={dataChart} axes={axes} tooltip/>
    </div>)}</div>)}
    <br></br>
    <br></br></Col>
 </Row>
        
     
       <br></br>
       
       
     </div>
    );
}
export default Graph ;