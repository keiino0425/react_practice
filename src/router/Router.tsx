import { memo } from "react";
import { Route, Routes} from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/Layout/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<HeaderLayout />}
        >
          {HomeRoutes.map((route) => (
            <Route
              key={route.path}
              path={`${route.path}`}
              element={route.children}
            />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
