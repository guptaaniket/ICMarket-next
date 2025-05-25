'use client';
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { gsap } from 'gsap';
import { CiGlobe } from "react-icons/ci";
import { StatsCard, IndicesSection, DepositBonusForm, TradeIndexFaqs, ReviewSlider, ICMarketsFooter, ICMSupport, TradeIndices } from './components'
import { stats, accounts, platforms } from './utils/Constants'

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    const el:any = textRef.current;
    const text = el.innerText;
    el.innerText = '';

    text.split('').forEach((char:any, i:any) => {
      const span = document.createElement('span');
      span.innerText = char;
      el.appendChild(span);
    });

    const spans = el.querySelectorAll('span');
    gsap.from(spans, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div className="">
      <div className='hero' >
        <section className='header-background-image'>
          <header className="hero-header">
            <div className="hero-logo">
              <Image
                src="/ICM-logo-fsa 1.svg"
                alt="ICM Market"
                width={20}
                height={20}
              />
            </div>
            <div className="hero-controls">
              <div className="hero-lang">
                <CiGlobe size={16} />
                <span>EN</span>
              </div>
              <button className="hero-button">Start Trading</button>
            </div>
          </header>

          <main className="hero-main">
            <div className="hero-content">
              <h1 className="hero-title" ref={textRef}>Seize Opportunities with Index CFDs</h1>
              <p className="hero-subtitle mt-md-4">
                Explore and <strong className="text-white">Trade 20</strong> Top Global Indices.
              </p>
              <button className="hero-button-in mt-md-4">Start Trading</button>
            </div>
            <div className="hero-stats-inner">
              {stats.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  subtitle={stat.subtitle}
                  delay={index * 0.2}
                  animateNumber={stat.animateNumber}
                />
              ))}
            </div>


          </main>
        </section>

        <section className="indices-section">
          <h2 className="section-heading">Explore our range of Indices</h2>
          <IndicesSection />
          <div className="explore-wrapper mt-5">
            <button className="explore-button">Explore More</button>
          </div>
        </section>
        <section className="vision-shadow pt-5 pb-2">
          <div className="why-trade-container">
            <h2 className="section-heading">Why trade Indices with IC Markets?</h2>
            <TradeIndices />
            <div>
              <div className='company-statements'>
                <span className='company-vision'>Innovation.<br /> Precision.<br />  Results</span>
                <div className='company-motive-container'>
                  <span className='company-motive'>Three powerful account options — designed to deliver for all traders. </span>
                  <p className='company-motive'>Trusted by 200,000+ active traders worldwide, we’re the broker of choice for those who demand advanced trading conditions, award-winning support, and a secure, regulated environment. Our mission is simple: deliver elite trading infrastructure so you can focus on achieving your trading goals.</p>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='radial-gradient-overlay'>
          <div className="trading-account-type">
            <h2 className="section-heading">3 Account Types, Designed for Every Trader</h2>
            <p className="section-heading mt-2">Three powerful account options — designed to deliver for all traders.</p>
            <div className='accounts-type'>
              {accounts.map((acc, idx) => (
                <div key={idx} className='acc-card-container'>
                  <span className='acc-title'>{acc.type}</span>
                  <p className='acc-details'>{acc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="why-trade-section-white" >
          <div className="why-trade-container" >
            <h2 className="section-heading">Powerful Tools Built for Performance</h2>
            <p className="section-heading">Harness advanced charting, real-time analytics, and lightning-fast execution across MetaTrader, cTrader, and TradingView. Customize your trading with powerful indicators, EAs, and scripts — and maintain full control with robust risk management tools.</p>
            <div className="logosContainerStyle">
              {platforms.map((platform, idx) => (
                <img className="logoStyle" key={idx} src={platform.src} alt={platform.alt} />
              ))}
            </div>
          </div>

        </section>
        <section className="why-trade-section faq-img" >
          <div className="why-trade-container pt-5">

            <h2 className="section-heading">Get a 10% Deposit Bonus – Limited Time Only*</h2>
            <p className='section-heading'>Open a new account and claim your 10% deposit bonus today. This exclusive offer is available to new users who deposit by <strong>31 July 2025</strong>. It’s simple: sign up, fund your account, and we’ll boost your balance with a non-withdrawable 10% bonus. Start stronger—trade with more.
            </p>
            <div className='discount-form'>
              <DepositBonusForm />
            </div>
          </div>
        </section>
        <section className="vision-shadow pt-5 pb-2">
          <div className="why-trade-container">
            <h2 className='faq-title'>Trade Index FAQs</h2>
            <p className='faq-message mt-5'>Open a new account and claim your 10% deposit bonus today. This exclusive offer is available to new users who deposit by 31 July 2025. It’s simple: sign up, fund your account, and we’ll boost your balance with a non-withdrawable 10% bonus. Start stronger—trade with more.</p>
            <div className='faqs mt-5'>
              <TradeIndexFaqs />
            </div>
          </div>
        </section>
        <section className="why-trade-section-white" >
          <div className="feedback-container" >
            <h2 className="section-heading text-align-center">A Trusted Broker</h2>
            <p className='feedback-message text-align-center'>We’re the broker of choice for over 200,000 active clients.</p>
            <div className='feedback'>
              <ReviewSlider />
            </div>
          </div>
        </section>
        <section className="why-trade-section-white support-background-color" >
          <div className="why-trade-container" >
            <h2 className="section-heading">Support You Can Count On — 24/7</h2>
            <p className='feedback-message'>Have questions or want to learn more about our Index CFD offering? Our team is available around the clock—get in touch anytime. We're here to help you trade with confidence</p>
            <ICMSupport />
          </div>
        </section>
        <section className="why-trade-section">
          <div className="why-trade-container">
            <ICMarketsFooter />
          </div>
        </section>
      </div>

    </div>

  );
}

