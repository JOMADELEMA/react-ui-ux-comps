import { User, Home, InfoCircle, QuestionMark } from "tabler-icons-react";

export const links = [
  {
    title: "Dashboard",
    links: [{ name: "Perfil", icon: <User /> }],
  },
  {
    title: "Information",
    links: [
      {
        name: "Home",
        icon: <Home />,
      },
      {
        name: "About us",
        icon: <InfoCircle />,
      },
      {
        name: "FAQ",
        icon: <QuestionMark />,
      },
    ],
  },
];
