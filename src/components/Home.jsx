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
    const {user, loading, setLoading} = useContext(AuthContext);
    if (loading === true ) {
        return <Loading></Loading>
    }
    return (
        <div>
           <Slider></Slider>
            <h1>Product section</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                productSectionData.map(productData => <ProductSection productData={productData}></ProductSection>)
            }
           </div>
           <div>
            <h1>Sports Category</h1>
            <SportsCategory></SportsCategory>
           </div>
           <div>
            <h1>Articles</h1>
            <Articles></Articles>
           </div>
           <div >
            <Popular></Popular>
           </div>

        </div>
    );
};

export default Home;