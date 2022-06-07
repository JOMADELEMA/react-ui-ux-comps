import { User, Home, InfoCircle, QuestionMark, LayoutDashboard } from "tabler-icons-react";

export const links = [
  {
    title: "Dashboard",
    links: [{ name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" }],
  },
  {
    title: "Information",
    links: [
      {
        name: "Home",
        icon: <Home />,
        path: "/",
      },
      {
        name: "About us",
        icon: <InfoCircle />,
        path: "/about",
      },
      {
        name: "FAQ",
        icon: <QuestionMark />,
        path: "/faq",
      },
    ],
  },
];
