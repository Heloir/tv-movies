"use client"

import api from "@/app/api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuth = () => {
  const router = useRouter();
  const jwtToken = Cookies.get("jwtToken");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/filmspage", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        console.log(response);
      } catch (error) {
        router.push("/auth/login");
        console.log(error);
      }
    };

    checkAuth();
  }, [router, jwtToken]);
};



export default useAuth