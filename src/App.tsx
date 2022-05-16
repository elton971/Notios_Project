import { AddPage } from './Components/AddPage'
import { AssuntoImg } from './Components/AssuntoImg'
import { ButtonAdd } from './Components/ButtonAdd'
import { Duvidas } from './Components/Duvidas'
import { Navbar } from './Components/Navbar.'
import { Perfil } from './Components/Perfil'
import { SettingContaner } from './Components/SettingContaner'
import { Tasks } from './Components/Tasks'
import { Utilits } from './Components/Utilits'
import style from './Styles/App.module.css'

function App() {

  return (
    <div className={style.appContainer}>
      <div className={style.sidebar}>
        <Perfil/>
        <SettingContaner/>
        <AddPage/>
        <Utilits/>
        <ButtonAdd/>
      </div>
      <div className={style.centerContainer}>
          <Navbar/>
          <AssuntoImg/>
          <Tasks/>
          <Duvidas/>
      </div>
    </div>
  )
}

export default App
