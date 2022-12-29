import './App.css';
import { useState } from 'react';
import Kanban from './Kanban';
import GridView from './GridView';
import './Toogle.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'



function App() {

const [Toogle,setToogle]= useState(true)
function ToogleStateChange(){
if(Toogle)
{
setToogle(false);
}

else{
  setToogle(true)
}
}  
 return(
   <div>
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>


     <label className="switch">
  <input type="checkbox"  onClick={()=>ToogleStateChange()}/>
  <span className="slider"></span>

</label>
{ Toogle? <GridView/>:<Kanban/>}
</ThemeProvider>
</div>

    );
}

export default App;
