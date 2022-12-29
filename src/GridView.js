import { DataGrid,editable } from '@mui/x-data-grid';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import  { useDispatch } from "react-redux";
import {getData} from "./redux/CountrySlice";
import {useSelector } from 'react-redux';

import React from 'react';

function GridView() {
 
const [loading,setLoading]=useState(true);
const dispatch = useDispatch()
const Task=useSelector((state)=>state.Country.data.data)


  const columns = [
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'capital', headerName: 'Capital', width: 150, editable: true },

    { field: 'subregion', headerName: 'Subregion', width: 150, editable: true },
    { field: 'region', headerName: 'Region', width: 450, editable: true, },
    { field: 'population', headerName: 'Population', width: 450, editable: true, },
    { field: 'area', headerName: 'Area', width: 450, editable: true, },
    { field: 'timezones', headerName: 'Time Zones', width: 450, editable: true, },
    { field: 'borders', headerName: 'Borders', width: 450, editable: true, },
    {
      field: 'flag',
      headerName: 'Image',
      width: 150,
      editable: true,

      renderCell: (params) => <img height='30px' width='40px' src={params.value} alt='/' />, // renderCell will render the component
    },
  ];
  // const fetchData = async () => {
  //   const res = await fetch('https://restcountries.com/v2/all')
  //   const data = await res.json()
  //   setTask(data)
  //   setLoading(false)
  // }

  const gettingRedux=()=>{
if(Task?.length===0)
{

    dispatch(getData())
}
  }
  useEffect(()  => {
   
    gettingRedux()
   
dispatch(getData())
  

  }, [])

  return (
    
    <div style={{ height: 400, width: '90%' }}>



      <DataGrid

        columns={columns}
        rows={Task}
        checkboxSelection
        pageSize={25}
        getRowId={row => Math.random()}
        editable={true}

      />
      
   




    </div>
    

  );
}

export default GridView;
