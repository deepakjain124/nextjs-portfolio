
import { FaBell, FaCode, FaMobile } from "react-icons/fa";
import { MdApi, MdDashboard, MdSafetyCheck } from "react-icons/md";

export const capabilities = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    desc:
      "Building modern, fast, and scalable user interfaces with clean architecture and pixel-perfect design.",
    points: [
      "React.js & Next.js applications",
      "Tailwind CSS, Ant Design, Material UI",
      "Responsive & mobile-first layouts",
      "Performance optimization",
      "Reusable component architecture",
    ],
  },
  {
    title: "Backend & API Development",
    icon: <MdApi />,
    desc:
      "Designing secure and scalable backend systems that power real-world applications.",
    points: [
      "Node.js & Express REST APIs",
      "JWT & cookie-based authentication",
      "MongoDB & Mongoose",
      "Validation, error handling & security",
      "Clean, maintainable code structure",
    ],
  },
  {
    title: "React Native Apps",
    icon: <FaMobile />,
    desc:
      "Developing high-performance mobile apps with native-like experience and reliability.",
    points: [
      "Android & iOS apps",
      "Push notifications (FCM, Notifee)",
      "Custom native modules",
      "Deep linking & app navigation",
      "Play Store ready builds",
    ],
  },
  {
    title: "Notifications & Real-Time Systems",
    icon: <FaBell />,
    desc:
      "Reliable notification systems that work even when apps are closed or devices are offline.",
    points: [
      "Firebase Cloud Messaging (FCM)",
      "Queued & background notifications",
      "Custom notification UI",
      "Delivery tracking & reliability",
      "Event-based triggers",
    ],
  },
  {
    title: "Admin Panels & Dashboards",
    icon: <MdDashboard />,
    desc:
      "Data-driven dashboards built for businesses, admins, and internal teams.",
    points: [
      "Role-based access control",
      "Charts & analytics",
      "Tables, filters & pagination",
      "SEO-friendly CMS panels",
      "Scalable admin architecture",
    ],
  },
  {
    title: "Security & Best Practices",
    icon: <MdSafetyCheck />,
    desc:
      "Enterprise-grade practices to ensure performance, security, and maintainability.",
    points: [
      "Secure authentication flows",
      "API rate limiting & CORS setup",
      "Code quality & standards",
      "Production-ready deployments",
      "Scalable system design mindset",
    ],
  },
];
