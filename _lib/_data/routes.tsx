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
        icon: <Home />,
        text: "Dashboard",
        link: "/dashboard",
      },
    ],
  },
  {
    label: "Operation",
    menu: [
      {
        icon: <Calendar />,
        text: "Booking",
        link: "/booking",
      },
      {
        icon: <Building />,
        text: "Room",
        link: "/room",
      },
    ],
  },
  {
    label: "Administration",
    menu: [
      {
        icon: <User />,
        text: "Users",
        link: "/users",
      },
      {
        icon: <ChartBar />,
        text: "Reports",
        link: "/reports",
      },
    ],
  },
  {
    label: "Settings",
    menu: [
      {
        icon: <UserCircle />,
        text: "Profile",
        link: "/profile",
      },
      {
        icon: <Building />,
        text: "Hotel",
        link: "/hotel",
      },
    ],
  },
];

export default routes;
