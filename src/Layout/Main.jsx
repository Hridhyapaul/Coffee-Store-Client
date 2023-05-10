import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Navigation from "../Shared/Navigation";

const Main = () => {
    return (
        <div className="container mx-auto px-[80px]">
            <Navigation></Navigation>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;