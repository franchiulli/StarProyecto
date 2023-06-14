import React from 'react';
import NavbarComponent from './componentes/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componentes/footer';
import MainContent from './componentes/content';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MainContent/>
      <Footer />
    </div>
  );
}

export default App;
