import { useLocation, useNavigate } from "react-router";
import { advancedServicesList } from "./AdvanceServiceList";

export default function AdvancedServiceBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isPathActive = (
    groupItems: (typeof advancedServicesList)[number]["items"]
  ) => groupItems.some((item) => location.pathname === item.navigateTo);

  return (
    <div className="w-full p-3 flex gap-3 bg-base-100 shadow-inner">
      {advancedServicesList.map((group, index) => {
        const isActive = isPathActive(group.items);
        const isSingle = group.items.length === 1;

        return isSingle ? (
          <button
            key={index}
            onClick={() => navigate(group.items[0].navigateTo)}
            className={`flex items-center gap-2 px-4 py-2 rounded-3xl border transition-all 
              ${
                isActive
                  ? "bg-orange-50 font-semibold border-orange-300"
                  : "bg-base-200 hover:bg-base-300 border-transparent"
              }`}
          >
            {group.items[0].icon}
            <span>{group.items[0].title}</span>
          </button>
        ) : (
          <div className="dropdown dropdown-hover" key={index}>
            <div
              tabIndex={0}
              className={`flex items-center gap-2 px-4 py-2 rounded-3xl border cursor-pointer transition-all ${
                isActive
                  ? "bg-orange-50 font-semibold border-orange-300"
                  : "bg-base-200 hover:bg-base-300 border-transparent"
              }`}
            >
              {group.icon || group.items[0].icon}
              <span>{group.group}</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {group.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    onClick={() => navigate(item.navigateTo)}
                    className="flex items-center gap-2"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
