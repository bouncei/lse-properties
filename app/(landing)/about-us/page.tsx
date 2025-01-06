"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const AboutUsPage = () => {
  const testLogin = async () => {
    try {
      const res = await fetch("https://psc-be.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "joshuainyang255@gmail.com",
          password: "Demo123.",
        }),
      });
      const data = await res.json();
      console.log("res", data);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2h1YWlueWFuZzI1NUBnbWFpbC5jb20iLCJleHBpcmVzIjoxNzM2NTQwMjEzLjQ2ODMyNTl9.hZhKWfgqZF19g8OPcG_wnZpSbkYp7s1cdz_VeT1MvSs";

  const getSubjects = async () => {
    console.log("here");
    try {
      const res = await fetch("https://psc-be.onrender.com/subject", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log("res subjects:", data);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const createReminder = async () => {
    console.log("here. Create reminder");
    try {
      const res = await fetch("https://psc-be.onrender.com/reminder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: "Biology Quiz!",
          date: "2025-12-12",
          time: "08:00",
          repeat: "daily",
        }),
      });
      const data = await res.json();
      console.log("res subjects:", data);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  return (
    <div>
      <Button size="lg" onClick={createReminder}>
        Login
      </Button>
    </div>
  );
};

export default AboutUsPage;
