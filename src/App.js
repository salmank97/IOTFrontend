import React, { Component } from 'react';
import './App.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      path: ''
    }
    this._onChangeInput = this._onChangeInput.bind(this)
    this._onChangeFile = this._onChangeFile.bind(this)

  }

  _onChangeInput(event) {
    this.setState({
      id: event.target.value
    })
    console.log(this.state.id);
  }

  // _onChangeFile(event){
  //   this.setState({
  //     path:event.target.files[0]
  //   })
  //   console.log(this.state.path);
  // }
  _onChangeFile(event) {
    let file = event.target.files[0];
    console.log(file);

    if (file) {
      let data = new FormData();
      data.append('file', file);
      // axios.post('/files', data)...
    }
  }


  render() {
    return (

      <div >
        <form>
          <div className="heading">
            <p class="flow-text">Enroll Device</p>
          </div>
          <div className="form-style">
            <div >
            <label>Device ID:</label>
              <input placeholder="Enter device id.." id="first_name" type="text" class="validate" onChange={this._onChangeInput} />
              {/* <label for="first_name"></label> */}
              <select style={{display: "inline-block"}}>
                <option value="" disabled selected>Select Sequence</option>
                <option value="1">Fire Emergency</option>
                <option value="2">Flood Emergency</option>
                <option value="3">Security Breach</option>
              </select>
              
            </div>



            {/* <input type="file"></input> */}
            <input type="submit" className=" btn waves-effect waves-light btn"></input>



          </div>
        </form>
      </div>

    )
  };
}

export default Form;
