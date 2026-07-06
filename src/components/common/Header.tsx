import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/genglogo.svg";

// 메뉴 아이템 배열
const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "History", path: "/history" },
    { label: "Players", path: "/players" },
    { label: "Ruler", path: "/ruler" },
];

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/90 backdrop:blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                {/* 로고 이미지 */}
                <NavLink to="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center ">
                        <img
                            src={logo}
                            alt="회사 로고"
                            width={150}
                            height={50}
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white">Gen.G</h1>
                        <p className="text-xs text-gray-400">
                            React-Gen.G-PanSite
                        </p>
                    </div>
                </NavLink>
                {/* 네비게이션 바 */}
                <nav>
                    <ul className="flex items-center gap-8">
                        {menuItems.map((menu) => (
                            <li key={menu.path}>
                                <NavLink
                                    to={menu.path}
                                    end={menu.path === "/"}
                                    // 활성화 상태에 따라 다른 상태 부여
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors duration-300 ${
                                            isActive
                                                ? "text-[var(--color-geng-gold)]"
                                                : "text-gray-300 hover:text-[var(--color-geng-gold)]"
                                        }`
                                    }
                                >
                                    {menu.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
