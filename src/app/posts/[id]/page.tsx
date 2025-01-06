'use client'
import React from 'react'
import CommentSection from '@/components/Comment'
import AuthorCard from '@/components/AuthorCard'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const posts = [
       {
         id: "1",
         title: "The Evolution of Cloud Computing",
         description: "Introduction Brief introduction to the increasing importance of cybersecurity in today's digital age. Mention recent high-profile cyber-attacks to set the context. State the purpose of the blog: to explore the best practices for cybersecurity in 2025. The Evolving Cyber Threat Landscape Overview of the current cyber threat landscape. Types of cyber threats (malware, phishing, ransomware, etc.). The rise of sophisticated cyber-attacks and targeted threats. Statistics on cyber-attacks and their impact on businesses and individuals. Importance of Cybersecurity Why cybersecurity is crucial for businesses, governments, and individuals. The potential consequences of a cyber-attack: financial loss, reputational damage, legal implications. The role of cybersecurity in protecting sensitive data and maintaining trust. Best Practices for Cybersecurity in 2025 Employee Education and Awareness ",
         date: "2024-12-31",
         imageUrl: "/images/cc.png",
       },
   
       {
         id: "2",
         title: "Understanding Cybersecurity: Best Practices for 2025",
         description: "Introduction In the digital age, cybersecurity has become a critical concern for individuals and organizations alike. This blog explores the importance of cybersecurity, common threats, and best practices for protecting sensitive information. Why Cybersecurity is Important Cybersecurity is essential for protecting sensitive information, ensuring the integrity of systems and data, and preventing unauthorized access. With the increasing reliance on digital technologies, the risk of cyber threats has grown significantly.",
         date: "2024-12-31",
         imageUrl: "/images/cs.jpg",
       },
   
       {
         id: "3",
         title: "Artificial Intelligence: Transforming Industries",
         description: "Introduction Artificial Intelligence (AI) is revolutionizing numerous industries, from healthcare to finance. This blog explores the current applications, benefits, and future potential of AI technology. Current Applications of AI AI's versatility has led to its adoption in various sectors: Healthcare: AI enhances diagnostics, predicts patient outcomes, and personalizes treatment plans. AI algorithms can analyze medical images to detect diseases early, improving patient care. Finance: AI powers fraud detection, risk management, and personalized banking services. It automates trading processes and provides financial advisors with insights to optimize investment strategies. Retail: AI personalizes shopping experiences, optimizes inventory management, and improves customer service through chatbots and virtual assistants. Manufacturing: AI improves predictive maintenance, quality control, and supply chain management, leading to increased efficiency and reduced downtime.",
         date: "2024-12-31",
         imageUrl: "/images/ai.jpg",
       },
   
       {
         id: "4",
         title: "The Rise of Quantum Computing",
         description: "Introduction Quantum computing is poised to revolutionize the IT world by solving problems that classical computers cannot handle. This blog delves into the basics of quantum computing, its potential impacts, and its future. What is Quantum Computing? Quantum computing harnesses the principles of quantum mechanics to process information. Unlike classical computers, which use bits (0s and 1s), quantum computers use quantum bits or qubits, which can represent both 0 and 1 simultaneously thanks to superposition. Key Concepts in Quantum Computing Superposition: The ability of a qubit to be in multiple states at once. Entanglement: A phenomenon where qubits become interconnected, such that the state of one qubit can depend on the state of another, even across large distances. Quantum Gates: Operations that manipulate qubits, forming the basis of quantum algorithms.",
         date: "2024-12-31",
         imageUrl: "/images/qc.jpg",
       },
   
       {
         id: "5",
         title: "The Importance of Data Privacy in the Digital Age",
         description: "Introduction Data privacy is more critical than ever in the digital age. This blog discusses the importance of data privacy, relevant regulations, and how individuals and companies can protect their data. Importance of Data Privacy Data privacy is essential for several reasons: Personal Security: Protecting personal data prevents identity theft, fraud, and unauthorized access to sensitive information. Trust: Ensuring data privacy builds trust between individuals and organizations, fostering positive relationships and customer loyalty. Legal Compliance: Adhering to data privacy regulations avoids legal penalties and maintains an organization's reputation.",
         date: "2024-12-31",
         imageUrl: "/images/dp.jpg",
       },
   
       {
         id: "6",
         title: "5G Technology: Revolutionizing Connectivity",
         description: "Introduction 5G technology is set to transform how we connect. This blog explores the benefits, challenges, and future applications of 5G networks. Benefits of 5G Technology 5G technology offers several significant benefits over previous generations of wireless networks: Faster Speeds: 5G provides data transfer speeds up to 100 times faster than 4G, enabling seamless streaming, downloading, and online gaming. Lower Latency: 5G reduces latency to milliseconds, improving real-time communication and enabling applications like remote surgery and autonomous vehicles. Increased Capacity: 5G supports a higher density of connected devices, accommodating the growing number of IoT devices and smart technologies. Enhanced Reliability: 5G networks offer more reliable connections, reducing downtime and improving overall user experience.",
         date: "2024-12-31",
         imageUrl: "/images/5g.jpg",
       },
   
       {
         id: "7",
         title: "Blockchain Beyond Cryptocurrency",
         description:"Introduction Blockchain technology extends beyond Bitcoin. This blog discusses its applications in various industries such as supply chain, healthcare, and finance. Blockchain Basics Blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers in a secure and transparent manner. Each block contains a list of transactions, and once added to the chain, it cannot be altered, ensuring data integrity. Applications of Blockchain in Various Industries Supply Chain Management Blockchain enhances supply chain transparency and efficiency by providing real-time tracking of goods and verifying the authenticity of products. It reduces fraud, counterfeiting, and inefficiencies by creating an immutable record of each transaction along the supply chain. Healthcare Blockchain improves healthcare data management by securely storing patient records and ensuring data privacy. It facilitates interoperability between different healthcare providers, enabling seamless sharing of patient information and improving patient outcomes.",
         date: "2024-12-31",
         imageUrl: "/images/bc.jpg",
       },
   
       {
         id: "8",
         title: "The Role of DevOps in Modern Software Development",
         description: "Introduction DevOps practices are essential for modern software development. This blog explains the principles of DevOps, its benefits, and how to implement it effectively. Principles of DevOps DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to improve collaboration, automate processes, and deliver software more efficiently. Key principles of DevOps include: Continuous Integration (CI): Developers regularly integrate code changes into a shared repository, allowing for early detection and resolution of issues. Continuous Delivery (CD): Code changes are automatically tested and prepared for release to production, enabling frequent and reliable software updates. Automation: Automating repetitive tasks, such as testing, deployment, and monitoring, reduces manual errors and speeds up the development process. Collaboration: Encouraging collaboration between development and operations teams fosters a culture of shared responsibility and improves communication.",
         date: "2024-12-31",
         imageUrl: "/images/do.jpg",
       },
   
       {
         id: "9",
         title: "Big Data Analytics: Unlocking Business Insights",
         description: "Introduction Big Data analytics helps businesses make informed decisions. This blog explores the tools, techniques, and benefits of Big Data in various sectors. Tools and Techniques for Big Data Analytics Data Storage and Processing Hadoop: An open-source framework that allows for the distributed processing of large data sets across clusters of computers. Spark: An open-source unified analytics engine for large-scale data processing, known for its speed and ease of use. Data Analysis and Visualization SQL: A standard language for querying and managing databases. R: A programming language and software environment for statistical computing and graphics. Tableau: A data visualization tool that helps transform raw data into interactive and shareable dashboards.",
         date: "2024-12-31",
         imageUrl: "/images/da.jpg",
       },
   
       {
         id: "10",
         title: "Edge Computing: Bringing Data Processing Closer",
         description: "Introduction Edge computing processes data closer to the source. This blog discusses its advantages, use cases, and how it complements cloud computing. Advantages of Edge Computing Reduced Latency: Processing data closer to the source reduces latency, enabling real-time data analysis and decision-making. Improved Bandwidth Efficiency: Edge computing reduces the amount of data sent to centralized data centers, optimizing bandwidth usage and lowering costs. Enhanced Data Security: By processing data locally, edge computing minimizes the risk of data breaches during transmission to centralized servers. Reliability: Edge computing ensures continued operation and data processing even in the event of network disruptions.",
         date: "2024-12-31",
         imageUrl: "/images/ec.jpg",
       },
   
       {
         id: "11",
         title: "The Future of Remote Work: IT Tools and Technologies",
         description:"Introduction The COVID-19 pandemic has accelerated the adoption of remote work, fundamentally changing how businesses operate. As organizations adapt to this new reality, IT tools and technologies are playing a crucial role in enabling remote work. This blog explores the key IT tools and technologies shaping the future of remote work, their benefits, and how companies can leverage them to create efficient and productive remote work environments. Key IT Tools and Technologies for Remote Work Communication and Collaboration Tools Effective communication is vital for remote teams. Tools such as Slack, Microsoft Teams, and Zoom have become essential for real-time communication and collaboration. These platforms offer features like instant messaging, video conferencing, file sharing, and integration with other productivity tools, making it easier for teams to stay connected and work collaboratively. Project Management Software Managing remote teams requires robust project management tools to ensure tasks are tracked and deadlines are met. Tools like Trello, Asana, and Monday.com provide functionalities such as task assignments, progress tracking, and deadline management. These platforms help teams stay organized, prioritize work, and maintain transparency.",
         date: "2024-12-31",
         imageUrl: "/images/rw.jpg",
       },
   
       {
         id: "12",
         title: " The Impact of IoT on Everyday Life",
         description: "Introduction: The Internet of Things (IoT) is revolutionizing the way we live, work, and interact with the world around us. By connecting everyday objects to the internet, IoT enables these devices to collect, share, and analyze data, leading to smarter and more efficient ways of living. This blog explores the impact of IoT on everyday life, highlighting its current applications, benefits, and security concerns.  Current Applications of IoT Smart Homes IoT has transformed our homes into smart living spaces. Devices like smart thermostats, lighting systems, and security cameras can be controlled remotely through smartphone apps or voice commands. These systems learn user preferences, optimize energy usage, and enhance home security, providing convenience and peace of mind. Healthcare In healthcare, IoT devices like wearable fitness trackers, smartwatches, and connected medical devices monitor vital signs, track physical activity, and manage chronic conditions. These devices provide real-time health data to users and healthcare providers, enabling proactive health management and timely medical interventions.",
         date: "2024-12-31",
         imageUrl: "/images/it.jpg",
       },
   
       {
         id: "13",
         title: "Ethical AI: Balancing Innovation and Responsibility",
         description: "As artificial intelligence (AI) continues to advance, it is transforming industries, driving innovation, and creating new possibilities. However, the rapid development and deployment of AI technologies also raise important ethical questions. From biases in algorithms to concerns about privacy and job displacement, the need for responsible AI development has never been more critical. This blog explores the concept of ethical AI, the challenges involved, and how we can balance innovation with responsibility to ensure a positive impact on society. What is Ethical AI? Ethical AI refers to the development and use of artificial intelligence systems that align with moral principles and societal values. It involves ensuring that AI technologies are transparent, fair, accountable, and respect privacy rights. The goal of ethical AI is not only to create innovative solutions but also to consider the broader impact of these technologies on individuals, communities, and society at large.",
         date: "2024-12-31",
         imageUrl: "/images/ea.jpg",
       },
   
       {
         id: "14",
         title: "Software Development Trends to Watch in 2025",
         description: "Introduction The world of software development is continuously evolving, driven by advancements in technology, new programming paradigms, and changing user demands. As we approach 2025, several trends are expected to shape the future of software development. From the rise of AI-powered development tools to the growing importance of cybersecurity, these trends promise to influence how software is built, deployed, and maintained. This blog highlights the key software development trends to watch in 2025. 1. AI-Powered Development Tools AI and machine learning are becoming integral parts of software development. By 2025, we expect AI-powered development tools to be widely adopted, significantly improving productivity and code quality. These tools will assist developers by automating repetitive tasks, such as code generation, debugging, and testing. AI can analyze large codebases to detect bugs, offer suggestions for optimization, and even write portions of code based on high-level requirements. Moreover, AI-driven platforms like GitHub Copilot, which provides code suggestions, are just the beginning. In the coming years, AI will evolve to provide more advanced coding assistants, helping developers focus on complex and creative problem-solving tasks while automating the mundane aspects of development.",
         date: "2024-12-31",
         imageUrl: "/images/sd.jpeg",
       },
   
       {
         id: "15",
         title: "The Importance of IT Governance and Compliance",
         description: "Introduction In todays digital age, organizations face increasing pressure to manage their IT infrastructure effectively while ensuring regulatory compliance. IT governance and compliance are critical to achieving these objectives, ensuring that IT investments align with business goals, and mitigating risks. With the ever-evolving regulatory landscape, proper IT governance helps companies stay compliant with industry standards, laws, and best practices. This blog explores the importance of IT governance and compliance, the key elements involved, and the benefits they bring to organizations. What is IT Governance? IT governance refers to the framework and processes that ensure IT resources are used efficiently and effectively to achieve an organization’s goals. It involves overseeing IT decision-making, aligning IT strategies with business objectives, and ensuring that IT projects are executed in a controlled and measurable manner. The primary goal of IT governance is to create value through technology while minimizing risks.",
         date: "2024-12-31",
         imageUrl: "/images/ig.jpg",
       },
   
  ];

export default function Post({params}: {params: {id:string}}){
  const {id} = params;
  const post = posts.find((p) => p.id === id);

  if(!post){
    return(
      <h2 className='text-2xl font-bold text-center mt-10'>post not found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) =>(
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };

  return(
    <div>
      <Navbar/>
      <div className='max-w-3xl mx-auto p-5'>
        <h1 className='my-11 md:text-4xl text-3xl font-bold text-red-600 text-center'>
          {post.title}
        </h1>

        {post.imageUrl && (
          <img src={post.imageUrl} alt={post.title}
          className='w-[2400px]  h-auto rounded-md mt-4'/>
        )}

        <div className='mt-6 text-lg text-slate-700'>
          {renderParagraphs(post.description)}
        </div>

        <CommentSection postId={post.id}/>
        <AuthorCard/>
      </div>
      <Footer/>
    </div>
  )
}






