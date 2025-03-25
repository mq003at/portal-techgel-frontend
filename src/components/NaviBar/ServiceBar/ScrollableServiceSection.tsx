import { Link } from "react-router";
import { ServiceGroup } from "../../Types/Models/Service/ServiceModal";
export default function ScrollableServiceSection({
  allGeneralServices,
  isExpanded,
}: {
  allGeneralServices: ServiceGroup[];
  isExpanded: boolean;
}) {
  return (
    <div className="flex-grow overflow-y-auto px-1 mt-2">
      <ul className="menu menu-compact p-0">
        {allGeneralServices.map((group, index) => {
          const isSingleItem = group.items.length === 1;
          const onlyItem = group.items[0];

          return (
            <li key={index}>
              {isSingleItem ? (
                <Link
                  to={onlyItem.navigateTo}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-base-300 transition-all ${
                    location.pathname === onlyItem.navigateTo
                      ? "bg-orange-100 font-semibold"
                      : ""
                  }`}
                >
                  {onlyItem.icon}
                  {isExpanded && <span>{onlyItem.title}</span>}
                </Link>
              ) : (
                <details open>
                  <summary className="flex items-center gap-3 p-3 hover:bg-base-300 rounded-lg">
                    {group.icon || group.items[0]?.icon}
                    {isExpanded && (
                      <span className="font-bold">{group.group}</span>
                    )}
                  </summary>
                  <ul className="ml-2">
                    {group.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.navigateTo}
                          className={`flex items-center gap-3 p-2 hover:bg-base-300 rounded ${
                            location.pathname === item.navigateTo
                              ? "bg-orange-100 font-semibold"
                              : ""
                          }`}
                        >
                          {item.icon}
                          {isExpanded && <span>{item.title}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
