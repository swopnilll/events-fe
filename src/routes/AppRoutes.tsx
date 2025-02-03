import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import EventList from "../features/Events/pages/EventList";
import EventDetails from "../features/Events/pages/EventDetails";
import EventCreation from "../features/Events/pages/EventCreation";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <EventList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events/:id"
              element={
                <ProtectedRoute>
                  <EventDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-event"
              element={
                <ProtectedRoute>
                  <EventCreation />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<AuthPage />} />
            <Route path="/auth/signUp" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
