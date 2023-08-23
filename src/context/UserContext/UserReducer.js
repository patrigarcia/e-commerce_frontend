const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
            };
        case "LOGOUT":
            return {
                ...state,
                token: null,
                user: null,
            };
        case "USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
