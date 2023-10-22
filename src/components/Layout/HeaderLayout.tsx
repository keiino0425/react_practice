import { ReactNode, memo } from "react";
import { Outlet } from 'react-router-dom';
import { Header } from "../organisms/layout/Header";

export const HeaderLayout = memo((props) => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
});
