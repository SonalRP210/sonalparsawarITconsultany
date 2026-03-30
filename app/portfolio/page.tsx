"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8 space-y-16">

      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Payment Processing Platform
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A scalable and secure backend system for handling online payments, refunds, and transactions.
        </p>

        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80"
          alt="Payment system"
          className="w-full rounded-xl shadow-lg"
        />
      </section>

      {/* OVERVIEW */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          This project demonstrates a backend payment service capable of processing transactions,
          handling refunds, and integrating with third-party payment providers. The system is designed
          using microservices architecture to ensure scalability, reliability, and fault tolerance.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Secure payment processing (PCI-aware design)",
            "Refund and transaction management",
            "REST API for external integrations",
            "Event-driven architecture using Kafka",
            "Scalable microservices design",
            "Cloud deployment (AWS / Azure)",
          ].map((feature) => (
            <div key={feature} className="p-4 bg-white shadow rounded-lg border">
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <p className="text-gray-700 mb-4">
          The system follows a microservices architecture where services communicate via REST APIs and Kafka events.
        </p>

        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
          alt="Architecture"
          className="w-full rounded-lg shadow"
        />
      </section>

      {/* TECH STACK */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <p className="text-gray-700">
          Java, Spring Boot, Microservices, Kafka, Docker, Kubernetes, AWS / Azure, REST APIs
        </p>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto text-center bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">Sonal Parsawar</p>
        <p className="mb-2">Email: sonalrp210@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/sonalparsawar</p>
      </section>

    </main>
  );
}