export const personalInfo = {
  name: "Priyanka G",
  role: "B.Tech Information Technology Student",
  tagline: "AI & Computer Vision | Cybersecurity",
  email: "gpriyanka17052006@gmail.com",
  phone: "+91 82487 37651",
  location: "Dharmapuri, Tamil Nadu, India",
  github: "https://github.com/Priyankagnanam",
  linkedin: "https://www.linkedin.com/in/priyanka-gnanam",
  resumeUrl: "/resume.pdf",
  typingTexts: [
    "AI & Computer Vision Engineer",
    "Cybersecurity Enthusiast",
    "NPTEL 93% HCI Scholar",
  ],
}

export const aboutContent = {
  intro:
    "I am a B.Tech Information Technology student at Government College of Engineering, Erode (Anna University) maintaining an 8.57 CGPA. My interests span Biometric Computer Vision, Intelligent Systems, and Secure Cloud Architectures.",
  passion:
    "From building real-time facial recognition attendance systems with OpenCV to designing cloud-connected student portals using Firebase, I enjoy applying technology to practical problems.",
  goals:
    "My goal is to engineer scalable, intelligent systems that solve real societal problems — inspired by India's growing innovation ecosystem.",
  details: [
    {
      label: "Academic Standing",
      value: "8.57 CGPA in B.Tech IT — with elite NPTEL certifications (93% HCI).",
    },
    {
      label: "Computer Vision & AI",
      value: "Built a real-time face recognition attendance system using OpenCV and Flask.",
    },
    {
      label: "Cloud Applications",
      value: "Built Firebase-powered apps with real-time Firestore sync, OAuth authentication, and responsive dashboards.",
    },
    {
      label: "Cybersecurity",
      value: "Performed network vulnerability scans and assisted in identifying and documenting security gaps across test environments.",
    },
    {
      label: "Research Focus",
      value: "Exploring AI/ML, Biometrics, and Secure Systems.",
    },
  ],
}

export const skills = {
  frontend: [
    "HTML5 & CSS3", "JavaScript",
  ],
  backend: [
    "Python", "Java", "SQL",
  ],
  database: [
    "MySQL", "MongoDB", "Firebase Firestore",
  ],
  tools: [
    "Git & GitHub", "Linux (Ubuntu)", "Visual Studio Code", "Excel", "Power BI",
  ],
  soft: [
    "Research & Analytical Thinking",
    "Problem Solving",
    "Technical Documentation",
    "Cross-functional Collaboration",
    "Rapid Learning",
    "Project Leadership",
  ],
}

export const education = [
  {
    institution: "Government College of Engineering, Erode",
    affiliation: "Anna University, Chennai",
    degree: "B.Tech Information Technology",
    cgpa: "8.57 / 10.0",
    year: "2023 – Expected May 2027",
    location: "Erode, Tamil Nadu",
    description:
      "Pursuing B.Tech IT with deep focus on software engineering, AI, data structures, DBMS, computer networks and human-computer interaction. Consistently in top academic tier.",
    coursework: ["Data Structures & Algorithms", "DBMS", "Human Computer Interaction (93%)", "OOP (Java/Python)", "Computer Networks", "Operating Systems"],
  },
  {
    institution: "Government Girls Higher Secondary School, Dharmapuri",
    affiliation: "Tamil Nadu State Board",
    degree: "Higher Secondary Certificate (Class XII)",
    percentage: "83%",
    year: "Completed 2023",
    location: "Dharmapuri, Tamil Nadu",
    description: "Completed HSC with distinction in Mathematics, Physics, Chemistry and Computer Science. Strong foundation for engineering studies.",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
]

export const internship = [
  {
    company: "TVK Technologies",
    role: "AI & Data Science Intern",
    duration: "2026",
    location: "Coimbatore, India",
    highlights: [
      "Extended the facial recognition attendance system into a deployable internship project, applying Python and OpenCV in a professional development workflow.",
      "Collaborated with mentors on debugging, testing, and documenting the AI pipeline for real-world reliability.",
    ],
      tech: ["Python", "Flask", "OpenCV"],
    image: "/images/smart_face_attendance.jpg",
  },
  {
    company: "Xplore IT Corp",
    role: "Cyber Security Intern",
    duration: "June 2025 – July 2025",
    location: "Coimbatore, India",
    highlights: [
      "Performed network vulnerability scans across test environments and assisted in identifying and documenting security gaps.",
      "Learned and applied fundamentals of network security, including common attack vectors and basic system hardening practices.",
    ],
    tech: ["Network Security", "Vulnerability Scanning", "Linux", "Penetration Testing", "Threat Analysis", "Security Protocols"],
    image: "/images/cybersecurity_internship.jpg",
  },
]

export const projects = [
  {
    title: "Smart Face Recognition Attendance System",
    subtitle: "AI & Biometric Computer Vision",
    description:
      "A real-time facial recognition attendance system using OpenCV, Flask, and SQLite.",
    tech: ["Python", "Flask", "OpenCV", "SQLite"],
    features: [
      "OpenCV-based facial detection and recognition",
      "Flask backend integration",
      "SQLite attendance data storage",
    ],
    challenges:
      "Tuned detection thresholds and preprocessing steps across varied lighting conditions.",
    github: "https://github.com/Priyankagnanam/smart-face-recognition-attendance-system",
    live: "",
    image: "/images/smart_face_attendance.jpg",
    category: "AI & Computer Vision",
  },
  {
    title: "College Connect",
    subtitle: "Student Management Portal",
    description:
      "A centralized full-stack academic portal bridging faculty-student communication with real-time Firebase Firestore, role-based access, announcement feeds, and academic record management.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase Auth", "Firestore"],
      features: [
        "Firebase Authentication for secure login",
        "Real-time Firestore data updates",
        "Attendance and marks management",
        "Study materials, leave requests, and announcements",
      ],
      challenges:
      "Designing the data structure for student management workflows.",
    impact:
      "Centralized academic management and communication for students and administration.",
    github: "https://github.com/Priyankagnanam/college_connect_web_portal",
    live: "",
    image: "/images/college_connect_portal.jpg",
    category: "Web & Cloud Systems",
  },
]

