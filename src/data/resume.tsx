import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akshat Singh",
  initials: "DV",
  location: "India",
  description:
    "Engineering elegant solutions to complex problems",
  summary:
    "I'm a Software Engineer with a strong foundation in Computer Science and a passion for building scalable tech solutions. My expertise spans full-stack development, system design, and cloud infrastructure. Through hands-on projects and hackathons, I've developed proficiency in building robust applications.",
  avatarUrl: "/icon.png",
  skills: [
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "ReactNative",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Tailwind CSS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "akshatsing11@gmail.com",
    tel: "8009938000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhi-yo",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/singh-akshat/",
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/akshatbuilds",
        icon: Icons.x,
        navbar: true
      },
    }
  },
  education: [
    {
      school: "Delhi Public School",
      href: "https://dpsjankipuram.com/Site/Home/240000001_240000001_Home",
      degree: "High School",
      logoUrl: "/dps.jpg",
      start: "2020",
      end: "2021",
    },
    {
      school: "SRM Institute of Science and Technology",
      href: "https://www.srmist.edu.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "/srmlogo.png",
      start: "2021",
      end: "2025",
    }
  ],
  work: [
    {
      company: "Freelance",
      title: "Full-Stack Developer",
      location: "Remote",
      type: "Freelance",
      start: "January 2024",
      end: "Present",
      href: "",
      logoUrl: "/freelance.png",
      description: "Developing custom web applications and solutions for various clients. Building scalable full-stack applications using modern technologies like Next.js, React, Node.js, and cloud platforms. Collaborating directly with clients to understand requirements and deliver tailored solutions.",
      badges: []
    }
  ],
  projects: [
    {
      title: "Resume Generator",
      href: "",
      dates: "July, 2025",
      active: true,
      description:
        "Professional resume generator that turns your GitHub into a polished LaTeX resume, top 6 on Peerlist with 140+ upvotes and 280+ unique visitors on website.",
      technologies: [
        "TypeScript",
        "Next.js",
        "GitHub",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://githubresume.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/videos/resumegenerator.mp4",
    },
    {
      
      title: "Quilly",
      href: "",
      dates: "April, 2025",
      active: true,
      description:
        "A distraction-free writing platform with blockchain-powered copyright protection, built with Next.js and deployed on Polygon.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Solidity",
        "MongoDB",
        "NextAuth.js",
        "TypeScript"
      ],
      links: [
          {
            type: "Website",
            href: "https://contentplatform.vercel.app/",
            icon: <Icons.globe className="size-3" />,
          },
      ],
      image: "",
      video: "/videos/quilly.mp4",
    },
    {
      title: "Event Sphere",
      href: "https://github.com/abhi-yo/hyperlocal",
      dates: "October, 2024",
      active: true,
      description:
        "Event platform where users can create, discover, and join local events in real-time. Developed event-specific chat channels enabling dedicated real-time communication for each event.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Socket.io",
        "Redis",
        "MongoDB",
        "Google Maps API",
        "Vultr Cloud"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhi-yo/hyperlocal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/eventsphere.mp4",
    },
    {
      title: "Smart Shelf",
      href: "https://github.com/abhi-yo/smart-shelf",
      dates: "August 16th - 17th, 2024",
      active: true,
      description:
        "Automates inventory tracking by reading RFID tags and storing data in a database. Streamlines stock monitoring and reduces manual checks by automatically recording RFID tag data in real-time.",
      technologies: [
        "Node.js",
        "Express",
        "SerialPort",
        "MongoDB",
        "Arduino",
        "JavaScript",
        "HTML/CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhi-yo/smart-shelf",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "/videos/smartshelf.mp4 ",
    },
  ],
  Milestones: [
    {
      title: "Closed Companies",
      dates: "July, 2025",
      description:
        "A public archive documenting startup failures from 2016-2025.",
      location:"",
      image:
        "./closedcompanies.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://closed-companies.vercel.app/",
        }
      ],
    },
    {
      title: "Resume Generator",
      dates: "July, 2025",
      description:
        "Professional resume generator that turns your GitHub into a polished LaTeX resume, top 6 on Peerlist with 130+ upvotes and 200+ visitors on website.",
      location:"",
      image:
        "./githubresume.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://githubresume.vercel.app/",
        }
      ],
    },
    {
      title: "Quilly",
      dates: "July, 2025",
      description:
        "A distraction-free writing platform with blockchain-powered copyright protection, built with Next.js and deployed on Polygon.",
      location:"",
      image:
        "",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://contentplatform.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/quilly",
        }
      ],
    },
    {
      title: "Pricepal",
      dates: "June, 2025",
      description:
        "A web app that serves as a price comparison platform, to help users find the best deals across multiple e-commerce platforms in India.",
      location:"",
      image:
        "./pricepal.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/pricepal",
        }
      ],
    },
    {
      title: "SkillPact",
      dates: "June, 2025",
      description:
        "Skillpact is a unique credit-based skill exchange platform designed to connect neighbors and foster community collaboration.",
      location:"",
      image:
        "./skillpact.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.skillpact.co/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/skillpact",
        }
      ],
    },
    {
      title: "Website Modifier",
      dates: "May 7th, 2025",
      description:
        "A powerful browser extension that allows you to modify any website using natural language instructions. Simply describe what you want to change, and the extension will generate and apply the necessary code.",
      location:"",
      image:
        "https://cdn-icons-png.flaticon.com/512/1875/1875660.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/website-modifier",
        }
      ],
    },
    {
      title: "Swap Contract",
      dates: "May 6th, 2025",
      description:
        "Web application built with Express that provides a simple interface to perform a token swap on the Solana blockchain using the Jupiter Aggregator API.",
      location:"",
      image:
        "./swapcontract.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/swapcontract",
        }
      ],
    },
    {
      title: "Etherea",
      dates: "April 25th, 2025",
      description:
        "A static landing page built with Next.js for a concept app that offers AI-generated ambient soundscapes. Focuses on clean design, atmospheric visuals, and a waitlist email form.",
      location:"",
      image:
        "https://cdn-icons-png.flaticon.com/512/9650/9650488.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://etherea-three.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/etherea",
        }
      ],
    },
    {
      title: "Solana Wallet Interface",
      dates: "April 18th, 2025",
      description:
        "A minimal web interface for interacting with Solana blockchain, built with React and Solana Web3.js.",
      location:"",
      image:
        "./solanawalletinterface.jpg",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://solana-wallet-interface.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/solana-wallet-interface",
        }
      ],
    },
    {
      title: "CodeNexus",
      dates: "April 18th, 2025",
      description:
        "A project built leveraging the groq ai api for enhancing code.",
      location:"",
      image:
        "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://codenexus-ruby.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/codenexus",
        }
      ],
    },
    {
      title: "Subscription Tracker",
      dates: "April 16th, 2025",
      description:
        "This app helps you track subscriptions and bank transactions by analyzing your email data. Since it uses a mail scanner, you'll need to clone the repo and run it locally.",
      location:"",
      image:
        "https://cdn-icons-png.flaticon.com/512/7142/7142010.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://subscriptionsummary.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/subscription-tracker",
        }
      ],
    },
    {
      title: "Web Wallet",
      dates: "April 1st, 2025",
      description:
        "Allows you to generate and manage Ethereum wallets securely in your browser.",
      location:"",
      image:
        "https://cdn-icons-png.flaticon.com/512/6134/6134346.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://web-wallet-eth.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/web-wallet",
        }
      ],
    },
    {
      title: "Message",
      dates: "March 29th, 2025",
      description:
        "Real-time chat application built with Next.js 15, Socket.io, PostgreSQL, Prisma ORM, Tailwind CSS having a beautiful UI.",
      location:"",
      image:
        "https://cdn-icons-png.flaticon.com/512/2076/2076218.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/Message",
        }
      ],
    },
    {
      title: "Casino Games",
      dates: "February 14th, 2025",
      description:
        "A browser-based casino application featuring Slots and Roulette games, built with TypeScript.",
      location:"",
      image:
        "./casinogame.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/casino-games",
        }
      ],
    },
    {
      title: "API Rate Limiter",
      dates: "January 6th - 11th, 2025",
      description:
        "Test rate limiting on any API endpoint",
      location:"",
      image:
        "./apiratelimiter.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/rate-limiter",
        }
      ],
    },
    {
      title: "WebRTC Video Streaming Application",
      dates: "December 12th - 13th, 2024",  // Using current date since no specific date was provided
      description:
        "Developed a real-time peer-to-peer video streaming application using WebRTC and WebSocket. Features include live video broadcasting from a sender to receiver with efficient signaling server implementation.",
        location:"",
      image:
        "./webrtc.jpeg",  // Keeping the same image path
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/simple-webrtc-stream",
        },
      ],  // Keeping empty links array
      // Removed MLH badge since it's not relevant to this project
},
{
  title: "GitHub Profile Roaster",
  dates: "2024",
  description: "A fun web application built with React and Next.js that roasts GitHub profiles in a humorous way. Users can input GitHub usernames to receive entertaining and playful critiques of their profiles.",
  location:"",
  image: "./githubroast.png",  // You'll need to update with actual image URL
  links: [
    {
      title: "Live Demo",
      icon: <Icons.globe className="h-4 w-4" />,
      href: "https://roasting-github.vercel.app",
    },
    {
      title: "Source",
      icon: <Icons.github className="h-4 w-4" />,
      href: "https://github.com/YourUsername/github-profile-roaster",  // You'll need to update with actual GitHub repo
    }
  ]
},
    {
      title: "Sparkathon",
      dates: "August 16th, 2024",
      description: "Developed an IoT-based inventory management system using RFID technology for real-time stock monitoring. Features include automated restocking alerts, secure admin dashboard, and seamless integration with RFID sensors for accurate inventory tracking.",
      location:"",
      image:
        "./sparkathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/smart-shelf",
        },
      ],
    },
  ],
} as const;
