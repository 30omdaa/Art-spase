    import React from 'react';
    import { NavLink, Link } from 'react-router-dom';
    import { RiHomeFill } from 'react-icons/ri';
    import { IoIosArrowForward } from 'react-icons/io';
    import logo from '../assets/logo.png';
    import { categories } from '../utils/data';
    import { useNavigate } from 'react-router-dom';
    
    const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-white transition-all duration-200 ease-in-out capitalize';
    const isActiveStyle = 'flex items-center px-5 gap-3 font-bold border-r-2 border-[#00BFFF] text-[#00BFFF] transition-all duration-200 ease-in-out capitalize';

    const Sidebar = ({ closeToggle, user }) => {
    const navigate = useNavigate();
    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
    };
    const logout = () => {
        localStorage.clear();

        navigate('/login');
    };
    return (
        <div className="flex flex-col justify-between bg-[#0b0d18] h-full overflow-y-scroll w-fit hide-scrollbar">
        <div className="flex flex-col">
            <Link
            to="/"
            className="flex  px-5 gap-2 my-6 pt-1 w-190 items-center "
            onClick={handleCloseSidebar}
            >
            <img src={logo} alt="logo" className="w-full  hidden  md:block" />
            </Link>


            {user && (
           
            <Link
             to={`user-profile/${user._id}`}
             className="flex my-5 mb-3 gap-2 p-2 items-center bg-[#ffffff00] text-gray-400 block md:hidden rounded-lg shadow-lg mx-3"
             onClick={handleCloseSidebar}
             >
             <img src={user.image} className="w-10 h-10 border-[2px]  border-[#00BFFF] p-[2px] rounded-full" alt="user-profile" />
             <p>{user.userName}</p> 
           <IoIosArrowForward />
          </Link>
        )}
            <div className="flex flex-col gap-5">

            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                onClick={handleCloseSidebar}
            >
                <RiHomeFill />
                Home
            </NavLink>
            <h3 className="mt-2 px-5 text-gray-400 2xl:text-xl">Discover cateogries</h3>
            {categories.slice(0, categories.length - 1).map((category) => (
                <NavLink
                to={`/category/${category.name}`}
                className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                onClick={handleCloseSidebar}
                key={category.name}
                >
                    <div className='overflow-hidden w-[180px] rounded-full h-8  shadow-sm relative '>
                    <div className='absolute left-[10%] top-[5%] '>{category.name}</div>
                <img src={category.image} className="object-cover grayscale opacity-20 grey hover:opacity-30" alt=''/>
                
                </div>
                </NavLink>
            ))}
            </div>
        </div>
        {user && (
            <button onClick={logout} className='py-1 font-bold px-3 bg-[#00BFFF] hover:opacity-70 text-white rounded-lg m-5 duration-300 ease-in-out'>Logout</button>

        )}
        </div>
    );
    };

    export default Sidebar;