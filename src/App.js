import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }

  //api call
  getWeather = async (e) => {
   
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8499ffaf5351f994f5b2404bf8cf3376`);
    const response = await apiCall.json();
    console.log(response);

    //to make sure the 'city' and 'country' input fields are filled in
    if(city && country){
      this.setState({
        temperature: (((response.main.temp-273.15)*9/5)+32).toFixed(1), //converting from Kelvin to Fahrenheit
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    }else{
      this.setState({
        error: "Please enter the values..."
      });
    };
  }

  render () {
    return (

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-6 title-container text-center'>
            <Titles />
          </div>
          <div className='col-xl-6 form-weather-container'>
            <Form showWeather={this.getWeather}/>
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;