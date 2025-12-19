import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  MathPage,
  TeachingPage,
  DubTopFall2025,
  ScullyPage,
} from "../pages";
import { Page } from "../components";

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
        <Route
          path='/dubtop-fall-2025'
          element={
            <Page title='DubTop Fall 2025' component={<DubTopFall2025 />} />
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
export default Router;
