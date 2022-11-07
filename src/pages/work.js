import React, { useId } from "react";
import Footer from "../components/Footer";

import { Fade } from "react-awesome-reveal";

import GurtamLogo from "../assets/gurtam-logo.png";
import EfecturaLogo from "../assets/efectura-logo.png";

const Work = () => {
  const id = useId();

  return (
    <>
      <main className="page">
        <div className="container">
          <div className="row">
            <Fade triggerOnce>
              <h1>Work Experience</h1>
            </Fade>
            <article className="company blur" id="gurtam">
              <article className="company__left">
                <div className="company__logo-section">
                  <img
                    className="company__logo"
                    src={GurtamLogo}
                    alt="Gurtam logo"
                  />
                </div>
                <span className="company__name-company">Gurtam</span>
              </article>

              <article className="company__right">
                <section>
                  <label htmlFor={"position-" + id}>position:</label>
                  <span id={"position-" + id} className="company__position">
                    Front-End Web Developer
                  </span>
                </section>
                <section>
                  <label htmlFor={"date-" + id}>work date:</label>
                  <span id={"date-" + id} className="company__work-date">
                    okt. 2019 - march 2022
                  </span>
                </section>
                <section>
                  <label htmlFor={"responsibilities-" + id}>
                    responsibilities:
                  </label>
                  <p
                    id={"responsibilities-" + id}
                    className="company__responsibilities"
                  >
                    Worked in a hybrid format (remotely and from the office).
                    Interacted with the team using the Scrum methodology.
                    Communicated with developers from other departments of the
                    company. Created new functionality and supported existing
                    projects. Refactored someone else's code. Fixed bugs.
                    Administrated in the confluence viewport theme.
                  </p>
                </section>
                <section>
                  <label htmlFor={"projects-" + id}>projects:</label>
                  <ul id={"projects-" + id} className="company__projects">
                    <li>
                      <a
                        href="https://www.Gurtam.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gurtam.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Flespi.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flespi.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.help.wialon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Wialon.ru"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wialon.ru
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Wialon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wialon.com
                      </a>
                    </li>
                    <li>& other local projects.</li>
                  </ul>
                </section>

                <section>
                  <label htmlFor={"stack-" + id}>skills:</label>
                  <ul id={"stack-" + id} className="company__stack">
                    <li>HTML5</li>
                    <li>JS</li>
                    <li>TypeScript</li>
                    <li>Css3</li>
                    <li>SASS</li>
                    <li>Less</li>
                    <li>JSON</li>
                    <li>Vue</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Redux Toolkit</li>
                    <li>Webpack</li>
                    <li>Gulp</li>
                    <li>REST</li>
                    <li>PostgreSQL</li>
                    <li>Figma</li>
                    <li>Confluence</li>
                    <li>JIRA</li>
                    <li>CI/CD</li>
                    <li>Git</li>
                    <li>Yii2</li>
                    <li>Linux</li>
                    <li>VS Code</li>
                    <li>WebStorm</li>
                  </ul>
                </section>
              </article>
            </article>

            <article className="company blur" id="efectura">
              <article className="company__left">
                <div className="company__logo-section">
                  <img
                    className="company__logo"
                    src={EfecturaLogo}
                    alt="Efectura logo"
                  />
                </div>
                <span className="company__name-company">Efectura</span>
              </article>

              <article className="company__right">
                <section>
                  <label htmlFor={"position-" + id}>position:</label>
                  <span id={"position-" + id} className="company__position">
                    Front-End Developer
                  </span>
                </section>
                <section>
                  <label htmlFor={"date-" + id}>work date:</label>
                  <span id={"date-" + id} className="company__work-date">
                    aug. 2017 - sep. 2019
                  </span>
                </section>
                <section>
                  <label htmlFor={"responsibilities-" + id}>
                    responsibilities:
                  </label>
                  <p
                    id={"responsibilities-" + id}
                    className="company__responsibilities"
                  >
                    The company was directed to outsourcing. The main customers
                    were from Turkey and a few CIS countries. Engaged in writing
                    new functionality and maintaining existing ones. Took part
                    in the designing, developing and maintaining of the modules.
                    Engaged in writing automated tests to check the performance
                    of a CRM system on selenium (C#).
                  </p>
                </section>
                <section>
                  <label htmlFor={"projects-" + id}>projects:</label>
                  <ul id={"projects-" + id} className="company__projects">
                    <li>
                      <a
                        href="https://www.lifecell.ua/uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lifecell
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.alfabank.by/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AlfaBank events
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://seramiksan.com.tr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Seramiksan
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://silverline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Silverline
                      </a>
                    </li>
                    <li>& other local projects.</li>
                  </ul>
                </section>

                <section>
                  <label htmlFor={"stack-" + id}>skills:</label>
                  <ul id={"stack-" + id} className="company__stack">
                    <li>HTML5</li>
                    <li>JS</li>
                    <li>jQuery</li>
                    <li>Css3</li>
                    <li>Less</li>
                    <li>JSON</li>
                    <li>Vue</li>
                    <li>REST</li>
                    <li>MySQL</li>
                    <li>C#</li>
                    <li>ASP.NET MVC 5</li>
                    <li>IIS</li>
                    <li>Git</li>
                    <li>SourceTree</li>
                    <li>Bitbucket</li>
                    <li>Postman</li>
                    <li>Selenium</li>
                    <li>VS Code</li>
                    <li>Visual Studio</li>
                  </ul>
                </section>
              </article>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Work;
