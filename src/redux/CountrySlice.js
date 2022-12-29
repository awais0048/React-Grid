import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'; 

export const getData=createAsyncThunk('getData',(args,{
    rejectWithValue
})=>{
    try {
        const data= axios.get("https://restcountries.com/v2/all")
        return data;
    }
    catch(error)
    {
rejectWithValue(error.response.data)
    }
})



 const CountrySlice = createSlice({
  name: 'data',
  initialState: {
   data:[],
   isSuccess:false,
   message:"",
   loading:false
  },
  reducers: {
   
   
 
  },
  extraReducers: {
    [getData.pending]:(state,{payload})=>{
        state.loading=true;
      


    },
    [getData.fulfilled]:(state,{payload})=>{
        state.loading=false;
        state.data=payload;
        console.log(payload)
      state.isSuccess=true;


    },
    [getData.rejected]:(state,{payload})=>{
        state.message=payload
      
      state.loading=false;
      state.isSuccess=false;


    },
    
  }

})

// Action creators are generated for each case reducer function


export default CountrySlice;