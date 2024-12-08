import { useLoaderData } from "react-router-dom";
import ProductSection from "./ProductSection";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Loading from "./Loading";
import Slider from "./Slider";
import SportsCategory from "./SportsCategory";
import Articles from "./Articles";
import Popular from "./Popular";




const Home = () => {
    const productSectionData = useLoaderData();
    const { user, loading, setLoading } = useContext(AuthContext);
    if (loading === true) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Slider></Slider>

            <div className="space-y-10 mt-16" >
                <h1 className="text-4xl text-center">Product section</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        productSectionData.map(productData => <ProductSection key={productData._id} productData={productData}></ProductSection>)
                    }
                </div>
            </div>
            <div className="space-y-5 mt-10">
                <h1 className="text-2xl text-center">Sports Category</h1>
                <SportsCategory></SportsCategory>
            </div>
            <div className="mt-10 space-y-10">
                <h1 className="text-4xl text-center">Articles</h1>
                <Articles></Articles>
            </div>
            <div className="mt-10">
                <Popular></Popular>
            </div>

        </div>
    );
};

export default Home;