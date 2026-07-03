import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages/Home";

import { PlayerDetail } from "@/pages/PlayerDetail";
import { Players } from "@/pages/Players";
import About from "@/pages/About";
import History from "@/pages/History";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/players",
        element: <Players />,
    },
    {
        path: "/players/:slug",
        element: <PlayerDetail />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/history",
        element: <History />,
    },
]);

export default router;
