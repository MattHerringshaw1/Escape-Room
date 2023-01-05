
const initialState = {
    isAuthenticated: false,
    hasScrewdriver: false,
    drawerOpen: false,
    hasScissors: false,
    hasKey: false,
    hasMagnifyingGlass: false,
    hasLighter: false,
    doorOpen: false,
    safeOpen: false
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
    } else if(action.type == 'SET_KEY') {
        return {
            ...state,
            hasKey: true
        }
    } else if(action.type == 'SET_MAGNIFYINGGLASS') {
        return {
            ...state,
            hasMagnifyingGlass: true
        }
    } else if(action.type == 'SET_LIGHTER') {
        return {
            ...state,
            hasLighter: true
        }
    } else if(action.type == 'DOOR_OPEN'){
        return{
            ...state,
            doorOpen: true
        }
    } else if(action.type == 'OPEN_SAFE'){
        return{
            ...state,
            safeOpen: true
        }
    }
        return state
}

export default reducer