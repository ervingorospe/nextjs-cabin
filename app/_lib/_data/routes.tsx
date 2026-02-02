import Home from "@/components/ui/icons/Home";
import Calendar from "@/components/ui/icons/Calendar";
import Building from "@/components/ui/icons/Building";
import User from "@/components/ui/icons/User";
import UserCircle from "@/components/ui/icons/UserCircle";
import ChartBar from "@/components/ui/icons/ChartBar";

const routes = [
  {
    label: "Overview",
    menu: [
      {
        icon: <Home className="h-5 w-5" />,
        text: "Dashboard",
        link: "/dashboard",
      },
    ],
  },
  {
    label: "Operation",
    menu: [
      {
        icon: <Calendar className="h-5 w-5" />,
        text: "Booking",
        link: "/booking",
      },
      {
        icon: <Building className="h-5 w-5" />,
        text: "Room",
        link: "/room",
      },
    ],
  },
  {
    label: "Administration",
    menu: [
      {
        icon: <User className="h-5 w-5" />,
        text: "Users",
        link: "/users",
      },
      {
        icon: <ChartBar className="h-5 w-5" />,
        text: "Reports",
        link: "/reports",
      },
    ],
  },
  {
    label: "Settings",
    menu: [
      {
        icon: <UserCircle className="h-5 w-5" />,
        text: "Profile",
        link: "/profile",
      },
      {
        icon: <Building className="h-5 w-5" />,
        text: "Hotel",
        link: "/hotel",
      },
    ],
  },
];

export default routes;
