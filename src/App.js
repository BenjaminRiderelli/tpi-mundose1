import logo from './logo.svg';
import {Link} from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Form from './components/Form';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Form/>
      <Footer/>

    </div>
  );
}

export default App;
