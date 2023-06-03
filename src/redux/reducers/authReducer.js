import userData from '../userData'; // Import your users data here
import { toast } from 'react-toastify';
// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Login işlemi
export const login = (email, password) => async (dispatch) => {
    console.log("geldi");
    console.log(userData);
    console.log(email, password);
    try {
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Search for the user in the users data
        const user = userData.find(user => user.email === email && user.password === password);

        if (user) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user,
            });
            toast.success('Login successful');
            
        } else {
            throw new Error('Invalid email or password');
           
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message,
        });
        toast.error('Login failed');
    }
};

// Logout işlemi
export const logout = () => (
    {
    type: LOGOUT,
}

);

// İlk durum
const initialState = {
    user: null,
    error: null,
};

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
