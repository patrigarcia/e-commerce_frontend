const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                avatar: action.payload.avatar,
            };
        case "LOGOUT":
            return {
                ...state,
                token: null,
                user: null,
            };
        case "AVATAR":
            return {
                ...state,
                avatar: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
