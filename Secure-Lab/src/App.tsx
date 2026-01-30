import './App.css'
import MainLayout from './layout/MainLayout';
import HomePage from './Pages/home.Page';
import { Routes , Route } from 'react-router-dom';
import About from './Pages/about.Page';
import SecureLab from './Pages/secureLab.Page';
import Contact from './Pages/contact.Page';
import CeaserPage from './Pages/ceaser.Page';
import MonoalphaPage from './Pages/monoalpha.Page';
import VigenerPage from './Pages/vigener.Page';
import RowTransPage from './Pages/rowTrans.Page';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path='/lab' element={<SecureLab />} />
          <Route path='contact' element={<Contact />} />
          <Route path='ceaser' element={<CeaserPage />} />
          <Route path='monoalphabetic' element={<MonoalphaPage />} />
          <Route path='vigener' element={<VigenerPage />} />
          <Route path='row-transposition' element={<RowTransPage />} />
        </Route>
      </Routes>
    </>
    
  )
}

export default App
