import './App.css'
import Chart from './components/Chart/Chart'
// import DaisyNav from './components/NavBar/DaisyNav'
import Navbar from './components/NavBar/Navbar'
import PhonesApi from './components/PhonesApi/PhonesApi'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <PriceOptions />
      <Chart />
      <PhonesApi />
    </>
  )
}

export default App
