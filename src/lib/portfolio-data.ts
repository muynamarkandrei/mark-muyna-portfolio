// Hardware gallery images
import ojtPc from "@/assets/portfolio/gallery/hardware/troubleshooting-system-unit.jpg";
import ojtHardware from "@/assets/portfolio/gallery/hardware/sample-equipment.jpg";
import miniUnit from "@/assets/portfolio/gallery/hardware/mini-system-unit.jpg";
import printerTest from "@/assets/portfolio/gallery/hardware/printer-test.jpg";
import configureRouter from "@/assets/portfolio/gallery/hardware/configure-router.jpg";
import fixLanHub from "@/assets/portfolio/gallery/hardware/fix-lan-hub.jpg";

// PC & Windows gallery images
import ojtSetup from "@/assets/portfolio/gallery/pc-windows/setup-new-devices.jpg";
import ojtWindows from "@/assets/portfolio/gallery/pc-windows/office.jpg";

// Software gallery images
import ojtWorkstation from "@/assets/portfolio/gallery/software/setup-hr.jpg";
import ojtLaptop from "@/assets/portfolio/gallery/software/setup-switch.jpg";

// User Support gallery images
import ojtTeam from "@/assets/portfolio/gallery/user-support/rfid-setup.jpg";
import certificateHandover from "@/assets/portfolio/gallery/user-support/accomplishment.jpg";

// Networking lab screenshots
import dhcpConfig from "@/assets/portfolio/gallery/networking/dhcp_config.png";
import physicalTopology from "@/assets/portfolio/gallery/networking/physical_topology.png";
import wirelessTopology from "@/assets/portfolio/gallery/networking/topology.png";
import routerInterfaces from "@/assets/portfolio/gallery/networking/router_interfaces.png";
import pingTest from "@/assets/portfolio/gallery/networking/ping_test.png";

// Capstone images
import capstoneChat from "@/assets/portfolio/capstone/ai-chatbot.png";
import capstoneLanding from "@/assets/portfolio/capstone/landing-page.png";
import capstone3d from "@/assets/portfolio/capstone/3d-capstone.png";

// Profile image
import professionalHeadshot from "@/assets/portfolio/profile/headshot.png";

export const PLACEHOLDER = "[TO BE PROVIDED]";

export const profile = {
  name: "Mark Andrei B. Muyna",
  title: "Early-Career IT Professional",
  focus: "IT Support • Troubleshooting • Networking",
  email: "markandreimuyna31@gmail.com",
  github: "https://github.com/muynamarkandrei",
  linkedin: "",
  resumeFile: "",
  profileImage: professionalHeadshot,
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
  // Hardware category
  {
    src: ojtPc,
    alt: "Working inside an open desktop tower, checking internal cables and drive connections",
    category: "Hardware",
    caption: "Troubleshooting and opening a desktop unit to inspect internal components.",
  },
  {
    src: ojtHardware,
    alt: "Sample equipment and hardware components at the workbench",
    category: "Hardware",
    caption: "Examining and preparing hardware equipment before deployment.",
  },
  {
    src: miniUnit,
    alt: "Mini system unit being configured",
    category: "Hardware",
    caption: "Setting up a compact mini system unit.",
  },
  {
    src: printerTest,
    alt: "Testing printer connectivity and functionality",
    category: "Hardware",
    caption: "Conducting printer tests and connectivity verification.",
  },
  {
    src: configureRouter,
    alt: "Configuring network router settings",
    category: "Hardware",
    caption: "Router configuration and network device setup.",
  },
  {
    src: fixLanHub,
    alt: "Repairing and fixing a LAN hub",
    category: "Hardware",
    caption: "Troubleshooting and repairing network connectivity equipment.",
  },
  // PC & Windows category
  {
    src: ojtSetup,
    alt: "Connecting a desktop tower to a wall-mounted monitor and power strip",
    category: "PC & Windows",
    caption: "Setting up a workstation with proper connections and display configuration.",
  },
  {
    src: ojtWindows,
    alt: "Office setup with desktop computers",
    category: "PC & Windows",
    caption: "Complete office workstation environment setup.",
  },
  // Software category
  {
    src: ojtWorkstation,
    alt: "HR department setup with software installation",
    category: "Software",
    caption: "Software configuration and installation for department workstations.",
  },
  {
    src: ojtLaptop,
    alt: "Network switch configuration and setup",
    category: "Software",
    caption: "Switch installation and network topology configuration.",
  },
  // User Support category
  {
    src: ojtTeam,
    alt: "Working with RFID technology setup",
    category: "User Support",
    caption: "RFID system implementation and technical support.",
  },
  {
    src: certificateHandover,
    alt: "Practicum completion and certificate recognition",
    category: "User Support",
    caption: "Completion of the practicum with achievement recognition.",
  },
  // Printers category
  {
    src: printerTest,
    alt: "Conducting printer connectivity testing and troubleshooting",
    category: "Printers",
    caption: "Printer tests and connectivity verification.",
  },
];

