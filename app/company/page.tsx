"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css"
import { Image } from "@aws-amplify/ui-react"
import Hero from "@/components/company/hero";
import Header from "@/components/header";
import Footer from "@/components/company/footer";
import WhoWeAre from "@/components/company/who-we-are";

Amplify.configure(outputs);

export default function App() {
  return (
    <main>
      <Header/>
      <Hero/>
      <WhoWeAre/>
      <Footer/>
    </main>
  );
}
