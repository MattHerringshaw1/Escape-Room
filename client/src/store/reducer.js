
const initialState = {
    isAuthenticated: false,
    hasScrewdriver: false,
    drawerOpen: false
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
    }
        return state
}

export default reducer