export const capstoneImages = [
  {
    src: capstoneChat,
    alt: "Capstone e-commerce homepage with the AI shopping assistant panel open",
    caption: "Homepage with the AI assistant handling product and order questions.",
  },
  {
    src: capstoneLanding,
    alt: "Capstone project landing page design",
    caption: "Landing page showcasing the main features and call-to-action.",
  },
  {
    src: capstone3d,
    alt: "3D capstone project visualization or component",
    caption: "3D model or interactive component in the capstone project.",
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
    problem: "A network-connected printer in the Finance department became unresponsive, preventing the team from printing critical documents and disrupting business operations.",
    investigation: "Checked the printer's physical connection, power status, and network connectivity. Verified the printer's IP address and attempted to ping it from a workstation. Reviewed printer queue and print spooler status on the connected computers.",
    cause: "The printer's network interface was disconnected due to a loose Ethernet cable at the back of the device. The network cable had shifted from its secure position.",
    solution: "Reseated the RJ45 Ethernet cable firmly into the printer's network port and verified the connection indicator lights turned on. Cleared the print queue and restarted the print spooler service on affected workstations. Confirmed connectivity by sending a test print job.",
    result: "The printer regained full network connectivity and users were able to resume normal printing operations within 15 minutes. All queued print jobs were successfully processed.",
    learned: "Physical connectivity issues are often the root cause of network device problems. Always verify cable connections before investigating software-related issues. The importance of proper cable management and periodic visual inspection of network connections.",
  },
  {
    category: "Network Connectivity",
    title: "Workstation with no LAN connectivity",
    problem: "A user's desktop workstation could not connect to the company network, preventing access to shared resources, email, and internet connectivity.",
    investigation: "Checked the physical Ethernet connection at the workstation and network switch. Verified that the network card was detected in Device Manager. Ran ipconfig to check if the workstation had obtained an IP address. Tested connectivity using ping commands to the gateway and DHCP server.",
    cause: "The workstation had not received an IP address from the DHCP server. Upon further investigation, the network card driver was outdated and not properly communicating with the switch.",
    solution: "Updated the network adapter driver from the manufacturer's website. Renewed the DHCP lease by running 'ipconfig /release' and 'ipconfig /renew'. Verified the workstation received a valid IP address in the 192.168.x.x range matching the network subnet.",
    result: "The workstation successfully reconnected to the network and regained access to all shared resources and internet connectivity. The user was able to resume work immediately.",
    learned: "Network driver updates are critical for maintaining stable connectivity. DHCP troubleshooting requires both hardware verification and software configuration checks. The importance of understanding TCP/IP fundamentals for effective troubleshooting.",
  },
  {
    category: "Windows / PC Setup",
    title: "Unit prepared for redeployment after a factory reset",
    problem: "A laptop needed to be wiped and prepared for redeployment to a new user after being replaced in its previous role.",
    investigation: "Assessed the current state of the device, including existing Windows installation, applications, and user data. Identified all required business applications and drivers needed for the new user.",
    cause: "The device required a fresh Windows installation and software configuration to ensure a clean environment free of previous user data and unnecessary applications.",
    solution: "Performed a factory reset using Windows' built-in reset feature. Installed Windows 10 from installation media and applied all latest Windows updates. Installed required business software: Microsoft Office, SAP client, AnyDesk, IP Messenger, and printer drivers. Configured network settings and verified connectivity. Created a new user account with appropriate permissions.",
    result: "The laptop was fully prepared and ready for deployment to the new user with all required software installed and tested. The device passed all connectivity and functionality checks.",
    learned: "The importance of standardized deployment procedures for maintaining consistent device configurations. Windows installation and driver installation order affects overall system stability. Proper user account configuration and permissions management are essential for security and productivity.",
  },
  {
    category: "Software / Application Issue",
    title: "Mailbox data migration between units",
    problem: "A user's Outlook mailbox data needed to be transferred from an old laptop to a new workstation to ensure continuity of email and calendar access.",
    investigation: "Located the user's Outlook PST file on the old laptop. Checked the mailbox size and identified all Outlook folders that needed to be migrated. Verified the new workstation had Outlook installed and configured.",
    cause: "Standard mailbox migration requirement when transitioning users to new equipment. PST export/import is the standard method for preserving email history.",
    solution: "Exported the mailbox from the old laptop to a PST file using Outlook's export function. Transferred the PST file to the new workstation via USB or network share. Imported the PST file into Outlook on the new workstation. Verified all emails, contacts, and calendar items were successfully transferred.",
    result: "The user's mailbox was successfully migrated with all historical data preserved. The user could immediately access all previous emails and calendar items on the new workstation.",
    learned: "Outlook PST management is critical for user continuity during equipment transitions. PST file sizes can become quite large, requiring careful planning for transfer. The importance of backing up email data and understanding mailbox migration procedures for smooth user transitions.",
  },
];

