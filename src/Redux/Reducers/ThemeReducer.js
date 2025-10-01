

const initialState = {
    theme:"LIGHT"
}


function themeReducer (state = initialState,action){
    switch(action.type){
        case "CHANGE_THEME" :
            return {theme :action.payload}
        default :
            return state
    }
}

export default themeReducer