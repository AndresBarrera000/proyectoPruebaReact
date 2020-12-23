import React, {useState} from 'react';
import LoginForm from './components/loginForm';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState(""); 

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logeado con exito!!");
    }else{
      console.log("Error, correo o contraseña Incorrectos");
    }
  }
  const Logout = () => {
    console.log("Logout");
  }
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button></button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
