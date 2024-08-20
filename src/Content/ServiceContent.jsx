import webDevelopment from '../assets/ServicesSection/services/webDevelopment.webp';
import appDevelopment  from '../assets/ServicesSection/services/appDevelopment.webp';
import ecommerceSolution  from '../assets/ServicesSection/services/ecommerceSolution.webp';
import socialMediaMarketing  from '../assets/ServicesSection/services/socialMediaMarketing.webp';
import UIUX  from '../assets/ServicesSection/services/UIUX.webp';

import cms  from '../assets/ServicesSection/cms.webp';
import Fashion  from '../assets/ServicesSection/Fashion.webp';
import food  from '../assets/ServicesSection/food.webp';
import realState  from '../assets/ServicesSection/realState.webp';
import servicesImage  from '../assets/ServicesSection/services.webp';
import technicalSupport  from '../assets/ServicesSection/technicalSupport.webp';

import Education  from '../assets/ServicesSection/Industries/Education.webp';
import Healthcare  from '../assets/ServicesSection/Industries/Healthcare.webp';
import Retail  from '../assets/ServicesSection/Industries/Retail.webp';
import Travel  from '../assets/ServicesSection/Industries/Travel.webp';


import ArtificialIntelligence  from '../assets/ServicesSection/R&D/ArtificialIntelligence.webp';
import BlockchainTechnology  from '../assets/ServicesSection/R&D/BlockchainTechnology.webp';
import Cybersecurity  from '../assets/ServicesSection/R&D/Cybersecurity.webp';
import EdgeComputing  from '../assets/ServicesSection/R&D/EdgeComputing.webp';
import InternetofThings  from '../assets/ServicesSection/R&D/InternetofThings.webp';
import MachineLearning  from '../assets/ServicesSection/R&D/MachineLearning.webp';
import NaturalLanguageProcessing  from '../assets/ServicesSection/R&D/NaturalLanguageProcessing.webp';
import QuantumComputing  from '../assets/ServicesSection/R&D/QuantumComputing.webp';
import RoboticProcessAutomation  from '../assets/ServicesSection/R&D/RoboticProcessAutomation.webp';


