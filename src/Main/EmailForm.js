import React from "react";
import "./EmailForm.css"

class EmailForm extends React.Component {
    state= {
        email: '',
        response: '',
        error:''
    }
    handleEmailChange=({target})=>{
        this.setState({[target.name]: target.value})
    }
    handleFormSubmit = (e)=>{
        e.preventDefault();
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)) {
            this.setState({error: "Not a valid email"})
          } else 
        //apicall
        this.setState({email: '', response: 'Email added!',error:''})
    }
  render() {
    return (
      <div className="EmailForm">
        <form className="form">
            <label htmlFor="email">Support your online girl gang: </label>
            <br/>
            <div>
            {this.state.response
            ?<h3>{this.state.response}</h3>
            :(<><input type="text"
                id="email"
                name="email"
                placeholder="example@email.com"
                value={this.state.email}
                onChange={(e)=>this.handleEmailChange(e)}></input>
                <button onClick={(e) => this.handleFormSubmit(e)}>></button>
                <h3>{this.state.error}</h3></>)}
            </div>
            
        </form>
      </div>
    );
  }
}

export default EmailForm;
