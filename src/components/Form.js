import React from 'react';

class Form extends React.Component {
    
    render () {
        return (
            <form onSubmit={this.props.showWeather} className='form-control-lg'>
                <input type='text' name='city' placeholder='City'/>
                <input type='text' name='country' placeholder='Country'/>
                <button>Find Weather</button>
            </form>
        );
    }
    
}

export default Form;