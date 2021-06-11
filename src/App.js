
import Contacts from "./Components/Contacts";
  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header  branding="CONTACT MANAGER"/>
     <Contacts name="CALEB KWASI DUNYO" 
      email="Kwasi@gmail.com"
      phone="020-529-4019"/>
     <Contacts name="Jona" 
     email="Jona@gmail.com"
      phone="050-478-2345"/>
     <Contacts name="Kess" 
     email="kesse@gmail.com" 
     phone="030-875-9875" />
    </div>
    
  );
}

export default App;
