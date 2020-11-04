import React, { Component } from 'react';
import {connect} from "react-redux";
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from "../store/action";
class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddperson} />
                {this.props.person.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}
const mapStatetoProps = state => {
    return {
        person: state.person.persons
    }
}
const mapDispatchProps = dispatch => {
    return {
        onAddperson: (name, age) => dispatch({type:actionTypes.ADDPERSON, personData:{name:name, age:age}}),
        onDeletePerson: (personId=> {
            dispatch({type:actionTypes.REMOVEPERSON, personId})
        })
    }
}
export default connect(mapStatetoProps, mapDispatchProps)(Persons);