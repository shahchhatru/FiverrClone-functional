import { reducerCases } from "./constant";

export const initialState={
    showLoginModal:false,
    showSignupModal:true,

}

const reducer=(state,action)=>{
    switch(action.type){
        case reducerCases.TOGGLE_LOGIN_MODAL:
            return{
                ...state,
                showLoginModal:action.showLoginModal,
            }

        case reducerCases.TOGGLE_SIGNUP_MODAL:
            return{
                ...state,
                showSignupModal:action.showSignupModal,
            }
        default:
            return state;
    }
}

export default reducer;