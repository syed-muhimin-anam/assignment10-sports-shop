import React from 'react';

const About = () => {
    return (
        <div className="pt-28 px-4 py-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-[#7eb84b] mb-10">
                About Us
            </h1>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                    Welcome to <span className="font-bold">Dream Sports Shop</span>, your one-stop destination for premium sports equipment! Whether you're an athlete, a fitness enthusiast, or just getting started on your sports journey, we are here to provide you with top-quality gear to elevate your performance.
                </p>

                <h2 className="text-2xl font-semibold text-[#578a29] mb-4">
                    What We Offer
                </h2>
                <ul className="list-disc list-inside mb-6">
                    <li>A wide range of sports equipment for different games and activities.</li>
                    <li>Detailed product pages with images, specifications, and pricing.</li>
                    <li>Personalized user accounts where you can add and manage your products.</li>
                    <li>An intuitive interface to track your favorite items or recently added products.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#578a29] mb-4">
                    Why Choose Us?
                </h2>
                <p className="mb-6">
                    At <span className="font-bold">Dream Sports Shop</span>, we prioritize quality, affordability, and customer satisfaction. We work with trusted manufacturers to ensure that every item in our store meets the highest standards of performance and durability. Our platform is designed to make your shopping experience smooth and enjoyable.
                </p>

                <h2 className="text-2xl font-semibold text-[#578a29] mb-4">
                    Features for Registered Users
                </h2>
                <ul className="list-disc list-inside mb-6">
                    <li>View details of a wide range of sports equipment.</li>
                    <li>Add your own sports equipment for sale or management.</li>
                    <li>Track and manage the products you've added to your account.</li>
                    <li>Enjoy personalized recommendations and updates.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#578a29] mb-4">
                    Our Vision
                </h2>
                <p>
                    We aim to create a comprehensive marketplace where sports enthusiasts can find everything they need under one roof. From casual players to professional athletes, we cater to all skill levels and sports preferences. Our mission is to inspire a healthier, more active lifestyle through accessible, high-quality sports equipment.
                </p>
            </div>
        </div>
    );
};

export default About;
