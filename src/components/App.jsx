
import { Route, Routes } from 'react-router-dom';
// import { HomePage } from './pages/HomePage';
import { ToDoPage } from './pages/TodoPage';
import { NewsPage } from './pages/NewsPage';
import { Layout } from './Layuot/Layout';
import { ToDoDetails } from './ToDo/ToDoDetails';

import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="todo/:id" element={<ToDoDetails />} />
      </Route>
    </Routes>
  );
};
