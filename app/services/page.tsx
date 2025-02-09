"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css"
import { Image } from "@aws-amplify/ui-react"
import Hero from "@/components/services/hero";
import Header from "@/components/header";
import Footer from "@/components/services/footer";
import ServiceSection from "@/components/support/service-section";

Amplify.configure(outputs);

// const client = generateClient<Schema>();



export default function App() {

  return (
    <main>
      <Header/>
      <Hero/>

      {/* 1st 3 */}
      <ServiceSection
        contentSide={"left"}
        title={"Windows"}
        description={"Upgrade your home's look and energy efficiency with our professional window installation and replacement services. We offer high-quality, durable windows that are built to last and enhance your home's comfort and appeal."}
        imgPath={"/services/services_1.jpg"}
        bgCol={"light"}      
      />
      <ServiceSection
        contentSide={"right"}
        title={"Doors"}
        description={"From sturdy entry doors to stylish interior doors, we provide expert door installation and replacement. Improve your home's security, functionality, and design with doors tailored to your needs."}
        imgPath={"/services/services_2.png"}
        bgCol={"med"}      
      />
      <ServiceSection
        contentSide={"left"}
        title={"Roofing"}
        description={"Protect your home with our reliable roofing solutions. Whether it's a repair or a full roof replacement, our skilled team ensures your home stays safe and secure from the elements."}
        imgPath={"/services/services_3.jpg"}
        bgCol={"dark"}      
      />

      {/* 2nd 3 */}
      <ServiceSection
        contentSide={"right"}
        title={"Vinyl Siding"}
        description={"Refresh your home's exterior with durable and low-maintenance vinyl siding. Available in a variety of colors and styles, our siding solutions are designed to add value and curb appeal to your property."}
        imgPath={"/services/services_4.jpg"}
        bgCol={"light"}      
      />
      <ServiceSection
        contentSide={"left"}
        title={"Kitchens"}
        description={"Transform your kitchen into a space that's as functional as it is beautiful. Our kitchen remodeling services bring your vision to life with customized layouts, modern designs, and expert craftsmanship."}
        imgPath={"/services/services_5.jpg"}
        bgCol={"med"}      
      />
      <ServiceSection
        contentSide={"right"}
        title={"Bathrooms"}
        description={"Create the bathroom of your dreams with our remodeling services. Whether you need a simple update or a complete overhaul, we'll deliver a stylish, functional space tailored to your needs."}
        imgPath={"/services/services_6.jpg"}
        bgCol={"dark"}      
      />

      {/* Last 3 */}
      <ServiceSection
        contentSide={"left"}
        title={"Finished Basements"}
        description={"Turn your basement into a livable, enjoyable space with our finishing services. Whether it's a family room, home office, or entertainment area, we'll help you maximize your home's potential."}
        imgPath={"/services/services_7.jpg"}
        bgCol={"light"}      
      />
      <ServiceSection
        contentSide={"right"}
        title={"Quick Fixes for Real Estate Closings"}
        description={"Don't let small construction issues delay your closing. We specialize in quick, affordable repairs to meet FHA or bank requirements, ensuring your property is ready to close on time."}
        imgPath={"/services/services_8.jpg"}
        bgCol={"med"}      
      />
      <ServiceSection
        contentSide={"left"}
        title={"Licensed Residential Building Services"}
        description={"As a licensed residential builder in Michigan, we provide a wide range of construction services. From structural updates to compliance repairs, you can trust our team for reliable, high-quality work."}
        imgPath={"/services/services_9.jpg"}
        bgCol={"dark"}      
      />
      <Footer/>
    </main>
  );
}
