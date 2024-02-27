import React, { useState, useEffect } from 'react';
import cloudImage from './assets/main_p.png';
import './App.css';
import nu1 from './assets/nu1.png';
import nu2 from './assets/nu2.jpg';
import nu3 from './assets/nu3.jpg';
import nu4 from './assets/nu4.jpg';
import nu5 from './assets/nu5.jpeg';
import brand from './assets/brand.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const [registerLink, setRegisterLink] = useState('');
  const [imageUrl, setImageUrl] = useState('https://itcluster.lviv.ua/wp-content/uploads/2023/03/lnu.svg');
  const [imClassName, setImClassName] = useState('img-i4');

  useEffect(() => {
    const hostname = window.location.hostname;

    let link;

    if (hostname === "lnu.azurebootcamp.uitware.com") {
      link = "https://forms.gle/m4TRfL35YgvrEkKd8";
      setImageUrl("https://itcluster.lviv.ua/wp-content/uploads/2023/03/lnu.svg");
      setImClassName("img-i4");
    } else if (hostname === "ucu.azurebootcamp.uitware.com") {
      link = "http://study.ucu.org.ua/course/azure-bootcamp/start";
      setImageUrl("https://upload.wikimedia.org/wikipedia/commons/2/2c/UkrainianCatholicUniversitylogo.png");
      setImClassName("img-i1");
    } else if (hostname === "lp.azurebootcamp.uitware.com") {
      link = "https://forms.gle/4a1pAL8zbPKSVL4y7";
      setImageUrl("https://upload.wikimedia.org/wikipedia/commons/f/ff/Nulp_logo_ukr.svg");
      setImClassName("img-i2");
    } else {
      link = "default_link";
    }

    setRegisterLink(link);
  }, []);


  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

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
    } else if (direction === 'prev') {
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

  return (
    <div className="bg-dark-im">
      <div className="language-selector">
        <button className="lg-but" onClick={() => handleLanguageChange('en')}>EN</button>
        <button className="lg-but" onClick={() => handleLanguageChange('uk')}>UA</button>
      </div>
      <img className="imgbrand" src={brand} alt="U+ Azure Bootcamp" />
      <div className="bg-dark">
        <div className="mycontainer">
          <div className="text-content">
            <h1>{t("BoostTitle")}</h1>
            <p>{t("EmpowermentMessage")}</p>
            <p>{t("PartnershipDetails")}</p>
            <p>{t("ParticipationOpportunity")}</p>
            <p>{t("UniversityDetermination")}</p>
            <a id="registerBtn" href={registerLink} className="btn-register" target="_blank">{t("RegisterButton")}</a>
          </div>
          <div className="image-content">
            <img src={cloudImage} alt="Main Logo" />
          </div>
        </div>

        <div className="event-info">
          <div className="countdown">
            <p className="countdown-label">{t("TimeLeftLabel")}</p>
            <div id="countdown-timer" class="countdown-timer">
              <span className="days" id="days">00</span> {t("Days")}
              <span className="space"></span>
              <span id="hours">00</span> {t("Hours")}
            </div>
          </div>
        </div>
        <div className="agenda-container">
          <h2 className="agenda-title">{t("AgendaTitle")}</h2>
          <div className="agenda">
            {/* Agenda Headers */}
            <div className="agenda-header">
              <div className="agenda-column-header">{t("Date")}</div>
              <div className="agenda-column-header">{t("EventDetails")}</div>
            </div>
            {/* Introduction to Azure Cloud */}
            <div className="agenda-item">
              <div className="agenda-date">04-08 {t("March")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("IntroductionToAzureCloud")}</h3>
                <div className="speaker-container">
                  <img src={nu1} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Andriy Bilous</h3>
                </div>
                <p className="agenda-description">{t("IntroductionToAzureCloudDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Management */}
            <div className="agenda-item">
              <div className="agenda-date">11-15 {t("March")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureManagement")}</h3>
                <p className="agenda-description">{t("AzureManagementDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Cloud Application Development */}
            <div className="agenda-item">
              <div className="agenda-date">18-22 {t("March")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureCloudApplicationDevelopment")}</h3>
                <div className="speaker-container">
                  <img src={nu4} alt="Anton Boyko" className="speaker-photo" />
                  <h3 className="agenda-event-title">Anton Boyko</h3>
                </div>
                <p className="agenda-description">{t("AzureCloudApplicationDevelopmentDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Architecture Components and Services */}
            <div className="agenda-item">
              <div className="agenda-date">25-29 {t("March")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureArchitectureComponentsAndServices")}</h3>
                <div className="speaker-container">
                  <img src={nu3} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Stanislav Lebedenko</h3>
                </div>
                <p className="agenda-description">{t("AzureArchitectureComponentsAndServicesDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Architectural Solutions in Azure */}
            <div className="agenda-item">
              <div className="agenda-date">01-05 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("ArchitectingSolutionsOnAzure")}</h3>
                <div className="speaker-container">
                  <img src={nu2} alt="Andriy Bilous" className="speaker-photo" />
                  <h3 className="agenda-event-title">Orest Lavriv</h3>
                </div>
                <p className="agenda-description">{t("ArchitectingSolutionsOnAzureDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Automation */}
            <div className="agenda-item">
              <div className="agenda-date">08-12 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureAutomation")}</h3>
                <p className="agenda-description">{t("AzureAutomationDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure DevOps Services */}
            <div className="agenda-item">
              <div className="agenda-date">15-19 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureDevOpsServices")}</h3>
                <p className="agenda-description">{t("AzureDevOpsServicesDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure Security and Privacy */}
            <div className="agenda-item">
              <div className="agenda-date">22-26 {t("April")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureSecurityAndPrivacy")}</h3>
                <p className="agenda-description">{t("AzureSecurityAndPrivacyDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Azure AI Concepts */}
            <div className="agenda-item">
              <div className="agenda-date">29 {t("April")} - 03 {t("May")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureAIConcepts")}</h3>
                <p className="agenda-description">{t("AzureAIConceptsDescription")}</p>
              </div>
            </div>
            <hr className="agenda-divider" />
            {/* Fundamentals of Working with Data in Azure */}
            <div className="agenda-item">
              <div className="agenda-date">06-10 {t("May")}</div>
              <div className="agenda-details">
                <h3 className="agenda-event-title">{t("AzureDataServices")}</h3>
                <div className="speaker-container">
                  <img src={nu5} alt="Taras Kloba" className="speaker-photo" />
                  <h3 className="agenda-event-title">Taras Kloba</h3>
                </div>
                <p className="agenda-description">{t("AzureDataServicesDescription")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="speakers">
          <h2 className="speakers-title">{t("FeaturedSpeakers")}</h2>
          <div className="speakers-wrapper">

            <div className="speakers-container">
                {/* Speaker 1 */}
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src={nu1} alt="Andriy Bilous" />
                  </div>
                  <div className="speaker-info">
                    <h5 className="speaker-name">{t("Speaker1Name")}</h5>
                    <p className="speaker-title">{t("Speaker1Title")}</p>
                    <p className="speaker-title">{t("Speaker1Title1")}</p>
                    <a href="https://www.linkedin.com/in/andriy-bilous-32718aa7/" className="btn-view">{t("ViewProfile")}</a>
                  </div>
                </div>
                {/* Speaker 2 */}
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src={nu2} alt="Orest Lavriv" />
                  </div>
                  <div className="speaker-info">
                    <h5 className="speaker-name">{t("Speaker2Name")}</h5>
                    <p className="speaker-title">{t("Speaker2Title")}</p>
                    <p className="speaker-title">{t("Speaker2Title1")}</p>
                    <a href="https://www.linkedin.com/in/orest-l-74925992/" className="btn-view">{t("ViewProfile")}</a>
                  </div>
                </div>
                {/* Speaker 3 */}
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src={nu3} alt="Stanislav Lebedenko" />
                  </div>
                  <div className="speaker-info">
                    <h5 className="speaker-name">{t("Speaker3Name")}</h5>
                    <p className="speaker-title">{t("Speaker3Title")}</p>
                    <p className="speaker-title">{t("Speaker3Title1")}</p>
                    <a href="https://www.linkedin.com/in/lebedenkostanislav/" className="btn-view">{t("ViewProfile")}</a>
                  </div>
                </div>
                {/* Speaker 4 */}
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src={nu4} alt="Anton Boyko" />
                  </div>
                  <div className="speaker-info">
                  <h5 className="speaker-name">Anton Boyko</h5>
                    <p className="speaker-title">CIO, Principal Architect</p>
                    <p className="speaker-title">Microsoft MVP, RD</p>
                    <a href="https://www.linkedin.com/in/boykoant/" className="btn-view">{t("ViewProfile")}</a>
                  </div>
                </div>
                {/* Speaker 5 */}
                <div className="speaker-card">
                  <div className="speaker-image">
                    <img src={nu5} alt="Taras Kloba" />
                  </div>
                  <div className="speaker-info">
                    <h5 className="speaker-name">Taras Kloba</h5>
                    <p className="speaker-title">Associate Director, PhD, MVP</p>
                    <p className="speaker-title">Data & Analytics at SoftServe</p>
                    <a href="https://www.linkedin.com/in/kloba/" className="btn-view">{t("ViewProfile")}</a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="logos">
          <img className={imClassName} src={imageUrl} alt="Logo" />
          <img className="img-i3" src="https://media.licdn.com/dms/image/D4D0BAQH3q-WlTfehSw/company-logo_200_200/0/1667339151545/uitware_logo?e=1714003200&v=beta&t=vxCsa60KT9h1aUPJqFzLxsy5evIMR3xj0X8V-b1M70k" alt="Logo 3" />
        </div>
      </div>
    </div>
  );
}

export default App;
