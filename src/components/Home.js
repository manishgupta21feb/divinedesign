import React from 'react';
import Slider from "react-slick";
import Header from './Header';
import Footer from './Footer';
import profile1 from '../assets/images/profile1.png';
import bannerGirl from '../assets/images/bannergirl.jpg';
import course from '../assets/images/course.jpg';
import profile from '../assets/images/profile.jpg';
import step1 from '../assets/images/step1.jpg';
import step2 from '../assets/images/step2.jpg';
import step3 from '../assets/images/step3.jpg';
import step4 from '../assets/images/step4.jpg';

const Home = () => {

  var testiSlider = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    slickplay: true,
    autoplay: true,
    pauseOnHover: false
  }

  return (
    <div>
      <Header />

      <div className="banner-wrapper">
        <div className="container">
          <div className="banner-left">
            <p className="text-1">Learning Experience</p>
            <h1>The Best Free Online <br /> Courses of All Time</h1>
            <p className="text-2">Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum fugiat nulla pariatur</p>
            <div className="search-input-with-btn">
              <input type="text" placeholder="What do you want to learn?" />
              <button>Search</button>
            </div>
            <ul className="lang-tags-wrapper">
              <li>
                <a href="#">Java</a>
              </li>
              <li>
                <a href="#">Python</a>
              </li>
              <li>
                <a href="#">Javascript</a>
              </li>
              <li>
                <a href="#">C++</a>
              </li>
              <li>
                <a href="#">Android</a>
              </li>
              <li>
                <a href="#">.NET</a>
              </li>
              <li>
                <a href="#">React Js</a>
              </li>
            </ul>
          </div>
          <div className="banner-girl">
            <img src={bannerGirl} alt="bannerGirl" />
          </div>
          <div className="satisfied-student-wrapper">
            <div className="satisfied-student-box">
              <h3>200+ Satisfied Students</h3>
              <ul>
                <li>
                  <img src={profile1} alt="profile" />
                </li>
                <li>
                  <img src={profile1} alt="profile" />
                </li>
                <li>
                  <img src={profile1} alt="profile" />
                </li>
                <li>
                  <img src={profile1} alt="profile" />
                </li>
                <li>
                  <img src={profile1} alt="profile" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>



      <div className="our-courses-wrapper">
        <div className="container">
          <div className="our-courses-head">
            <h4>Popular Courses</h4>
            <a href="#" className="primary-link-btn">Explore Courses</a>
          </div>
          <div className="courses-box-wrapper">
            <div className="course-box">
              <div className="course-box-top">
                <img src={course} alt="course" />
              </div>
              <div className="course-box-detail">
                <div className="course-box-detail-head">
                  <span className="tag">Programming</span>
                  <span className="price">2k/Month</span>
                </div>
                <ul>
                  <li>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    <span>Begineer</span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>6 Months</span>
                  </li>
                  <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>3.5 (2K reviews)</span>
                  </li>
                </ul>
                <h4 className="course-title">Introduction to Computer Science and Programming</h4>
                <div className="view-course-btn">
                  <span className="text">View Course</span>
                  <span className="icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
            <div className="course-box">
              <div className="course-box-top">
                <img src={course} alt="course" />
              </div>
              <div className="course-box-detail">
                <div className="course-box-detail-head">
                  <span className="tag">Programming</span>
                  <span className="price">2k/Month</span>
                </div>
                <ul>
                  <li>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    <span>Begineer</span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>6 Months</span>
                  </li>
                  <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>3.5 (2K reviews)</span>
                  </li>
                </ul>
                <h4 className="course-title">Introduction to Computer Science and Programming</h4>
                <div className="view-course-btn">
                  <span className="text">View Course</span>
                  <span className="icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
            <div className="course-box">
              <div className="course-box-top">
                <img src={course} alt="course" />
              </div>
              <div className="course-box-detail">
                <div className="course-box-detail-head">
                  <span className="tag">Programming</span>
                  <span className="price">2k/Month</span>
                </div>
                <ul>
                  <li>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    <span>Begineer</span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>6 Months</span>
                  </li>
                  <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>3.5 (2K reviews)</span>
                  </li>
                </ul>
                <h4 className="course-title">Introduction to Computer Science and Programming</h4>
                <div className="view-course-btn">
                  <span className="text">View Course</span>
                  <span className="icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="next-step-wrapper">
        <div className="container">
          <div className="left-side">
            <h4>Take the Next Step Toward Your Personal and Professional Goals</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="#">Explore Courses</a>
          </div>
          <div className="right-side">
            <div className="first">
              <img src={step1} alt="step1"/>
            </div>
            <div className="second">
              <img src={step2} alt="step1"/>
            </div>
            <div className="third">
              <img src={step3} alt="step1"/>
            </div>
            <div className="forth">
              <img src={step4} alt="step1"/>
            </div>
          </div>
        </div>
      </div>



      <div className="courses-tab-wrapper">
        <div className="container">
          <div className="courses-tab-head">
            <h3>Highest Rated Online <br/> Courses</h3>
            <p>Dignissim enim sit amet venenatis urna cursus eget nunc. Egestas sed sed risus pretium quam vulputate</p>
          </div>
          <div className="courses-tab-btn-list">
            <ul>
              <li>
                <button>FrontEnd</button>
              </li>
              <li>
                <button>Digital Marketting</button>
              </li>
              <li>
                <button>BackEnd</button>
              </li>
              <li>
                <button>Basic</button>
              </li>
              <li>
                <button>Telly</button>
              </li>
            </ul>
          </div>
          <div className="courses-box-wrapper">
            <div className="course-box">
              <div className="course-box-top">
                <img src={course} alt="course" />
              </div>
              <div className="course-box-detail">
                <div className="course-box-detail-head">
                  <span className="tag">Programming</span>
                  <span className="price">2k/Month</span>
                </div>
                <ul>
                  <li>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    <span>Begineer</span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>6 Months</span>
                  </li>
                  <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>3.5 (2K reviews)</span>
                  </li>
                </ul>
                <h4 className="course-title">Introduction to Computer Science and Programming</h4>
                <div className="view-course-btn">
                  <span className="text">View Course</span>
                  <span className="icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
            <div className="course-box">
              <div className="course-box-top">
                <img src={course} alt="course" />
              </div>
              <div className="course-box-detail">
                <div className="course-box-detail-head">
                  <span className="tag">Programming</span>
                  <span className="price">2k/Month</span>
                </div>
                <ul>
                  <li>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    <span>Begineer</span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>6 Months</span>
                  </li>
                  <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>3.5 (2K reviews)</span>
                  </li>
                </ul>
                <h4 className="course-title">Introduction to Computer Science and Programming</h4>
                <div className="view-course-btn">
                  <span className="text">View Course</span>
                  <span className="icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
            <div className="course-box">
              <div className="course-box-top">
                <img src={course} alt="course" />
              </div>
              <div className="course-box-detail">
                <div className="course-box-detail-head">
                  <span className="tag">Programming</span>
                  <span className="price">2k/Month</span>
                </div>
                <ul>
                  <li>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    <span>Begineer</span>
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>6 Months</span>
                  </li>
                  <li>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <span>3.5 (2K reviews)</span>
                  </li>
                </ul>
                <h4 className="course-title">Introduction to Computer Science and Programming</h4>
                <div className="view-course-btn">
                  <span className="text">View Course</span>
                  <span className="icon"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="team-text-wrapper">
        <div className="container">
          <h4>The Alpine Team with High Technical Skills <br/> Help You Learn a New Profession</h4>
          <div className="team-text-inner">
            <div className="team-text-box">
              <h5>01</h5>
              <p className="text-1">Theoretical Knowledge</p>
              <p className="text-2">Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat</p>
            </div>
            <div className="team-text-box">
              <h5>02</h5>
              <p className="text-1">Practical Skills</p>
              <p className="text-2">Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat</p>
            </div>
            <div className="team-text-box">
              <h5>03</h5>
              <p className="text-1">Work with a Mentor</p>
              <p className="text-2">Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat</p>
            </div>
            <div className="team-text-box">
              <h5>04</h5>
              <p className="text-1">Final Test or Project</p>
              <p className="text-2">Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat</p>
            </div>
          </div>
        </div>
      </div>


      <div className="contact-us-wrapper">
        <div className="container">
          <div className="contact-us-inner">
            <div className="left-side">
              <h4>To Help You Choose the Right Course, You Need to Book a Consultation</h4>
              <p>Varius morbi enim nunc faucibus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Diam sit amet nisl suscipit adipiscing bibendum est.</p>
            </div>
            <div className="right-side">
              <div className="form-box">
                <h5>Get a Consultation</h5>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label>Contact No</label>
                  <input type="text" className="form-control" placeholder="Enter Contact No" />
                </div>
                <button className="btn-primary">Get a Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="testimonials-wrapper">
        <div className="container">
          <h3>Don't just take our words for it</h3>
          <div className="testi-inner">
            <Slider {...testiSlider}>
              <div className="testi-box">
                <div className="left-side">
                  <img src={profile} alt="profile" />
                </div>
                <div className="right-side">
                  <div className="star-wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <h4>Very interesting course</h4>
                  <p className="testi-text">Varius lobortis mattis aliquam faucibus purus in massa. Diam sit amet nisl suscipit adipiscing bibendum est.</p>
                  <p className="testi-course">Course: Frontend Development</p>
                  <p className="testi-student-name">Krishna Gupta</p>
                </div>
              </div>
              <div className="testi-box">
                <div className="left-side">
                  <img src={profile} alt="profile" />
                </div>
                <div className="right-side">
                  <div className="star-wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <h4>Very interesting course</h4>
                  <p className="testi-text">Varius lobortis mattis aliquam faucibus purus in massa. Diam sit amet nisl suscipit adipiscing bibendum est.</p>
                  <p className="testi-course">Course: Frontend Development</p>
                  <p className="testi-student-name">Krishna Gupta</p>
                </div>
              </div>
              <div className="testi-box">
                <div className="left-side">
                  <img src={profile} alt="profile" />
                </div>
                <div className="right-side">
                  <div className="star-wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <h4>Very interesting course</h4>
                  <p className="testi-text">Varius lobortis mattis aliquam faucibus purus in massa. Diam sit amet nisl suscipit adipiscing bibendum est.</p>
                  <p className="testi-course">Course: Frontend Development</p>
                  <p className="testi-student-name">Krishna Gupta</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Home;