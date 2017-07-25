import React, {Component} from 'react';
import '../styles/App.css';


class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props);
    this.state = {
      vehicles: [],
      value: '',
      pilot: ''

    }
  };
    


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange = (event) => {
    this.setState({value: event.target.value});
  };


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
   handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ pilot: this.state.value });
    this.setState({ value: "" });
   };


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentWillMount(){
    fetch('https://swapi.co/api/vehicles/').then((response) => {
      return response.json()
    }).then((data) => {
      let vehicles = data.results
      this.setState({
        vehicles
      })
    })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:
  vehicleMap() {
  return this.state.vehicles.map(vehicle => {
        return (
          <div className="col-4" key={vehicle.name}>
          <div className="card">
            <div className="card-block">
              <h5 className="card-title">Vehicle: {vehicle.name}</h5>
              <p className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</p>
            </div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
              <li className="list-group-item">Class: {vehicle.class}</li>
              <li className="list-group-item">Passengers: {vehicle.passengers}</li>
              <li className="list-group-item">Crew: {vehicle.crew}</li>
              <li className="list-group-item">Length: {vehicle.length}</li>
              <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
              <li className="list-group-item">Cargo capacity: {vehicle.cargo_capacity}</li>
              </ul>
          </div>
          </div>
          )
      })
  }

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    
  return (
    <div className="App">
          <div className="jumbotron jumbotron-fluid">
              <div className="container">
              <h1>Star Wars</h1>
              <h4>The Vehicles of Star Wars</h4>
              </div>
          </div>
          <div className="card">
                <div className="card-block">
                  <h4>What is your name, pilot?</h4>
                    <form onSubmit={this.handleSubmit} className="align-self-center">
                      <div className="form-group align-self-center"> 
                      <input onChange={this.handleNameChange} type="text" placeholder="Enter your name" value={this.state.value}/>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <h5>{this.state.pilot}</h5> 
                </div>
              </div>
              <div className="row">{this.vehicleMap()}</div>
            </div>
        );
      }
    }

export default App;
