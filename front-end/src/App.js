import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import { Route,Routes } from 'react-router-dom';
import Book from './components/Book.jsx';
import AddBook from './components/AddBook.jsx';
import Contact from './components/Contact.jsx';
import UpdateBook from './components/UpdateBook.jsx';
import ViewMore from './components/ViewMore.jsx';




function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/viewmore/:id' element={<ViewMore/>}/>
        <Route path='/updatebook/:id' element={<UpdateBook/>}/>
     

      </Routes>
    </div>
  );
}

export default App;
