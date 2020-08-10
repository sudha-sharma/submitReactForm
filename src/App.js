import React, { Component } from 'react';
import { FormGroup, Input,} from 'reactstrap';
import Thankyou from "./Thankyou.js";
import './App.css';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      phone:"",
      address:"",
      address2:"",
      pincode:"",
      radio1: "",
      city: ["Select City","Bangalore", "Delhi", "Panjab", "Pune", "Hydrabad"],
      selectedCity: "",
      states: ["Select States","Karnataka","Maharastra", "Delhi", "Telangana"],
      selectedStates: "",
      nationality: ["Select Nationality","Indian", "Others"],
      slectedNationality:"",
      check1: true,
      check2: false,
      check3: false,
      submitted:false
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let profession;
    if(this.state.check1){
      profession= "Student"
    }else{
      profession= "Working"
    }
    const selectedValue={
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.email,
      Password: this.state.password,
      Phone: this.state.phone,
      Address: this.state.address,
      Address2: this.state.address2,
      City: this.state.selectedCity,
      State: this.state.selectedStates,
      Nationality: this.state.slectedNationality,
      Gender: this.state.radio1,
      Profession:profession,
      "term&Condition": this.state.check3,
      }
      if(selectedValue.FirstName !=="" && selectedValue.Email !=="" && selectedValue.LastName !=="" && selectedValue.Address!=="" && selectedValue.Address2 !=="" && selectedValue.Gender && selectedValue.Password !=="" && selectedValue.Profession !=="" && selectedValue.Phone !=="" && selectedValue.City !=="" && selectedValue.State !==""   && selectedValue.Nationality !=="" && selectedValue["term&Condition"]){
        this.setState({
          submited:true
        })
        console.log("FormValue =======", selectedValue)  
      }else{
        alert("Please fill all the required fields")
      }
  }

  handleChange(e){
    this.setState({
    [e.target.name]:e.target.value   
     })
  }

  onCheckChange(e){
    this.setState({
      [e.target.name]: e.target.checked
    })
  }
  render(){
    if (this.state.submited) {
      return <Thankyou/>;
  }else{
    return(

      <div>
            <form>
              <FormGroup>
              <Input type="text" name="firstName" id="firstName" placeholder="First Name *" 
              onChange={(e)=>this.handleChange(e)}/>
              </FormGroup>

              <FormGroup>
              <Input type="text" name="lastName" id="lastName" placeholder="Last Name *" 
              onChange={(e)=>this.handleChange(e)}/>
              </FormGroup>

              <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Email *"
              onChange={(e)=>this.handleChange(e)} />
              </FormGroup>

              <FormGroup>
              <Input type="password" name="password" id="password" placeholder="Password *" 
              onChange={(e)=>this.handleChange(e)}/>
              </FormGroup>

              <FormGroup>
              <Input type="number" name="phone" id="phone" placeholder="Phone *"
              onChange={(e)=>this.handleChange(e)} />
              </FormGroup>

              <FormGroup>
              <Input type="text" name="address" id="address" placeholder="Flt. Name & Floor *" 
              onChange={(e)=>this.handleChange(e)}/>
              </FormGroup>

              <FormGroup>
              <Input type="text" name="address2" id="address2" placeholder="Street *"
              onChange={(e)=>this.handleChange(e)} />
              </FormGroup>

              <FormGroup>
              <Input type="number" name="pincode" id="pincode" placeholder="pincode *" 
              onChange={(e)=>this.handleChange(e)}/>
              </FormGroup>

              <FormGroup>
              <select value={this.state.selectedCity} 
              onChange={(e) => this.setState({selectedCity: e.target.value})}>
              {this.state.city.map((city) => <option  value={city}>{city}</option>)}
              </select>
              </FormGroup>

              <FormGroup>
              <select value={this.state.selectedStates}
              onChange={(e) => this.setState({selectedStates: e.target.value})}>
              {this.state.states.map((state) => <option  value={state}>{state}</option>)}
            </select>
              </FormGroup>

              <FormGroup>
              <select value={this.state.slectedNationality}
              onChange={(e) => this.setState({slectedNationality: e.target.value})}>
              {this.state.nationality.map((nationality) => <option  value={nationality}>{nationality}</option>)}
            </select>
              </FormGroup>

              <FormGroup>
              <input type="radio" name="radio1"  
                checked={this.state.redio1} onChange={(e)=>this.onCheckChange(e)} />Male
              <input type="radio" name="radio1" 
                checked={this.state.redio1} onChange={(e)=>this.onCheckChange(e)} />Female
              <input type="radio" name="radio1" 
                checked={this.state.redio1} onChange={(e)=>this.onCheckChange(e)} />Other
              </FormGroup>

              <FormGroup>
              <input type="checkbox" name="check1"
                checked={this.state.check1} onChange={(e)=>this.onCheckChange(e)} />Student
              <input type="checkbox" name="check2"
                 checked={this.state.check2} onChange={(e)=>this.onCheckChange(e)} />Working
              </FormGroup>

              <FormGroup>
              <label for="term"></label>
             <input type="checkbox" name="check3"
             checked={this.state.check3} onChange={(e)=>this.onCheckChange(e)} /> Accept Term & Condition
              </FormGroup>

              <FormGroup>
              <button type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
              </FormGroup>
              
            </form>
            </div>
      );
  }
}}

export default App;