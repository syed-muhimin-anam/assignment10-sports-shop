import swimming from '../assets/a-swimming.jpg';
import cycle from '../assets/a-cycle.jpg';

const Articles = () => {
    return (
        <div className='grid md:grid-cols-2 gap-10'>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={swimming}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>


        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={cycle}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Articles;