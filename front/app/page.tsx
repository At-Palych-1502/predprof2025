"use client"

import Image from "next/image";
import { getMap } from "./tools/mock";
import { useEffect } from "react";

export default function Home() {
  

  useEffect(() => {
    console.log(getMap());
  }, [])

  return (
    <div>
      
    </div>
  );
}
