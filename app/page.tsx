"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Download, LayoutTemplate, ChevronDown, Zap, ShieldCheck, Gem, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Données des avis pour le défilement
const testimonials = [
  { name: "Thomas L.", text: "Rentabilisé en 24h. Incroyable.", stars: 5 },
  { name: "Sarah B.", text: "Le système Notion est une pépite.", stars: 5 },
  { name: "Marc D.", text: "Enfin une méthode sans blabla.", stars: 5 },
  { name: "Kevin J.", text: "J'ai fait ma 1ère vente hier !", stars: 5 },
  { name: "Julie P.", text: "Support ultra réactif, merci.", stars: 4 },
  { name: "Alex M.", text: "Le PDF se lit tout seul.", stars: 5 },
];

export default function LandingPage() {
  // Pour fermer la barre mobile si besoin
  const [showMobileBar, setShowMobileBar] = useState(true);

  return (
    <div className="min-h-screen text-white selection:bg-emerald-500/30 font-sans overflow-x-hidden pb-20 md:pb-0">
      
      {/* --- LUMIÈRES D'AMBIANCE (Vert & Or) --- */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none opacity-40" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none opacity-30" />

      {/* --- NAVBAR STICKY --- */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-[#020a05]/80 backdrop-blur-xl transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-lg tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
               <Gem size={16} className="text-white" />
            </div>
            MonEbook.
          </div>
          <a href="#pricing" className="hidden md:flex bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-50 transition border border-transparent hover:border-emerald-200">
            Acheter - 19€
          </a>
        </div>
      </nav>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-24 pb-12 flex flex-col items-center text-center px-6">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-xs font-medium text-emerald-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Méthode v2.0 Disponible
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]"
          >
            Génère tes premiers revenus.
            <br/>
            <span className="text-gradient-gold">Sans budget initial.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
          >
            Le plan d'action précis pour lancer un business rentable ce week-end.
            <span className="text-white font-medium"> Zéro théorie. 100% Cashflow.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <a href="#pricing" className="group bg-white text-black h-14 px-8 rounded-full font-bold text-lg hover:bg-emerald-50 transition flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] duration-300">
              Obtenir le guide
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-emerald-700" />
            </a>
            <a href="#sommaire" className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 transition font-medium backdrop-blur-md flex items-center justify-center">
              Voir le sommaire
            </a>
          </motion.div>
        </section>

        {/* --- NOUVEAU : MARQUEE (Défilement des avis) --- */}
        <section className="py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden mb-12">
            <div className="flex w-full">
                <motion.div 
                    initial={{ x: 0 }} 
                    animate={{ x: "-50%" }} 
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-8 px-4 flex-shrink-0"
                >
                    {/* On double la liste pour l'effet infini */}
                    {[...testimonials, ...testimonials].map((item, i) => (
                         <div key={i} className="flex-shrink-0 w-64 p-4 rounded-xl bg-[#0a120c] border border-white/10">
                            <div className="flex gap-1 mb-2">
                                {[...Array(item.stars)].map((_, j) => <Star key={j} size={12} className="fill-amber-400 text-amber-400"/>)}
                            </div>
                            <p className="text-sm text-neutral-300 mb-2 font-medium">"{item.text}"</p>
                            <p className="text-xs text-neutral-500 font-bold uppercase">{item.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* --- GRID AVEC SPOTLIGHT (Effet Lampe Torche) --- */}
        <section id="sommaire" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">L'arsenal complet.</h2>
             <p className="text-neutral-400">Ne réinvente pas la roue. Copie ce qui marche.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Carte Large */}
            <div className="md:col-span-2">
              <SpotlightCard>
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div className="w-14 h-14 mb-6 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                     <LayoutTemplate size={28} className="text-emerald-400" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold mb-4 text-white">Système Notion "Cash Machine"</h3>
                     <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                       Mon espace de travail personnel dupliquable en 1 clic : CRM clients, Suivi des ventes, Calendrier Marketing. Tout est prêt.
                     </p>
                   </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Carte Verticale */}
            <SpotlightCard>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <Download className="text-amber-400 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-2 text-white">Le PDF Stratégique</h3>
                <p className="text-neutral-400">50 pages d'actions concrètes. Lis-le ce soir, encaisse demain.</p>
              </div>
            </SpotlightCard>

            {/* Carte 3 */}
            <SpotlightCard>
               <div className="relative z-10 h-full flex flex-col justify-center">
                <Zap className="text-emerald-400 mb-6" size={40} />
                <h3 className="text-xl font-bold mb-2 text-white">Vitesse d'exécution</h3>
                <p className="text-neutral-400">Conçu pour les débutants pressés. Pas de code, pas de technique complexe.</p>
              </div>
            </SpotlightCard>

            {/* Carte 4 */}
            <div className="md:col-span-2">
                <SpotlightCard>
                  <div className="relative z-10 flex items-center justify-between h-full">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Garantie "Résultat ou Remboursé"</h3>
                      <p className="text-neutral-400">Tu ne prends aucun risque. Teste la méthode pendant 30 jours.</p>
                    </div>
                    <ShieldCheck size={48} className="text-emerald-500/50" />
                  </div>
                </SpotlightCard>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          <div className="space-y-4">
            <FaqItem question="Faut-il des compétences techniques ?" answer="Non. Si tu sais envoyer un email, tu peux appliquer la méthode." />
            <FaqItem question="Combien de temps pour voir les résultats ?" answer="La plupart des élèves génèrent leur première vente sous 7 à 14 jours en suivant le plan." />
            <FaqItem question="Est-ce que je dois montrer mon visage ?" answer="Non. Je t'apprends aussi les stratégies 'Faceless' (sans visage) pour vendre en anonyme." />
          </div>
        </section>

        {/* --- PRICING FINAL --- */}
        <section id="pricing" className="py-24 px-6 border-t border-white/5 text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-emerald-600/20 blur-[120px] -z-10"></div>
            
            <div className="inline-block glass-panel p-8 md:p-12 rounded-[32px] max-w-lg w-full mx-auto border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">OFFRE FLASH</div>
                
                <div className="flex items-baseline justify-center gap-3 mb-8">
                    <span className="text-7xl font-extrabold text-white tracking-tighter">19€</span>
                    <span className="text-xl text-neutral-500 line-through">99€</span>
                </div>
                
                <ul className="space-y-4 text-left mb-10 pl-4">
                    <CheckItem text="Le Guide Stratégique (PDF)" />
                    <CheckItem text="Le Système Notion Complet" />
                    <CheckItem text="Accès Communauté Privée" />
                    <CheckItem text="Bonus : Liste des niches rentables" />
                </ul>

                <button className="group w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition shadow-lg transform hover:-translate-y-1 flex justify-center items-center gap-2">
                    Accéder immédiatement <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                <p className="text-xs text-neutral-500 mt-4">Paiement unique & sécurisé.</p>
            </div>
        </section>

        <footer className="py-12 text-center text-sm text-neutral-600 border-t border-white/5">
            &copy; 2025 MonEbook Inc.
        </footer>
        
        {/* --- NOUVEAU : STICKY MOBILE BAR (Apparaît seulement sur mobile) --- */}
        {showMobileBar && (
            <motion.div 
                initial={{ y: 100 }} animate={{ y: 0 }}
                className="fixed bottom-0 left-0 w-full p-4 bg-[#020a05]/90 backdrop-blur-lg border-t border-white/10 md:hidden z-50 flex items-center justify-between"
            >
                <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 line-through">99€</span>
                    <span className="text-xl font-bold text-emerald-400">19€</span>
                </div>
                <div className="flex items-center gap-3">
                    <a href="#pricing" className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-emerald-50 transition shadow-lg shadow-emerald-500/20">
                        Obtenir maintenant
                    </a>
                    <button onClick={() => setShowMobileBar(false)} className="p-2 text-neutral-500 hover:text-white">
                        <X size={20} />
                    </button>
                </div>
            </motion.div>
        )}

      </div>
    </div>
  );
}

// --- LE COMPOSANT MAGIQUE "SPOTLIGHT" ---
function SpotlightCard({ children }: { children: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative h-full p-8 rounded-3xl bg-[#0a120c]/80 border border-white/10 overflow-hidden group transition-colors hover:border-emerald-500/30"
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

// Composants Utilitaires
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-panel rounded-xl cursor-pointer hover:border-emerald-500/30 transition-colors" onClick={() => setIsOpen(!isOpen)}>
      <div className="p-5 flex justify-between items-center">
        <h3 className="font-bold text-neutral-200">{question}</h3>
        <ChevronDown className={`text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && <div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">{answer}</div>}
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
    return (
        <li className="flex gap-3 items-center text-neutral-300">
            <div className="min-w-[20px] h-[20px] rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <Check size={12} className="text-emerald-400" />
            </div>
            {text}
        </li>
    )
}