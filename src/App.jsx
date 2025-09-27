import { Route, Routes } from "react-router";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collection from "./pages/Collection";
import Journal from "./pages/Journal";
import Lookbook from "./pages/Lookbook";
import Pages from "./pages/Pages";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<RootLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="shop"
          element={<Shop />}
        />
        <Route
          path="collection"
          element={<Collection />}
        />
        <Route
          path="journal"
          element={<Journal />}
        />
        <Route
          path="lookbook"
          element={<Lookbook />}
        />
        <Route
          path="pages"
          element={<Pages />}
        />
      </Route>
    </Routes>
  );
}
