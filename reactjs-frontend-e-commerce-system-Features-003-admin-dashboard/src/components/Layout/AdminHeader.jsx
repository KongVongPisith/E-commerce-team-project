import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backend_url } from '../../server';

const AdminHeader = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
            <div>
                <Link to="/">
                    <img
                        src="../../../ishopper.png"
                        alt="Logo"
                        className='w-34 h-14'
                    />
                </Link>
            </div>
            <div className="flex items-center">
                <Link to="/profile" className="flex items-center"> {/* Update this link to the correct profile path */}
                    <img
                        src={`${backend_url}${user?.avatar}`}
                        alt={user?.name}
                        className="w-[50px] h-[50px] rounded-full object-cover mr-3"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{user?.name}</h2>
                        <p className="text-sm text-green-500">Role: {user?.role}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AdminHeader;
