import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../../config/navigation";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className="font-medium text-slate-700 hover:text-blue-700 transition-colors"
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopNav;