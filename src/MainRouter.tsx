import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import QuizPage from "./QuizPage";
import Layout from "./Layout";

import allSongsData from "./data/songs.json";
import bangersData from "./data/bangers.json";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/quiz/all"
          element={
            <Layout>
              <QuizPage songs={allSongsData.songs} />
            </Layout>
          }
        />
        <Route
          path="/quiz/bangers"
          element={
            <Layout>
              <QuizPage songs={bangersData.songs} />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
