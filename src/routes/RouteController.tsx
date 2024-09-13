import { Route, Routes } from "react-router-dom";
import SuspenseElement from "../utils";
import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const Details = lazy(() => import("./details/Details"));
const Private = lazy(() => import("./private/Private"));
const Liked = lazy(() => import("./liked/Liked"));

const RouteController = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SuspenseElement>
            <Home />
          </SuspenseElement>
        }
      />

      <Route
        path="/details/:id"
        element={
          <SuspenseElement>
            <Details />
          </SuspenseElement>
        }
      />
      <Route
        path="/liked"
        element={
          <SuspenseElement>
            <Liked />
          </SuspenseElement>
        }
      />

      <Route
        path="/private"
        element={
          <SuspenseElement>
            <Private />
          </SuspenseElement>
        }
      />
    </Routes>
  );
};

export default RouteController;
