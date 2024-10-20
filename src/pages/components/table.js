import React from 'react';
import data from '../output.json'
import { Table, Tag } from 'antd';
import { Card } from 'antd';
//code for table representation
const columns = [
    {
      title: 'Country',
      dataIndex: 'country_or_area',
      key: 'country_or_area',
      responsive: ['sm'],
      width:'50%',
      filters: [
        { text: 'Australia', value: 'Australia' },
        { text: 'Austria', value: 'Austria' },
        { text: 'Belarus', value: 'Belarus' },
        { text: 'Belgium', value: 'Belgium' },
        { text: 'Bulgaria', value: 'Bulgaria' },
        { text: 'Canada', value: 'Canada' },
        { text: 'Croatia', value: 'Croatia' },
        { text: 'Cyprus', value: 'Cyprus' },
        { text: 'Czech Republic', value: 'Czech Republic' },
        { text: 'Denmark', value: 'Denmark' },
        { text: 'Estonia', value: 'Estonia' },
        { text: 'European Union', value: 'European Union' },
        { text: 'Finland', value: 'Finland' },
        { text: 'France', value: 'France' },
        { text: 'Germany', value: 'Germany' },
        { text: 'Greece', value: 'Greece' },
        { text: 'Hungary', value: 'Hungary' },
        { text: 'Iceland', value: 'Iceland' },
        { text: 'Ireland', value: 'Ireland' },
        { text: 'Italy', value: 'Italy' },
        { text: 'Japan', value: 'Japan' },
        { text: 'Latvia', value: 'Latvia' },
        { text: 'Liechtenstein', value: 'Liechtenstein' },
        {text: 'Lithuania' , value: 'Lithuania'},
        {text : 'Luxembourg' , value:'Luxembourg'},
        {text:'Malta', value:'Malta'},
        {text:'Monaco',value:'Monaco'},
        {text:'Netherlands',value:'Netherlands'},
        {text:'New Zealand',value:'New Zealand'},
        {text:'Norway',value:'Norway'},
        {text:'Poland',value:'Poland'},
        {text:'Portugal',value:'Portugal'},
        {text:'Romania',value:'Romania'},
        {text:'Russian Federation',value:'Russian Federation'},
        {text:'Slovakia',value:'Slovakia'},
        {text:'Slovenia',value:'Slovenia'},
        {text:'Spain',value:'Spain'},
        {text:'Sweden',value:'Sweden'},
        {text:'Switzerland',value:'Switzerland'},
        {text:'Turkey',value:'Turkey'},
        {text:'Ukraine',value:'Ukraine'},
        {text:'United Kingdom',value:'United Kingdom'},
        {text:'United States of America',value:'United States of America'},
      ],
      onFilter: (value, record) => {
        return record.country_or_area.includes(value);
      },
    },
    {
      title: 'Time Period',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
      responsive: ['sm'],
      width:'50%',
      filters: [
        { text: '1990', value: '1990'},
        {text:'1991',value:'1991'},
        {text:'1992',value:'1992'},
        {text:'1993',value:'1993'},
        {text:'1994',value:'1994'},
        {text:'1995',value:'1995'},
        {text:'1996',value:'1996'},
        {text:'1997',value:'1997'},
        {text:'1998',value:'1998'},
        {text:'1999',value:'1999'},
        {text:'2000',value:'2000'},
        {text:'2001',value:'2001'},
        {text:'2002',value:'2002'},
        {text:'2003',value:'2003'},
        {text:'2004',value:'2004'},
        {text:'2005',value:'2005'},
        {text:'2006',value:'2006'},
        {text:'2007',value:'2007'},
        {text:'2008',value:'2008'},
        {text:'2009',value:'2009'},
        {text:'2010',value:'2010'},
        {text:'2011',value:'2011'},
        {text:'2012',value:'2012'},
        {text:'2013',value:'2013'},
        {text:'2014',value:'2014'},
 ],
      onFilter: (value, record) => {
        return record.year.includes(value);
      },
      
    },
    {
        title: 'Value(in kilotones CO2 equivalent)',
        dataIndex: 'value',
        key: 'value',
        sorter: (a, b) => a.value - b.value,
        responsive: ['sm'],
        width:'50%',
       
      },
      {
        title: 'Category of Emission',
        dataIndex: 'category',
        key: 'category',
        responsive: ['sm'],
        width:'50%',
        render: category =>{
            let color, cat;
            if (category === 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                color = 'red';
                cat = 'CO2';
              }
              else if (category === 'greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent') {
                  color = 'blue';
                  cat = 'Greenhouse Gases';
                }
                else if (category === 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                    color = 'lime' ;
                    cat = 'CH4';
                }
                else if (category === 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent'){
                    color = 'volcano' ;
                    cat = 'N2O';
                }
                else if(category === 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent'){
                    color = 'purple';
                    cat = 'SF6'
                }
                else if(category === 'hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent')
                {
                    color = 'pink';
                    cat = 'HFCs';
                }
                else if(category === 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent'){
                  color = 'magenta';
                  cat = 'HFCs & PFCs unspecified mix';
                }
                else if(category === 'nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent')
                {
                  color = 'gold';
                  cat = 'NF3';
                }
                else if (category === 'perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent')
                {
                  color = '#108ee9';
                  cat = 'PFCs';
                }
                else if (category === 'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent')
                {
                  color = 'geekblue';
                  cat = 'Greenhouse Gases(including indirect CO2)'
                }
                return(
                    <Tag color={color} key={category}>
                    {cat}
                  </Tag>
                )
        },
        filters: [
            { text: 'CO2', value: 'carbon_dioxide_co2_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'Greenhouse Gases', value: 'greenhouse_gas_ghgs_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'CH4', value: 'methane_ch4_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'N2O', value: 'nitrous_oxide_n2o_emissions_without_land_use_land_use_change_and_forestry_lulucf_in_kilotonne_co2_equivalent' },
            { text: 'SF6', value: 'sulphur_hexafluoride_sf6_emissions_in_kilotonne_co2_equivalent' },
            { text: 'HFCs & PFCs unspecified mix', value: 'unspecified_mix_of_hydrofluorocarbons_hfcs_and_perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent' },
          {text:'PFCs', value:'perfluorocarbons_pfcs_emissions_in_kilotonne_co2_equivalent'},
          {text :'NF3',value:'nitrogen_trifluoride_nf3_emissions_in_kilotonne_co2_equivalent'},
          {text:'HFCs',value:'hydrofluorocarbons_hfcs_emissions_in_kilotonne_co2_equivalent'},
          {text:'Greenhouse Gases(including indirect CO2)',value:'greenhouse_gas_ghgs_emissions_including_indirect_co2_without_lulucf_in_kilotonne_co2_equivalent'},

          ],
          onFilter: (value, record) => {
            return record.category.includes(value);
          },
        
      },
    
  ];
const Show=()=>{
    console.log('data',data.data)
    return(
<div>
    <center>
<Card title="GreenHouse Gases Database" style={{ width: 1500 }}>
<Table bordered columns={columns} dataSource={data.data} scroll={{ y: 240 , x: 1300}} /></Card></center>
</div>

    )
}
export default Show