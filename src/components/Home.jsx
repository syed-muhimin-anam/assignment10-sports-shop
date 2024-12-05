import { useLoaderData } from "react-router-dom";
import ProductSection from "./ProductSection";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const Home = () => {
    const productSectionData = useLoaderData();
    const {user} = useContext(AuthContext);
    return (
        <div>
            
            <h1>Product section</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                productSectionData.map(productData => <ProductSection productData={productData}></ProductSection>)
            }
           </div>

        </div>
    );
};

export default Home;