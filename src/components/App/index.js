import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../App.css';
import Header from '../Header';
import Leading from '../Leading';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../SignUp';
import ErrorPage from '../ErrorPage';
import ForgetPassword from '../ForgetPassword';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Leading />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;



// // Ici on a la version 5 de react-router-dom  npm install react-router-dom@5.3.3
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch , Routes  } from 'react-router-dom';
// import '../../App.css';
// import Header from '../Header';
// import Leading from '../Leading';
// import Footer from '../Footer';
// import Welcome from '../Welcome';
// import Login from '../Login';
// import Signup from '../SignUp';
// import ErrorPage from '../ErrorPage';

// function App() {
//   return (
  
//       <Router> 

//         <Header />

//         <Switch>
//           <Route exact path='/' component={Leading} />
//           <Route path='/welcome' component={Welcome} />
//           <Route path='/login' component={Login} />
//           <Route path='/signup' component={Signup} />
//           <Route component={ErrorPage} />
//         </Switch>

//         <Footer />
//       </Router>

//   );
// }

// export default App;