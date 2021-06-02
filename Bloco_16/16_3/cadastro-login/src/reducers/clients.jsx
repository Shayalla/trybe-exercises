const INITIAL_STATE = [];

const clients = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return  [...state, action.payload ];
        default:
            return state;
    }
}
export default clients;