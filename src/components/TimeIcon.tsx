import React from "react";
import MoonIconSVG from "../assets/icons/moon.svg";
import SunriseIconSVG from "../assets/icons/sunrise.svg";
import SunIconSVG from "../assets/icons/sun.svg";
import SunsetIconSVG from "../assets/icons/sunset.svg";
import { useTimeContext } from "../hooks/useTimeContext";

interface IconProps {
  className?: string;
}

const MoonIcon: React.FC<IconProps> = (props) => <MoonIconSVG {...props} />;
const SunriseIcon: React.FC<IconProps> = (props) => (
  <SunriseIconSVG {...props} />
);
const SunIcon: React.FC<IconProps> = (props) => <SunIconSVG {...props} />;
const SunsetIcon: React.FC<IconProps> = (props) => <SunsetIconSVG {...props} />;

export const TimeIcon: React.FC = () => {
  const { currentTime, currentTheme } = useTimeContext();

  const getIcon = () => {
    const hour = currentTime.getHours();
    const iconClassName = `w-full h-full ${
      currentTheme === "dark" ? "text-white" : "text-black"
    }`;

    const icons = {
      0: MoonIcon,
      6: SunriseIcon,
      12: SunIcon,
      18: SunsetIcon,
    };

    const Icon = Object.entries(icons).reduce(
      (acc, [h, Icon]) => (hour >= parseInt(h) ? Icon : acc),
      MoonIcon
    );

    return <Icon className={iconClassName} />;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {getIcon()}
    </div>
  );
};
