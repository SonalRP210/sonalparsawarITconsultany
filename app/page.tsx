"use client";

import { FaTools, FaCogs, FaBriefcase, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center p-10 space-y-16">

      {/* Hero / Header */}
      <header className="text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500 mb-4">
          Sonal Parsawar IT Consultancy
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Building scalable backend systems and cloud solutions for startups and enterprises.
        </p>

        {/* Laptop illustration */}
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
          alt="Software engineer professional working on laptop in modern office"
          className="w-full max-h-screen object-cover animate-float rounded-lg shadow-xl"
        />
      </header>

      {/* Services */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3">
          <span className="text-indigo-600"><FaTools /></span> Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Backend Development", desc: "Java, Spring Boot, Microservices Architecture" },
            { title: "Cloud Solutions", desc: "AWS / Azure, DevOps & CI/CD" },
            { title: "Real-Time Systems", desc: "Kafka, Event-Driven Architecture" },
            { title: "System Design", desc: "Scalability & Performance Consulting" },
          ].map((service) => (
            <div
              key={service.title}
              className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 bg-white"
            >
              <h3 className="font-semibold text-indigo-600 text-xl mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="w-full max-w-3xl bg-indigo-50 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
          <span className="text-indigo-600"><FaCogs /></span> About
        </h2>
        <p className="text-gray-800 leading-relaxed">
          I am a Senior Software Engineer with over 12.5 years of experience in building scalable, high-performance
          distributed systems. I specialize in backend development, microservices architecture, and cloud platforms.
        </p>
        <p className="mt-4 p-3 bg-indigo-100 rounded text-indigo-700 font-semibold flex items-center justify-center gap-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg" 
            alt="Sweden flag" 
            className="w-6 h-4 object-cover rounded-sm"
          />
          Based in Sweden | Available for consulting engagements
        </p>
      </section>

      {/* Projects */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
          <span className="text-indigo-600"><FaBriefcase /></span> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Vehicle Data Platform", desc: "Real-time processing using Kafka & microservices" },
            { title: "Cloud-Based Solutions", desc: "Scalable systems on AWS and Azure" },
            { title: "High-Performance APIs", desc: "Optimized for large-scale traffic" },
          ].map((project) => (
            <div key={project.title} className="p-5 border-l-4 border-indigo-600 bg-white rounded shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-indigo-700 mb-1">{project.title}</h3>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="w-full max-w-2xl bg-indigo-50 p-6 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
          <span className="text-indigo-600"><FaPhone /></span> Contact
        </h2>
        <p className="text-gray-800 mb-2">
          Email:{" "}
          <a
            href="mailto:sonalrp210@gmail.com"
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition"
          >
            sonalrp210@gmail.com
          </a>
        </p>
        <p className="text-gray-800">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/sonalparsawar/"
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition"
          >
            linkedin.com/in/sonalparsawar
          </a>
        </p>
      </section>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

    </main>
  );
}