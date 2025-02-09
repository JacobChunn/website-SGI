"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css"
import { Image } from "@aws-amplify/ui-react"
import Header from "@/components/header";
import Footer from "@/components/contact/footer";
import Quote from "@/components/contact/quote";

Amplify.configure(outputs);

export default function App() {
  return (
    <main>
      <Header/>
      <Quote/>
      <Footer/>
    </main>
  );
}
