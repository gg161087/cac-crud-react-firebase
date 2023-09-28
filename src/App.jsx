import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {   
    return (
        <div className="App">  
            <BrowserRouter>
                <Routes>
                    <Route path='/' element='Shows'></Route>
                    <Route path='/create' element='Create'></Route> 
                    <Route path='/edit/:id' element='Edit'></Route> 
                </Routes>
            </BrowserRouter>          
        </div>
    );
}

export default App
