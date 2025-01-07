
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const back = useNavigate();
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
                <div className="text-center">
                    <img className='mx-auto' src="https://img.icons8.com/?size=100&id=9654&format=png&color=000000" alt="" />
                    <h1 className="text-6xl font-bold  text-[#71b338] mb-4">404</h1>
                    <p className="text-2xl font-semibold mb-2">Oops! Page Not Found..</p>
                    <p className="mb-6 text-gray-600">we are sorry the page you want to go that page is not present in our server. </p>
                    <button className="px-5 py-2 btn bg-[#87c451] text-white font-semibold rounded-lg" onClick={() => back(-1)}>
                        Go Back Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;