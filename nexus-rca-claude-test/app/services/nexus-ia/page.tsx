import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { NexusAIChat } from "@/components/NexusAIChat";
import { Bot, Zap, Clock, Shield } from "lucide-react";

export const metadata = {
  title: "Nexus IA 🤖 | Assistant virtuel Nexus RCA",
  description:
    "Discutez avec Nexus IA 🤖, votre assistant virtuel 24/7 pour toutes les démarches visa, études, financement, voyages.",
};

const FEATURES = [
  { icon: Clock, title: "Disponible 24/7", desc: "Jour, nuit, week-end — sans interruption." },
  { icon: Zap, title: "Réponses instantanées", desc: "Pas d'attente. Votre question, une réponse." },
  { icon: Bot, title: "Spécialiste Nexus", desc: "Formé sur tous nos services et procédures." },
  { icon: Shield, title: "Relais humain", desc: "Un conseiller prend le relais si besoin." },
];

export default function NexusIAPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-nexus-blue-950 pt-40 pb-24 text-white">
          <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
          <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-nexus-orange-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <Bot className="h-4 w-4 text-nexus-orange-400" />
              <span className="font-medium">Assistant virtuel Nexus</span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
              Rencontrez{" "}
              <span className="text-gradient-orange">Nexus IA 🤖</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Votre assistant virtuel intelligent, disponible à toute heure pour répondre à vos
              questions sur le visa, les études au Canada, le financement business et plus encore.
            </p>
          </div>
        </section>

        <section className="relative -mt-16 pb-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <NexusAIChat />

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-nexus-blue-800 to-nexus-orange-500 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-nexus-blue-950">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
