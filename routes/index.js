// routes/index.js
const express = require('express');
const router = express.Router();

/* Glossary data */
const glossaryData = [
  { id: '1', term: 'DevOps', description: 'DevOps is an integrated approach encompassing cultural principles, operational practices, and technological tools aimed at enhancing an organization`s capacity to swiftly deliver applications and services.', reference: 'Amazon, “What is DevOps? - Amazon Web Services (AWS),” Amazon Web Services, Inc., 2019. https://aws.amazon.com/devops/what-is-devops/' },
  { id: '2', term: 'Wall of confusion', description: 'The term refers to the situation where a particular group or team  in software development considers their job finished once they have completed their part of the process and handed it over to the next group. This handover might lack sufficient information, proper documentation, or clear communication, leading to confusion and inefficiencies for the next team.', reference: 'S. Kawaguchi, “The Wall of Confusion,” Medium, Feb. 12, 2022. https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26' },
  { id: '3', term: 'SDLC', description: 'The Software Development Life Cycle (SDLC) is a structured and systematic process designed to create software that achieves optimal quality, efficiency, and cost-effectiveness within the shortest possible timeframe. By following a well-defined series of phases, SDLC enables organizations to efficiently produce top-notch software that undergoes rigorous testing and is fully prepared for deployment and operational use.', reference: 'A. Altvater, “What is SDLC? Understand the Software Development Life Cycle,” Stackify, Apr. 08, 2020. https://stackify.com/what-is-sdlc/' },
  { id: '4', term: 'Agile Development Methodology', description: 'It is a project management approach that consists of distributing the project into different phases into an efficient way and involves continuous collaboration and improvement from the team', reference: 'Atlassian, “Agile best practices and tutorials | Atlassian,” Atlassian, 2019. https://www.atlassian.com/agile' },
  { id: '5', term: 'Cloud computing', description: 'Cloud computing refers to accessing IT resources like computing power, storage, and databases via the Internet on a pay-as-you-go basis. It eliminates the need for maintaining data centers, providing a more flexible and cost-effective way to access and use technology resources.', reference: 'AWS, “What is Cloud Computing? - Amazon Web Services,” Amazon Web Services, Inc., 2022. https://aws.amazon.com/what-is-cloud-computing/' },
  { id: '6', term: 'Microservice', description: 'Microservices, or the microservice architecture, is a design approach for building applications by breaking them down into smaller, independent services. Each service can be deployed separately, allowing for flexibility and scalability. ', reference: 'C. Richardson, “Microservices.io,” microservices.io, 2017. https://microservices.io/' },
  { id: '7', term: 'Waterfall model', description: 'The Waterfall methodology is a prevalent project management approach characterized by a sequential and linear process. In this method, each stage of the project must be finished before progressing to the subsequent step.', reference: 'L. Hoory and C. Bottorff, “What Is Waterfall Methodology And How Do I Use It?,” Forbes Advisor, Oct. 26, 2021. https://www.forbes.com/advisor/business/what-is-waterfall-methodology/' },
  { id: '8', term: 'Technical Dept', description: 'Technical debt, also referred to as tech debt or code debt, occurs when development teams make intentional shortcuts or quick decisions to deliver a certain functionality or project faster. ', reference: '“What Is Technical Debt? | Definition and Examples,” www.productplan.com. https://www.productplan.com/glossary/technical-debt/' },
  { id: '9', term: 'Productivity in software development', description: 'Software productivity refers to the measure of how efficiently software is developed in relation to the value it provides and the resources invested. It involves assessing the functional value delivered to users, the complexity of the software being created, and the time and effort expended during development', reference: '“Software Productivity,” www.umsl.edu. https://www.umsl.edu/~sauterv/analysis/488_f02_papers/SoftwareProductivity.html#:~:text=Software%20productivity%20is%20the%20ratio%20between%20the%20functional%20value%20of (accessed Jul. 23, 2023).' },
  { id: '10', term: 'Automation', description: 'Automation involves leveraging technology to carry out tasks while reducing the need for direct human intervention. ', reference: 'IBM, “What is automation?,” www.ibm.com, 2021. https://www.ibm.com/topics/automation' },
  { id: '11', term: 'Minimum Viable Product', description: 'A minimum viable product (MVP) refers to a basic version of a product that includes just enough features to catch the interest of initial users, typically those who are quick to adopt new technologies. The main purpose of an MVP is to test and validate a product concept during the early stages of development.', refrence: 'ProductPlan, “What is a Minimum Viable Product (MVP)? | A Product Mgmt Definition,” www.productplan.com, 2022. https://www.productplan.com/glossary/minimum-viable-product/' },
  { id: '12', term: 'Definition of Done', description: 'The "definition of done" (DoD) refers to the set of requirements or criteria that a software product needs to fulfill in order to be considered complete and ready for acceptance by users, customers, the team, or any system that uses it. The purpose of having a well-defined DoD is to ensure the quality of the product.', refrence: '“The Definition of Done,” LeadingAgile, Feb. 08, 2017. https://www.leadingagile.com/2017/02/definition-of-done/'},
  { id: '13', term: 'Everything as Code', description: '"Everything as Code" (EaC) is an approach for handling IT infrastructure and creating systems and utilities that complement contemporary software applications. It involves transforming manual tasks and procedures typically carried out by individuals into software code.', refrence: '“What ‘Everything as Code’ is and why it matters,” VentureBeat, Nov. 26, 2022. https://venturebeat.com/automation/what-everything-as-code-is-and-why-it-matters/ (accessed Aug. 06, 2023).'},
  { id: '14', term: 'Continuous integration (CI)', description: 'Continuous Integration (CI) is a method used in software development to streamline the process of combining code changes made by different developers into one cohesive software project.', refrence: 'Atlassian, “What is Continuous Integration | Atlassian,” Atlassian, 2019. https://www.atlassian.com/continuous-delivery/continuous-integration'},
  { id: '15', term: 'Continuous delivery (CD)', description: 'Continuous Delivery is a strategy used in software development to streamline the process of getting code changes ready for release and deployment. This approach builds upon the foundation of continuous integration by automatically preparing code alterations for introduction into either a testing environment or directly into the production environment.', refrence: '“What is Continuous Delivery? – Amazon Web Services,” Amazon Web Services, Inc. https://aws.amazon.com/devops/continuous-delivery/'},
  { id: '16', term: 'Infrastructure as Code', description: 'Infrastructure as code (IaC) is a practice rooted in DevOps principles that involves using a descriptive model, similar to code, to define and set up various aspects of a digital infrastructure. This can include elements like networks, virtual machines, load balancers, and how they are interconnected.', refrence: 'mijacobs, “What is infrastructure as code (IaC)? - Azure DevOps,” learn.microsoft.com. https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code'},
  { id: '17', term: 'Source code management', description: '', refrence: 'Atlassian, “Source Code Management | Atlassian Git Tutorial,” Atlassian. https://www.atlassian.com/git/tutorials/source-code-management#:~:text=Source%20code%20management%20(SCM)%20is'},
  { id: '18', term: 'Containerisation', description: `Containerization is a technique used in software deployment that packages an application's code together with all the necessary files and libraries required to run it on various types of infrastructure`, refrence: '“What is Containerization? Containerization Explained - AWS,” Amazon Web Services, Inc. https://aws.amazon.com/what-is/containerization/'},
  { id: '19', term: 'Kubernetes', description: 'Kubernetes, often abbreviated as K8s, is a freely available system designed to automate the processes of deploying, scaling, and overseeing applications that are contained within containers.', refrence: 'Kubernetes, “Production-Grade Container Orchestration,” Kubernetes.io, 2019. https://kubernetes.io/'},
  { id: '20', term: 'Docker', description: 'Docker is a comprehensive platform that offers a range of tools, services, reliable content, and automation capabilities. These resources can be utilized either independently or in combination to expedite the process of delivering applications in a secure manner.', refrence: '“Why Docker,” Docker. https://www.docker.com/why-docker/'},
  // Add more terms and definitions as needed
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', glossaries: glossaryData });
});

module.exports = router;

