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

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
            Retail Analytics & Business Intelligence
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[#0B2341] sm:text-6xl lg:text-7xl">
            Turn Your Business Data Into Better Decisions
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Puccio Analytics helps retailers uncover opportunities, reduce
            waste, and improve performance through custom dashboards and
            actionable business intelligence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              Puccio Analytics was founded by Remo Puccio to help retailers
              transform operational data into meaningful business insights.
            </p>

            <p>
              With firsthand retail leadership experience and a passion for
              analytics, Remo understands that businesses do not need more
              confusing reports. They need clear information that helps them
              make smarter decisions.
            </p>

            <p>
              Every solution is designed to be practical, understandable, and
              focused on measurable business improvement.
            </p>
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
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2">
      {[
        "PA 1.jpeg",
        "PA 2.jpeg",
        "PA 3.jpeg",
        "PA 4.jpeg",
        "PA 5.jpeg",
        "PA 6.jpeg",
        "PA 7.jpeg",
      ].map((image, index) => (
        <div
          key={image}
          className="overflow-hidden rounded-2xl border bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <Image
            src={`/images/portfolio/${image}`}
            alt={`Dashboard ${index + 1}`}
            width={1200}
            height={700}
            className="w-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>
      <section id="contact" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#F1F7F6] px-6 py-16 text-center sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2A9D8F]">
            Let&apos;s Work Together
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B2341] sm:text-5xl">
            Ready to make better use of your data?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us about your business, your current reporting process, and
            the decisions you want your data to help you make.
          </p>

          <a
            href="mailto:remo@puccioanalytics.com?subject=Puccio%20Analytics%20Consultation"
            className="mt-10 inline-block rounded-full bg-[#2A9D8F] px-8 py-4 font-semibold text-white transition hover:bg-[#23877b]"
          >
            remo@puccioanalytics.com
          </a>
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