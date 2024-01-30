import React from 'react'
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import { DeleteAllUser } from './components/DeleteAllUser';
import DisplayUsers from './components/DisplayUsers';

const App = () => {
  return (
   <>
   <Navbar/>
   <UserDetails/>
   <DeleteAllUser/>
   <DisplayUsers/>
   </>
  )
}

export default App;



