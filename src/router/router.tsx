import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages/Home";

import { PlayerDetail } from "@/pages/PlayerDetail";
import { Players } from "@/pages/Players";

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
]);

export default router;
