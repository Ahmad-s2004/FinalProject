import React, { useState } from 'react'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [img, setImg] = useState('')

   let saveData = async(e) =>{
    e.preventDefault()
    let res = await fetch("http://localhost:4000/api/v1/auth/register",{
      method: "post",
      body: JSON.stringify({name, email, password}),
      headers: {
        "Content-Type" : "application/json"
      },
    })
    res = await res.json()
  }

  return (
    <div>
      <form action="/upload" method="POST" enctype="multipart/form-data">
      <div className="container text-center mt-5">
        <input type="text"  className='w-25 m-3 p-1' onChange={(e)=>setName(e.target.value)} placeholder='Name' />
        <br />
        <input type="email"  className='w-25 m-3 p-1' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
        <br />
        <input type="password"  className='w-25 m-3 p-1' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
        <br />
        {/* <form action="/upload" method="POST" enctype="multipart/form-data"> */}
        {/* <input type="file" name="img" onChange={(e)=>setImg(e.target.value)}/> */}
        {/* <input type="submit"/> */}
        {/* </form> */}
        <br />
        <button className='btn btn-success' type='submit' onClick={saveData}>Save Data</button>
        {/* <input type="submit" className='btn btn-success' onClick={saveData}/> */}

      </div>
      </form>
    </div>
  )
}

export default Register