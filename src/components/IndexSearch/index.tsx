'use client';

import React, { useRef, useState } from "react";
import Banner from "../Banner";
import BannerMobile from "../BannerMobile";

export default function IndexSearch() {
  return (
    <>
      <div className="sm:hidden"> <Banner /></div>
      <div className="sm:block hidden"><BannerMobile /></div>
    </>
  );
}