export const services = [
    {
      id: 1,
      image: webDevelopment,
      deatiledServiceId: 3,
      title: "Web Development",
      description: "Creating responsive and dynamic websites that enhance user experience and drive engagement across all devices."
    },
    {
      id: 2,
      image: appDevelopment,
      deatiledServiceId: 2,
      title: "App Development",
      description: "Designing and building intuitive mobile and web applications that meet your specific business needs and goals."
    },
    {
      id: 3,
      image: UIUX,
      title: "UX/UI Design",
      deatiledServiceId: 1,
      description: "Crafting intuitive and visually appealing interfaces that improve user satisfaction and interaction with your digital products."
    },
    {
      id: 4,
      image: socialMediaMarketing,
      deatiledServiceId: 4,
      title: "Social Media Marketing",
      description: "Creating and managing targeted social media campaigns to build brand awareness, engage with your audience, and drive conversions."
    },
    {
      id: 5,
      image: cms,
      deatiledServiceId: 8,
      title: "Content Management Systems (CMS)",
      description: "Developing and maintaining CMS platforms that simplify content management, publishing, and updates for your website."
    },
    {
      id: 6,
      image: technicalSupport,
      deatiledServiceId: 1, //remaining
      title: "Technical Support",
      description: "Providing ongoing technical support to resolve issues promptly, ensuring the reliability and smooth operation of your systems."
    },
    {
      id: 7,
      image: servicesImage,
      title: "SEO Services",
      deatiledServiceId: 4, 
      description: "Enhancing your website’s search engine ranking with effective SEO techniques to drive organic traffic and improve visibility."
    },
    {
      id: 8,
      image: ecommerceSolution,
      deatiledServiceId: 8, 
      title: "Custom Software Development",
      description: "Developing bespoke software solutions tailored to address unique business challenges and optimize operations."
    },
    {
      id: 9,
      image: ecommerceSolution,
      deatiledServiceId: 7, 
      title: "E-Commerce Solutions",
      description: "Building and optimizing online stores with seamless shopping experiences to boost sales and customer loyalty."
    },
    {
      id: 10,
      image: socialMediaMarketing,
      deatiledServiceId: 4, //remaing
      title: "Digital Marketing",
      description: "Implementing comprehensive digital strategies to increase your online presence, attract new customers, and drive growth."
    },
    {
      id: 11,
      image: technicalSupport,
      deatiledServiceId: 6,
      title: "IT Consulting",
      description: "Providing expert advice and strategic recommendations to optimize your technology infrastructure and align it with your business goals."
    },
    {
      id: 12,
      image: Cybersecurity,
      deatiledServiceId: 5,
      title: "Cybersecurity",
      description: "Studying advanced techniques to protect systems and data from cyber threats, ensuring the integrity and confidentiality of information."
    },
  ];
  
  export const industries = [
    {
      id: 12,
      image: Travel,
      title: "Travel",
      description: "Enhancing travel experiences with innovative solutions for booking, itinerary management, and personalized recommendations."
    },
    {
      id: 13,
      image: Healthcare,
      title: "Healthcare",
      description: "Delivering advanced technology to improve patient care, streamline administrative processes, and support medical research."
    },
    {
      id: 14,
      image: Education,
      title: "Education",
      description: "Transforming learning environments with e-learning platforms, interactive tools, and digital resources to engage students and educators."
    },
    {
      id: 15,
      image: Retail,
      title: "Retail",
      description: "Optimizing retail operations with e-commerce platforms, inventory management systems, and customer engagement tools."
    },
    {
      id: 16,
      image: Healthcare,
      title: "Hospitality",
      description: "Enhancing guest experiences with booking systems, property management solutions, and personalized service tools."
    },
    {
      id: 17,
      image: realState,
      title: "Real Estate",
      description: "Enhancing property management and sales with digital tools for listings, virtual tours, and customer relationship management."
    },
    {
      id: 18,
      image: food,
      title: "Food & Beverage",
      description: "Streamlining operations with inventory management, supply chain solutions, and customer engagement tools to boost efficiency and customer satisfaction."
    },
    {
      id: 19,
      image: Fashion,
      title: "Fashion",
      description: "Revolutionizing the fashion industry with e-commerce platforms, virtual fitting rooms, and trend analysis tools to enhance customer experience and market responsiveness."
    }
  ];
  
  export const rAndDProjects = [
    {
      id: 20,
      image: ArtificialIntelligence,
      title: "Artificial Intelligence (AI)",
      description: "Exploring advanced algorithms and models to create intelligent systems that can learn, reason, and make decisions autonomously."
    },
    {
      id: 21,
      image: MachineLearning,
      title: "Machine Learning (ML)",
      description: "Developing techniques for algorithms to analyze data, recognize patterns, and make predictions without explicit programming."
    },
    {
      id: 22,
      image: NaturalLanguageProcessing,
      title: "Natural Language Processing (NLP)",
      description: "Researching methods for computers to understand, interpret, and generate human language, improving communication between people and machines."
    },
    {
      id: 23,
      image: BlockchainTechnology,
      title: "Blockchain Technology",
      description: "Investigating decentralized ledger systems to enhance security, transparency, and trust in digital transactions and data management."
    },
    {
      id: 24,
      image: Cybersecurity,
      title: "Cybersecurity",
      description: "Studying advanced techniques to protect systems and data from cyber threats, ensuring the integrity and confidentiality of information."
    },
    {
      id: 25,
      image: RoboticProcessAutomation,
      title: "Robotic Process Automation (RPA)",
      description: "Studying automation of repetitive tasks through software robots to increase efficiency and reduce operational costs."
    },
    {
      id: 26,
      image: QuantumComputing,
      title: "Quantum Computing",
      description: "Exploring quantum mechanics-based computing technologies to solve complex problems beyond the capabilities of classical computers."
    },
    {
      id: 27,
      image: InternetofThings,
      title: "Internet of Things (IoT)",
      description: "Researching the integration of smart devices and sensors to create interconnected systems that enable data collection and automation."
    },
    {
      id: 28,
      image: EdgeComputing,
      title: "Edge Computing",
      description: "Researching decentralized processing of data closer to its source to reduce latency and improve performance in real-time applications."
    }
  ];


  