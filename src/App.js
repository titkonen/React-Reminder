import React, { Component } from 'react'; // Added { Component }
import './App.css';
import { Form, Container } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import { FaTrash, FaEdit } from 'react-icons/fa';

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = { username: ''};
    this.state = { age: ''};
    this.state = { result: []};

    this.myChangeHandler = this.myChangeHandler.bind(this);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  myChangeHandlerAge = (event) => {
    this.setState({age: event.target.value});
  }
  save = (event) => {
    var tmp = this.state.username;
    this.setState({ 
      result: this.state.result.concat(tmp),
  });

{/*
  save = (event) => {
    var tmp = this.state.username+' ' + this.state.age;
    this.setState({ 
      result: this.state.result.concat(tmp),
  });
*/}

  event.preventDefault();
  document.getElementById("test").reset();
}

  render() {
    const { activeItem } = this.state

    return (    
    
    
    <Container>
      {/*
          <div class="ui secondary menu top16">
            <a class="item active">High scores</a>
            <a class="item">Info</a>
             <a class="item">Upcoming Events</a> 
          </div>
      */}

      <div className="ui raised very padded text container segment Scores">
        <h1 className="heading top32">Reminder</h1>
          <Form id="test">
            <div className="textInputField">
              <Form.Field>
              {/*<label>Enter your name:</label> */}
              <input placeholder='Write your note' type='text' onChange={this.myChangeHandler} />
              {/*
                <label class="top32">Enter your age:</label>
                <input placeholder='Age' type='text' onChange={this.myChangeHandlerAge} />   
              */}

              </Form.Field>

            </div>
          </Form>

          <div className="saveButton">
            <button className="top32 ui primary button" onClick={this.save}>
              Add
            </button>
          </div>



          <h2 className="subheading">List of to do's</h2>
            {/* View input data in List format */}
            <ul className="list-style">
              {(this.state.result).map(listitem => (
                <li className="notebox" key = {listitem}>{listitem} 
                <div className="removeButton">
                  <button className="removeButton">
                    <FaTrash />
                  </button>
                </div>
                <div className="editButton">
                  <button className="editButton">
                    <FaEdit />
                  </button>
                </div>                

                </li>  
              ))}
            </ul>
      </div>
    </Container>

      
  


      );
  }
}

export default Scores;

{/* Menu functionality*/}
export class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          High scores
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Info
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
  }
}

