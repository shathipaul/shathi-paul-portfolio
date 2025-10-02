import React from "react";
import num1 from "@/assets/images/numbers/01.svg";
import num2 from "@/assets/images/numbers/02.svg";
import num3 from "@/assets/images/numbers/03.svg";
import num4 from "@/assets/images/numbers/04.svg";
import num5 from "@/assets/images/numbers/05.svg";
import Image from "next/image";
import CommonTitle from "@/components/common/CommonTitle";

const ServicesSection = () => {
  const industries = [
    {
      logo: num1,
      title: "Landing Page",
      description:
        "Patient Care Optimization Medical Diagnosis Drug Discovery Healthcare Analytics",
      features: [
        "Clean, modern design",
        "Fast loading & responsive",
        "Conversion-focused layout",
        "Integrated forms & CTAs",
      ],
      position: {
        root: "top-0 left-0",
        logo: "left-0 md:right-0 top-0",
        card: "bottom-0 md:top-16 left-0 md:right-0",
      },
    },
    {
      logo: num2,
      title: "Business Page",
      description:
        "Predictive Maintenance Quality Control Supply Chain Optimization Process Automation",
      features: [
        "About, services, contact pages",
        "SEO-friendly structure",
        "Mobile responsive",
        "Easy to update and scale",
      ],
      position: {
        root: "top-[200px] md:top-auto md:bottom-0 left-0 md:left-0 lg:left-20 xl:left-64",
        logo: "right-0 md:left-0 top-0 md:bottom-16",
        card: "right-0 md:right-10 bottom-0 md:bottom-5 lg:bottom-0",
      },
    },
    {
      logo: num3,
      title: "E-Commerce",
      description:
        "Product Recommendations Dynamic Pricing Customer Segmentation Conversion Optimization",
      features: [
        "Product listings & categories",
        "Secure checkout & payments",
        "Shopping cart & wishlist",
        "Easy product management",
      ],
      position: {
        root: "top-[400px] md:top-1/2 lg:top-20 md:-translate-y-1/2 lg:-translate-y-0 left-0 md:left-1/2 md:-translate-x-1/2",
        logo: "left-0 top-0 md:bottom-16 md:right-0",
        card: "left-0 md:right-0 bottom-0 md:top-16",
      },
    },
    {
      logo: num4,
      title: "Blog Website",
      description:
        "Customer Behavior Analysis Inventory Optimization Personalized Marketing Demand Forecasting",
      features: [
        "Modern blog layout",
        "SEO-ready structure",
        "Category & tags system",
        "Easy content management",
      ],
      position: {
        root: "top-[600px] md:top-auto md:bottom-4 left-0 md:left-auto md:right-0 lg:right-24 xl:right-48",
        logo: "right-0 top-0 md:bottom-16",
        card: "right-0 md:right-6 bottom-0 md:bottom-4 xl:bottom-0",
      },
    },
    {
      logo: num5,
      title: "Service Website",
      description:
        "Customer Behavior Analysis Inventory Optimization Personalized Marketing Demand Forecasting",
      features: [
        "Service listings & details",
        "Booking/contact forms",
        "SEO-optimized pages",
        "Testimonials & reviews",
      ],
      position: {
        root: "top-[800px] md:top-0 left-0 md:left-auto md:right-0",
        logo: "left-0 top-0",
        card: "left-0 md:left-auto md:right-12 bottom-0 md:top-16",
      },
    },
  ];
  return (
    <div id="services" className="scroll-mt-28 mb-16">
      <CommonTitle text="My Services" />

      <div className="relative  h-[1000px] md:h-[500px] overflow-hidden w-full">
        {industries.map((industry, i) => (
          <div
            key={i}
            className={`absolute z-30 w-full md:w-[280px] h-[175px] scale-75 lg:scale-90 xl:scale-100 ${industry.position.root}`}
          >
            <Image
              src={industry.logo}
              alt="Industry-Logo"
              className={`absolute ${industry.position.logo}`}
            />
            <div
              className={`absolute ${industry.position.card} shadow-inset-blue flex flex-col items-center justify-center p-6 bg-secondary/10 backdrop-blur-md 
                w-3/4 hover:w-full h-[100px] hover:h-[200px] rounded-[25px] duration-700 overflow-hidden group cursor-pointer`}
            >
              <h6 className={`font-semibold text-base`}>{industry.title}</h6>
              <ul className="w-full h-0 group-hover:h-full mt-0 group-hover:mt-4 overflow-hidden duration-700  text-gold leading-5 text-sm list-disc pl-5 space-y-1">
                {industry.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
