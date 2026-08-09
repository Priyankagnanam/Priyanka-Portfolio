export const personalInfo = {
  name: "Priyanka G",
  role: "B.Tech Information Technology Student",
  tagline: "Aspiring MS CS Student | AI & Computer Vision Researcher | Cybersecurity Enthusiast",
  email: "gpriyanka17052006@gmail.com",
  phone: "+91 82487 37651",
  location: "Dharmapuri, Tamil Nadu, India",
  github: "https://github.com/Priyankagnanam",
  linkedin: "https://www.linkedin.com/in/priyanka-gnanam",
  resumeUrl: "/resume.pdf",
  targetDegree: "MS Computer Science — US Universities (Fall 2027)",
  typingTexts: [
    "AI & Computer Vision Engineer",
    "US MS CS Applicant 🎓",
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "NPTEL 93% HCI Scholar",
  ],
}

export const aboutContent = {
  intro:
    "I am a B.Tech Information Technology student at Government College of Engineering, Erode (Anna University) maintaining an 8.39 CGPA. My research interests span Biometric Computer Vision, Intelligent Systems, and Secure Cloud Architectures — fields I am passionate about pursuing at the graduate level in the United States.",
  passion:
    "From building real-time facial recognition attendance systems with InsightFace & OpenCV, to designing cloud-connected student portals using Firebase — I thrive where AI meets practical engineering. I am now channeling this hands-on experience toward MS programs in Computer Science at US universities (Fall 2027 intake).",
  goals:
    "My goal is to contribute to world-class AI/security research through a US MS program, and ultimately engineer scalable, intelligent systems that solve real societal problems — inspired by India's growing innovation ecosystem.",
  details: [
    {
      label: "Academic Standing",
      value: "8.39 CGPA in B.Tech IT — Top of cohort with elite NPTEL certifications (93% HCI).",
    },
    {
      label: "Computer Vision & AI",
      value: "Engineered a real-time face recognition attendance system using InsightFace, OpenCV, and Flask.",
    },
    {
      label: "Cloud & Full-Stack",
      value: "Built Firebase-powered apps with real-time Firestore sync, OAuth authentication, and responsive dashboards.",
    },
    {
      label: "Cybersecurity",
      value: "Industry intern at Xplore IT Corp — conducted vulnerability assessments, threat modelling & pen-testing.",
    },
    {
      label: "MS Research Focus",
      value: "Targeting US MS CS programs (Fall 2027) in AI/ML, Biometrics & Secure Systems.",
    },
  ],
}

