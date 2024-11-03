import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

const Root = () => {
    const navigation = useNavigation();
    const location = useLocation();

    console.log(location);

    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto">
                {
                    navigation.state === 'loading' ? <p className="text-center ">Loading...</p> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root;