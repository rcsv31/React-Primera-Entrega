import './App.css'
import ItemListContainer from './assets/components/ItemListContainer'
import NavBar from './assets/components/NavBar'

function App() {

  return (
    <>
    <div>
    <NavBar/>
    <ItemListContainer className='item-list-container2' greetings="Bienvenido a Mayju, tu tienda de sellos de caucho."/>
    </div>
    </>
  )
}

export default App
