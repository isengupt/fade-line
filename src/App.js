import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./App.css";
import { Spring } from "react-spring/renderprops";
import Navbar from "./components/Navbar";
import {
  HeaderImages,
  MovingTexts,
  MovingLine,
  ArticleReel,
} from "./components/SpringComponents";
import VisibilitySensor from "./components/VisibilitySensor";

function App() {
  const [pageChanged, setPageChanged] = useState(true);
  let parallax;
  return (
    <>
      <Navbar />
      <Parallax pages={1.6} ref={(ref) => (parallax = ref)}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          onClick={() => parallax.scrollTo(0.7)}
        >
          <div className="page-container">
            <div className="hero__text__container">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(80px)",
                    }}
                  >
                    {(props) => (
                      <div style={props} className="hero__text">
                      Lorem Ipsum is simply dummy text of the printing
                      </div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          factor={1}
          speed={0.1}
          onClick={() => parallax.scrollTo(0)}
        >
          <section className="header__image__section">
            <div className="top__section">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => <MovingLine isVisible={isVisible} />}
              </VisibilitySensor>

              <div className="images__container">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }) => (
                    <>
                      <HeaderImages isVisible={isVisible} />

                      <Spring
                        delay={200}
                        to={{
                          width: pageChanged ? "0%" : "100%",
                          opacity: pageChanged ? 0 : 1,
                        }}
                      >
                        {(props) => (
                          <div style={props} className="moving__line"></div>
                        )}
                      </Spring>

                      <Spring
                        delay={0}
                        to={{
                          width: pageChanged ? "100%" : "0%",
                          opacity: pageChanged ? 1 : 0,
                        }}
                      >
                        {(props) => (
                          <div style={props} className="moving__line2"></div>
                        )}
                      </Spring>
                    </>
                  )}
                </VisibilitySensor>
              </div>
              <div className="image__captions__container">
                <div className="image__captions">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => <MovingTexts isVisible={isVisible} />}
                  </VisibilitySensor>
                </div>
              </div>
            </div>

            <VisibilitySensor
              onChange={() => setPageChanged(!pageChanged)}
              partialVisibility
            >
              {({ isVisible }) => <ArticleReel isVisible={isVisible} />}
            </VisibilitySensor>

            <div className="footer">
              <div className="image__captions__container">
                <div className="image__captions">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => <MovingTexts isVisible={isVisible} />}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
