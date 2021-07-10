import React, {useEffect, useState} from 'react'
import {AboutIIITR, Thoughts} from '../Content/Home.js'
import {ReactComponent as Logo} from "../images/logo.svg"
import ReusableCard from '../components/ReusableBlock';
import BackImg from '../images/image1.jpeg'
import WhyRecruitUs from "./WhyRecruitUs";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
    easing: 'ease-in-out', // default easing for AOS animations
    duration: 1000,
    delay: 20,
});


const HomePage = React.forwardRef((props, ref)=> {

    const [screenSize, setScreenSize] = useState(window.screen.width);

    window.addEventListener("resize", () => {
    setScreenSize(window.screen.width);
    });

    useEffect(() => {
        ref.current.setNavState(" ", "1");
    }, [ref])

  return (
    <div className="homepage" id="home" onClick={() => { ref.current.setMenu(false); }}>
      <div className="top">

            <img src={BackImg} alt="website logo" className="backImage" />

            <div className="topComponents" >

                <div className="HomepageCenter" data-aos="zoom-in" >
                    <Logo className="logo" />

                    <div className="HomepageLogoText" data-aos={screenSize>960 ? "fade-right" : "fade-down"}  >
                        {screenSize>960 ? <h1>Training and <br/>Placement Cell</h1> : <h1>Training and Placement Cell</h1>}
                        <h6>Indian Institute Of Information Technology, Raichur</h6>
                    </div>

            

                </div>

                {screenSize > 960 ? 
                    <div className = "scrollNoti" onClick={()=>{document.getElementById('scrollTO').scrollIntoView({ behavior: 'smooth' })}} >
                        <i className="fas fa-2x fa-angle-double-down" style={{cursor:"pointer"}} ></i> 
                    </div>
                    : null}

                </div>
            
            {/* <div className="aboutIIITR">
                <h1 className="aboutHead">About Us</h1>

                <p>{AboutIIITR}</p>
            </div>

            <div className="updates">
                <hr className="line" />
                <h1>Updates</h1>
            </div> */}
                
        </div>
        <div className="recruitUs" id="scrollTO" >
            
            <div id="aboutUs" className="aboutUs" data-aos="fade-up" >
                <h1>About Us</h1>
                <p>{AboutIIITR}</p>
            </div>

            {Thoughts.map((item, id)=>{
                return(
                    <ReusableCard
                        key={id}
                        isLeftAlign={item.isLeftAlign}
                        haveLogo={item.haveLogo}
                        heading={item.heading}
                        writer={item.writer}
                        content={item.content}
                        imgSrc={item.imgSrc}
                        altText={item.altText}
                    />
                )
            })}

            <div style={{maxWidth: "1000px", margin: "auto"}}>
            <div id="recruit" style={{height:"2vh"}} ></div>

            <h1 className="recruitHead" data-aos="fade-up"  href='/somefile.txt' download >Why Recruit Us</h1>

            <WhyRecruitUs/>

            </div>
 
        </div>
        <div className="company">
            <div className="company-flexbox">
                <img alt="CKM Vigil" src="https://ckmvigil.in/assets/images/logo/logo_full.png"></img>
                <img alt="Capgemini" src="https://www.capgemini.com/in-en/wp-content/themes/capgemini-komposite/assets/images/logo.svg"></img>
                <img alt="Village Agro" src="https://vepaar.b-cdn.net/uploads/c-100623/campaign/11615239/media_1618817271368295829.png?crop_gravity=center&width=200&height=200"></img>
                <img alt="StoryXpress" src="https://storyxpress.co/img/new-Record-Page/illustration_and_icons/sx_logo.svg"></img>
            </div>
        </div>
    </div>
  );
});

export default HomePage;


