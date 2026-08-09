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
    { label: 'Academic Projects', value: '02', sub: 'Computer Vision & Full-Stack' },
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
       summary: 'Built a real-time facial recognition attendance system using Python, OpenCV, Flask, and SQLite.',
      bulletPoints: [
         'Extended the system into a deployable internship project using Python and OpenCV.',
         'Collaborated with mentors on debugging, testing, and documenting the AI pipeline.'
      ],
       techUsed: ['Python', 'Flask', 'OpenCV', 'SQLite']
    },
    {
      role: 'Cyber Security Intern',
      company: 'Xplore IT Corp',
      location: 'Coimbatore, India',
      period: 'June 2025 – July 2025',
      summary: 'Executed network vulnerability assessments and threat analysis protocols for web applications.',
       bulletPoints: [
         'Performed network vulnerability scans across test environments and assisted in identifying and documenting security gaps.',
         'Learned and applied fundamentals of network security, including common attack vectors and basic system hardening practices.'
       ],
       techUsed: ['Network Security', 'Vulnerability Scanning', 'Linux', 'System Hardening']
    }
  ] as Internship[],

  projects: [
    {
      id: 'smart-face-recognition',
      title: 'Smart Face Recognition Attendance System',
      category: 'AI & Computer Vision',
       description: 'A real-time facial recognition attendance system using OpenCV, Flask, and SQLite.',
       longDescription: 'Built a real-time attendance system using OpenCV-based facial detection and recognition, integrated with a Flask backend and SQLite database.',
      image: '/images/smart_face_attendance.jpg',
       techStack: ['Python', 'Flask', 'OpenCV', 'SQLite'],
      features: [
         'OpenCV-based facial detection and recognition',
         'Flask backend integration',
         'SQLite attendance data storage'
      ],
      githubUrl: 'https://github.com/Priyankagnanam/Priyanka-Portfolio'
    },
    {
      id: 'college-connect',
      title: 'College Connect – Student Management Portal',
      category: 'Web & Cloud Systems',
       description: 'A full-stack student management portal built with HTML, CSS, JavaScript, and Firebase.',
       longDescription: 'Built a centralized web portal to support academic management and communication between students and administration, with Firebase Authentication and Firestore for secure login and real-time data updates.',
      image: '/images/college_connect_portal.jpg',
       techStack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Auth', 'Firestore'],
      features: [
         'Firebase Authentication for secure login',
         'Real-time Firestore data updates',
         'Attendance, marks, and study materials management',
         'Leave requests and announcements'
      ],
      githubUrl: 'https://github.com/Priyankagnanam/Priyanka-Portfolio'
    },
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
         { name: 'Python', icon: 'SiPython', color: 'from-blue-500 to-yellow-400' },
         { name: 'Java', icon: 'FaJava', color: 'from-orange-500 to-red-500' },
         { name: 'SQL', icon: 'SiMysql', color: 'from-blue-600 to-cyan-500' },
         { name: 'JavaScript', icon: 'SiJavascript', color: 'from-yellow-400 to-amber-500' },
      ]
    },
    {
      name: 'Web & Frameworks',
      skills: [
         { name: 'HTML5 & CSS3', icon: 'SiHtml5', color: 'from-orange-500 to-amber-600' },
      ]
    },
    {
      name: 'Databases & Cloud',
      skills: [
         { name: 'MySQL', icon: 'SiMysql', color: 'from-blue-500 to-indigo-600' },
         { name: 'Firebase Firestore', icon: 'SiFirebase', color: 'from-amber-400 to-orange-500' },
         { name: 'MongoDB', icon: 'SiMongodb', color: 'from-emerald-500 to-green-600' },
      ]
    },
    {
      name: 'AI, Data & Security Tools',
      skills: [
         { name: 'OpenCV', icon: 'SiOpencv', color: 'from-green-400 to-emerald-600' },
         { name: 'Power BI & Excel', icon: 'SiPowerbi', color: 'from-yellow-500 to-amber-600' },
         { name: 'Git & GitHub', icon: 'SiGit', color: 'from-orange-600 to-red-600' },
         { name: 'Linux (Ubuntu)', icon: 'SiLinux', color: 'from-amber-500 to-yellow-600' },
      ]
    }
  ]
};
