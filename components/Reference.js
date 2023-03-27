import React, { Fragment } from "react";

const Reference = () => {
  return (
    <Fragment>
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="images/logo-google.png" alt="" />
          <img src="images/logo-ibm.png" alt="" />
          <img src="images/logo-microsoft.png" alt="" />
          <img src="images/logo-hp.png" alt="" />
          <img src="images/logo-vector-graphics.png" alt="" />
        </div>
      </section>
      <section id="bottom">
        <div className="section-container my-20">
          <h3>Clipboard for iOS and MacOs</h3>
          <p className="section-content mb-10">
            Sunt do ea magna exercitation sint Lorem duis aliquip culpa Laborum
            ex cillum ex deserunt. proident exercitation pariatur consequat
            tempor sit deserunt. Eiusmod est eiusmod Lorem enim laboris aute. Et
            exercitation proident ipsum ut anim dolore
          </p>
          <div className="button-container">
            <a className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
              Download For iOS
            </a>
            <a className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
              Download For Mac
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src="images/logo.svg" alt="" className="scale=50" />
            <div className="flex flex-col items-center justify-between flex-1 mb-1- space-x-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>


                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                       Press Kit</a>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-strongCyan">
                        Install Guide
                    </a>
                  </div>
                </div>



              </div>

            </div>


            <div className="flex justify-between w-32 py-1">
                <a href="#">
                    <img className="ficon duration-200" src="images/icon-facebook.svg"></img>
                </a>
                <a href="#">
                    <img className="ficon duration-200" src="images/icon-twitter.svg"></img>
                </a>
                <a href="#">
                    <img className="ficon duration-200" src="images/icon-instagram.svg"></img>
                </a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Reference;
