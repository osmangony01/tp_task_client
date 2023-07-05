import { createBrowserRouter } from "react-router-dom";
import Task from "../components/Task";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Task></Task>
    }
])

export default router;