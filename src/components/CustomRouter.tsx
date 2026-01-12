import { BrowserRouter, Routes, Route } from "react-router-dom";
import DubTopFall2025 from "../pages/DubTop/DubTopFall2025";
import HomePage from "../pages/HomePage";
import MathPage from "../pages/MathPage";
import ScullyPage from "../pages/ScullyPage";
import TeachingPage from "../pages/TeachingPage";
import Page from "./Page";
import DubTopWinter2026 from "../pages/DubTop/DubTopWinter2026";

const CustomRouter = () => {
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
        <Route
          path='/dubtop-fall-2025'
          element={
            <Page title='DubTop Fall 2025' component={<DubTopFall2025 />} />
          }
        />
        <Route
          path='/dubtop-winter-2026'
          element={
            <Page title='DubTop Winter 2026' component={<DubTopWinter2026 />} />
          }
        />
        <Route
          path='/scully'
          element={
            <Page title='Jay Reiter - Scully' component={<ScullyPage />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
