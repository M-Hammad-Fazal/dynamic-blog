import React from 'react';
import BlogCard from '../components/BlogCard';
import {title} from 'process'
export default function Mega() {

  const posts = [
    {
      id: "1",
      title: "The Evolution of Cloud Computing",
      description: "Cloud computing has revolutionized the IT landscape. Explore the history, types, and benefits of cloud computing, and how it's transforming businesses today.",
      date: "2024-12-31",
      imageUrl: "/images/cc.png",
    },

    {
      id: "2",
      title: "Understanding Cybersecurity: Best Practices for 2025",
      description: "With cyber threats on the rise, understanding cybersecurity is crucial. Discuss the latest trends, best practices, and technologies to protect data and systems.",
      date: "2024-12-31",
      imageUrl: "/images/cs.jpg",
    },

    {
      id: "3",
      title: "Artificial Intelligence: Transforming Industries",
      description: "AI is reshaping various industries from healthcare to finance. Explore the current applications, benefits, and future potential of AI technology.",
      date: "2024-12-31",
      imageUrl: "/images/ai.jpg",
    },

    {
      id: "4",
      title: "The Rise of Quantum Computing",
      description:"ription: 'Quantum computing promises to solve problems beyond the reach of classical computers. Explain the basics of quantum computing and its potential impacts.",
      date: "2024-12-31",
      imageUrl: "/images/qc.jpg",
    },

    {
      id: "5",
      title: "The Importance of Data Privacy in the Digital Age",
      description: "Data privacy is more critical than ever. Discuss the importance of data privacy, relevant regulations, and how individuals and companies can protect their data.",
      date: "2024-12-31",
      imageUrl: "/images/dp.jpg",
    },

    {
      id: "6",
      title: "5G Technology: Revolutionizing Connectivity",
      description: "5G technology is set to transform how we connect. Explore the benefits, challenges, and future applications of 5G networks.",
      date: "2024-12-31",
      imageUrl: "/images/5g.jpg",
    },

    {
      id: "7",
      title: "Blockchain Beyond Cryptocurrency",
      description: "Blockchain technology extends beyond Bitcoin. Discuss its applications in various industries such as supply chain, healthcare, and finance.",
      date: "2024-12-31",
      imageUrl: "/images/bc.jpg",
    },

    {
      id: "8",
      title: "The Role of DevOps in Modern Software Development",
      description: "DevOps practices are essential for modern software development. Explain the principles of DevOps, its benefits, and how to implement it effectively.",
      date: "2024-12-31",
      imageUrl: "/images/do.jpg",
    },

    {
      id: "9",
      title: "Big Data Analytics: Unlocking Business Insights",
      description: "Big Data analytics helps businesses make informed decisions. Explore the tools, techniques, and benefits of Big Data in various sectors.",
      date: "2024-12-31",
      imageUrl: "/images/da.jpg",
    },

    {
      id: "10",
      title: "Edge Computing: Bringing Data Processing Closer",
      description: "Edge computing processes data closer to the source. Discuss its advantages, use cases, and how it complements cloud computing.",
      date: "2024-12-31",
      imageUrl: "/images/ec.jpg",
    },

    {
      id: "11",
      title: "The Future of Remote Work: IT Tools and Technologies",
      description: "Remote work is here to stay. Explore the IT tools and technologies enabling remote work and how companies can adapt to this trend.",
      date: "2024-12-31",
      imageUrl: "/images/rw.jpg",
    },

    {
      id: "12",
      title: " The Impact of IoT on Everyday Life",
      description: "The Internet of Things (IoT) is changing how we live. Discuss the current applications, benefits, and security concerns of IoT devices.",
      date: "2024-12-31",
      imageUrl: "/images/it.jpg",
    },

    {
      id: "13",
      title: "Ethical AI: Balancing Innovation and Responsibility",
      description: "As AI advances, ethical considerations become crucial. Discuss the importance of ethical AI, potential risks, and how to ensure responsible development.",
      date: "2024-12-31",
      imageUrl: "/images/ea.jpg",
    },

    {
      id: "14",
      title: "Software Development Trends to Watch in 2025",
      description: "The software development landscape is constantly evolving. Explore the latest trends, tools, and methodologies shaping the future of software development.",
      date: "2024-12-31",
      imageUrl: "/images/sd.jpeg",
    },

    {
      id: "15",
      title: "The Importance of IT Governance and Compliance",
      description: "IT governance and compliance are essential for organizational success. Discuss best practices, frameworks, and how to ensure compliance in the IT sector.",
      date: "2024-12-31",
      imageUrl: "/images/ig.jpg",
    },

  ];

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Explore blogs</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
