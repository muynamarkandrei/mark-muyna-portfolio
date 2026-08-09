import ojtPc from "@/assets/c1e07ea1-d646-4577-b790-17543c6ab41e.jpg.asset.json";
import ojtHardware from "@/assets/c294f773-a935-4630-8515-4df5bbd49efb.jpg.asset.json";
import ojtSetup from "@/assets/ca2f96b3-b497-44e0-9ec0-85363fc0a514.jpg.asset.json";
import ojtTeam from "@/assets/4e71e9d4-40f9-4035-96a4-985583953d00.jpg.asset.json";
import ojtWindows from "@/assets/034dadef-ccc1-4e95-8111-52b7ae21fcae.jpg.asset.json";
import ojtWorkstation from "@/assets/1112f21f-f8df-4d2d-92cb-1b718385703b.jpg.asset.json";
import ojtLaptop from "@/assets/926267ce-d4e6-41bc-ba97-87347c3390f4.jpg.asset.json";
import certificateHandover from "@/assets/accomplishment.jpg.asset.json";
import capstoneChat from "@/assets/ai-chatbot.png.asset.json";

export const PLACEHOLDER = "[TO BE PROVIDED]";

export const profile = {
  name: "Mark Andrei B. Muyna",
  title: "Early-Career IT Professional",
  focus: "IT Support • Troubleshooting • Networking",
  email: "[EMAIL TO BE PROVIDED]",
  github: "",
  linkedin: "",
  resumeFile: "",
};

