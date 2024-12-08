import sock from '../assets/running-shoks.jpg';
import jersey from '../assets/cycle-jersey.jpg';
import boot from '../assets/boot.jpg';
import shoe from '../assets/shoe.jpg';
import { Fade } from 'react-awesome-reveal';

const Popular = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-6">Most Popular Products</h1>
            <Fade direction='left'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="card bg-base-100  p-4">
                    <figure className="h-48 overflow-hidden mb-4">
                        <img
                            src={shoe}
                            alt="Shoes"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-lg font-semibold">Intense running shoes</h2>
                        <div className="flex justify-center gap-2 mt-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <span
                                    key={size}
                                    className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <p className="text-xl font-bold text-red-500 mt-2">$178.00</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-base-100  p-4">
                    <figure className="h-48 overflow-hidden mb-4">
                        <img
                            src={jersey}
                            alt="Jersey"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-lg font-semibold">Jersey for cycling</h2>
                        <div className="flex justify-center gap-2 mt-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <span
                                    key={size}
                                    className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <p className="text-xl font-bold text-red-500 mt-2">$48.00</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-base-100  p-4">
                    <figure className="h-48 overflow-hidden mb-4">
                        <img
                            src={boot}
                            alt="Boot"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-lg font-semibold">Running shoes</h2>
                        <div className="flex justify-center gap-2 mt-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <span
                                    key={size}
                                    className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <p className="text-xl font-bold text-red-500 mt-2">$235.00</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="card bg-base-100  p-4">
                    <figure className="h-48 overflow-hidden mb-4">
                        <img
                            src={sock}
                            alt="Socks"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-lg font-semibold">Team crit jersey</h2>
                        <div className="flex justify-center gap-2 mt-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <span
                                    key={size}
                                    className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <p className="text-xl font-bold text-red-500 mt-2">$75.00</p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Popular;