export const skills = {
  frontend: [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "React & Vite", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ],
  backend: [
    { name: "Python", level: 92 },
    { name: "Java", level: 85 },
    { name: "Flask", level: 82 },
    { name: "SQL", level: 88 },
  ],
  database: [
    { name: "MySQL", level: 86 },
    { name: "Firebase Firestore", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "SQLite", level: 85 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "OpenCV & InsightFace", level: 85 },
    { name: "Power BI & Excel", level: 84 },
    { name: "Linux (Ubuntu)", level: 85 },
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
    cgpa: "8.39 / 10.0",
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
      "Architected a real-time Smart Face Recognition Attendance System using Python, Flask, OpenCV, and InsightFace embedding models.",
      "Designed SQLite database schema for encrypted biometric data storage and automated student attendance logging.",
      "Built an analytics dashboard with attendance trend visualizations, percentage calculations, and exportable PDF reports.",
      "Applied machine learning classification techniques for facial feature alignment achieving high verification accuracy.",
      "Implemented full-stack web interface with Flask REST APIs, JavaScript charts, and live camera stream integration.",
    ],
    tech: ["Python", "Flask", "OpenCV", "InsightFace", "SQLite", "JavaScript", "Data Analytics"],
    image: "/images/smart_face_attendance.jpg",
  },
  {
    company: "Xplore IT Corp",
    role: "Cyber Security Intern",
    duration: "June 2025 – July 2025",
    location: "Coimbatore, India",
    highlights: [
      "Collaborated with senior security engineers to identify and mitigate vulnerabilities in web applications using OWASP frameworks.",
      "Conducted penetration testing and network vulnerability assessments, documenting findings and remediation strategies.",
      "Performed packet analysis, port scanning, and threat modelling on simulated enterprise network environments.",
      "Gained hands-on experience with encryption standards, secure session management, and incident response procedures.",
      "Developed security documentation and best-practice guidelines promoting a security-first development culture.",
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
      "An end-to-end AI-powered biometric attendance system using facial recognition with real-time camera streaming, automated analytics reporting, and secure data management — built as part of my AI internship at TVK Technologies.",
    tech: ["Python", "Flask", "OpenCV", "InsightFace", "SQLite", "HTML/CSS/JS"],
    features: [
      "Real-time biometric face detection with 128D feature vector matching",
      "Automated attendance logging with timestamp & confidence scores",
      "Secure multi-role admin & student web dashboard",
      "PDF/CSV attendance report generation with analytics charts",
    ],
    challenges:
      "Optimizing InsightFace embedding pipeline for low-latency real-time performance on standard hardware.",
    impact:
      "Reduced manual attendance overhead by 90% with sub-second face verification accuracy.",
    github: "https://github.com/Priyankagnanam/SmartFaceRecognitionAttendance",
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
      "Firebase OAuth & email authentication with role-based access control",
      "Real-time Firestore announcement and notification feed",
      "Interactive academic timetable and assignment submission module",
      "Mobile-first responsive glassmorphism design system",
    ],
    challenges:
      "Designing a scalable Firestore data model for diverse multi-role user permissions.",
    impact:
      "Streamlined campus communication serving as a centralized hub for 500+ students.",
    github: "https://github.com/Priyankagnanam",
    live: "",
    image: "/images/college_connect_portal.jpg",
    category: "Web & Cloud Systems",
  },
  {
    title: "UserPro – User Profile Dashboard",
    subtitle: "Cloud-Connected Profile Management",
    description:
      "A sleek, security-focused user profile management dashboard with Firebase Firestore real-time synchronization, dynamic avatar management, and granular privacy settings.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase Firestore", "Cloud Storage"],
    features: [
      "Real-time Firestore sync with zero-latency optimistic UI updates",
      "Dynamic avatar upload, crop & preview with Cloud Storage",
      "Granular user privacy settings and session activity logs",
      "Firestore security rules enforcement for data access control",
    ],
    challenges:
      "Implementing real-time sync across multiple sessions while maintaining consistent data integrity.",
    impact:
      "Delivered a production-grade profile system with enterprise-level security and polished UX.",
    github: "https://github.com/Priyankagnanam",
    live: "",
    image: "/images/userpro_dashboard.jpg",
    category: "Web & Cloud Systems",
  },
]

export const certifications = [
  {
    title: "Human Computer Interaction (HCI)",
    issuer: "NPTEL Elite",
    score: "93% — Top Performer",
    year: "Jan – Apr 2026",
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
    description:
      "Comprehensive Python 3 certification covering functional programming, data manipulation, and backend automation.",
    highlight: false,
    badgeColor: "from-yellow-400 to-amber-500",
  },
]

export const achievements = [
  {
    icon: "graduation-cap",
    title: "8.39 CGPA Academic Excellence",
    description: "Maintaining top-tier CGPA in B.Tech IT at Government College of Engineering, Erode — Anna University.",
    stat: "8.39",
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
    title: "3+ Production Projects",
    description: "Built AI biometric systems, full-stack cloud portals and analytics dashboards in real deployments.",
    stat: "3+",
    statLabel: "Projects",
  },
  {
    icon: "book-open",
    title: "US MS CS Aspirant",
    description: "Actively preparing for MS in Computer Science applications to US universities (Fall 2027 intake).",
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
