import React from "react";
import "../TrustedBrokerSupport/TrustedBrokerSupport.css";
import { supportOptions} from '../../utils/Constants'


const TrustedBrokerSupport = () => {
  return (
    
      <div className="mb-5 mt-5">       
        <div className="support-methods">
          {supportOptions.map((opt, idx) => (
            <div className="support-card" key={idx}>
              <div className="icon green-icon">{opt.icon}</div>
              <div className="text-align-left" >
                <div className="type green-text">{opt.label}</div>
                <div className="info">
                  {opt.label === "Email us" ? (
                    <a href={`mailto:${opt.value}`}>{opt.value}</a>
                  ) : opt.label === "Live Chat" ? (
                    <a href="#">{opt.value}</a>
                  ) : (
                    <a href={`tel:${opt.value}`}>{opt.value}</a>
                  )}
                </div>
                {opt.note && <div className="note">{opt.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default TrustedBrokerSupport;
