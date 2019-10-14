import React from 'react';

class Weather extends React.Component {
    
    render () {
        return (
            <div className='weather-info text-white weather-container'>
                <p>City : {this.props.city}</p>
                <p>Country : {this.props.country}</p>
                <p>Temperature &deg;F : {this.props.temperature}</p>
                <p>Humidity &#37; : {this.props.humidity}</p>
                <p className='weather-description'>Description : {this.props.description}</p>
                
                {this.props.error && <p className='text-danger'>{this.props.error}</p>}
            </div>
        );
    }
    
}

export default Weather;