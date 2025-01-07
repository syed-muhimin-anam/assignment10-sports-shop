import { FaFacebookSquare, FaGitSquare, FaInstagram, FaInstagramSquare } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className=" footer-center  text-base-content rounded mt-16 p-10  bg-[#87c45109]">
            <img src={logo} className='w-6/12 md:w-4/12 lg:w-2/12' alt="" />
            <h1 className="text-2xl lg:text-4xl  mt-0 font-bold">Dream Sports Shop</h1>
           <div className='space-y-7 mt-9'>
           <nav className="grid grid-flow-col gap-4">
                <a className="link p-0 m-0 link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.instagram.com/syedmuhiminanam/?hl=en'   target="_blank">
                       <FaInstagramSquare className='text-2xl'></FaInstagramSquare>
                          
                    </a>
                    <a href='https://github.com/syed-muhimin-anam' target='_blank'>
                        <FaGitSquare className='text-2xl'></FaGitSquare>
                    </a>
                    <a href='https://web.facebook.com/syedmuhimin.anam'  target="_blank">
                        <FaFacebookSquare className='text-2xl'></FaFacebookSquare>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Dream Sports E-commerce Industries Ltd</p>
            </aside>
           </div>
        </footer>
    );
};

export default Footer;