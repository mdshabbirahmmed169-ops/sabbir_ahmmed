/**
 * Portfolio Data for Md. Sabbir Ahmmed
 * Electrical and Electronic Engineering (EEE) Student
 * Jamalpur Science and Technology University (JSTU)
 * 
 * Edit this file to update any information, add new projects, certificates, or experiences.
 */

export interface PersonalInfo {
  name: string;
  preferredName: string;
  title: string;
  institution: string;
  department: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  facebook: string;
  heroTagline: string;
  heroIntro: string;
  aboutBio: string;
  aboutHighlights: string[];
  cvPath: string;
  interests: string[];
  profilePicture?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: 'In Progress' | 'Completed';
  result?: string;
  description: string;
  coursesOrHighlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'core-eee' | 'simulation-cad' | 'programming-tools' | 'soft-skills';
  level: number; // 0 - 100
  experienceLevel: 'Familiar' | 'Intermediate' | 'Proficient' | 'Advanced';
  iconName?: string;
  note?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Robotics' | 'Embedded / Arduino' | 'Digital Logic' | 'Simulation & Control' | 'Electrical Machines';
  shortDescription: string;
  detailedOverview: string;
  technologies: string[];
  features: string[];
  systemArchitecture?: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
  status: 'Completed' | 'Simulation / Concept' | 'Work in Progress';
}

export interface ExperienceItem {
  id: string;
  type: 'Teaching & Tutoring' | 'Academic Projects' | 'Team Projects' | 'Volunteer & Extracurricular';
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  bulletPoints: string[];
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academic' | 'Competition' | 'Project' | 'Award' | 'Scholarship';
  year: string;
  issuer: string;
  description: string;
  badgeText: string;
  isPlaceholder?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuingOrg: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skillsCovered: string[];
  description: string;
  isPlaceholder?: boolean;
}

export const personalInfo: PersonalInfo = {
  name: "Md. Sabbir Ahmmed",
  preferredName: "Sabbir",
  title: "Electrical & Electronic Engineering Student",
  institution: "Jamalpur Science and Technology University (JSTU)",
  department: "Department of Electrical and Electronic Engineering",
  location: "Jamalpur, Bangladesh",
  email: "mdshabbirahmmed169@gmail.com",
  phone: "01730481378",
  linkedin: "https://www.linkedin.com/in/md-shabbir-ahmmed-378640432/",
  github: "https://github.com/mdshabbirahmmed169-ops",
  facebook: "https://www.facebook.com/sabbir.ahmmed.357605",
  profilePicture: "./images/profile.jpg",
  heroTagline: "Aspiring Electrical & Electronics Engineer · Technology Enthusiast",
  heroIntro: "EEE student passionate about electrical engineering, electronics, programming, simulation, and technology.",
  aboutBio: "I am an undergraduate engineering student pursuing a B.Sc. (Honours) in Electrical and Electronic Engineering at Jamalpur Science and Technology University (JSTU), Bangladesh. With a strong foundation rooted in science and academic excellence, my focus is bridging theoretical physics and mathematical analysis with real-world circuit design, embedded systems, microcontrollers, and computer simulation.",
  aboutHighlights: [
    "Undergraduate student at Jamalpur Science and Technology University (JSTU).",
    "Consistently achieved GPA 5.00 / 5.00 in both SSC (2020) and HSC (2022) Science examinations.",
    "Passionate about hands-on prototyping with Arduino, discrete digital logic ICs, and circuit simulation suites.",
    "Driven by sustainable power solutions, smart robotics automation, and simulation-based engineering research."
  ],
  cvPath: "./cv/my-cv.pdf",
  interests: [
    "Electrical Engineering",
    "Electronics",
    "Electrical Machines",
    "Digital Logic",
    "Robotics",
    "Circuit Simulation",
    "Programming",
    "Engineering Projects"
  ]
};

