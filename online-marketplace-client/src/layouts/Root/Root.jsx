import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

const Root = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;