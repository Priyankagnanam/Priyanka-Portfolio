export const personalInfo = {
  name: "Priyanka G",
  role: "B.Tech Information Technology Student",
  tagline: "Data Analyst | UI/UX Enthusiast | Cyber Security Learner",
  email: "gpriyanka17052006@gmail.com",
  phone: "+91 82487 37651",
  github: "https://github.com/Priyankagnanam",
  linkedin: "https://www.linkedin.com/in/priyanka-gnanam",
  resumeUrl: "/resume.pdf",
  typingTexts: [
    "Data Analyst",
    "IT Student",
    "UI/UX Enthusiast",
    "Cyber Security Enthusiast",
  ],
}

export const aboutContent = {
  intro:
    "A passionate B.Tech Information Technology student at Government College of Engineering, Erode, with a deep fascination for crafting digital experiences that make a difference. My journey in tech began with curiosity about how websites work and has evolved into a full-fledged passion for full-stack development.",
  passion:
    "I thrive at the intersection of design and technology — translating complex problems into elegant, user-centric solutions. Whether building responsive web applications, exploring UI/UX principles, or learning about cyber security, I bring the same level of enthusiasm and dedication to every project.",
  goals:
    "My goal is to become a versatile software engineer who can architect scalable systems while delivering pixel-perfect experiences. I believe in continuous learning and staying at the cutting edge of technology.",
  details: [
    {
      label: "Passion",
      value:
        "Building products that live at the intersection of design, security, and performance.",
    },
    {
      label: "Full Stack",
      value:
        "Crafting end-to-end solutions with modern frameworks, databases, and cloud services.",
    },
    {
      label: "UI/UX",
      value:
        "Designing intuitive interfaces with a focus on accessibility, aesthetics, and user delight.",
    },
    {
      label: "Cyber Security",
      value:
        "Understanding threat landscapes and building resilient, secure applications.",
    },
    {
      label: "AI & Learning",
      value:
        "Exploring AI/ML to build smarter applications. Lifelong learner committed to growth.",
    },
  ],
}

export const skills = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "Python", level: 80 },
    { name: "Java", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
  ],
  database: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Firebase", level: 70 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Excel", level: 80 },
    { name: "Figma", level: 75 },
    { name: "Postman", level: 70 },
  ],
  soft: [
    "Communication",
    "Problem Solving",
    "Adaptability",
    "Teamwork",
    "Quick Learning",
    "Critical Thinking",
  ],
}

export const education = [
  {
    institution: "Government College of Engineering, Erode",
    degree: "B.Tech Information Technology",
    cgpa: "8.39",
    year: "2023 – 2027",
    location: "Erode, Tamil Nadu",
    description:
      "Pursuing a Bachelor's degree with a focus on software engineering, algorithms, and modern web technologies. Actively involved in technical projects and hackathons.",
  },
  {
    institution: "PU Government Girls Higher Secondary School, Dharmapuri",
    degree: "HSLC",
    percentage: "83%",
    year: "2022 – 2023",
    location: "Dharmapuri, Tamil Nadu",
    description:
      "Completed Higher Secondary education with a focus on science and mathematics.",
  },
]

export const internship = {
  company: "Xplore IT Corp",
  role: "Cyber Security Intern",
  duration: "23 June 2025 – 16 July 2025",
  highlights: [
    "Collaborated with senior security engineers to identify and mitigate vulnerabilities in web applications, strengthening overall security posture.",
    "Conducted penetration testing and security assessments using industry-standard tools, documenting findings and remediation strategies.",
    "Developed security documentation and best-practice guidelines for development teams, fostering a security-first culture.",
    "Participated in threat modeling sessions and contributed to the implementation of secure coding practices across projects.",
    "Gained hands-on experience with network security protocols, encryption standards, and incident response procedures.",
  ],
}

