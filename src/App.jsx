
import PropTypes from 'prop-types'

import React from 'react';  
import UserGreeting from './UserGreeting';

function App() {
 
 return(<>
 <UserGreeting isLoggedIn = {true} username = "Anuj">

 </UserGreeting>

 <UserGreeting isLoggedIn = {true}/>
  </>
 );


export default App
