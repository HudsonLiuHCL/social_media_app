import { Routes, Route } from "react-router-dom";

import {
  Home,
  Search,
  Posts,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import SchoolYear from "./_root/pages/Classes/SchoolYear";
import Online from "./_root/pages/Classes/Online";
import SpringAndSummer from "./_root/pages/Classes/SpringAndSummer";
import School from "./_root/pages/Campus/School";
import StudentDesignation from "./_root/StudentDesignation";
import Dorm from "./_root/pages/Campus/Dorm";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/SchoolYear" element={<SchoolYear />} />
          <Route path="/Online" element={<Online />} />
          <Route path="/SpringAndSummer" element={<SpringAndSummer />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/School" element={<School />} /> 
          <Route path="/Dorm" element={<Dorm />} /> 
          <Route path="/Student-Designation" element={<StudentDesignation />} /> 
          <Route path="/Posts" element={<Posts />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
