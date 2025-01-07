import swimming from '../assets/a-swimming.jpg';
import cycle from '../assets/a-cycle.jpg';

const Articles = () => {
    return (
        <div className='grid md:grid-cols-2 gap-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-1/3">
                    <img
                        className="w-full h-48 object-cover"
                        src={swimming}
                        alt="Swimming"
                    />
                </figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title text-lg font-bold text-[#73aa44]">Embracing Wellness: The Perfect Escape with Yoga</h2>
                    <p className="text-sm">Discover the rejuvenating experience of yoga by the sea, where tranquility meets strength. Join us as we explore the benefits of outdoor practice and how it connects your mind and body to nature.</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn  bg-[#87c451]">Read More..</button>
                    </div>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-1/3">
                    <img
                        className="w-full h-48 object-cover"
                        src={cycle}
                        alt="Cycling"
                    />
                </figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title text-lg font-bold text-[#73aa44]">The Thrill of the Race: Pushing Limits on Two Wheels!</h2>
                    <p className="text-sm">Feel the rush of adrenaline and the competitive spirit of cycling as athletes push their limits in a race. Learn about the dedication and training needed to excel in this high-paced sport.</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn  bg-[#87c451]">Read More..</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