export const projects = [
  {
    title: "User Pro",
    subtitle: "Responsive User Dashboard",
    description:
      "A comprehensive user management dashboard with real-time data visualization, authentication, and CRUD operations. Built with a focus on performance, accessibility, and a polished user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Firestore"],
    features: [
      "Real-time user data synchronization with Firestore",
      "Authentication with email/password and Google OAuth",
      "Responsive sidebar navigation with collapsible menu",
      "Data tables with sorting, filtering, and pagination",
      "Analytics dashboard with interactive charts",
    ],
    challenges:
      "Implementing real-time sync across multiple browser tabs while maintaining optimistic UI updates.",
    impact:
      "Reduced user management overhead by 60% with intuitive CRUD operations and real-time updates.",
    github: "https://github.com/Priyankagnanam",
    live: "https://user-pro.vercel.app",
  },
  {
    title: "College Connect",
    subtitle: "Student Portal",
    description:
      "A centralized student portal connecting faculty and students for announcements, resource sharing, and academic collaboration. Streamlines campus communication and document management.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    features: [
      "Role-based access for students, faculty, and administrators",
      "Real-time announcement and notification system",
      "Resource library with document upload and categorization",
      "Event calendar with RSVP functionality",
      "Discussion forums for collaborative learning",
    ],
    challenges:
      "Designing a scalable data model that accommodates diverse user roles and permissions.",
    impact:
      "Improved campus communication efficiency, serving as a centralized hub for 500+ students.",
    github: "https://github.com/Priyankagnanam",
    live: "https://college-connect.vercel.app",
  },
  {
    title: "Bike Sales Dashboard",
    subtitle: "Excel Analytics Dashboard",
    description:
      "An interactive Excel dashboard analyzing bike sales data across regions, demographics, and time periods. Delivers actionable business insights through compelling visualizations.",
    tech: ["Excel", "Pivot Tables", "Charts", "Slicers"],
    features: [
      "Interactive pivot tables with multi-dimensional filtering",
      "Sales trend analysis with moving averages and forecasting",
      "Demographic segmentation and purchasing pattern analysis",
      "Regional performance comparison with geo-visualization",
      "Executive summary dashboard with KPI cards",
    ],
    challenges:
      "Handling large datasets efficiently while maintaining dashboard responsiveness.",
    impact:
      "Enabled data-driven decision making by surfacing key trends in customer purchasing behavior.",
    github: "https://github.com/Priyankagnanam",
    live: "https://example.com/bike-sales",
  },
]

export const certifications = [
  {
    title: "Industry 4.0 & IIOT",
    issuer: "NPTEL Elite",
    description:
      "Elite certification for comprehensive understanding of Industry 4.0 technologies, IIoT architectures, and smart manufacturing principles.",
  },
  {
    title: "Human Computer Interaction",
    issuer: "NPTEL Elite",
    description:
      "Elite certification covering usability engineering, interaction design, accessibility standards, and user-centered design methodologies.",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    description:
      "Certification in core Java concepts including OOP, exception handling, multithreading, and data structures.",
  },
]

export const achievements = [
  {
    icon: "graduation-cap",
    title: "Academic Excellence",
    description: "Maintaining a CGPA of 8.39 in B.Tech IT at Government College of Engineering, Erode.",
  },
  {
    icon: "award",
    title: "Elite Certifications",
    description: "Awarded NPTEL Elite status for outstanding performance in technical courses.",
  },
  {
    icon: "briefcase",
    title: "Industry Internship",
    description: "Completed Cyber Security internship at Xplore IT Corp with hands-on security experience.",
  },
  {
    icon: "folder-git",
    title: "Project Portfolio",
    description: "Built 3+ production-ready projects demonstrating full-stack and analytics capabilities.",
  },
  {
    icon: "book-open",
    title: "Continuous Learner",
    description: "Actively upskilling in Full Stack Development, UI/UX, Cyber Security, and AI/ML.",
  },
]

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Internship", href: "#internship" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]
