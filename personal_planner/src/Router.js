import { Route, Routes } from "react-router-dom";
import PlanList from "./pages/actsOverview/list/List";
import HomePage from "./pages/home/HomePage";

export const RouterProvider = (props) => {
  return (
    <Routes>
      <Route path={"/home"} element={<HomePage />} />
      <Route path={"/plans/cards"} element={<PlanList />} />
    </Routes>
  );
};
