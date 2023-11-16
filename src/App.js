import './App.scss';
import Home from '../src/components/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import  CourseContent from '../src/components/CourseContent';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <CourseContent/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
