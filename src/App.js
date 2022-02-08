import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import Courselist from './component/Courselist';
import Cour from './component/Cour';
import Course1 from './component/Course1';

function App() {
  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-12 myheader'>
          <Header />
        </div>
      </div>
      <div className='row'>
        <div className='col-2 mynavbar'>
          <NavBar />
        </div>

        <div className='col-10 my-body'>
         
          {/* <Courselist name="Angular" trainer="Vikas" startDate="15/02/2022" desc="Only for new join"/>
          <Courselist name="React" trainer="Vishal" startDate="01/02/2022" desc="Anyone can join"/>
          <Courselist name="Spring" trainer="Rahul" startDate="25/02/2022" desc="Anyone can join"/>
          <Courselist name="Java" trainer="Shikar" startDate="26/02/2022" desc="Anyone can join"/>
          <Courselist name="Node" trainer="Rajesh" startDate="27/02/2022" desc="Anyone can join"/>
          <Courselist name="JUnit" trainer="Raj" startDate="29/02/2022" desc="Anyone can join"/> */}
          <Course1/>
        </div>
      </div>
    </div>
  );
}

export default App;
