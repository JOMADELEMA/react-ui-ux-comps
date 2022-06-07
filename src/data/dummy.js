import {
  User,
  Home,
  InfoCircle,
  QuestionMark,
  LayoutDashboard,
} from "tabler-icons-react";

export const links = [
  {
    title: "Information",
    links: [
      {
        name: "Home",
        icon: <Home />,
        path: "/",
      },
      { name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
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
