// TradeIndexFaqs.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import { faqs } from '../../utils/Constants'
import './FAQs.css'

const TradeIndexFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faq-container'>
      <div className='faq-wrapper' >
        <div>
          {faqs.map((faq, index) => (
            <div className='questions' key={index}>
              <button onClick={() => toggle(index)} className='toggleButton' >
                <span>{faq.question}</span> {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <p className='faq-answer'> {faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeIndexFaqs;