export const certifications = [
  {
    title: "Human Computer Interaction (HCI)",
    issuer: "NPTEL Elite",
    score: "93% — Top Performer",
    year: "Jan – Apr 2026",
    url: "https://drive.google.com/file/d/1SqWNFkYrNARAktyck2ZcNUhO9V-v3vjE/view?usp=sharing",
    description:
      "Elite distinction for mastering user-centered design, cognitive modeling, usability heuristics, and interface evaluation methodologies.",
    highlight: true,
    badgeColor: "from-violet-500 to-purple-600",
  },
  {
    title: "Industry 4.0 & Industrial Internet of Things (IIoT)",
    issuer: "NPTEL Elite",
    score: "80%",
    year: "2025",
    url: "https://drive.google.com/file/d/1yFXoZYMphLYEIgxvKE1nhWsu64Z8sT4M/view?usp=sharing",
    description:
      "Elite certification in cyber-physical systems, smart sensors, industrial communication protocols, and cloud IoT architecture.",
    highlight: true,
    badgeColor: "from-blue-500 to-cyan-500",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    score: "Verified",
    year: "2025",
    url: "https://drive.google.com/file/d/1c-hUPakIwxAi3ObH2aos7It8oNclDFBO/view?usp=sharing",
    description:
      "Certification in OOP principles, exception handling, data structures, and multi-threading in Java.",
    highlight: false,
    badgeColor: "from-orange-500 to-red-500",
  },
  {
    title: "Python for Beginners – In-Depth",
    issuer: "Udemy",
    score: "Verified",
    year: "2026",
    url: "https://drive.google.com/file/d/1MPyu94zHAjpbhTqDLQhZ9sYmTCoe36eQ/view?usp=sharing",
    description:
      "Comprehensive Python 3 certification covering functional programming, data manipulation, and backend automation.",
    highlight: false,
    badgeColor: "from-yellow-400 to-amber-500",
  },
]

export const achievements = [
  {
    icon: "graduation-cap",
    title: "8.57 CGPA Academic Standing",
    description: "Maintaining top-tier CGPA in B.Tech IT at Government College of Engineering, Erode — Anna University.",
    stat: "8.57",
    statLabel: "CGPA",
  },
  {
    icon: "award",
    title: "NPTEL HCI Elite — 93%",
    description: "Top performer in NPTEL Human Computer Interaction certification — elite distinction with 93% score.",
    stat: "93%",
    statLabel: "HCI Score",
  },
  {
    icon: "briefcase",
    title: "2 Industry Internships",
    description: "AI & Data Science Intern at TVK Technologies and Cyber Security Intern at Xplore IT Corp.",
    stat: "2",
    statLabel: "Internships",
  },
  {
    icon: "folder-git",
      title: "2 Academic Projects",
      description: "Built a facial recognition attendance system and a full-stack student management portal.",
      stat: "2",
    statLabel: "Projects",
  },
  {
    icon: "book-open",
    title: "Continuous Learner",
    description: "Building depth through coursework, certifications, internships, and independent projects.",
    stat: "Fall",
    statLabel: "2027 Target",
  },
]

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#internship" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]
