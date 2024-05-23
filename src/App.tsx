import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/pages/UserPage';
import TodosPage from './components/pages/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/pages/UserItemPage';
import TodosItemPage from './components/pages/TodosItemPage';
import EventsExample from './components/EventsExample';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>Пользователи</NavLink>
          <NavLink to='/todos'>Список дел</NavLink>
        </div>
        <Routes>
          <Route path={'/users'}>
            <Route path='/users' element={<UserPage/>}/>
          </Route>
          <Route path={'/todos'}>
            <Route path='/todos' element={<TodosPage/>}/>
          </Route>
          <Route path={'/users/:id'}>
            <Route path='/users/:id' element={<UserItemPage/>}/>
          </Route>
          <Route path={'/todos/:id'}>
            <Route path='/todos/:id' element={<TodosItemPage/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
    
}

export default App;