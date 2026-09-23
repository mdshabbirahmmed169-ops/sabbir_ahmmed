import React from 'react';
import { 
  Zap, 
  Cpu, 
  Bot, 
  Binary, 
  Layers, 
  Code2, 
  FolderKanban, 
  Compass,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  // Mapping interests to icons and context
  const interestCards = [
    {
      title: "Electrical Engineering",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      description: "Circuit analysis, power systems fundamentals, AC/DC network theorems, and electrical principles."
    },
    {
      title: "Electronics",
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      description: "Semiconductor devices, operational amplifiers, diode rectifiers, and analog signal conditioning."
    },
    {
      title: "Electrical Machines",
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      description: "Transformers, induction motors, DC machines, electromagnetic energy conversion, and characteristic curves."
    },
    {
      title: "Digital Logic",
      icon: <Binary className="w-5 h-5 text-amber-500" />,
      description: "Combinational and sequential circuits, 74xx TTL logic, flip-flops, adders, counters, and registers."
    },
    {
      title: "Robotics",
      icon: <Bot className="w-5 h-5 text-amber-500" />,
      description: "Autonomous line followers, Bluetooth RC vehicles, kinematics, sensors, and actuator motor drivers."
    },
    {
      title: "Circuit Simulation",
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      description: "Virtual prototyping using Proteus VSM, PSpice/OrCAD, and Tinkercad for transient and AC analysis."
    },
    {
      title: "Programming",
      icon: <Code2 className="w-5 h-5 text-amber-500" />,
      description: "Embedded C/C++ on AVR/Arduino platforms, Python for data analysis, and numerical problem solving."
    },
    {
      title: "Engineering Projects",
      icon: <FolderKanban className="w-5 h-5 text-amber-500" />,
      description: "Hands-on hardware design, rapid breadboard prototyping, team collaboration, and technical documentation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Foundations &amp; Aspirations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A dedicated undergraduate student at Jamalpur Science and Technology University passionate about electrical circuits, microcontrollers, and modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography & Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Academic Background
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    B.Sc. in Electrical &amp; Electronic Engineering
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.aboutBio}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wide">
                  Academic Milestones
                </p>
                {personalInfo.aboutHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Quote / Motivation */}
            <div className="p-5 rounded-xl border border-dashed border-amber-500/30 dark:border-amber-500/30 bg-amber-500/5 text-slate-700 dark:text-slate-300 text-xs italic leading-relaxed">
              &ldquo;Engineering is not merely calculating formulas—it is using physical principles, creative problem solving, and modern simulation to build reliable systems that solve human challenges.&rdquo;
            </div>
          </div>

          {/* Core Areas of Interest */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Core Engineering Interests
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Key areas of academic exploration and practical project development
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
                8 Domains
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interestCards.map((item) => (
                <div
                  key={item.title}
                  className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-500/60 dark:hover:border-amber-500/50 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-105 group-hover:border-amber-500/30 transition-all">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
