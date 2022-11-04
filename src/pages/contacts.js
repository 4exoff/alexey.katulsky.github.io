import React from "react";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";

const Contacts = () => {
  return (
    <>
      <main className="page">
        <div className="container">
          <div className="row">
            <Fade triggerOnce>
              <h1>Contact me</h1>
              <Socials />
            </Fade>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
