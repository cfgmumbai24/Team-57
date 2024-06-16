import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import "../Home/home.css";

const Home = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NAVYUG</title>
        {/* <link
          href="https://sidcupfamilygolf.com/wp-content/themes/puttosaurus/favicons/favicon-32x32.png"
          type="image/x-icon"
        /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
      </head>

      <body>
        <div id="nav">
          <img src="src/assets/logo_navyug.jpeg" alt="LOGO" />
          <div id="homenav" className="navbtn">
            <a href="#">HOME</a>
          </div>
          <div id="newsnav" className="navbtn">
            <a href="#">ABOUT</a>
          </div>
          <div id="emandinav" className="navbtn">
            <a href="#">VISION</a>
          </div>
          <div id="agronav" className="navbtn">
            <a href="#">GOALS</a>
          </div>
          <div id="krishinav" className="navbtn">
            <a href="#">DOUBTS</a>
          </div>
          <div id="cropdisnav" className="navbtn">
            <a href="#">CONTACT</a>
          </div>
          {user && (
            <div>
              {/* <span>{user.email}</span> */}
              <button className="loginKaro" onClick={handleClick}>
                LogOut
              </button>
            </div>
          )}
          {!user && (
            <div className="loginKaro">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </div>

        <div id="cursor"></div>
        <div id="cursor-blur"></div>

        <video
          autoPlay
          loop
          muted
          src="https://videos.pexels.com/video-files/4917868/4917868-hd_1366_720_25fps.mp4"
        ></video>
        <div id="main">
          <div id="page1">
            <h1>NAVYUG</h1>
            <h2>एक बेहतर कल की ओर</h2>
            <p>
              Our aim is to leverage data to provide statistical analysis in a
              simplified format using graphs and charts. This approach ensures
              clear and actionable insights for improved decision-making and
              strategic planning
            </p>
            <div id="arrow">
              <i className="ri-arrow-down-line"></i>
            </div>
          </div>
          <div id="page2">
            <div id="scroller">
              <div id="scroller-in">
                <h4>PARTNERS&nbsp;&nbsp;</h4>
                <h4>HelpGo&nbsp;&nbsp;</h4>
                <h4>WeWILL&nbsp;&nbsp;</h4>
                <h4>US&nbsp;&nbsp;</h4>
                <h4>SHAKTI&nbsp;&nbsp;</h4>
                <h4>TRIBAL&nbsp;&nbsp;</h4>
              </div>
              <div id="scroller-in">
                <h4>PARTNERS</h4>
                <h4>HelpGo</h4>
                <h4>WeWILL</h4>
                <h4>SHAKTI</h4>
                <h4>TRIBAL</h4>
              </div>
            </div>
            <div id="about-us">
              <img
                src="https://images.unsplash.com/photo-1515900959941-d1cce424f5c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="ABOUT LEFT"
              />
              <div id="about-us-in">
                <h3>ABOUT US</h3>
                <p>
                  Leveraging goat data enables us to compare and enhance farming
                  techniques, ultimately improving the community's livelihood.
                  Through this data-driven approach, we can achieve sustainable
                  agricultural practices and better outcomes for farmers.
                  Welcome to NAVYUG, a platform dedicated to enhancing goat
                  farming through detailed data analysis. Our mission is to
                  provide farmers, researchers, and policymakers with actionable
                  insights on gender, mortality, vaccination and treatment
                  efficiency, and population growth. By leveraging this data, we
                  aim to improve herd management and ensure sustainable
                  livestock practices.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1510976308242-cab15dbb17da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="ABOUT RIGHT"
              />
            </div>
            <div id="cards-container">
              <div className="card" id="card1">
                <div className="overlay">
                  <h4>DASHBOARD</h4>
                  <p>
                    Our platform features a dynamic dashboard that visualizes
                    key metrics through advanced graphs and charts, providing a
                    comprehensive overview at a glance. This enables users to
                    quickly interpret data, identify trends, and make informed
                    decisions for better herd management.
                  </p>
                </div>
              </div>
              <div className="card" id="card2">
                <div className="overlay">
                  <h4>
                    MORTALITY <br />
                    REDUCTION
                  </h4>
                  <p>
                    Our platform aims to significantly reduce goat mortality by
                    ensuring timely and appropriate medication, supported by
                    comprehensive health monitoring and data analysis.
                  </p>
                </div>
              </div>
              <div className="card" id="card3">
                <div className="overlay">
                  <h4>Comparison</h4>
                  <p>
                    Access reliable agricultural inputs through
                    government-certified stores, ensuring product authenticity
                    and quality assurance. Conveniently locate nearby stores for
                    hassle-free procurement and strategic planning based on
                    local demand patterns.
                  </p>
                </div>
              </div>
            </div>
            <div id="green-div">
              <img
                src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
                alt="HELLO"
              />
              <h4>
                ANNOUNCEMENTS
                <p>
                  Village Bawri has increased the birth rate of goats by 12%
                </p>
              </h4>
              <img
                src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
                alt="BYE"
              />
            </div>
          </div>
          <div id="page3">
            <p>
              Goats are crucial to farmers as they provide a reliable source of
              income through milk, meat, and wool production. They are hardy
              animals that thrive in diverse environments, making them ideal for
              small-scale and rural farming. Additionally, goats contribute to
              food security and economic stability in farming communities.
            </p>
            <img
              id="colon1"
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
              alt="colonopen"
            />
            <img
              id="colon2"
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
              alt="colonclose"
            />
          </div>
          <div id="page4">
            <h1>WHAT ARE YOU WAITING FOR?</h1>
            <div className="elem">
              <h2>Improved Lifestyle</h2>
              <img
                src="https://images.unsplash.com/photo-1570966087241-20278ac27b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBmYXJtZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="elem">
              <h2>Better Analysis</h2>
              <img
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhciUyMGdyYXBofGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="elem">
              <h2>Better Opportunities</h2>
              <img
                src="https://images.unsplash.com/photo-1609252509229-364936a1d1a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyaWJhbCUyMGluZGlhfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
          <div id="footer">
            <img src="" alt="" />
            <div id="f1">
              <img src="src/assets/logo_navyug.jpeg" alt="sorry" />
            </div>
            <div id="f2">
              <h3>Personalized Dashboard</h3>
              <h3>Data Analysis</h3>
              <h3>Improved methods</h3>
              <h3>Better lifestyle</h3>
            </div>
            <div id="f3">
              <h2>Our Partners</h2>
              <br />
              <a href="https://agriwelfare.gov.in/" target="_blank">
                Department of Agriculture and Farmers Welfare
              </a>
              <br />
              <br />
              <a href="https://agriculture.up.gov.in/" target="_blank">
                Department of Agriculture, U.P.
              </a>
            </div>
            <div id="f4">
              <h4>
                Team 57 <br />
                <br />
              </h4>
            </div>
          </div>
        </div>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js"
          integrity="sha512-qF6akR/fsZAB4Co1QDDnUXWnaQseLGXoniuSuSlPQK6+aWhlMZcHzkasCSlnWoe+TJuudlka1/IQ01Dnhgq95g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js"
          integrity="sha512-IHDCHrefnBT3vOCsvdkMvJF/MCPz/nBauQLzJkupa4Gn4tYg5a6VGyzIrjo6QAUy3We5HFOZUlkUpP0dkgE60A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script src="script.js"></script>
      </body>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import "../Home/home.css";

// const Home = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     logout();
//   };

//   return (
//     <div>
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>NAVYUG</title>
//         <link
//           href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
//           rel="stylesheet"
//         />
//         <link rel="stylesheet" href="style.css" />
//       </head>
//       <body>
//         <div id="nav">
//           <img src="/src/assets/logo_navyug.jpeg" alt="LOGO" />
//           <div id="homenav" className="navbtn">
//             <a href="#">HOME</a>
//           </div>
//           <div id="newsnav" className="navbtn">
//             <a href="#">ABOUT</a>
//           </div>
//           <div id="emandinav" className="navbtn">
//             <a href="#">VISION</a>
//           </div>
//           <div id="agronav" className="navbtn">
//             <a href="#">GOALS</a>
//           </div>
//           <div id="krishinav" className="navbtn">
//             <a href="#">DOUBTS</a>
//           </div>
//           <div id="cropdisnav" className="navbtn">
//             <a href="#">CONTACT</a>
//           </div>
//           {user ? (
//             <div>
//               <button className="loginKaro" onClick={handleClick}>
//                 LogOut
//               </button>
//             </div>
//           ) : (
//             <div className="loginKaro">
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Signup</Link>
//             </div>
//           )}
//         </div>

//         <div id="cursor"></div>
//         <div id="cursor-blur"></div>

//         <video controls autoPlay loop muted>
//           <source
//             src="https://videos.pexels.com/video-files/4917868/4917868-hd_1366_720_25fps.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         <div id="main">
//           <div id="page1">
//             <h1>NAVYUG</h1>
//             <h2>एक बेहतर कल की ओर</h2>
//             <p>
//               Our aim is to leverage data to provide statistical analysis in a
//               simplified format using graphs and charts. This approach ensures
//               clear and actionable insights for improved decision-making and
//               strategic planning
//             </p>
//             <div id="arrow">
//               <i className="ri-arrow-down-line"></i>
//             </div>
//           </div>

//           <div id="page2">
//             <div id="scroller">
//               <div id="scroller-in">
//                 <h4>PARTNERS&nbsp;&nbsp;</h4>
//                 <h4>HelpGo&nbsp;&nbsp;</h4>
//                 <h4>WeWILL&nbsp;&nbsp;</h4>
//                 <h4>US&nbsp;&nbsp;</h4>
//                 <h4>SHAKTI&nbsp;&nbsp;</h4>
//                 <h4>TRIBAL&nbsp;&nbsp;</h4>
//               </div>
//               <div id="scroller-in">
//                 <h4>PARTNERS</h4>
//                 <h4>HelpGo</h4>
//                 <h4>WeWILL</h4>
//                 <h4>SHAKTI</h4>
//                 <h4>TRIBAL</h4>
//               </div>
//             </div>
//             <div id="about-us">
//               <img
//                 src="https://images.unsplash.com/photo-1515900959941-d1cce424f5c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
//                 alt="ABOUT LEFT"
//               />
//               <div id="about-us-in">
//                 <h3>ABOUT US</h3>
//                 <p>
//                   Leveraging goat data enables us to compare and enhance farming
//                   techniques, ultimately improving the community's livelihood.
//                   Through this data-driven approach, we can achieve sustainable
//                   agricultural practices and better outcomes for farmers.
//                   Welcome to NAVYUG, a platform dedicated to enhancing goat
//                   farming through detailed data analysis. Our mission is to
//                   provide farmers, researchers, and policymakers with actionable
//                   insights on gender, mortality, vaccination and treatment
//                   efficiency, and population growth. By leveraging this data, we
//                   aim to improve herd management and ensure sustainable
//                   livestock practices.
//                 </p>
//               </div>
//               <img
//                 src="https://images.unsplash.com/photo-1510976308242-cab15dbb17da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
//                 alt="ABOUT RIGHT"
//               />
//             </div>
//             <div id="cards-container">
//               <div className="card" id="card1">
//                 <div className="overlay">
//                   <h4>DASHBOARD</h4>
//                   <p>
//                     Our platform features a dynamic dashboard that visualizes
//                     key metrics through advanced graphs and charts, providing a
//                     comprehensive overview at a glance. This enables users to
//                     quickly interpret data, identify trends, and make informed
//                     decisions for better herd management.
//                   </p>
//                 </div>
//               </div>
//               <div className="card" id="card2">
//                 <div className="overlay">
//                   <h4>
//                     MORTALITY <br />
//                     REDUCTION
//                   </h4>
//                   <p>
//                     Our platform aims to significantly reduce goat mortality by
//                     ensuring timely and appropriate medication, supported by
//                     comprehensive health monitoring and data analysis.
//                   </p>
//                 </div>
//               </div>
//               <div className="card" id="card3">
//                 <div className="overlay">
//                   <h4>Comparison</h4>
//                   <p>
//                     Access reliable agricultural inputs through
//                     government-certified stores, ensuring product authenticity
//                     and quality assurance. Conveniently locate nearby stores for
//                     hassle-free procurement and strategic planning based on
//                     local demand patterns.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div id="green-div">
//               <img
//                 src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
//                 alt="HELLO"
//               />
//               <h4>
//                 ANNOUNCEMENTS
//                 <p>
//                   Village Bawri has increased the birth rate of goats by 12%
//                 </p>
//               </h4>
//               <img
//                 src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
//                 alt="BYE"
//               />
//             </div>
//           </div>

//           <div id="page3">
//             <p>
//               Goats are crucial to farmers as they provide a reliable source of
//               income through milk, meat, and wool production. They are hardy
//               animals that thrive in diverse environments, making them ideal for
//               small-scale and rural farming. Additionally, goats contribute to
//               food security and economic stability in farming communities.
//             </p>
//             <img
//               id="colon1"
//               src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
//               alt="colonopen"
//             />
//             <img
//               id="colon2"
//               src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
//               alt="colonclose"
//             />
//           </div>

//           <div id="page4">
//             <h1>WHAT ARE YOU WAITING FOR?</h1>
//             <div className="para">
//               <p>
//                 Start your journey today with NAVYUG and unlock the full
//                 potential of your goat farming operations. Together, we can
//                 create a sustainable and prosperous future for our agricultural
//                 community.
//               </p>
//             </div>
//             <div id="form-div">
//               <form>
//                 <input type="text" placeholder="Email Address" />
//                 <input type="submit" />
//               </form>
//             </div>
//           </div>
//         </div>

//         <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js"
//           integrity="sha512-qF6akR/fsZAB4Co1QDDnUXWnaQseLGXoniuSuSlPQK6+aWhlMZcHzkasCSlnWoe+TJuudlka1/IQ01Dnhgq95g=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         ></script>
//         <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollTrigger.min.js"
//           integrity="sha512-IHDCHrefnBT3vOCsvdkMvJF/MCPz/nBauQLzJkupa4Gn4tYg5a6VGyzIrjo6QAUy3We5HFOZUlkUpP0dkgE60A=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         ></script>
//         <script src="script.js"></script>
//       </body>
//     </div>
//   );
// };

// export default Home;
