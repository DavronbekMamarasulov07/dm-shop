import { Route, Routes } from "react-router-dom";
import Suspense from "../utils";
import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const Details = lazy(() => import("./details/Details"));
const Private = lazy(() => import("./private/Private"));
const Liked = lazy(() => import("./liked/Liked"));
const Profile = lazy(() => import("./profile/Profile"));
const Search = lazy(() => import("./search/Search"));
const NotFound = lazy(() => import("./not-found/NotFound"));
const Cart = lazy(() => import("./cart/Cart"));

const RouteController = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="/details/:id"
        element={
          <Suspense>
            <Details />
          </Suspense>
        }
      />
      <Route
        path="/liked"
        element={
          <Suspense>
            <Liked />
          </Suspense>
        }
      />

      <Route
        path="/profile"
        element={
          <Suspense>
            <Private />
          </Suspense>
        }
      >
        <Route path="" element={<Suspense><Profile /></Suspense>} />
      </Route>
      
      <Route path="/search" element={<Suspense><Search /></Suspense>} />
      <Route path="/cart" element={<Suspense><Cart /></Suspense>} />
      <Route path="*" element={<Suspense><NotFound /></Suspense>} />

    </Routes>
  );
};

export default RouteController;
