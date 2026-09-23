import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Cpu, 
  Bot, 
  Layers, 
  Binary, 
  Activity, 
  Compass, 
  Eye,
  ArrowRight
} from 'lucide-react';
import { projectsList, projectCategories, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsList.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  // Render a clean SVG engineering schematic / illustration for project header in golden accents
  const renderProjectVisual = (proj: ProjectItem) => {
    if (proj.imageUrl) {
      return (
        <div className="w-full h-48 bg-slate-900 rounded-t-xl overflow-hidden relative border-b border-slate-800">
          <img
            src={proj.imageUrl}
            alt={proj.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-xs">
            {proj.category.toUpperCase()}
          </div>
        </div>
      );
    }

    switch (proj.id) {
      case 'robotic-exoskeleton-simulation':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span>ACTUATOR &amp; PWM SIMULATION</span>
              <span className="text-amber-400 font-bold">CONCEPT</span>
            </div>
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="px-2.5 py-1.5 rounded bg-slate-800 border border-slate-700 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">SENSOR</span>
                <span className="text-xs font-mono font-bold text-slate-200">Load/Flex</span>
              </div>
              <span className="text-amber-400 font-mono font-bold">→</span>
              <div className="px-2.5 py-1.5 rounded bg-amber-950/60 border border-amber-600/60 text-center">
                <span className="text-[10px] text-amber-300 block font-mono">MCU</span>
                <span className="text-xs font-mono font-bold text-amber-200">ATmega/PWM</span>
              </div>
              <span className="text-amber-400 font-mono font-bold">→</span>
              <div className="px-2.5 py-1.5 rounded bg-slate-800 border border-slate-700 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">ACTUATOR</span>
                <span className="text-xs font-mono font-bold text-slate-200">DC Motor</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>H-Bridge L298N Driver</span>
              <span className="text-amber-400">Torque Sync</span>
            </div>
          </div>
        );

      case 'line-following-robot-arduino':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span>ROBOTICS HARDWARE</span>
              <span className="text-amber-400 font-bold">ARDUINO UNO</span>
            </div>
            <div className="flex items-center justify-center py-3">
              <div className="relative w-32 h-20 rounded-lg border border-dashed border-amber-500/50 bg-slate-800/80 flex items-center justify-center text-center">
                <Bot className="w-8 h-8 text-amber-400 mb-1" />
                <div className="absolute -bottom-2 flex gap-4">
                  <span className="w-3 h-1.5 bg-amber-400 rounded-xs" title="Left IR" />
                  <span className="w-3 h-1.5 bg-amber-400 rounded-xs" title="Right IR" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>IR TCRT5000 Array</span>
              <span className="text-amber-400">Diff. PWM Drive</span>
            </div>
          </div>
        );

      case 'bluetooth-control-car-arduino':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span>WIRELESS TELEMETRY</span>
              <span className="text-amber-400 font-bold">HC-05 BT</span>
            </div>
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="px-2.5 py-1.5 rounded bg-slate-800 border border-slate-700 text-center font-mono text-xs text-slate-300">
                Mobile App
              </div>
              <span className="text-amber-400 text-xs font-mono animate-pulse">~~~ UART ~~~&gt;</span>
              <div className="px-2.5 py-1.5 rounded bg-amber-950/60 border border-amber-600/60 text-center font-mono text-xs text-amber-200">
                Arduino Uno
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Baud: 9600 bps</span>
              <span>4-Wheel Chassis</span>
            </div>
          </div>
        );

      case '4-bit-memory-74ls74':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span>SEQUENTIAL DIGITAL LOGIC</span>
              <span className="text-amber-400 font-bold">74LS74 TTL</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-2">
              {['D0', 'D1', 'D2', 'D3'].map((bit, idx) => (
                <div key={bit} className="p-1.5 rounded bg-slate-800 border border-slate-700 text-center font-mono w-12">
                  <span className="text-[9px] text-amber-400 block">{bit}</span>
                  <span className="text-xs text-white font-bold">Q{idx}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Edge Triggered CLK</span>
              <span>PIPO Register</span>
            </div>
          </div>
        );

      case 'automatic-water-level-controller':
        return (
          <div className="w-full h-44 bg-slate-900 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span>AUTOMATION &amp; SENSING</span>
              <span className="text-amber-400 font-bold">RELAY AC</span>
            </div>
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="h-16 w-14 border border-amber-500/50 rounded bg-amber-950/40 p-1 flex flex-col justify-end">
                <div className="h-10 bg-amber-500/30 rounded-xs border-t border-amber-400 text-[8px] text-center text-amber-200">
                  WATER
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">→ Comparator →</span>
              <div className="px-2 py-1 bg-amber-950 border border-amber-600 rounded text-[10px] font-mono text-amber-300 font-bold">
                PUMP RELAY
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Conductive Probes</span>
              <span>Dry-Run Safe</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-slate-900 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span>{proj.category.toUpperCase()}</span>
              <span className="text-amber-400 font-bold font-mono">LAB / SIM</span>
            </div>
            <div className="flex items-center justify-center py-4">
              <Cpu className="w-10 h-10 text-amber-400/80 stroke-1" />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Schematic &amp; Analysis</span>
              <span>Proteus / PSpice</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Engineering Portfolio &amp; Hardware
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects &amp; Prototypes
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Practical hardware implementations, discrete IC digital systems, microcontroller robotics, and simulation research.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-3xl mx-auto mb-12 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Schematic Diagram Header */}
                {renderProjectVisual(project)}

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  
                  {/* Category & Status metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.status}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Used */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons: View Project, Demo Video & GitHub */}
              <div className="p-5 pt-0 mt-2 flex items-center justify-between gap-2 border-t border-slate-200/50 dark:border-slate-800/50">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 py-2 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${project.title} video demo`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 px-2.5 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Watch Demo</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for viewing detailed project specs */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
