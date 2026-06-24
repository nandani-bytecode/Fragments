import './App.css'
import Fooditems from './components/Fooditems';
import ErrorMsg from './components/ErrorMsg';
import Container from './components/Container';
import UserFoodInput from './components/UserFoodInput';


function App(){

  let fooditems = ["dal","green vegetables","protein"];
  return (
   <>
      <Container>
        <div className='Food-heading'>Healthy Food</div>
        <UserFoodInput></UserFoodInput>
        <ErrorMsg></ErrorMsg>
        <Fooditems></Fooditems>
      </Container>
       
   </>
  )
}
export default App;