export const ciscoLabs = [
  {
    name: "Cisco Packet Tracer Home Lab 01 - LAN Network Design",
    objective: "Design and configure a functional LAN network with multiple device types including routers, switches, PCs, laptops, and printers to demonstrate understanding of network architecture and device communication.",
    topology: "Star topology with a central router (Router1) connected to a Layer 2 switch (Switch0). The switch connects to multiple end devices: PC0, Laptop0, and Printer0, enabling inter-device communication.",
    devices: "1 Cisco 2911 Router, 1 Catalyst 2960 Switch, 2 PC Devices, 1 Laptop, 1 Network Printer",
    configuration: "Configured Router1 with IP address 192.168.1.1/24 and DHCP pool for the 192.168.1.0/24 network. Set up DHCP server on the router to automatically assign IP addresses to connected devices. Configured all end devices to obtain IP addresses via DHCP. Verified connectivity between all devices.",
    testing: "Performed ping tests between all devices to verify connectivity. Tested DHCP functionality by checking leased IP addresses on the router. Verified printer and PC could communicate through the switch. Confirmed that all devices successfully acquired IP addresses in the correct subnet range.",
    learned: "Understanding DHCP server configuration and IP address management. Network device connectivity relies on proper IP configuration and routing. The role of switches in creating network segments. Practical implementation of network design concepts in Cisco Packet Tracer.",
    github: "",
    image: physicalTopology,
  },
  {
    name: "Cisco Packet Tracer Home Lab 02 - Wireless Network Integration",
    objective: "Extend the LAN network by integrating a wireless access point to provide connectivity options and demonstrate understanding of wireless networking fundamentals and mixed wired/wireless network architecture.",
    topology: "Wired LAN connected to a wireless access point. Router connects to a switch and access point. Access point provides wireless connectivity to laptop and mobile devices while maintaining wired connection to printers and desktops.",
    devices: "1 Cisco 2911 Router, 1 Catalyst 2960 Switch, 1 Wireless Access Point (2960-24TT), 2 PCs, 1-2 Laptops with wireless adapters, 1 Network Printer, 1 Wireless Device",
    configuration: "Configured router and DHCP as in Lab 01. Added wireless access point with SSID 'HOME-WIFI' and set to Infrastructure Mode. Configured DHCP pool for wireless clients (192.168.1.0/24). Verified access point connectivity to the main network through the switch.",
    testing: "Tested wireless client connectivity to the access point. Verified wireless devices could obtain IP addresses from DHCP. Tested connectivity between wired and wireless devices using ping. Confirmed printer accessibility from both wired and wireless clients. Tested signal strength and link quality across the wireless network.",
    learned: "Wireless network configuration and SSID broadcasting. Integration of wireless and wired networks in a single infrastructure. DHCP dynamic assignment for wireless clients. The importance of proper access point placement for signal coverage. Security considerations in wireless networks and authentication mechanisms.",
    github: "",
    image: wirelessTopology,
  },
];

export const certifications: {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}[] = [
  {
    name: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/Computer_Hardware_Basics_certificate_markandreimuyna31-gmail-com_d594f38d-b4c4-426b-8d76-91ac058b6d50.pdf",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/intro_cyber.pdf",
  },
  {
    name: "Introduction to Cybersecurity v2",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/intro-cyber2.pdf",
  },
  {
    name: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/intro_packet.pdf",
  },
  {
    name: "IT Customer Support",
    issuer: "Google / Coursera",
    date: "2024",
    link: "/assets/portfolio/certificates/it-customer-support.pdf",
  },
  {
    name: "Networks in the Cloud",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/networks_in_the_cloud.pdf",
  },
  {
    name: "Networks, Threat & Security",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/networks_threat_and_security.pdf",
  },
  {
    name: "Cloud Security Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/cloud_security_fundamentals.pdf",
  },
  {
    name: "Data Center Security",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "/assets/portfolio/certificates/data_center_security.pdf",
  },
  {
    name: "Salesforce Administration",
    issuer: "Salesforce / Trailhead",
    date: "2024",
    link: "/assets/portfolio/certificates/salesforce.pdf",
  },
];
