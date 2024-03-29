import React from 'react';
import '../../assets/css/containers/service.css';
import si1 from "../../assets/images/services/software.jpg";
import si2 from "../../assets/images/services/web.jpg";
import si3 from "../../assets/images/services/application.jpg";
import si4 from "../../assets/images/services/smm.jpg";
import si5 from "../../assets/images/services/seo.jpg"
import si6 from "../../assets/images/services/sem.jpg";
import si7 from "../../assets/images/services/lead.jpg";
import si8 from "../../assets/images/services/email.jpg";
import si9 from "../../assets/images/services/influencer-marketing.jpg";
import ScrollTopButton from '../../atoms/ScrollTopButton';

const Services = () => {
  return (
    <div className='service-main'>
      <h2 className='section-heading' data-aos="fade-down">Services</h2>
      <div className='service-text' data-aos="fade-right">
      
         Empower your success with our efficient and effective range of services
      </div>
      <div className='service-container'>
        <div className='s-sec1'>
          <div className='s-con1' data-aos="fade-right">
            <img src={si1} alt="" />
            <div className="hover-info">
              <p>Software Development</p>
            </div>
          </div>
          <div className='s-con2'data-aos="fade-left">
            <img src={si2} alt="" />
            <div className="hover-info">
              <p>Web Development</p>
            </div>
          </div>
        </div>
        <br /><br />
        <div className='s-sec1'>
          <div className='s-con2'data-aos="fade-right">
            <img src={si3} alt="" />
            <div className="hover-info">
              <p>Application Development</p>
            </div>
          </div>
          <div className='s-con1'data-aos="fade-left">
            <img src={si4} alt="" />
            <div className="hover-info">
              <p>Social media marketing</p>
            </div>
          </div>
        </div>
        <br /><br />
        <div className='s-sec1'>
          <div className='s-con1'data-aos="fade-right">
            <img src={si5} alt="" />
            <div className="hover-info">
              <p>Search Engine Optimization</p>
            </div>
          </div>
          <div className='s-con2' data-aos="fade-left">
            <img src={si6} alt="" />
            <div className="hover-info">
              <p>Search Engine Marketing</p>
            </div>
          </div>
        </div>
        <br /><br />
        <div className='s-sec1'>
          <div className='s-con2'data-aos="fade-right">
            <img src={si7} alt="" />
            <div className="hover-info">
              <p>Lead Genration</p>
            </div>
          </div>
          <div className='s-con1'data-aos="fade-left">
            <img src={si8} alt="" />
            <div className="hover-info">
              <p>Email Marketing</p>
            </div>
          </div>
        </div>
        <br /><br />
        <div className='s-sec2'>
          <div className='s-con1'data-aos="fade-right">
            <img src={si9} alt="" />
            <div className="hover-info">
              <p>Influencer Marketing</p>
            </div>
          </div>
          
        </div>
        

      </div>
       {/* Scroll-to-top button */}
       <ScrollTopButton/>
     
    </div>
  )
}

export default Services;
