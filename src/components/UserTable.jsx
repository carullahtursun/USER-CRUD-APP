import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from 'react-icons/md';
import { NavLink } from "react-router-dom";
import { deleteUser } from "../redux/reducers/userReducer";
/*  <img src="data:image/png;base64,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"
                        alt="Logo" className="text-slate-500 w-56 " /> */


function UserTable() {
    const users = useSelector(store => store.users.users);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Her sayfada görünecek veri sayısı

    // Filtrelenmiş ve aranan terime göre sıralanmış kullanıcıları alın
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sayfada gösterilecek kullanıcıları hesaplayın
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = Math.ceil(filteredUsers.length / itemsPerPage);

        // Sayfa sayısı 5'ten az ise tüm sayfa numaralarını göster
        if (pageNumbers <= 5) {
            return Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
                (number) => (
                    <li key={number}>
                        <button
                            className={`h-10 px-5 text-white transition-colors  duration-150 mx-2 rounded-lg ${currentPage === number
                                    ? "bg-blue-600 border border-r-0 text-black border-blue-600 focus:shadow-outline"
                                    : "focus:shadow-outline text-black bg-blue-600   hover:bg-blue-200"
                                }`}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </button>
                    </li>
                )
            );
        }

        // Sayfa sayısı 5'ten fazla ise ...
        let pageList = [];

        if (currentPage <= 3) {
            pageList = [1, 2, 3, 4, 5, "...", pageNumbers];
        } else if (currentPage >= pageNumbers - 2) {
            pageList = [1, "...", pageNumbers - 4, pageNumbers - 3, pageNumbers - 2, pageNumbers - 1, pageNumbers];
        } else {
            pageList = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", pageNumbers];
        }

        return pageList.map((number, index) => (
            <li key={index}>
                {number === "..." ? (
                    <span className="h-10 px-5 text-black">...</span>
                ) : (
                    <button
                        className={`h-10 px-5 text-black transition-colors duration-150 mx-2 rounded-lg ${currentPage === number
                                ? "bg-blue-600 border border-r-0 text-white border-blue-600 focus:shadow-outline"
                                : "focus:shadow-outline  hover:bg-blue-200"
                            }`}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </button>
                )}
            </li>
        ));
    };
    return (
        <div className="w-full h-full px-4 flex flex-col justify-center">
            <div className="flex items-center justify-between w-full mb-4">
                <div className="flex w-full items-center justify-between">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />

                    {/* Filter Select */}
                    <select
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
            </div>

            <div className="max-h-[80vh] border rounded-lg">
                <table className="w-full rounded-lg">
                    <thead className="rounded-lg">
                        <tr className="text-start">
                            <th className="px-4 py-2 text-start bg-gray-200 border-b">Name</th>
                            <th className="px-4 py-2 text-start bg-gray-200 border-b">Email</th>
                            <th className="px-4 py-2 text-start bg-gray-200 border-b">Phone</th>
                            <th className="px-4 py-2 text-start bg-gray-200 border-b">Active</th>
                            <th className="px-4 py-2 text-start bg-gray-200 border-b">Role</th>
                            <th className="px-4 py-2 text-start bg-gray-200 border-b"></th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {currentItems.map((user, key) => (
                            <tr key={user.id}>
                                <td className="px-4 py-2 border-b hover:text-blue-500">
                                    <NavLink key={key} to={`/users/${user.id}`}>
                                        {user.name}
                                    </NavLink>
                                </td>
                                <td className="px-4 py-2 border-b">{user.email}</td>
                                <td className="px-4 py-2 border-b">{user.phone}</td>
                                <td className="px-4 py-2 border-b text-center">
                                    <div
                                        className={`${user.active ? "bg-green-500 " : "bg-red-500"
                                            }  h-4 rounded-full w-4`}
                                    ></div>
                                </td>
                                <td className="px-4 py-2 border-b">{user.role}</td>
                                <td className="px-4 py-2 border-b">
                                    <button onClick={() => dispatch(deleteUser(user.id))}>
                                        <MdDeleteOutline className="h-5 w-5 text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 w-full justify-center flex items-center flex-wrap">
                <nav aria-label="Page navigation">
                    <ul className="inline-flex">
                        {/* Önceki sayfa düğmesi */}
                        <li>
                            <button
                                className="h-10 px-5 text-blue-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-blue-100"
                                onClick={() =>
                                    setCurrentPage(prevPage => prevPage - 1 > 0 ? prevPage - 1 : prevPage)
                                }
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    ></path>
                                </svg>
                            </button>
                        </li>

                        {/* Sayfa numaraları */}
                        {renderPageNumbers()}
                        {/* Sonraki sayfa düğmesi */}
                        <li>
                            <button
                                className="h-10 px-5 text-blue-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-blue-100"
                                onClick={() =>
                                    setCurrentPage(prevPage =>
                                        prevPage + 1 <= Math.ceil(filteredUsers.length / itemsPerPage)
                                            ? prevPage + 1
                                            : prevPage
                                    )
                                }
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    ></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default UserTable;