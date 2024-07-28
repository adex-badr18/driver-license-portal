import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Spinner from "./Spinner";
import ReusableModal from "./ReusableModal";

const Root = () => {
    const { state } = useNavigation();
    const isLoading = state === "loading";

    return (
        <div className="grid grid-rows-[auto_1fr_auto] max-w-[100svw] overflow-hidden relative min-h-screen">
            <header>
                <Header />
                <NavBar />
            </header>

            <main>
                <Outlet />
                <ReusableModal isOpen={isLoading}>
                    <Spinner />
                </ReusableModal>
            </main>
            
            <Footer />
        </div>
    );
};

export default Root;
