import React from 'react';
import tennis from '../assets/tennis.jpg';
import gym from '../assets/gymnastic.jpg';
import running from '../assets/running.jpg';
import cycle from '../assets/cycle.jpg';
import { Fade } from "react-awesome-reveal";

const SportsCategory = () => {
    return (
        <div className="container mx-auto px-4 ">
            {/* Applying Fade for bottom-to-top animation */}
            <Fade direction="right">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <img
                            src={tennis}
                            alt="Tennis sport"
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-semibold">Tennis sport</h3>
                            <a
                                href="#"
                                className="text-[#8ffa32] text-sm mt-2 underline hover:text-orange-400"
                            >
                                Go to category
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <img
                            src={gym}
                            alt="Gymnastic"
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-semibold">Gymnastic</h3>
                            <a
                                href="#"
                                className="text-[#8ffa32] text-sm mt-2 underline hover:text-orange-400"
                            >
                                Go to category
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <img
                            src={cycle}
                            alt="Cycling"
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-semibold">Cycling</h3>
                            <a
                                href="#"
                                className="text-[#8ffa32] text-sm mt-2 underline hover:text-orange-400"
                            >
                                Go to category
                            </a>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <img
                            src={running}
                            alt="Running"
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-semibold">Running</h3>
                            <a
                                href="#"
                                className="text-[#8ffa32] text-sm mt-2 underline hover:text-orange-400"
                            >
                                Go to category
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default SportsCategory;
