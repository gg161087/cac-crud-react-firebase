import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Show } from './components/Show.jsx';

function App() {   
    return (
        <div className="App">  
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Show/>}></Route>
                    <Route path='/create' element='Create'></Route> 
                    <Route path='/edit/:id' element='Edit'></Route>
                    <Route path='/delete/:id' element='Delete'></Route> 
                </Routes>
            </BrowserRouter>          
        </div>
    );
}

export default App
