import Image from "next/image";
const services = [
  {
    title: "Business Intelligence Dashboards",
    description:
      "Custom dashboards that turn complex business data into clear, actionable insights.",
  },
  {
    title: "Sales & Category Analytics",
    description:
      "Understand sales trends, category performance, product movement, and growth opportunities.",
  },
  {
    title: "Inventory Analytics",
    description:
      "Improve visibility into inventory levels, product performance, and purchasing decisions.",
  },
  {
    title: "Shrink & Spoilage Reporting",
    description:
      "Identify where losses are occurring and uncover opportunities to reduce waste.",
  },
  {
    title: "Executive KPI Reporting",
    description:
      "Give decision-makers a clear view of the metrics that matter most.",
  },
  {
    title: "Custom Analytics Solutions",
    description:
      "Reporting and analytics designed around your company’s specific goals and challenges.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
         <a href="#home" className="flex items-center">
  <Image
    src="/images/logo.png"
    alt="Puccio Analytics"
    width={170}
    height={90}
    priority
    className="h-14 w-auto"
  />
</a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-[#2A9D8F]">
              Services
            </a>
            <a href="#about" className="transition hover:text-[#2A9D8F]">
              About
            </a>
            <a href="#contact" className="transition hover:text-[#2A9D8F]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#0B2341] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#163a66]"
          >
            Book a Consultation
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-[#F7FAFC] px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2A9D8F]/10" />
        <div className="absolute -bottom-48 -left-40 h-96 w-96 rounded-full bg-[#0B2341]/10" />

       <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
  {/* Left Side */}
  <div className="text-center lg:text-left">
    <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
      Retail Analytics & Business Intelligence
    </p>

    <h1 className="text-5xl font-bold tracking-tight text-[#0B2341] sm:text-6xl lg:text-7xl">
      Turn Your Business Data Into Better Decisions
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl lg:mx-0 mx-auto">
      Puccio Analytics helps retailers uncover opportunities, reduce waste,
      and improve performance through custom dashboards and actionable
      business intelligence.
    </p>

    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
      <a
        href="#contact"
        className="w-full rounded-full bg-[#2A9D8F] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#23877b] sm:w-auto"
      >
        Schedule a Free Consultation
      </a>

      <a
        href="#services"
        className="w-full rounded-full border border-[#0B2341] px-8 py-4 text-center font-semibold text-[#0B2341] transition hover:bg-[#0B2341] hover:text-white sm:w-auto"
      >
        Explore Our Services
      </a>
    </div>
  </div>

  {/* Right Side */}
  <div className="relative">
    <Image
      src="/images/portfolio/PA 5.jpeg"
      alt="Puccio Analytics Dashboard"
      width={1200}
      height={800}
      priority
      className="rounded-3xl border border-[#2A9D8F]/30 shadow-2xl transition duration-300 hover:scale-[1.02]"
    />
  </div>
</div>
      </section>
      <section className="border-y border-slate-200 bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
              Clear Answers From Your Data
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B2341] sm:text-5xl">
              See exactly what is happening in your business
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Puccio Analytics turns the reports and spreadsheets you already
              have into clear dashboards that help you understand performance,
              identify problems, and make better decisions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Which products make the most money?",
              "Which products are not selling?",
              "What are my strongest sales days?",
              "Which brands and categories perform best?",
              "Where am I losing money?",
              "What should I order more or less of?",
            ].map((question) => (
              <div
                key={question}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#F7FAFC] p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F] font-bold text-white">
                  ✓
                </div>

                <p className="font-semibold leading-7 text-[#0B2341]">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B2341] sm:text-5xl">
              Analytics built around your business
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Clear reporting, practical insights, and custom solutions that
              help you understand what is happening and what to do next.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#2A9D8F] hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2A9D8F]/10 font-bold text-[#2A9D8F]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-[#0B2341]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> 
      <section className="bg-slate-50 px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
        Industries We Serve
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#0B2341]">
        Analytics for growing businesses
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        Every business generates data. We transform it into dashboards that help
        owners make smarter decisions.
      </p>
    </div>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        "🛒 Grocery Stores",
        "🏪 Convenience Stores",
        "💨 Smoke & Vape Shops",
        "🍽️ Restaurants & Cafés",
        "📦 Retail Businesses",
        "📊 Companies needing custom reporting",
      ].map((industry) => (
        <div
          key={industry}
          className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-xl font-semibold text-[#0B2341]">
            {industry}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-white px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
        How It Works
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#0B2341]">
        Turning your data into better decisions is simple
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        You already have valuable business data. I simply organize it into
        dashboards that are easy to understand and use.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          number: "01",
          title: "Tell Me About Your Business",
          description:
            "We'll discuss your business, your goals, and the questions you want your data to answer.",
        },
        {
          number: "02",
          title: "Share Your Data",
          description:
            "Send reports from your POS system, spreadsheets, or inventory software. No complicated setup required.",
        },
        {
          number: "03",
          title: "Receive Your Dashboard",
          description:
            "I'll organize your data into a clean, interactive dashboard built specifically for your business.",
        },
        {
          number: "04",
          title: "Make Better Decisions",
          description:
            "Use clear insights to improve sales, inventory, purchasing, and overall business performance.",
        },
      ].map((step) => (
        <div
          key={step.number}
          className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8"
        >
          <div className="text-4xl font-bold text-[#2A9D8F]">
            {step.number}
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0B2341]">
            {step.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      <section id="about" className="bg-[#0B2341] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#59c3b6]">
              About Puccio Analytics
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Operational experience meets modern analytics
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
           <p>
  Puccio Analytics was founded by Remo Puccio to help businesses transform
  everyday operational data into clear, actionable insights.
</p>

<p>
  With years of leadership experience in high-volume retail operations and
  extensive experience building Power BI dashboards, Remo combines real-world
  business knowledge with modern analytics to solve practical business
  problems.
</p>

<p>
  Whether it's improving inventory decisions, tracking sales performance,
  reducing shrink, or building executive KPI dashboards, every solution is
  designed to help business owners make faster, smarter decisions with
  confidence.
</p>
<div className="mt-10 grid grid-cols-2 gap-6">
  <div>
    <p className="text-3xl font-bold text-white">5+</p>
    <p className="text-slate-300">Years of Retail Leadership</p>
  </div>

  <div>
    <p className="text-3xl font-bold text-white">Power BI</p>
    <p className="text-slate-300">Business Intelligence Dashboards</p>
  </div>

  <div>
    <p className="text-3xl font-bold text-white">Custom</p>
    <p className="text-slate-300">Analytics Solutions</p>
  </div>

  <div>
    <p className="text-3xl font-bold text-white">Data</p>
    <p className="text-slate-300">Driven Decision Making</p>
  </div>
</div>
          </div>
        </div>
      </section>
{/* Portfolio */}
<section id="portfolio" className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2A9D8F]">
        Portfolio
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#0B2341]">
        Business Intelligence Dashboards
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        A selection of Power BI dashboards demonstrating executive reporting,
        retail analytics, forecasting, inventory optimization, and operational
        decision-making.
      </p>
       <div className="mt-16 grid gap-8 md:grid-cols-2">
      {[
        {
          image: "PA 1.jpeg",
          title: "Executive Sales Dashboard",
          description:
            "Monitor company-wide sales, KPIs, and performance in one easy-to-read dashboard.",
        },
        {
          image: "PA 2.jpeg",
          title: "Retail Sales Analytics",
          description:
            "Track sales trends, category performance, and identify opportunities for growth.",
        },
        {
          image: "PA 3.jpeg",
          title: "Inventory Performance",
          description:
            "Understand inventory movement, product performance, and purchasing opportunities.",
        },
        {
          image: "PA 4.jpeg",
          title: "Category Performance",
          description:
            "Compare categories to quickly identify your strongest and weakest performers.",
        },
        {
          image: "PA 5.jpeg",
          title: "Operational Dashboard",
          description:
            "Monitor business performance through interactive reports designed for daily decision-making.",
        },
        {
          image: "PA 6.jpeg",
          title: "Business Intelligence Reporting",
          description:
            "Turn complex business data into clear, actionable insights for leadership teams.",
        },
        {
          image: "PA 7.jpeg",
          title: "Custom Analytics Solution",
          description:
            "Every dashboard is customized to the specific goals and needs of your business.",
        },
      ].map((dashboard, index) => (
        <div
          key={dashboard.image}
          className="overflow-hidden rounded-2xl border bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <Image
            src={`/images/portfolio/${dashboard.image}`}
            alt={`${dashboard.title} - Dashboard ${index + 1}`}
            width={1200}
            height={700}
            className="w-full"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold text-[#0B2341]">
              {dashboard.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {dashboard.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  
    </div>
  </div>
</section>
      <section id="contact" className="px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-5xl rounded-3xl bg-[#F1F7F6] px-6 py-16 sm:px-12">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
        Let&apos;s Work Together
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B2341] sm:text-5xl">
        Ready to make better use of your data?
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Tell me about your business, your current reporting process, and the
        decisions you want your data to help you make.
      </p>
    </div>

    <form
      action="https://formsubmit.co/remo@puccioanalytics.com"
      method="POST"
      className="mx-auto mt-12 grid max-w-3xl gap-6"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Puccio Analytics Website Inquiry"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-[#0B2341]"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-semibold text-[#0B2341]"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="business"
          className="mb-2 block font-semibold text-[#0B2341]"
        >
          Business Name
        </label>

        <input
          id="business"
          name="business"
          type="text"
          placeholder="Your business name"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-semibold text-[#0B2341]"
        >
          How can I help?
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your business, your data, and what you would like to improve."
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-[#2A9D8F] px-8 py-4 font-semibold text-white transition hover:bg-[#23877b]"
      >
        Request a Free Consultation
      </button>

      <p className="text-center text-sm text-slate-500">
        Or email me directly at remo@puccioanalytics.com
      </p>
    </form>
  </div>
</section>

      <footer className="border-t border-slate-200 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Puccio Analytics. All rights reserved.</p>
          <p>Data • Insights • Growth</p>
        </div>
      </footer>
    </main>
  );
}