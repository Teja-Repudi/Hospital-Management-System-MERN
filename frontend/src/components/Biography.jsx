import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to Wellcare, a leading healthcare institution dedicated to providing exceptional medical care and services to our community.
          At Wellcare, we are committed to ensuring the well-being and health of our patients through state-of-the-art medical facilities, 
          highly trained professionals, and a compassionate approach to healthcare. 
          Our hospital has a rich history of serving the community with excellence, innovation, and integrity.
          </p>
          <h4>Our Mission</h4>
          <p>Our mission is to deliver high-quality healthcare services with a patient-centered approach. 
            We strive to improve the health and quality of life of our patients by providing comprehensive medical care that is accessible, affordable, and tailored to their individual needs.</p>
          <h4>Our Vision</h4>
          <p>To be the premier healthcare provider in the region, recognized for our exceptional patient care, cutting-edge medical technology, and commitment to continuous improvement and innovation.</p>
          <h4>Our Values</h4>
          <ul>
            <li><b>Compassion:</b> We treat every patient with kindness, empathy, and respect.</li>
            <li><b>Excellence:</b> We pursue the highest standards in healthcare services and medical practices.</li>
            <li><b>Integrity:</b> We uphold the principles of honesty, transparency, and ethical conduct in all our interactions.</li>
            <li><b>Innovation:</b> We embrace new technologies and methods to enhance patient care and operational efficiency. </li>
            <li><b>Collaboration:</b> We work together as a team, valuing the contributions of every member, to achieve the best outcomes for our patients.</li>
          </ul>
          <h4>Our Services</h4>
          <p>Wellcare offers a wide range of medical services to cater to the diverse needs of our patients, including:</p>
          <ul>
            <li><b>Emergency Care:</b> 24/7 emergency services to provide immediate medical attention for critical conditions.</li>
            <li><b>Outpatient Services:</b> Comprehensive outpatient care including consultations, diagnostics, and minor procedures.</li>
            <li><b>Inpatient Services:</b> Advanced inpatient care with state-of-the-art facilities and dedicated medical staff.</li>
            <li><b>Surgical Services:</b> A full spectrum of surgical procedures performed by experienced surgeons.</li>
            <li><b>Specialty Clinics:</b> Expert care in various medical specialties such as cardiology, neurology, orthopedics, and more.</li>
            <li><b>Diagnostic Services:</b> Cutting-edge diagnostic imaging and laboratory services to support accurate diagnoses.</li>
            <li><b>Preventive Care:</b> Health screenings, vaccinations, and wellness programs to promote long-term health.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Biography;
