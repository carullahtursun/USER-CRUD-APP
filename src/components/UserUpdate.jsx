import UserUpdateForm from "./UserUpdateForm";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
function UserUpdate() {
    const navegate = useNavigate();
    // Kullanıcı güncelleme formu ve işlemleri burada yer alacak

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-4">
                {/* Geri Dön */}
                <button
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg  "
                    onClick={() => {
                        navegate('/');
                    }}
                >
                    <AiOutlineArrowLeft className="h-5 w-5 text-gray-500"/> 
                  
                    <span className="text-gray-500">Back to Users</span>
                </button>
            </div>

            {/* Kullanıcı güncelleme formu */}
            <UserUpdateForm/>
        </div>
    );
}

export default UserUpdate;
