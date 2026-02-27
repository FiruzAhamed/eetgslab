import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import {
  events,
  focusAreas,
  highlights,
  members,
  projects,
  publications,
} from "./data/labData";

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="space-y-24">
        <section id="home" className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/80 py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
                Energy Equity And Transition For The Global South
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                EET-GS Lab
              </h1>
              <p className="text-lg text-slate-200">
                The EET-GS Lab is a global research initiative dedicated to advancing equitable, sustainable, and
                scientifically rigorous pathways for the energy transition across the Global South. Our mission is to
                generate knowledge, tools, and evidence that support emerging economies as they move toward clean,
                affordable, and resilient power systems—without compromising developmental priorities.
              </p>
              <p className="text-slate-300">
                We examine how energy transitions shape social outcomes, identify who benefits and who may be left
                behind, and develop policies that safeguard vulnerable communities. Through interdisciplinary work, we
                explore equitable policies, system modeling, and low-carbon technologies that can shape a more just and
                sustainable energy future.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-emerald-200/50 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200"
                >
                  Partner With Us
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-emerald-500/10">
              <h2 className="text-xl font-semibold text-white">Research Focus Areas</h2>
              <div className="mt-6 space-y-4">
                {focusAreas.map((area) => (
                  <div key={area.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <h3 className="text-base font-semibold text-emerald-100">{area.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 grid w-full max-w-6xl gap-6 px-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <p className="text-3xl font-semibold text-emerald-200">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Projects</p>
              <h2 className="text-3xl font-semibold">Flagship Research Programs</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              We co-design research with policy partners, utilities, and community leaders to deliver actionable
              insights. Below are a few of the ongoing initiatives led by the lab.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="rounded-3xl border border-white/10 bg-slate-900/50 p-6">
                <p className="text-sm text-emerald-200">{project.status}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm text-slate-300">{project.summary}</p>
                <button className="mt-6 text-sm font-semibold text-emerald-200 transition hover:text-emerald-100">
                  View project details →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Publications</p>
                <h2 className="text-3xl font-semibold">Recent Outputs & Reports</h2>
              </div>
              <p className="max-w-xl text-slate-300">
                Our publications translate research into actionable pathways for policymakers and practitioners.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {publications.map((publication) => (
                <div key={publication.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <h3 className="text-base font-semibold text-white">{publication.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{publication.venue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="members" className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Lab Members</p>
              <h2 className="text-3xl font-semibold">People Behind the Research</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Our team brings together energy systems experts, policy analysts, and data scientists from across the
              Global South.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <div key={member.name} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-32 w-32 rounded-full border-4 border-emerald-300/40 object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Contact & Collaboration</p>
              <h2 className="mt-3 text-3xl font-semibold">Let’s build equitable transitions together.</h2>
              <p className="mt-4 text-slate-300">
                We welcome collaboration with governments, utilities, NGOs, and academic partners. Reach out to co-create
                research, host workshops, or share data for equitable energy pathways.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p>
                  <strong className="text-white">Email:</strong> contact@eetgslab.org
                </p>
                <p>
                  <strong className="text-white">Location:</strong> Global South Research Network (hybrid)
                </p>
                <p>
                  <strong className="text-white">Collaboration:</strong> Open to visiting scholars and policy partners.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                Join our next collaboration call by subscribing to our monthly newsletter.
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
                <h3 className="text-xl font-semibold text-white">Upcoming Events</h3>
                <div className="mt-4 space-y-4">
                  {events.map((event) => (
                    <div key={event.title} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <p className="text-sm text-emerald-200">{event.date}</p>
                      <p className="mt-2 text-base font-semibold text-white">{event.title}</p>
                      <p className="mt-2 text-sm text-slate-300">{event.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
                <h3 className="text-xl font-semibold text-white">Lab Updates</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Subscribe for curated research briefs, new publication alerts, and invitations to our regional workshops.
                </p>
                <form className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
