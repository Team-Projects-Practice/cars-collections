import React from "react";
import "./features.scss";
import { PricingTagIcon,DiamondIcon, FinanceIcon,CarIcon } from "../../Res/icons";

const featuresData = [
  {
    icon: < PricingTagIcon />,
    title: "Special Financing Offers",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    icon: <DiamondIcon />,
    title: "Trusted Car Dealership",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    icon:< FinanceIcon/>, 
    title: "Transparent Pricing",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    icon:<CarIcon />,
    title: "Expert Car Service",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__wrapper">

          <div className="features__left">
            <h2>
              We're BIG On What <br /> Matters To You
            </h2>
          </div>

          <div className="features__right">
            {featuresData.map((item, index) => (
              <div className="feature" key={index}>
                <span className="fe ature__icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;