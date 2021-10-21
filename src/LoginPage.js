import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const currentLogin = useSelector(state => state[0].login);
  const currentPassword = useSelector(state => state[0].password);
  const [inputs, setInputs] = useState({ login: '', password: '' });
  const [valids, setValids] = useState({ loginValid: false, passwordValid: false });
  const { loginValid, passwordValid } = valids;
  const { login, password } = inputs;

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(inputs => ({ ...inputs, [name]: value }));
    validateField(name, value)
  }

  const validateField = (fieldName, value) => {
    switch(fieldName) {
      case 'login':
        setValids(valids => ({ ...valids ,loginValid: value === currentLogin }));
        break;
      case 'password':
        setValids(valids => ({ ...valids, passwordValid: value === currentPassword }));
        break;
      default:
        break;
    }
  }

    return (
      <form className="form" style ={{ width: '500px', margin: 'auto' }}>
        <div>
          <label htmlFor="login">Login</label>
          <input type="login" required className="form-control" name="login"
            placeholder="Login"
            value={login}
            onChange={handleUserInput}  />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={password}
            onChange={handleUserInput}  />
        </div>
        <Link to='/profile'><button type="submit" className="btn btn-primary" disabled={!(loginValid && passwordValid)}>Войти</button></Link>
      </form>
    )
}

export default LoginPage;
