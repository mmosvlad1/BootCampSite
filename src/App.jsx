import React, { useState, useEffect } from 'react';
import cloudImage from './assets/Cloud.webp';
import './App.css';
import nu1 from './assets/nu1.png';
import brand from './assets/brand.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("Mar 4, 2024 00:00:00").getTime();
    const countdownFunction = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = countDownDate - now;
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const daysElement = document.getElementById("days");
      const hoursElement = document.getElementById("hours");
      if (daysElement) daysElement.innerHTML = days < 10 ? '0' + days : days;
      if (hoursElement) hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;

      if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        const timerElement = document.getElementById("countdown-timer");
        if (timerElement) timerElement.innerHTML = "The event has started";
      }
    }, 1000);

    return () => clearInterval(countdownFunction);
  }, []);

  const scrollContainer = (direction) => {
    const container = document.querySelector('.speakers-container');
    const cardWidth = document.querySelector('.speaker-card').offsetWidth;
    const margin = 30;
    const scrollAmount = cardWidth + margin;

    if (direction === 'next') {
        container.scrollLeft += scrollAmount;
    } else {
        container.scrollLeft -= scrollAmount;
    }
    container.scrollTo({
        top: 0,
        left: container.scrollLeft,
        behavior: 'smooth'
    });

    checkFlipperVisibility();
}

const checkFlipperVisibility = () => {
    const container = document.querySelector('.speakers-container');
    const containerScrollWidth = container.scrollWidth;
    const containerScrollLeft = container.scrollLeft;
    const containerClientWidth = container.clientWidth;

    const prevButton = document.querySelector('.f-previous');
    const nextButton = document.querySelector('.f-next');

    prevButton.style.display = containerScrollLeft > 0 ? 'block' : 'none';
    nextButton.style.display = containerScrollLeft < containerScrollWidth - containerClientWidth ? 'block' : 'none';
}

