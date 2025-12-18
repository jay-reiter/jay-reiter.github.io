import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MathPage from "../pages/MathPage";
import TeachingPage from "../pages/TeachingPage";
import Page from "./Page";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path='/'
          element={<Page title='Jay Reiter' component={<HomePage />} />}
        />
        <Route
          path='/math'
          element={<Page title='Jay Reiter - Math' component={<MathPage />} />}
        />
        <Route
          path='/teaching'
          element={
            <Page title='Jay Reiter - Teaching' component={<TeachingPage />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
