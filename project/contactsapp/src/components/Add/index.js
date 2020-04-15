import React from 'react';
const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "foster",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
  }

class Add extends React.Component {

  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.input2 = React.createRef();

    this.state = {
      value: '',
      value2: ''
    }
  }
      newContact
      = () => {
        let newHeader = {...HEADERS,
          "method" : "POST",
          body: JSON.stringify({
            name: this.input.current.value,
            number:this.input2.current.value
          })}
          fetch("http://plato.mrl.ai:8080/contacts/add", newHeader)
          .then((res) => res.json())
          .then((data) => {
              this.setState({value:this.input.current.value})
              this.setState({value:this.input2.current.value})
        }, [])
      }

  submitted = a => {
    a.preventDefault();
    this.newContact
    ()
  }
  
  render() {
    return (
      <div>
        <h2>New Contact</h2>
        <form onSubmit={this.submitted}>
  
            <label htmlFor="name">First and Last Name:</label><br/>
            <input type="text" ref={this.input} id ="name" /><br/>

            <label htmlFor="name">Phone Number:</label><br/>
            <input type="text" ref={this.input2} id ="number" /><br/>

            <button type="submit" onClick={this.pageRefresh}>Submit</button>
         </form>
      </div>
    );
  }
  pageRefresh() {
    window.location.reload();
  }
}

export default Add;