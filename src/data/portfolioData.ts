export interface Project {
  id: string;
  title: string;
  category: 'AI & Computer Vision' | 'Web & Cloud Systems' | 'Cybersecurity';
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  score?: string;
  badge: string;
  description: string;
  highlight?: boolean;
}

export interface Internship {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  bulletPoints: string[];
  techUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  affiliation: string;
  period: string;
  grade: string;
  gradeLabel: string;
  coursework: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Priyanka G',
    shortTitle: 'B.Tech IT Scholar | AI & Full-Stack Developer',
    headline: 'Engineering Intelligent Systems, Computer Vision & Secure Web Applications',
    bio: 'B.Tech student in Information Technology at Government College of Engineering, Erode (Anna University) with an 8.39 CGPA. Focused on Artificial Intelligence, Biometric Computer Vision, and Network Cybersecurity.',
    email: 'gpriyanka17052006@gmail.com',
    phone: '+91 8248737651',
    location: 'Dharmapuri, Tamil Nadu, India',
    github: 'https://github.com/Priyankagnanam',
    linkedin: 'https://linkedin.com/in/priyanka-gnanam',
    resumePdf: '/resume.pdf',
    targetDegree: 'B.Tech Information Technology',
  },

  stats: [
    { label: 'Cumulative CGPA', value: '8.39', sub: 'Top Tier Academic Standing' },
    { label: 'NPTEL HCI Score', value: '93%', sub: 'Elite Certification Distinction' },
    { label: 'Engineering Internships', value: '02', sub: 'AI & Cybersecurity Focus' },
    { label: 'Production Projects', value: '03+', sub: 'AI Biometrics & Full-Stack' },
  ],


  education: [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Government College of Engineering, Erode',
      affiliation: 'Anna University, Chennai',
      period: '2023 – Expected May 2027',
      grade: '8.39 / 10.0',
      gradeLabel: 'CGPA',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java/Python)',
        'Database Management Systems (DBMS)',
        'Human Computer Interaction (HCI)',
        'Operating Systems & Architecture',
        'Computer Networks & Cyber Security'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (Class XII)',
      institution: 'Government Girls Higher Secondary School',
      affiliation: 'Tamil Nadu State Board, Dharmapuri',
      period: 'Completed 2023',
      grade: '83.0%',
      gradeLabel: 'Overall Grade',
      coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    }
  ] as Education[],

  internships: [
    {
      role: 'AI & Data Science Intern',
      company: 'TVK Technologies',
      location: 'Coimbatore, India',
      period: '2026',
      summary: 'Architected an automated smart biometric face recognition attendance solution leveraging Python, OpenCV, and Flask.',
      bulletPoints: [
        'Built real-time biometric face detection algorithms utilizing OpenCV and InsightFace embedding models.',
        'Developed full-stack web user interface with Flask & SQLite for automated attendance logging and statistical report generation.',
        'Applied machine learning classification & facial feature alignment techniques to achieve high verification accuracy.'
      ],
      techUsed: ['Python', 'Flask', 'OpenCV', 'InsightFace', 'SQLite', 'Data Analytics']
    },
    {
      role: 'Cyber Security Intern',
      company: 'Xplore IT Corp',
      location: 'Coimbatore, India',
      period: 'June 2025 – July 2025',
      summary: 'Executed network vulnerability assessments and threat analysis protocols for web applications.',
      bulletPoints: [
        'Completed comprehensive hands-on training in network packet analysis, port scanning, and OWASP vulnerability matrices.',
        'Assessed security postures of sample web systems and drafted threat mitigation recommendations.',
        'Mastered encryption standards, secure session management, and cyber threat identification strategies.'
      ],
      techUsed: ['Network Security', 'Vulnerability Scanning', 'Linux', 'Cyber Threat Analysis', 'Security Protocols']
    }
  ] as Internship[],

  projects: [
    {
      id: 'smart-face-recognition',
      title: 'Smart Face Recognition Attendance System',
      category: 'AI & Computer Vision',
      description: 'An AI-powered biometric student attendance system built with Flask, OpenCV, and deep feature vector extraction for real-time tracking and automated reporting.',
      longDescription: 'Engineered an end-to-end computer vision attendance management system. Utilized InsightFace and OpenCV for instantaneous facial embedding matching against an encrypted SQLite database. Features administrative oversight dashboards, automated attendance percentage calculations, live camera feed streams, and exportable CSV/PDF analytical reports.',
      image: '/images/smart_face_attendance.jpg',
      techStack: ['Python', 'Flask', 'OpenCV', 'InsightFace', 'SQLite', 'HTML5/CSS3', 'JavaScript'],
      features: [
        'Biometric 128D facial feature vector matching',
        'Automated real-time camera stream processing',
        'Secure multi-role administrative & student dashboard',
        'Attendance analytics charts & automated PDF generation'
      ],
      githubUrl: 'https://github.com/Priyankagnanam/Priyanka-Portfolio'
    },
    {
      id: 'college-connect',
      title: 'College Connect – Student Management Portal',
      category: 'Web & Cloud Systems',
      description: 'A responsive full-stack academic portal streamlining student-faculty communication, notice delivery, and real-time academic record tracking.',
      longDescription: 'Created a centralized web application for college campuses to eliminate communication gaps between department faculty and students. Powered by Firebase Authentication for role-based security (Student/Faculty/Admin) and Firebase Firestore for instant push notifications and timetable synchronization.',
      image: '/images/college_connect_portal.jpg',
      techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
      features: [
        'Firebase OAuth & Email authentication',
        'Real-time Firestore academic announcement feed',
        'Interactive timetable viewer & assignment submitter',
        'Mobile-first responsive glassmorphism user interface'
      ],
      githubUrl: 'https://github.com/Priyankagnanam/Priyanka-Portfolio'
    },
    {
      id: 'userpro-dashboard',
      title: 'UserPro – User Profile Dashboard',
      category: 'Web & Cloud Systems',
      description: 'A sleek, security-focused profile management dashboard with real-time Firestore database synchronization and user preference controls.',
      longDescription: 'Built a modular, highly accessible profile management platform designed for SaaS applications. Incorporates dynamic form state validation, real-time avatar upload previews, Firestore security rules enforcement, and session activity tracking.',
      image: '/images/userpro_dashboard.jpg',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Firestore', 'Cloud Storage'],
      features: [
        'Instant live data synchronization with Google Firestore',
        'Granular user privacy settings & security logs',
        'Dynamic avatar upload & crop preview',
        'Zero-latency optimistic UI updates'
      ],
      githubUrl: 'https://github.com/Priyankagnanam/Priyanka-Portfolio'
    }
  ] as Project[],

  certifications: [
    {
      title: 'NPTEL Elite Certification – Human Computer Interaction (HCI)',
      issuer: 'NPTEL (IIT Madras / MoE India)',
      year: 'Jan – Apr 2026',
      score: '93% (Top Performer)',
      badge: 'Elite Gold Distinction',
      description: 'Mastered user-centered design, cognitive modeling, usability heuristics, and interface evaluation methodologies with top-percentile distinction.',
      highlight: true
    },
    {
      title: 'NPTEL Elite Certification – Industry 4.0 & Industrial Internet of Things (IIoT)',
      issuer: 'NPTEL (IIT Kharagpur)',
      year: '2025',
      score: '80%',
      badge: 'Elite Silver Distinction',
      description: 'Studied cyber-physical systems, smart sensors, industrial communication protocols, and cloud IoT architecture.',
      highlight: true
    },
    {
      title: 'Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      year: '2025',
      badge: 'Verified Certification',
      description: 'Comprehensive certification in object-oriented programming principles, exception handling, data structures, and multithreading in Java.',
      highlight: false
    },
    {
      title: 'Python for Beginners – In-Depth Certification',
      issuer: 'Udemy',
      year: '2026',
      badge: 'Verified Certification',
      description: 'Rigorous foundation in Python 3, functional programming, data manipulation modules, and backend script automation.',
      highlight: false
    }
  ] as Certification[],

  leadership: [
    {
      role: 'Documentation Team Lead & Member',
      organization: 'FOSS GCEE (Free and Open Source Software Club)',
      period: '2024 – Present',
      description: 'Authoring technical documentation for open-source software workshops, creating developer setup guides, and co-coordinating college-wide technical dev hackathons.'
    }
  ],

  skillCategories: [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', level: 92, icon: 'SiPython', color: 'from-blue-500 to-yellow-400' },
        { name: 'Java', level: 88, icon: 'FaJava', color: 'from-orange-500 to-red-500' },
        { name: 'SQL', level: 85, icon: 'SiMysql', color: 'from-blue-600 to-cyan-500' },
        { name: 'JavaScript (ES6+)', level: 85, icon: 'SiJavascript', color: 'from-yellow-400 to-amber-500' },
        { name: 'C / C++', level: 80, icon: 'SiCplusplus', color: 'from-blue-700 to-indigo-600' },
      ]
    },
    {
      name: 'Web & Frameworks',
      skills: [
        { name: 'React & Vite', level: 88, icon: 'SiReact', color: 'from-cyan-400 to-blue-500' },
        { name: 'Tailwind CSS & Motion', level: 90, icon: 'SiTailwindcss', color: 'from-teal-400 to-cyan-500' },
        { name: 'Flask (Python)', level: 82, icon: 'SiFlask', color: 'from-slate-400 to-slate-200' },
        { name: 'HTML5 & CSS3', level: 95, icon: 'SiHtml5', color: 'from-orange-500 to-amber-600' },
      ]
    },
    {
      name: 'Databases & Cloud',
      skills: [
        { name: 'MySQL', level: 86, icon: 'SiMysql', color: 'from-blue-500 to-indigo-600' },
        { name: 'Firebase Firestore', level: 88, icon: 'SiFirebase', color: 'from-amber-400 to-orange-500' },
        { name: 'MongoDB', level: 80, icon: 'SiMongodb', color: 'from-emerald-500 to-green-600' },
        { name: 'SQLite', level: 85, icon: 'SiSqlite', color: 'from-sky-400 to-blue-600' },
      ]
    },
    {
      name: 'AI, Data & Security Tools',
      skills: [
        { name: 'OpenCV & InsightFace', level: 85, icon: 'SiOpencv', color: 'from-green-400 to-emerald-600' },
        { name: 'Power BI & Excel', level: 84, icon: 'SiPowerbi', color: 'from-yellow-500 to-amber-600' },
        { name: 'Git & GitHub', level: 90, icon: 'SiGit', color: 'from-orange-600 to-red-600' },
        { name: 'Linux (Ubuntu)', level: 85, icon: 'SiLinux', color: 'from-amber-500 to-yellow-600' },
      ]
    }
  ]
};