export const educationList: EducationItem[] = [
  {
    degree: "B.Sc. (Honours) in Electrical & Electronic Engineering",
    field: "Electrical and Electronic Engineering",
    institution: "Jamalpur Science and Technology University",
    location: "Jamalpur, Bangladesh",
    period: "October 28, 2024 – Present (Running)",
    status: "In Progress",
    description: "Enrolled in the comprehensive 4-year undergraduate EEE curriculum covering Circuit Theory, Semiconductor Electronics, Electrical Machinery, Digital Logic Design, and Computer Programming.",
    coursesOrHighlights: [
      "Electrical Circuit Analysis (DC & AC)",
      "Basic & Analog Electronics",
      "Digital Logic Design & Microprocessors",
      "Electrical Machines (Transformers, Motors, Alternators)",
      "Engineering Mathematics & Physics",
      "Computer Programming (C, Python) & Numerical Methods"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Sherpur Govt. College",
    location: "Bogura, Bangladesh",
    period: "Passing Year: 2022",
    status: "Completed",
    result: "GPA 5.00 / 5.00",
    description: "Completed higher secondary education in the Science stream with outstanding distinction, focusing on Physics, Chemistry, Higher Mathematics, and ICT.",
    coursesOrHighlights: []
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Nogor Shah Mozammel Haque High School",
    location: "Bangladesh",
    period: "Passing Year: 2020",
    status: "Completed",
    result: "GPA 5.00 / 5.00",
    description: "Completed secondary school certification with the highest academic grade (Golden GPA 5.00), building fundamental principles in physical sciences and mathematics.",
    coursesOrHighlights: []
  }
];

export const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'core-eee', label: 'Circuit & Electronics' },
  { id: 'simulation-cad', label: 'Simulation & CAD' },
  { id: 'programming-tools', label: 'Programming & Tools' },
  { id: 'soft-skills', label: 'Soft Skills' }
] as const;

export const skillsList: SkillItem[] = [
  // Core EEE Skills
  { name: "Electrical Circuit Analysis", category: "core-eee", level: 85, experienceLevel: "Proficient", note: "KVL/KCL, Thevenin/Norton, AC/DC steady state & transient response" },
  { name: "Electronics", category: "core-eee", level: 80, experienceLevel: "Proficient", note: "Diodes, BJT, MOSFET, Op-Amps, Rectification & Filters" },
  { name: "Digital Logic Design", category: "core-eee", level: 85, experienceLevel: "Proficient", note: "Logic Gates, Flip-Flops, Registers, Adders, Karnaugh Maps" },
  { name: "Electrical Machines", category: "core-eee", level: 75, experienceLevel: "Intermediate", note: "Transformers, DC Motors, Induction Motors, Generators" },
  
  // Simulation & CAD
  { name: "Circuit Simulation", category: "simulation-cad", level: 85, experienceLevel: "Proficient", note: "Transient analysis, frequency response, schematic capture" },
  { name: "Proteus", category: "simulation-cad", level: 80, experienceLevel: "Proficient", note: "Interactive circuit simulation, microcontroller emulation, virtual scopes" },
  { name: "PSpice / OrCAD", category: "simulation-cad", level: 75, experienceLevel: "Intermediate", note: "Analog/digital co-simulation, DC sweeps, Bode plots" },
  { name: "AutoCAD", category: "simulation-cad", level: 70, experienceLevel: "Intermediate", note: "2D electrical schematics, mechanical layout drafting" },
  { name: "Tinkercad", category: "simulation-cad", level: 85, experienceLevel: "Proficient", note: "Virtual breadboarding, Arduino circuit simulation & testing" },
  
  // Programming & Engineering Tools
  { name: "C Programming", category: "programming-tools", level: 82, experienceLevel: "Proficient", note: "Algorithms, pointers, structured programming for embedded logic" },
  { name: "Python", category: "programming-tools", level: 75, experienceLevel: "Intermediate", note: "Data plotting, scientific computing, numerical calculations" },
  { name: "Arduino (C++)", category: "programming-tools", level: 88, experienceLevel: "Proficient", note: "Sensors, PWM motor control, serial communication, hardware interfacing" },
  { name: "LaTeX", category: "programming-tools", level: 78, experienceLevel: "Intermediate", note: "Technical documentation, research papers, mathematical formulas" },
  
  // Soft Skills
  { name: "Problem Solving", category: "soft-skills", level: 90, experienceLevel: "Advanced", note: "Systematic circuit debugging, algorithmic reasoning, analytical breakdown" },
  { name: "Teaching & Tutoring", category: "soft-skills", level: 88, experienceLevel: "Proficient", note: "Explaining intricate physics & math concepts to high school students" },
  { name: "Teamwork & Collaboration", category: "soft-skills", level: 85, experienceLevel: "Proficient", note: "Cooperative project execution in university laboratory groups" },
  { name: "Presentation & Communication", category: "soft-skills", level: 80, experienceLevel: "Proficient", note: "Presenting project architectures, technical documentation" },
  { name: "Time Management", category: "soft-skills", level: 85, experienceLevel: "Proficient", note: "Balancing university coursework, practical lab work, and tutoring" }
];

