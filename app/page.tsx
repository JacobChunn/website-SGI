"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css"
import { Image } from "@aws-amplify/ui-react"
import Hero from "@/components/home/hero";
import Header from "@/components/header";
import WhatWeCanDo from "@/components/home/what-we-can-do";
import Testimonials from "@/components/home/testimonials";
import Quote from "@/components/home/quote";
import Questions from "@/components/home/questions";
import Footer from "@/components/home/footer";
import { Schema } from "@/amplify/data/resource";


// const client = generateClient<Schema>();

export default function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // function listTodos() {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }

  // useEffect(() => {
  //   listTodos();
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({
  //     content: window.prompt("Todo content"),
  //   });
  // }

  // return (
  //   <main>
  //     <Image
  //       alt="The Stellar Group"
  //       src="/SGI-Logo.png"
  //     />
  //     <div>
  //       🥳 App successfully hosted. Try creating a new todo.
  //       <br />
  //       <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
  //         Review next steps of this tutorial.
  //       </a>
  //     </div>
  //   </main>
  // );
  return (
    <main>
      <Header/>
      <Hero/>
      <WhatWeCanDo/>
      <Testimonials/>
      <Quote/>
      <Questions/>
      <Footer/>
    </main>
  );
}
