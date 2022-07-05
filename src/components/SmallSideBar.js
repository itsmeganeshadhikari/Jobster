import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SmallSidebar"
import { toggleSidebar } from '../features/user/userSlice';
import { FaTimes } from 'react-icons/fa';
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
    const { isSideBarOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    };


    return (
        <Wrapper>
            <div className={isSideBarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className='content'>
                    <button type='button' className='close-btn' onClick={toggle}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className="nav-links">
                        <NavLinks toggleSidebar={toggle} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSideBar