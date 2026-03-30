"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-indigo-700 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sonal Parsawar IT Consultancy
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Helping businesses build scalable backend systems, cloud solutions,
          and real-time data platforms.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg leading-relaxed">
          I am a Senior Software Engineer with over 12.5 years of experience
          specializing in backend development, distributed systems, and cloud
          platforms such as AWS and Azure. I have worked on large-scale
          enterprise systems handling real-time data and high traffic.
        </p>

        <p className="mt-4 font-semibold text-indigo-600">
          Based in Sweden 🇸🇪 | Available for consulting engagements
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Services</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p>Java, Spring Boot, Microservices architecture</p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
            <p>AWS, Azure, CI/CD pipelines, containerization</p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Real-Time Systems</h3>
            <p>Kafka, event-driven architecture, streaming platforms</p>
          </div>

          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">System Design</h3>
            <p>Scalable and high-performance distributed systems</p>
          </div>
        </div>
      </section>

      {/* PROJECT / CASE STUDY */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Example Project
        </h2>

        <div className="bg-white border rounded p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">
            Vehicle Data Processing Platform
          </h3>
          <p className="mb-3">
            Designed and developed a real-time data processing platform for
            vehicle telemetry using Kafka and microservices.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Processed millions of events daily</li>
            <li>Built scalable microservices using Spring Boot</li>
            <li>Deployed on AWS cloud infrastructure</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-indigo-700 text-white text-center py-16 px-6"
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:sonalrp210@gmail.com"
            className="underline font-semibold"
          >
            sonalrp210@gmail.com
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/sonalparsawar/"
            className="underline font-semibold"
          >
            linkedin.com/in/sonalparsawar
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Sonal Parsawar IT Consultancy
      </footer>

    </main>
  );
}