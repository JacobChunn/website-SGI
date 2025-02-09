"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/app/app.css"
import { Image } from "@aws-amplify/ui-react"
import Header from "@/components/header";
import Footer from "@/components/privacy-policy/footer";
import Hero from "@/components/privacy-policy/hero";
import PrivacyPolicySection from "@/components/support/privacy-policy-section";

Amplify.configure(outputs);

export default function App() {
  return (
    <main>
      <Header/>
      <Hero/>
      <PrivacyPolicySection
        title={"Information that is gathered from visitors"}
        description={"As is common with other websites, cookie log files are stored on the web server saving details such as the visitor\'s IP address, browser type, referring page and time of visit. Cookies may be used to remember visitor preferences when interacting with this website. Where registration is required, the visitor\'s email and a username will be stored on the server. By using this website you consent to our use of cookie tracking to provide a better experience."}
        bgCol={"light"}
      />
      <PrivacyPolicySection
        title={"Visitor Options"}
        description={"If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in e-mail that you receive. You may be able to block cookies via your browser settings but this may prevent you from accessing certain features of this website."}
        bgCol={"med"}
      />
      <PrivacyPolicySection
        title={"Cookies"}
        description={"Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website. 3rd party advertising companies may also use cookies for tracking purposes."}
        bgCol={"dark"}
      />
      <PrivacyPolicySection
        title={"Google Ads"}
        description={"Google, as a third party vendor, uses cookies to serve ads. Google\'s use of the DART cookie enables it to serve ads to visitors based on their visit to sites they visit on the Internet. Website visitors may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy."}
        bgCol={"light"}
      />
      <PrivacyPolicySection
        title={"Google Analytics"}
        description={"Google Analytics, as a third part vendor, uses cookies to collect data from website visitors including but not limited to time on site, device information, browser information, etc. By using this site you consent to our use of this data. How Google uses cookie data when you use our site:"}
        bgCol={"med"}
        linkText="see more here"
        linkDest="https://policies.google.com/technologies/cookies?hl=en-US"
      />
      <PrivacyPolicySection
        title={"SMS Marketing"}
        description={"We value your privacy and the information you consent to share in relation to our SMS marketing service. We use this information to send you text notifications (for your order, including abandoned checkout reminders), text marketing offers, and transactional texts, including requests for reviews from us. Opt-in data and consent for text messaging will not be shared with any third parties except for messaging partners, for the purpose of enabling and operating our text messaging program. Our website uses cookies to keep track of items you put into your shopping cart, including when you have abandoned your checkout. This information is used to determine when to send cart reminder messages via SMS."}
        bgCol={"dark"}
      />
      <Footer/>
    </main>
  );
}
