import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = [
  {
    path: "",
    children: <Home />
  },
  {
    path: "user_management",
    children: <UserManagement />
  },
  {
    path: "setting",
    children: <Setting />
  },
  {
    path: "*",
    children: <Page404 />
  }
];