useEffect(() => {
    checkFlipperVisibility();
    const speakersContainer = document.querySelector('.speakers-container');
    speakersContainer.addEventListener('scroll', checkFlipperVisibility);

    return () => {
        speakersContainer.removeEventListener('scroll', checkFlipperVisibility);
    };
}, []);



  return (
    <div className="bg-dark-im">
       <img class="imgbrand" src={brand} alt="U+ Azure Bootcamp"/>
    <div className="bg-dark">
      <div className="mycontainer">
        <div className="text-content">
          <h1>Boost yourself with Uitware Azure Bootcamp</h1>
          <p>We believe that every person and organization on the planet can be empowered to achieve more. Join us in March 4, 2024, to seize the opportunity to learn from local experts at the free Uitware Azure Bootcamp.</p>
          <p>In partnership with "Ukrainian Catholic University," "Lviv Polytechnic National University," and "Ivan Franko National University of Lviv," we have launched Azure Bootcamp for students, providing industry knowledge from Microsoft and insights from global experts.</p>
          <p>By participating in Uitware Azure Bootcamp, students will have the opportunity to earn additional credits for specific academic subjects*.</p>
          <p>* The University determines the exact academic subjects.</p>
          <a id="registerBtn" href="" class="btn-register" target="_blank">register</a>
        </div>
        <div className="image-content">
          <img src={cloudImage} alt="Main Logo" />
        </div>
      </div>

      <div className="event-info">
        <div className="countdown">
          <p className="countdown-label">Time left until the start of school</p>
          <div id="countdown-timer" class="countdown-timer">
            <span id="days">00</span> days
            <span id="hours">00</span> hours
          </div>
        </div>
      </div>
      <div className="agenda-container">
        <h2 className="agenda-title">Agenda</h2>
        <div className="agenda">
          {/* Agenda Headers */}
          <div className="agenda-header">
            <div className="agenda-column-header">Date</div>
            <div className="agenda-column-header">Event Details</div>
          </div>
          {/* Introduction to Azure Cloud */}
          <div className="agenda-item">
            <div className="agenda-date">04 March</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Introduction to Azure Cloud</h3>
              <p className="agenda-description">Getting started with Azure, including its fundamental concepts, resource management, and hierarchical structure.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Azure Management */}
          <div className="agenda-item">
            <div className="agenda-date">11 March</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Azure Management</h3>
              <p className="agenda-description">Focuses on Azure management areas and groups, resource hierarchy, cost management, subscription configuration, and security of resource management.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Azure Cloud Application Development */}
          <div className="agenda-item">
            <div className="agenda-date">18 March</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Azure Cloud Application Development</h3>
              <p className="agenda-description">Introduces Git, Azure Functions, Blob Storage, and Azure security solutions, focusing on practical aspects of developing cloud applications.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Azure Architecture Components and Services */}
          <div className="agenda-item">
            <div className="agenda-date">25 March</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Azure Architecture Components and Services</h3>
              <p className="agenda-description">Concentrates on the core architectural components of Azure, including computing, networking, storage services, identity, and access management.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Architectural Solutions in Azure */}
          <div className="agenda-item">
            <div className="agenda-date">01 April</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Architecting Solutions on Azure</h3>
              <p className="agenda-description">Covers cloud design principles, best practices, application architecture patterns, and the architectural framework of Microsoft Azure. Participants will learn to optimize processes, select the right technology, and understand various Azure computing services and data storage models.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Azure Automation */}
          <div className="agenda-item">
            <div className="agenda-date">08 April</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Azure Automation</h3>
              <p className="agenda-description">Presents various automation tools such as CLI, PowerShell, ARM, Bicep, and Terraform, which enable more efficient management of Azure resources.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Azure DevOps Services */}
          <div className="agenda-item">
            <div className="agenda-date">15 April</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Azure DevOps Services</h3>
              <p className="agenda-description">Covers Azure DevOps, CI/CD pipelines, continuous delivery, DevOps principles for machine learning, and version management strategies.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Azure Security and Privacy */}
          <div className="agenda-item">
            <div className="agenda-date">22 April</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Azure Security and Privacy</h3>
              <p className="agenda-description">This important module covers data protection, privacy, cybersecurity fundamentals, Microsoft security and compliance solutions, as well as role-based access control in Azure.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Azure AI Concepts */}
          <div className="agenda-item">
            <div className="agenda-date">29 April</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Azure AI Concepts</h3>
              <p className="agenda-description">Provides an overview of Microsoft Azure AI and Generative AI, offering a glimpse into the future of artificial intelligence in cloud computing.</p>
            </div>
          </div>
          <hr className="agenda-divider" />
          {/* Fundamentals of Working with Data in Azure */}
          <div className="agenda-item">
            <div className="agenda-date">06 May</div>
            <div className="agenda-details">
              <h3 className="agenda-event-title">Fundamentals of Working with Data in Azure</h3>
              <p className="agenda-description">This module covers data services in Microsoft Azure, including relational and non-relational databases, analytics services, data processing, as well as the concept of big data.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="speakers-title">Featured Speakers</h2>
        <div className="speakers-wrapper">
          <button className="c-flipper f-previous" aria-label="Previous">&lt;</button>
          <div className="speakers-container">
            <div className="speaker-cards-row">
              {/* Speaker 1 */}
              <div className="speaker-card">
                <div className="speaker-image">
                  <img src={nu1}  alt="Andriy Bilous" />
                </div>
                <div className="speaker-info">
                  <h5 className="speaker-name">Andriy Bilous</h5>
                  <p className="speaker-title">Chief Operation Officer at Uitware,</p>
                  <p className="speaker-title">Microsoft MVP</p>
                  <a href="https://www.linkedin.com/in/andriy-bilous-32718aa7/" className="btn-view">View Profile</a>
                </div>
              </div>
            </div>
          </div>
          <button className="c-flipper f-next" aria-label="Next">&gt;</button>
        </div>
      </div>

      <div className="logos">
        <img className="img-i4" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/UkrainianCatholicUniversitylogo.png" alt="Logo 4" />
        <img className="img-i2" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Nulp_logo_ukr.svg" alt="Logo 2" />
        <img className="img-i3" src="https://media.licdn.com/dms/image/D4D0BAQH3q-WlTfehSw/company-logo_200_200/0/1667339151545/uitware_logo?e=1714003200&v=beta&t=vxCsa60KT9h1aUPJqFzLxsy5evIMR3xj0X8V-b1M70k" alt="Logo 3" />
        <img className="img-i1" src="https://itcluster.lviv.ua/wp-content/uploads/2023/03/lnu.svg" alt="Logo 1" />
      </div>
      </div>
    </div>
  );
}

export default App;
