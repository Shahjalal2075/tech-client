import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Root = () => {

    const { isChecked } = useContext(AuthContext);

    return (
        <div className={isChecked?'bg-[#0A101E] text-[#fff]':'bg-[#fff] text-[#181818]'}>
            <div className="container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;