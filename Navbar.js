import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        
      </ul>
     {/* <div className='d-flex'>
      <div className='bg-primary rounded mx-2' onClick={()=>{props.togglemode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      <div className='bg-danger rounded mx-2'  onClick={()=>{props.togglemode('danger')}} style={{height:'30px', width:'30px'}}></div>
      <div className='bg-success rounded mx-2' onClick={()=>{props.togglemode('success')}} style={{height:'30px', width:'30px'}}></div>
      <div className='bg-warning rounded mx-2'  onClick={()=>{props.togglemode('warning')}} style={{height:'30px', width:'30px'}}></div>
     </div> */}
     
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-5`} >
  <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.togglemode()}} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable dark mode':'Enable light mode'}</label>
</div>


    </div>
  </div>
</nav>
  )
}

