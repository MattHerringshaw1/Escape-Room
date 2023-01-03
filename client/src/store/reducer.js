
const initialState = {
    isAuthenticated: false,
    hasScrewdriver: false,
    drawerOpen: false,
    hasScissors: false,
    hasKey: false,
    hasMagnifyingGlass: false,
    hasLighter: false,
    doorOpen: false,
}

const reducer = (state = initialState, action) => {

    if(action.type == 'ON_LOGIN') {
        return {
            ...state,
            isAuthenticated: action.payload == null ? false: true
        }
    } else if(action.type == 'ON_SIGNOUT') {
        return {
            ...state,
            isAuthenticated: false
        }
    } else if(action.type == 'SET_SCREWDRIVER') {
        return {
            ...state,
            hasScrewdriver: true
        }
    } else if(action.type == 'DELETE_SCREWDRIVER') {
        return {
            ...state,
            hasScrewdriver: false
        }
    } else if(action.type == 'OPEN_DRAWER') {
        return {
            ...state,
            drawerOpen: true
        }
    } else if(action.type == 'SET_SCISSORS') {
        return {
            ...state,
            hasScissors: true
        }
    } else if(action.type == 'DELETE_SCISSORS') {
        return {
            ...state,
            hasScissors: false
        }
    } else if(action.type == 'SET_KEY') {
        return {
            ...state,
            hasKey: true
        }
    } else if(action.type == 'DELETE_KEY') {
        return {
            ...state,
            hasKey: false
        }
    } else if(action.type == 'SET_MAGNIFYINGGLASS') {
        return {
            ...state,
            hasMagnifyingGlass: true
        }
    } else if(action.type == 'DELETE_MAGNIFYINGGLASS') {
        return {
            ...state,
            hasMagnifyingGlass: false
        }
    } else if(action.type == 'SET_LIGHTER') {
        return {
            ...state,
            hasLighter: true
        }
    } else if(action.type == 'DELETE_LIGHTER') {
        return {
            ...state,
            hasLighter: false
        }
    } else if(action.type == 'DOOR_OPEN'){
        return{
            ...state,
            doorOpen: true
        }
    }
        return state
}

export default reducer