import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import RoutesInter from "./RoutesInter";
import PublicRouter from "./PublicRouter";
import PrivateRouters from "./PrivateRouters";

export default function LoginRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouters>
              <RoutesInter />
            </PrivateRouters>
          }
        />
      </Routes>
    </>
  );
}
