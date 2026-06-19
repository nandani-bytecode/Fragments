import './App.css'
import Fooditems from './components/Fooditems';
import ErrorMsg from './components/ErrorMsg';


function App(){
  let fooditems = ["dal","green vegetables","protein"];
  return (
   <>
       <div>Healthy Food</div>
        <ErrorMsg></ErrorMsg>
        <Fooditems></Fooditems>
   </>
  )
}
export default App;