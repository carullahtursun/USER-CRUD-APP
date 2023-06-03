import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateUser } from '../redux/reducers/userReducer';

function UserUpdateForm() {
    const { id } = useParams();
    const { register, handleSubmit, setValue, getValues } = useForm();

    const users = useSelector(store => store.users.users);
    const dispatch = useDispatch();

    const user = users.find((user) => user.id === parseInt(id));
    const [active, setActive] = useState(null)
    // Kullanıcının mevcut verilerini update inputlarına set et
    useEffect(() => {
        if (user) {

            setValue('name', user.name);
            setValue('email', user.email);
            setValue('phone', user.phone);
            setValue('active', user.active);
            setActive(user.active)
            setValue('role', user.role);
        }
    }, [user, setValue]);

    const onSubmit = (data) => {
        console.log(data); // Form verilerini burada kullanabilirsiniz
        dispatch(updateUser({ ...data, id: user.id }));
    };

    const handleToggleActive = () => {
        setValue('active', !getValues('active'));
        setActive(!active)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        {...register('name')}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        {...register('email')}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        {...register('phone')}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="active" className="flex items-center">
                        <button
                            type="button"
                            className={`flex items-center justify-center w-10 h-6 rounded-full transition-colors ${active ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                            onClick={handleToggleActive}
                        >
                            <span
                                className={`w-6 h-6 rounded-full bg-white shadow transform duration-300 ${active ? 'translate-x-2' : '-translate-x-2'
                                    }`}
                            />
                        </button>
                        <span className="ml-2 font-medium text-gray-700">Active</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block mb-2 font-medium text-gray-700">
                        Role
                    </label>
                    <select
                        id="role"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        {...register('role')}
                    >
                        <option value="">Select a role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600"
                    >
                        Update User
                    </button>
                </div>
            </div>
        </form>
    );
}

export default UserUpdateForm;
