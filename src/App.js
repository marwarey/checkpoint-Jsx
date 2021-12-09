import './App.css'
import {Navigation} from './compenent/Navigation';
import Footer from './compenent/Footer'
import About from './compenent/About';
import ReactPlayer from 'react-player';
function App() {


return(
<div>
<Navigation/>
<About/>
<ReactPlayer controls width='200' height='300'  url="https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=484s"/>
<Footer/>
</div>



    )


}

export default App