export const galleryCategories = [
  "PC & Windows",
  "Printers",
  "Networking",
  "Hardware",
  "Software",
  "User Support",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const gallery: {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
}[] = [
  {
    src: ojtPc.url,
    alt: "Working inside an open desktop tower, checking internal cables and drive connections",
    category: "Hardware",
    caption: "Opening a desktop unit to check internal power and SATA connections.",
  },
  {
    src: ojtHardware.url,
    alt: "Unboxing a new laptop unit at the MIS workbench",
    category: "Hardware",
    caption: "Unboxing and inventorying a newly delivered unit before setup.",
  },
  {
    src: ojtSetup.url,
    alt: "Connecting a desktop tower to a wall-mounted monitor and power strip",
    category: "PC & Windows",
    caption: "Reconnecting a workstation and confirming display output after re-imaging.",
  },
  {
    src: ojtWindows.url,
    alt: "Two laptops running through the Windows out-of-box setup screens",
    category: "PC & Windows",
    caption: "Running Windows initial setup on freshly reset units.",
  },
  {
    src: ojtWorkstation.url,
    alt: "Mark at the MIS workbench with several laptops being configured",
    category: "Software",
    caption: "Batch software installation and configuration on staged laptops.",
  },
  {
    src: ojtLaptop.url,
    alt: "A laptop powered on for the first time during unit preparation",
    category: "Software",
    caption: "First boot and driver checks on a unit prepared for deployment.",
  },
  {
    src: ojtTeam.url,
    alt: "Mark with a fellow practicum trainee at the technical workbench",
    category: "User Support",
    caption: "Working alongside the technical team during unit preparation.",
  },
  {
    src: certificateHandover.url,
    alt: "Mark and a fellow trainee receiving practicum certificates from their supervisor",
    category: "User Support",
    caption: "Completion of the practicum with the MIS technical team.",
  },
];

export const capstoneImages = [
  {
    src: capstoneChat.url,
    alt: "Capstone e-commerce homepage with the AI shopping assistant panel open",
    caption: "Homepage with the AI assistant handling product and order questions.",
  },
];

export const skillGroups = [
  {
    title: "IT Support & Troubleshooting",
    items: [
      "Windows setup and configuration",
      "PC troubleshooting",
      "Hardware troubleshooting",
      "Software / application installation",
      "Printer setup and troubleshooting",
      "User support",
      "Basic technical documentation",
    ],
  },
  {
    title: "Networking",
    items: [
      "Basic LAN setup",
      "RJ45 / LAN cable preparation",
      "LAN connectivity testing",
      "IP address identification",
      "Basic IP configuration",
      "Ping and connectivity testing",
      "Basic router and switch concepts",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "Software & Applications",
    items: [
      "Microsoft Office",
      "Outlook (including PST import / export)",
      "SAP (client setup)",
      "AnyDesk",
      "IP Messenger",
      "Web browsers",
      "Figma",
    ],
  },
  {
    title: "Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Three.js",
      "Basic web development concepts",
      "AI-assisted development workflows",
    ],
  },
];

export const ojtAreas = [
  {
    title: "Computer & Windows Support",
    points: [
      "Factory reset and operating system setup",
      "Windows configuration for deployed units",
      "Microsoft Office installation",
      "Software and application setup",
      "Hardware troubleshooting",
      "General computer maintenance",
    ],
  },
  {
    title: "Printer Support",
    points: [
      "Printer installation and configuration",
      "TCP/IP printer configuration",
      "Printer troubleshooting",
      "Printing and scanning assistance",
      "Instructing users on printer operation",
      "Explaining printer issues and the fix applied",
    ],
  },
  {
    title: "Networking",
    points: [
      "Creating and testing LAN cables",
      "RJ45 cable preparation",
      "LAN connectivity testing",
      "Identifying computer IP addresses",
      "Command-line connectivity tests (ping, ipconfig)",
      "Wireless connectivity troubleshooting",
      "Basic router reset and configuration tasks",
    ],
  },
  {
    title: "Application & System Support",
    points: [
      "SAP client setup",
      "Outlook PST import and export",
      "AnyDesk for remote assistance",
      "IP Messenger",
      "Microsoft Office",
      "Browser and general software installation",
    ],
  },
];

export const caseStudies = [
  {
    category: "Printer Issue",
    title: "Network printer stopped responding for a department",
    problem: PLACEHOLDER,
    investigation: PLACEHOLDER,
    cause: PLACEHOLDER,
    solution: PLACEHOLDER,
    result: PLACEHOLDER,
    learned: PLACEHOLDER,
  },
  {
    category: "Network Connectivity",
    title: "Workstation with no LAN connectivity",
    problem: PLACEHOLDER,
    investigation: PLACEHOLDER,
    cause: PLACEHOLDER,
    solution: PLACEHOLDER,
    result: PLACEHOLDER,
    learned: PLACEHOLDER,
  },
  {
    category: "Windows / PC Setup",
    title: "Unit prepared for redeployment after a reset",
    problem: PLACEHOLDER,
    investigation: PLACEHOLDER,
    cause: PLACEHOLDER,
    solution: PLACEHOLDER,
    result: PLACEHOLDER,
    learned: PLACEHOLDER,
  },
  {
    category: "Software / Application Issue",
    title: "Mailbox data migration between units",
    problem: PLACEHOLDER,
    investigation: PLACEHOLDER,
    cause: PLACEHOLDER,
    solution: PLACEHOLDER,
    result: PLACEHOLDER,
    learned: PLACEHOLDER,
  },
];

export const ciscoLabs = [
  {
    name: "Cisco Packet Tracer Home Lab 01",
    objective: PLACEHOLDER,
    topology: PLACEHOLDER,
    devices: PLACEHOLDER,
    configuration: PLACEHOLDER,
    testing: PLACEHOLDER,
    learned: PLACEHOLDER,
    github: "",
  },
  {
    name: "Cisco Packet Tracer Home Lab 02",
    objective: PLACEHOLDER,
    topology: PLACEHOLDER,
    devices: PLACEHOLDER,
    configuration: PLACEHOLDER,
    testing: PLACEHOLDER,
    learned: PLACEHOLDER,
    github: "",
  },
];

export const certifications: {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}[] = [];
