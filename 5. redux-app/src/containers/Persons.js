import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as ActionTypes from '../store/Enum/ActionTypes'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({type: ActionTypes.ADD_PERSON}),
        onPersonDeleted: (personId) => dispatch({type: ActionTypes.DELETE_PERSON, personId: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);