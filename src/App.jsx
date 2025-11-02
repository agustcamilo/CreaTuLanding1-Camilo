import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      {/* Enviamos una prop string al ItemListContainer */}
      <ItemListContainer greeting="¡Bienvenid@ a ByteStore! Explora nuestras ofertas ✨" />
    </>
  )
}

export default App