export const projectCategories = [
  'All',
  'Robotics',
  'Embedded / Arduino',
  'Digital Logic',
  'Simulation & Control',
  'Electrical Machines'
] as const;

export const projectsList: ProjectItem[] = [
  {
    id: "robotic-exoskeleton-simulation",
    title: "Robotic Exoskeleton Control System Simulation",
    category: "Simulation & Control",
    shortDescription: "An engineering simulation concept for an intelligent robotic exoskeleton designed to assist human movement.",
    detailedOverview: "An engineering simulation concept for an intelligent robotic exoskeleton designed to assist human movement. The system integrates a dedicated power supply, bio-sensor concept inputs, an intelligent microcontroller control unit, an H-bridge motor driver, and high-torque DC motor actuators to provide assistive torque synchronized with user kinematics.",
    technologies: ["Circuit Simulation", "Motor Driver (L298N/PWM)", "Control Logic", "Sensor Interfacing", "Power Distribution"],
    features: [
      "Power regulation stage with clean voltage rail filtering for delicate control logic",
      "Sensor signal conditioning concept for movement intent detection",
      "Intelligent control unit mapping user trajectory to joint actuation",
      "High-power DC motor actuator integration with directional torque feedback",
      "Dynamic safety limit detection and emergency shutoff logic"
    ],
    systemArchitecture: [
      "Primary Power Supply Stage (Battery/Regulator)",
      "Sensor Array Concept (Strain/Kinematic Inputs)",
      "Central Control Unit (Microcontroller Decision Engine)",
      "Motor Driver Subsystem (H-Bridge PWM Control)",
      "DC Motor Actuator (Joint Movement Assist)"
    ],
    githubUrl: "https://github.com/mdshabbirahmmed169-ops/robotic-exoskeleton-simulation",
    demoUrl: "",
    imageUrl: "./images/robotic-exoskeleton.png",
    featured: true,
    status: "Simulation / Concept"
  },
  {
    id: "line-following-robot-arduino",
    title: "Line Following Robot using Arduino Uno",
    category: "Robotics",
    shortDescription: "Autonomous mobile robot utilizing infrared reflectance sensors to detect and follow dark track lines with real-time feedback.",
    detailedOverview: "An autonomous wheeled robot built around the ATmega328P Arduino Uno platform. It employs an array of TCRT5000 infrared reflectance sensors mounted under the chassis to detect color contrast between the track and background, dynamically adjusting differential drive motor speeds via PWM commands.",
    technologies: ["Arduino Uno", "C++ / Embedded C", "IR Sensor Array", "L298N Motor Driver", "Differential Drive Chassis"],
    features: [
      "Calibrated analog/digital thresholding for ambient light immunity",
      "Differential speed steering algorithm for sharp corner navigation",
      "PWM speed regulation to prevent overshoot on tight curves",
      "Modular hardware mounting for quick sensor realignment"
    ],
    githubUrl: "https://github.com/mdshabbirahmmed169-ops/line-following-robot-arduino",
    demoUrl: "",
    imageUrl: "./images/line-following-robot.jpg",
    featured: true,
    status: "Completed"
  },
  {
    id: "bluetooth-control-car-arduino",
    title: "Bluetooth Control Car using Arduino Uno",
    category: "Robotics",
    shortDescription: "Wireless RC vehicle controlled over Bluetooth serial protocol with smartphone app integration.",
    detailedOverview: "A remote-controlled wheeled vehicle incorporating an HC-05/HC-06 Bluetooth serial module and Arduino Uno. Receives directional and speed telemetry packets from a mobile device, decoding the UART commands to drive dual DC gear motors with bidirectional maneuvering.",
    technologies: ["Arduino Uno", "HC-05 Bluetooth Module", "UART Protocol", "L298N Motor Driver", "Android Telemetry"],
    features: [
      "Wireless UART serial communication with fail-safe disconnect detection",
      "Smooth forward, reverse, and spot-rotation maneuvers",
      "Status indicator LED showing active Bluetooth pairing",
      "Isolated motor and logic power supplies to mitigate inductive voltage spikes"
    ],
    githubUrl: "https://github.com/mdshabbirahmmed169-ops/bluetooth-control-car-arduino",
    demoUrl: "https://www.facebook.com/share/v/19bLMQ7JHt/",
    imageUrl: "./images/bluetooth-car.png",
    featured: true,
    status: "Completed"
  },
  {
    id: "4-bit-memory-74ls74",
    title: "4-Bit Memory Using 74LS74 D Flip-Flop IC",
    category: "Digital Logic",
    shortDescription: "Hardware implementation of a static 4-bit register using dual positive-edge-triggered D-type flip-flops.",
    detailedOverview: "A fundamental digital sequential circuit demonstration constructing a 4-bit parallel-in parallel-out (PIPO) memory register using discrete 74LS74 dual D flip-flop integrated circuits. Demonstrates synchronous clocking, data latching, reset lines, and LED output bus monitoring.",
    technologies: ["74LS74 IC", "Digital Logic", "Breadboard Prototyping", "Clock Generator / Debounce", "LED Bus Display"],
    features: [
      "Synchronous 4-bit storage synchronized to a debounced clock pulse",
      "Individual bit LED indicator monitoring for stored states (Q and Q-bar)",
      "Master clear / asynchronous reset functionality for register initialization",
      "Verification of setup and hold timing characteristics"
    ],
    githubUrl: "https://github.com/mdshabbirahmmed169-ops/4-bit-memory-74ls74",
    demoUrl: "",
    imageUrl: "./images/4-bit-memory.png",
    featured: true,
    status: "Completed"
  },
  {
    id: "automatic-water-level-controller",
    title: "Automatic Water Level Controller Project",
    category: "Embedded / Arduino",
    shortDescription: "Automated pump control system with conductive liquid sensors to prevent tank dry-running and overflow.",
    detailedOverview: "A smart automation system designed to eliminate water wastage and motor burnout. Uses multi-level liquid sensors (or ultrasonic sensing) to detect high and low water thresholds, switching an AC relay to automate the overhead tank pump without human intervention.",
    technologies: ["Arduino / Discrete Comparator", "Relay Module", "Conductive Sensor Array", "AC Load Protection", "Buzzer Alarm"],
    features: [
      "Automatic pump triggering at critical low level and automatic cut-off at full capacity",
      "Dry-run protection to safeguard motor against empty reservoir operation",
      "Visual LED state indicators (Low, Medium, Full, Motor Active)",
      "Galvanically isolated relay interface ensuring complete AC mains safety"
    ],
    githubUrl: "https://github.com/mdshabbirahmmed169-ops/automatic-water-level-controller",
    demoUrl: "",
    imageUrl: "./images/water-level-controller.png",
    featured: true,
    status: "Completed"
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "academic-tutoring",
    type: "Teaching & Tutoring",
    role: "Private Tutor (Physics, Higher Mathematics & ICT)",
    organization: "Self-Employed / Academic Mentorship",
    location: "Bogura & Jamalpur, Bangladesh",
    period: "2022 – Present",
    description: "Mentoring high school and college students in fundamental sciences, calculus, physics problems, and basic information technology.",
    bulletPoints: [
      "Formulated intuitive analogies to teach Newton's laws, electric fields, circuit fundamentals, and calculus.",
      "Assisted students in achieving top grades in SSC/HSC board examinations.",
      "Developed customized problem sets emphasizing analytical thinking over rote memorization."
    ]
  },
  {
    id: "academic-lab-projects",
    type: "Academic Projects",
    role: "Undergraduate Engineering Student & Lab Researcher",
    organization: "Jamalpur Science and Technology University (JSTU)",
    location: "Jamalpur, Bangladesh",
    period: "October 2024 – Present",
    description: "Engaged in hands-on departmental laboratories covering Electrical Circuit Analysis, Electronics, and Digital Logic.",
    bulletPoints: [
      "Conducted experimental verifications of Ohm's law, Kirchhoff's laws, Maximum Power Transfer, and Thevenin theorems.",
      "Wired and debugged analog diode rectifier circuits, filter stages, and transistor amplifier biasing networks.",
      "Authored rigorous engineering lab reports documenting circuit schematics, measured vs theoretical values, and error percentages."
    ]
  },
  {
    id: "team-projects",
    type: "Team Projects",
    role: "Hardware & Robotics Sub-Team Member",
    organization: "EEE Project Study Group",
    location: "JSTU, Jamalpur",
    period: "2024 – Present",
    description: "Collaborating with fellow undergraduate peers on embedded robotics, sensor integration, and automation concepts.",
    bulletPoints: [
      "Co-designed microcontroller firmware and pinout allocations for robotics prototypes.",
      "Participated in peer code reviews, circuit diagram validation, and hardware component sourcing.",
      "Presented prototype demos during internal departmental reviews."
    ]
  },
  {
    id: "volunteer-extracurricular",
    type: "Volunteer & Extracurricular",
    role: "Active Member & Event Volunteer",
    organization: "University Engineering & Science Activities [Placeholder]",
    location: "Jamalpur, Bangladesh",
    period: "2024 – Present",
    description: "Participating in university extracurricular initiatives, technical seminars, and student orientation events.",
    bulletPoints: [
      "Assisted in coordinating departmental workshops and campus science activities.",
      "Collaborated with peers to facilitate peer-learning sessions and seminar logistics."
    ],
    isPlaceholder: true
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: "hsc-gpa5",
    title: "GPA 5.00 in Higher Secondary Certificate (HSC)",
    category: "Academic",
    year: "2022",
    issuer: "Board of Intermediate and Secondary Education (Sherpur Govt. College, Bogura)",
    description: "Attained the highest possible grade point average (GPA 5.00 / 5.00) in the Science discipline with top marks across Physics, Mathematics, and Chemistry.",
    badgeText: "Perfect GPA 5.00"
  },
  {
    id: "ssc-gpa5",
    title: "GPA 5.00 in Secondary School Certificate (SSC)",
    category: "Academic",
    year: "2020",
    issuer: "Board of Intermediate and Secondary Education (Nogor Shah Mozammel Haque High School)",
    description: "Achieved the highest distinction (GPA 5.00 / 5.00) in the national SSC examinations.",
    badgeText: "Perfect GPA 5.00"
  },
  {
    id: "project-exhibition-placeholder",
    title: "Engineering Circuit & Hardware Showcase [Placeholder]",
    category: "Project",
    year: "2024 – 2025",
    issuer: "Departmental Exhibition / Tech Fest",
    description: "Showcased microcontroller prototypes and digital logic hardware during departmental exhibition events.",
    badgeText: "Showcase Award",
    isPlaceholder: true
  }
];

