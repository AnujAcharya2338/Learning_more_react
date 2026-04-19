
import React from 'react';  
import Student from "./Student";

function App() {
 
 return(<>
 <Student name="Luffy" age={20} isStudent={false} />
 <Student name="Zoro" age={21} isStudent={false} />
 <Student name="Nami" age={18} isStudent={true} />
 <Student name="Ussop" age={22} isStudent={false} />
 <Student name="Sanji"/>
  </>
 );

}

export default App
