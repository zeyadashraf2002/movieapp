
const initialState = { 
    lang: "EN" 
};


function langReducer(state = initialState,action){
    switch(action.type){
        case "CHANGE_LANG":
            return{lang:action.payload}
        default:
            return state
        }
}

export default langReducer 