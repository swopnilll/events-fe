import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import EventList from "../features/Events/pages/EventList";
import EventCreation from "../features/Events/pages/EventCreation";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/create-event" element={<EventCreation />} />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<AuthPage action="login" />} />
            <Route path="/auth/signUp" element={<AuthPage action="logout" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
