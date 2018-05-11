const INITIAL_STATE = {
  authUser: null,
  auth: false,
  error: false
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action
});

function mapReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'AUTH_USER_SET' : {
      state.auth = true;
      return applySetAuthUser(state, action);
    }
    case 'ERR_AUTH':{
			return{...state,map:{ auth:false, error:true }}
		}
    default : return state;
  }
}

export default mapReducer;