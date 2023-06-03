
/* import axios from 'axios'; */
import { toast } from 'react-toastify';

import userData from '../userData';
// Action tipleri
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

// Kullanıcıları almak için eylem oluşturucu
export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

// Kullanıcıyı güncellemek için eylem oluşturucu
export const updateUserSuccess = (user) => ({
    type: UPDATE_USER_SUCCESS,
    payload: user,
});

// Kullanıcıyı silmek için eylem oluşturucu
export const deleteUserSuccess = (userId) => ({
    type: DELETE_USER_SUCCESS,
    payload: userId,
});

// Kullanıcıları almak için asenkron işlem
/* export const fetchUsers = () => async (dispatch) => {
    try {
        // JSON veri dosyasını al
        const users = userData;

        // Kullanıcıları almak için eylem oluşturucuyu çağır
        dispatch(fetchUsersSuccess(users));
    } catch (error) {
        console.error('Kullanıcıları alırken bir hata oluştu:', error);
    }
}; */

// Kullanıcıyı güncellemek için asenkron işlem
export const updateUser = (user) => async (dispatch) => {
    try {
        // Kullanıcıyı güncelle
        /* const response = await axios.put(`/api/users/${user.id}`, user); */

        // Kullanıcıyı güncellediğinizde eylem oluşturucuyu çağır
        dispatch(updateUserSuccess(user));
    } catch (error) {
        console.error('Kullanıcıyı güncellerken bir hata oluştu:', error);
    }
};

// Kullanıcıyı silmek için asenkron işlem
export const deleteUser = (userId) => async (dispatch) => {
    try {
        // Kullanıcıyı sil
        /* await axios.delete(`/api/users/${userId}`); */

        // Kullanıcıyı sildiğinizde eylem oluşturucuyu çağır
        dispatch(deleteUserSuccess(userId));
    } catch (error) {
        console.error('Kullanıcıyı silerken bir hata oluştu:', error);
    }
};

// Reducer
const initialState = {
    users: userData,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            };
        case UPDATE_USER_SUCCESS:
            toast.success('User updated successfully'); // Tostify success notification
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
        case DELETE_USER_SUCCESS:
            toast.success('User deleted successfully'); // Tostify success notification
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        default:
            return state;
    }
};

export default userReducer;

