import IconWrapper from "../../Wrapper/IconWrapper";
import { useNavigate } from "react-router";
import ImageWrapper from "../../Wrapper/ImageWrapper";
import { allGeneralServices } from "./GeneralServiceList";
import ScrollableServiceSection from "./ScrollableServiceSection";



interface ServiceBarProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export default function ServiceBar({
  isExpanded,
  setIsExpanded,
}: ServiceBarProps) {
  const navigate = useNavigate();

  const services = allGeneralServices;

  return (
    <div
      className={`fixed top-0 left-0${
        isExpanded ? "w-60" : "w-20"
      } bg-base-200 p-4 h-screen shadow-md flex flex-col items-center transition-all duration-300`}
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/main/general")}
        className="cursor-pointer flex justify-center"
      >
        {isExpanded ? (
          <ImageWrapper
            src={"../assets/logo-main-600-150-transparent.png"}
            alt="Logo-Techgel"
            title="Logo Techgel"
            height={50}
            width={175}
          />
        ) : (
          <IconWrapper
            src={"../assets/icon/techgel-logo-small.svg"}
            title="Logo"
            width={65}
            height={65}
          />
        )}
      </div>

      <ScrollableServiceSection allGeneralServices={services} isExpanded={isExpanded} />

      {/* Expand/Collapse Toggle */}
      <ExpandCollapseButtonServiceBar
        iconName={isExpanded ? "turnleft" : "turnright"}
        title={isExpanded ? "Mở rộng" : "Thu gọn"}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
}

interface ExpandCollapseButtonProps {
  iconName: string;
  onClick: () => void;
  title: string;
}

const ExpandCollapseButtonServiceBar: React.FC<ExpandCollapseButtonProps> = ({
  iconName,
  onClick,
  title = "Expand",
}) => {
  return (
    <div
      className="self-center mt-auto cursor-pointer"
      onClick={onClick}
      title={title}
    >
      <IconWrapper src={`../assets/icon/${iconName}.svg`} title={title} />
    </div>
  );
};