export const certificatesList: CertificateItem[] = [
  {
    id: "cert-hsc-excellence",
    title: "Higher Secondary Certificate (HSC) - Science",
    issuingOrg: "Board of Intermediate & Secondary Education, Rajshahi",
    issueDate: "2022",
    credentialId: "REG-HSC-2022-GPA5",
    skillsCovered: ["Physics", "Higher Mathematics", "Chemistry", "ICT"],
    description: "Official certificate confirming completion of Higher Secondary Certificate examination with GPA 5.00 from Sherpur Govt. College, Bogura."
  },
  {
    id: "cert-ssc-excellence",
    title: "Secondary School Certificate (SSC) - Science",
    issuingOrg: "Board of Intermediate & Secondary Education, Rajshahi",
    issueDate: "2020",
    credentialId: "REG-SSC-2020-GPA5",
    skillsCovered: ["General Science", "Higher Mathematics", "Physics"],
    description: "Official certificate verifying successful completion of Secondary School Certificate with Golden GPA 5.00 from Nogor Shah Mozammel Haque High School."
  },
  {
    id: "cert-arduino-embedded",
    title: "Embedded Systems & Arduino Workshop [Placeholder]",
    issuingOrg: "Technical Engineering Society / Online Academy",
    issueDate: "2024",
    credentialId: "CERT-ARDUINO-2024-PH",
    skillsCovered: ["Arduino Uno", "C++ Firmware", "Sensor Interfacing", "Motor Drivers"],
    description: "Practical certificate in microcontroller programming, sensor interfacing, and robotics control.",
    isPlaceholder: true
  },
  {
    id: "cert-circuit-simulation",
    title: "Circuit Simulation with Proteus & Tinkercad [Placeholder]",
    issuingOrg: "Engineering Training Center",
    issueDate: "2024",
    credentialId: "CERT-SIM-2024-PH",
    skillsCovered: ["Proteus VSM", "Tinkercad Circuits", "Schematic Capture", "Troubleshooting"],
    description: "Hands-on certification for simulating analog/digital circuits and virtual microcontroller firmware debugging.",
    isPlaceholder: true
  },
  {
    id: "cert-programming-c",
    title: "Programming Fundamentals in C & Algorithms [Placeholder]",
    issuingOrg: "Computer & Engineering Academy",
    issueDate: "2023",
    credentialId: "CERT-CPROG-2023-PH",
    skillsCovered: ["C Language", "Data Structures", "Control Flow", "Memory Pointers"],
    description: "Foundational certification in structured C programming, algorithmic problem solving, and logic implementation.",
    isPlaceholder: true
  }
];

export const resumeData = {
  summary: "Electrical & Electronic Engineering (EEE) undergraduate student at Jamalpur Science and Technology University (JSTU), Bangladesh. Highly motivated with a consistent record of academic excellence (GPA 5.00 in SSC & HSC). Possesses hands-on aptitude in circuit analysis, digital logic design (74xx series), embedded systems with Arduino Uno, and electronic simulation (Proteus, PSpice, Tinkercad). Seeking internship, research, and scholarship opportunities to contribute to electrical engineering and technological innovation.",
  coreCompetencies: [
    "Electrical Circuit Analysis (AC/DC & Transients)",
    "Digital Logic Design & Flip-Flop Sequential Circuits",
    "Microcontroller Prototyping (Arduino Uno, C++)",
    "Circuit Simulation (Proteus, PSpice/OrCAD, Tinkercad)",
    "Electrical Machines & Transformer Fundamentals",
    "Technical Documentation (LaTeX, Report Writing)",
    "Algorithmic Problem Solving & C Programming"
  ],
  languages: [
    { language: "Bengali", proficiency: "Native" },
    { language: "English", proficiency: "Working Professional" }
  ]
};
