import { createBrowserRouter } from "react-router-dom";
import Services from "../components/Services";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Services></Services>
    }
])

export default router;