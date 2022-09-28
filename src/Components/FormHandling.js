import React, { useState } from 'react'

const FormHandling = () => {
  const country=['Lucknow','Mumbai','Pune','Bangalore','Kanpur']
  var sletters =/^\w+([ \.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,pwdv=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  var[email,setEmail]=useState('')
  var[pwd,setPwd]=useState('')
  var[select,setSelect]=useState('')
  var[check,setCheck]=useState('')
  var[msg1,setMsg1]=useState('')
  var[msg2,setMsg2]=useState('')
  var[msg3,setMsg3]=useState('')
  var[msg4,setMsg4]=useState('')
  var[msg,setMsg]=useState('')
  const[arr,setArr]=useState([])

  const emailHandler=(e)=>{
    email = e.target.value
    if(email!==''){
    if(email.match(sletters)){
      setEmail(email)
      setMsg1('')
    }
    else{
      setMsg1('invalid email')
    }
  }
  else{
    setMsg1('fill Detail')
  }
  }
  const pwdHandler=(e)=>{
    pwd = e.target.value
    if(pwd!==''){
      if(pwd.match(pwdv)){
        setPwd(pwd)
        setMsg2('')
      }
      else{
        setMsg2('invalid Password')
      }
    }
    else{
      setMsg2('fill Details')
    }
  }
  const selectHandler=(e)=>{
    select = e.target.value
    if(select!==''){
      setSelect(select)
    }
    else{
      setMsg3('Select Country')
    }
  }
  const checkHandler=(e)=>{
    check = e.target.value
    if(check!==''){
      setCheck(check)
    }
  }
  const btnHandler=()=>{
    if(email!=='' && pwd!=='' && select!=="" && check!==''){
      var obj={EMAIL:email,PWD:pwd,COUNTRY:select,CHECK:check}
      arr.push(obj)
      console.log(arr)
      setArr([...arr])
    setMsg('')
    alert('successfully submitted')
    }
    else{
      setMsg('Fill All details Correctly')
    } 
  }

  return (
    <div id='form'>
      <span style={{fontSize:'1.5rem',textAlign:'center',marginTop:'4%'}}>Create Account</span>
      <span style={{color:'red'}}>{msg}</span>
      <div className='innerDiv'>
        <label>Email:</label>
        <input type='text' onChange={emailHandler}/>
        <span>{msg1}</span>
      </div>
      <div className='innerDiv'>
        <label>Password:</label>
        <input type='password' onChange={pwdHandler}/>
        <span>{msg2}</span>
      </div>
      <div className='innerDiv'>
        <label>Country:</label>
        <select onChange={selectHandler}>
          <option></option>
          {country.map((item)=>
            <option>{item}</option>
          )}
        </select>
      </div>
      <div style={{margin:'2%'}}>
        <input type='checkbox' onChange={checkHandler}/>
        I Accept the terms and service
      </div>
      <button id='btn' onClick={btnHandler}>Submit</button>
    </div>
  )
}

export default FormHandling