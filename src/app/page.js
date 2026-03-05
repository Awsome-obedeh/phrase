"use client";
import { useEffect, useState } from "react";
import Loader from "./component/Loader";
import Home from "./component/Home";


export default function page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  // 👇 THIS BLOCKS MAIN PAGE
  if (loading) {
    return <Loader />;
  }

  // 👇 MAIN PAGE ONLY SHOWS AFTER LOADER
  return <Home/>;
}
