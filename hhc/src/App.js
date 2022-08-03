import React, {useState} from 'react'
import './App.css'


const App = () => {
  let [data, setData] = useState({
    firstname : '',
    secondname : '',
    email : '',
    password : '',
    confirmPassword : ''
  })
  let {firstname,secondname,email,password,confirmPassword} = data

  let [edit,setEdit] = useState({
    firstname : '',
    secondname : '',
    email : '',
    password : '',
    confirmPassword : ''
  })
  

  let onChangeHandler = e => {
    setData({...data, [e.target.name]:e.target.value})
  }
  let onSubmitHandler = e => {
    e.preventDefault()
    if(password!=confirmPassword){
      alert('Password is not match')
    }
    if(password.length<8){
      alert('password must contain 8 characters')
    }
   console.log(data)
  }
  return (
    <div>
      <center>  
        
        <form onSubmit={onSubmitHandler} className="signup">
            <h1 id='heading'>Signup Form</h1>
          <div>
            <input className="input" type="text" name='firstname' value={firstname} placeholder='FirstName' onChange={onChangeHandler} /> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(edit)}>edit</button> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData()}>delete</button> <br />
          </div>

          <div>
            <input className="input" type="text" name='secondname' value={secondname} placeholder='SecondName' onChange={onChangeHandler} /> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>edit</button> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>delete</button> <br />
          </div>

          <div>
            <input className="input" type="email" name='email' value={email} placeholder='Email-Id' onChange={onChangeHandler} /> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>edit</button> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>delete</button> <br />
          </div>

          <div>
            <input className="input" type="password" name='password' value={password} placeholder='Password' onChange={onChangeHandler} /> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>edit</button> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>delete</button> <br />
          </div>

          <div>
            <input className="input" type="password" name='confirmPassword' value={confirmPassword} placeholder='ConfirmPassword' onChange={onChangeHandler} /> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>edit</button> &nbsp;&nbsp; 
            <button className="input" onClick={() => setData(data+'')}>delete</button> <br />
          </div>

            <input className="input" type= "submit" value="submit" />
        </form>
      </center>
    </div>
  )
  }

export default App