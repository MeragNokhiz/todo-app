import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        titel: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.titel);
        this.setState({ titel: ''});
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit}
            style={{display: 'flex'}}>
                <input 
                type="text" 
                name="titel" 
                placeholder="Add Todo..." 
                style={{flex: '10', padding: '5px'}}
                value={this.state.titel}
                onChange={this.onChange}/>
                <input 
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}} />
            </form>
        )
    }
}

// PropType
AddTodo.propTypes ={
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
