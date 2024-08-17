import { useState } from 'react'
import './App.css'
import { Popup } from './components/popup/popup';

function App() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    message:"",
    type:"",
    ruleAccebtance:false
  });

  function onHandelSubmit(event){
    event.preventDefault();
    console.log(formData)
  }

  function onHandelChange(event){
    var value = event.target.value;
    const key = event.target.name;

    if(event.target.type =="checkbox"){
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [key] :value
    })

  }

  return (
<form onSubmit={onHandelSubmit}>
    <h1>Contact Us</h1>

    <div className="name">
      <div className="firstname">
        <label htmlFor="firstName">First Name <span className='star'>*</span></label>
        <input 
        name="firstName" 
        id="firstName" 
        value={formData.firstName}
        onChange={onHandelChange}
        required />
      </div>

      <div className="lastname">
        <label htmlFor="lastName">last Name <span className='star'>*</span></label>
        <input 
        name="lastName" 
        id="lastName" 
        value={formData.lastName}
        onChange={onHandelChange}
        required />
      </div>
    </div>

    <div className="email">
      <label htmlFor="email">Email Address <span className='star'>*</span></label>
      <input 
      type='email'
      name="email" 
      id="email" 
      value={formData.email}
      onChange={onHandelChange}
      required />
    </div>

    <div className='queryType'>
      <label>Query Type <span className='star'>*</span></label>
      <div className="types">
        <div className="typeone">
        <input 
        type='radio'
        name="type" 
        value="typeOne"
        onChange={onHandelChange}
          />
        <label>General Enquiry</label>
        </div>
        <div className="typetwo">
        <input 
        type='radio'
        name="type" 
        value="typeTwo"
        onChange={onHandelChange} 
        />
        <label>Support Request</label>
        </div>
      </div>
    </div>

      
    <div className="message">
      <label>Message <span className='star'>*</span></label>
      <textarea
      name="message" 
      id="message" 
      value={formData.message}
      onChange={onHandelChange} 
      />
    </div>

    <div className='rules'>
      <input 
      type='checkbox'
      name="ruleAccebtance" 
      onChange={onHandelChange} 
      required/>
      <label htmlFor="ruleAccebtance">
        I Consent to being contacted by the team <span className='star'>*</span></label>
    </div>

    <div className="btn">
    <button 
      disabled={!formData.ruleAccebtance } 
      className='submitBtn'
      onClick={() => setOpen(true)}
      >Submit</button>   
      {open ? <Popup text="Message sent!" closePopup={() => setOpen(false)} /> : null}   
    </div>

    </form>
  )
}

export default App
