import reactlogo from '../assets/img/react.svg'
import flutterlogo from '../assets/img/flutter.svg';
import jslogo from '../assets/img/js.svg';
import androidlogo from '../assets/img/android.svg';
import laravellogo from '../assets/img/laravel.svg';
import cpanel from '../assets/img/cpanel.svg';
import phplogo from '../assets/img/php.svg';
import awslogo from '../assets/img/aws.svg';
import nextlogo from '../assets/img/next.svg';
import pythonlogo from '../assets/img/python.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Dem & Mux is a group of experienced freelance developers, who have been working on a<br></br> wide array of technologies.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img style={{height : '250px'}} src={reactlogo} alt="Image" />
                                <h5>React Development</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={flutterlogo} alt="Image" />
                                <h5>Flutter Development</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={cpanel} alt="Image" />
                                <h5>Cpanel Hosting</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={awslogo} alt="Image" />
                                <h5>Amazon Web Services</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={phplogo} alt="Image" />
                                <h5>PHP Development</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={jslogo} alt="Image" />
                                <h5>JS Development</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={pythonlogo} alt="Image" />
                                <h5>Python Development</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={androidlogo} alt="Image" />
                                <h5>Android Development</h5>
                            </div>
                            <div className='item'>
                                <img style={{height : '250px'}} src={nextlogo} alt="Image" />
                                <h5>NextJS Development</h5>
                            </div>
                            <div className="item">
                                <img style={{height : '250px'}} src={laravellogo} alt="Image" />
                                <h5>Laravel Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
