import {useState} from 'react';
import CustomFrom from './components/CustomFrom'; 

function App() {
  const [count, setCount] = useState([]);   
    return (
    <div className="container">
        <header>
            <h1>ToDo App</h1>
        </header>
        <CustomFrom />
    </div>
  );
}
export default App;