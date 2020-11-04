import * as actionTypes from "../action";


const initialState = {
    persons:[]
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDPERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age,
            }
            
            return { 
                ...state,
                persons: state.persons.concat(newPerson)}
      
        case actionTypes.REMOVEPERSON:
            return {
                ...state,
                persons: state.persons.filter((person)=> person.id !== action.personId),
            }
        default:
            return state
    }
}
export  default reducer;