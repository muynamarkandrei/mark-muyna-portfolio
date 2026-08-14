// Hardware gallery images
import ojtPc from "@/assets/portfolio/gallery/hardware/troubleshooting-system-unit.jpg";
import ojtHardware from "@/assets/portfolio/gallery/hardware/sample-equipment.jpg";
import miniUnit from "@/assets/portfolio/gallery/hardware/mini-system-unit.jpg";
import printerTest from "@/assets/portfolio/gallery/hardware/printer-test.jpg";
import insideTower from "@/assets/portfolio/gallery/hardware/c1e07ea1-d646-4577-b790-17543c6ab41e.jpg";
import unboxingLaptop from "@/assets/portfolio/gallery/hardware/c294f773-a935-4630-8515-4df5bbd49efb.jpg";
import acerPredator from "@/assets/portfolio/gallery/hardware/926267ce-d4e6-41bc-ba97-87347c3390f4.jpg";

// PC & Windows gallery images
import ojtSetup from "@/assets/portfolio/gallery/pc-windows/setup-new-devices.jpg";
import ojtWindows from "@/assets/portfolio/gallery/pc-windows/office.jpg";
import workstationWall from "@/assets/portfolio/gallery/pc-windows/ca2f96b3-b497-44e0-9ec0-85363fc0a514.jpg";
import windowsSetup from "@/assets/portfolio/gallery/pc-windows/034dadef-ccc1-4e95-8111-52b7ae21fcae.jpg";
import stagingLaptops from "@/assets/portfolio/gallery/pc-windows/1112f21f-f8df-4d2d-92cb-1b718385703b.jpg";
import cleanStation from "@/assets/portfolio/gallery/pc-windows/clean-station.jpg";

// Software gallery images
import ojtWorkstation from "@/assets/portfolio/gallery/software/setup-hr.jpg";
import setupSwitch from "@/assets/portfolio/gallery/software/setup-switch.jpg";
import softwareConfig from "@/assets/portfolio/gallery/software/f801b3fa-f7b7-41e1-afe2-1b0a97460b19.jpg";

// User Support gallery images
import ojtTeam from "@/assets/portfolio/gallery/user-support/rfid-setup.jpg";
import certificateHandover from "@/assets/portfolio/gallery/user-support/accomplishment.jpg";
import teamWorkbench from "@/assets/portfolio/gallery/user-support/4e71e9d4-40f9-4035-96a4-985583953d00.jpg";
import certificateGroup from "@/assets/portfolio/gallery/user-support/415df4e2-981c-4d32-8b45-3db4a6d6f9e9.jpg";

// Networking gallery images
import networkSwitch from "@/assets/portfolio/gallery/software/e650ca4e-d1c2-4194-8eb4-6982b4a0d6e7.jpg";
import configureRouter from "@/assets/portfolio/gallery/hardware/configure-router.jpg";
import fixLanHub from "@/assets/portfolio/gallery/hardware/fix-lan-hub.jpg";

// Networking lab screenshots
import physicalTopology from "@/assets/portfolio/gallery/networking/physical_topology.png";
import wirelessTopology from "@/assets/portfolio/gallery/networking/topology.png";

// Capstone images
import capstoneChat from "@/assets/portfolio/capstone/ai-chatbot.png";
import capstoneLanding from "@/assets/portfolio/capstone/landing-page.png";
import capstone3d from "@/assets/portfolio/capstone/3d-capstone.png";
import capstoneMessenger from "@/assets/portfolio/capstone/Messenger_creation_18634BB8-9CF6-4586-A72E-3995061642DF.jpeg";

// Profile image
import professionalHeadshot from "@/assets/portfolio/profile/headshot.png";

export const PLACEHOLDER = "[TO BE PROVIDED]";

export const profile = {
  name: "Mark Andrei B. Muyna",
  title: "Aspiring IT Support & Infrastructure Professional",
  focus: "IT Support • Troubleshooting • Networking",
  email: "markandreimuyna31@gmail.com",
  phone: "0999 813 6163",
  location: "Santa Maria, Bulacan, Philippines",
  github: "https://github.com/muynamarkandrei",
  linkedin: "https://www.linkedin.com/in/mark-andrei-muyna-4a7381297/",
  labRepo: "https://github.com/muynamarkandrei/cisco-packet-tracer-home-lab",
  resumeFile: "/resume/Mark-Andrei-Muyna-Resume.pdf",
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
    alt: "Capstone PC build configurator with a 3D component viewer and compatibility checks",
    caption: "PC build configurator with 3D component visualization and part selection.",
  },

];

export const skillGroups = [
  {
    title: "IT Support & Troubleshooting",
    items: [
      "Windows 10 / 11 installation and configuration",
      "Windows deployment for new units (OOBE setup, account naming, activation)",
      "PC and hardware troubleshooting",
      "Peripheral installation (monitors, keyboards, mice, scanners)",
      "Software and application installation",
      "Printer and scanner setup and troubleshooting",
      "End-user technical support and walkthroughs",
      "Basic technical documentation and logbooks",
    ],
  },
  {
    title: "Networking",
    items: [
      "TCP/IP and IPv4 fundamentals",
      "LAN troubleshooting",
      "RJ45 cable termination and testing",
      "Network printer configuration (TCP/IP ports)",
      "Basic router configuration",
      "Ping / ipconfig connectivity verification",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "Software & Applications",
    items: [
      "Microsoft Office Suite",
      "Microsoft Outlook (configuration and mailbox migration)",
      "SAP (client setup)",
      "AnyDesk",
      "IP Messenger",
      "Adobe Acrobat Pro",
      "Figma",
    ],
  },
  {
    title: "Programming & Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Basic web development concepts",
      "AI-assisted development workflows",
    ],
  },
];

export const ojtAreas = [
  {
    title: "Windows Deployment & PC Setup",
    points: [
      "Completed Windows setup on new laptops and desktops, including bypassing the online account requirement with oobe\\bypassnro",
      "Renamed accounts to the company standard (<Department>-<First Initial><Surname>) and created a separate Admin IT account",
      "Removed preinstalled antivirus and conflicting Microsoft products before installing licensed Microsoft Office and applying the product key",
      "Installed the standard application set: SAP, Microsoft Office, company security software, AnyDesk, WinRAR, IP Messenger, browser",
      "Verified unit specifications against the inventory records",
      "Set up mini PCs and reused units for reassignment to new users",
    ],
  },
  {
    title: "Printer & Scanner Support",
    points: [
      "Installed network printers by adding a TCP/IP port using the printer's own IP address, then printing a test page",
      "Connected multiple printers to a single workstation and renamed them for easy identification",
      "Set up wireless printers and scanners for the HR department, including driver-only selective installs",
      "Configured scanner shortcuts in Capture v5 Pro (300 DPI, simplex default, custom output path and file type)",
      "Reset Epson waste ink pad counters with the adjustment program, then ran power cleaning and test prints",
      "Diagnosed slow or unreachable printers with ping checks, restarts, and print quality tests",
    ],
  },
  {
    title: "Networking & Cabling",
    points: [
      "Cut, terminated, and crimped RJ45 LAN cables (10 m and 20 m runs) following the standard wire order",
      "Tested finished cables with a network tester and peer-to-peer connections, re-terminating ends when a link failed",
      "Reorganized hub wiring, removed dead cables, and rerouted runs away from chair wheels",
      "Connected printers and telephones to the network over LAN cabling and confirmed the link",
      "Assisted with a department Wi-Fi reset, coordinating with the network admin and reconnecting every affected device",
      "Restored a blocked user's Wi-Fi access through the company's web-based network management tool",
    ],
  },
  {
    title: "Application & User Support",
    points: [
      "Configured Microsoft Outlook and resolved send/receive failures",
      "Installed Adobe Acrobat Pro with serial activation for an affiliate office",
      "Set up IP Messenger with the correct user name and department",
      "Installed a payroll application and checked a KIOSK system unit",
      "Set up and troubleshot RFID book-security scanners for the library, adjusting range and alert settings",
      "Walked employees through printing and scanning so they could repeat the steps on their own",
    ],
  },
];

export const caseStudies = [
  {
    category: "Software / Email",
    title: "Outlook stopped sending and receiving mail for a user",
    problem:
      "An employee reported that documents were not sending from Outlook, and that no new email had arrived for a long time.",
    investigation:
      "Reported the issue to my supervisor, then checked the account from the web mail interface first to see whether the problem was the mailbox or the client. Web mail worked normally, so I moved to the user's device and reviewed the Outlook account settings.",
    cause: "The saved account password had been removed from the Outlook profile, so the client could not authenticate.",
    solution:
      "Re-entered the account password on the user's device, then restarted Outlook (ending the task in Task Manager where it did not close cleanly).",
    result: "Sending and receiving worked again on the user's own device.",
    learned:
      "Checking web mail first separates a mailbox problem from a client problem and saves time before touching the user's machine.",
  },
  {
    category: "Hardware",
    title: "Desktop unit powered on with a repeating beep and no display",
    problem: "A reported system unit would not display anything, and on power-up it produced a continuous alternating beep.",
    investigation:
      "Opened the case, reconnected the power cable and peripherals before powering on so the system could detect them, then listened to the beep pattern on start-up.",
    cause: "The RAM was not seated properly in its slot, which the beep pattern signalled.",
    solution:
      "Interrupted power immediately, removed the RAM module and reseated it until it clicked, then powered on again — repeating the reseat until the beeping stopped.",
    result: "The unit posted and displayed normally, and I kept observing it afterwards to confirm it did not shut down again.",
    learned:
      "Beep codes are a real diagnostic signal, and cutting power immediately protects the hardware while you check the module.",
  },
  {
    category: "Printer / Wireless",
    title: "Wireless printer unreachable from a workstation",
    problem: "An employee could not print to a wireless printer that was otherwise working for other users.",
    investigation:
      "Confirmed the printer was online and serving other users, then checked the network state of the reporting workstation itself.",
    cause: "Airplane mode was switched on on the workstation, so it could not reach the printer over the network.",
    solution: "Turned airplane mode off, confirmed the wireless connection, and sent a test print.",
    result: "The employee could print wirelessly again.",
    learned:
      "When one user is affected and everyone else is fine, the fault is almost always on that endpoint — check the client before the shared device.",
  },
  {
    category: "Networking",
    title: "Wi-Fi access denied for an employee's device",
    problem: "An employee's device was refused a connection to the company wireless network.",
    investigation:
      "Checked the account and device against the company's web-based network management framework, where connected and denied users are listed.",
    cause: "The user had been flagged with a blocked status in the network management tool.",
    solution: "Removed the blocked status for that user so the denied-access flag was cleared, then had them reconnect.",
    result: "The device connected to the wireless network again.",
    learned:
      "Not every connectivity issue is physical — access control on the network side can look exactly like a broken connection to the user.",
  },
  {
    category: "Printer Maintenance",
    title: "Epson printer stopped printing with a full waste ink pad counter",
    problem: "A printer refused to print and reported a maintenance condition rather than a paper or connectivity error.",
    investigation:
      "Opened the Epson adjustment program, selected the printer model and port, and used the check function to read the waste ink pad counter values.",
    cause: "The waste ink pad counter had reached 100%, which locks the printer until it is reset.",
    solution:
      "Initialised the counter, finished the routine, powered the printer off and on again, then ran a power cleaning cycle and a test print — repeating the cleaning where quality was still poor, up to the limit before escalating to technical repair.",
    result: "The printer resumed printing at acceptable quality without being sent out for repair.",
    learned:
      "Some printer faults are counters and maintenance states, not failures — and there is a point where escalation is the right call.",
  },
  {
    category: "Software Installation",
    title: "Application installer blocked by the system on a user's PC",
    problem:
      "An employee needed an application installed, but the installation was blocked on their machine and would not complete.",
    investigation:
      "Worked through the installation steps and confirmed the block was coming from the system rather than the installer files, and that a password-protected step was involved.",
    cause: "The system prevented the installation from completing, and I could not resolve the block during that visit.",
    solution:
      "Set the employee up with an alternative application so they could keep working, and installed the password-protected software they separately needed while the original issue stayed open for follow-up.",
    result:
      "The employee was not left blocked, and the unresolved installation was reported rather than quietly dropped.",
    learned:
      "Keeping the user productive matters even when the root cause is still open, and it is better to say a fix is pending than to overstate it.",
  },
];

export const ciscoLabs = [
  {
    name: "Lab 01 — Home LAN (wired)",
    objective:
      "Build a small wired home-style LAN in Packet Tracer and get every end device addressed automatically by the router, then verify communication between them.",
    topology:
      "Router1 (2911) connects to Switch0 (2960-24TT) on GigabitEthernet0/1, and the switch connects PC0, Laptop0, and Printer0 — a single 192.168.1.0/24 broadcast domain.",
    devices: "1 × Cisco 2911 router, 1 × Cisco 2960-24TT switch, 1 × PC, 1 × laptop, 1 × network printer",
    configuration:
      "Assigned 192.168.1.1/24 manually to GigabitEthernet0/1 and brought the interface up, then configured a DHCP pool on the router for the 192.168.1.0/24 network with 192.168.1.1 as the default router. End devices were set to DHCP.",
    testing:
      "Verified interface state with `show ip interface brief`, confirmed the switch as a neighbour with `show cdp neighbors` (2960 on Fas0/4), checked the DHCP bindings on the router and the addresses received on the PC, and pinged between hosts and the printer.",
    learned:
      "How a router acts as the DHCP server for a single LAN, why the LAN interface must be configured and up first, and how to confirm each layer — interface, neighbour, address, reachability — instead of assuming it works.",
    github: "https://github.com/muynamarkandrei/cisco-packet-tracer-home-lab/tree/main/01-home-lan",
    image: physicalTopology,
  },
  {
    name: "Lab 02 — Wireless LAN",
    objective:
      "Extend the wired lab with a wireless access point so a laptop joins the same network over Wi-Fi and still receives its address from the router's DHCP pool.",
    topology:
      "Router0 (2911) to Switch0 (2960-24TT), with PC0 wired to the switch and an AccessPoint-PT connected to the same switch. Laptop1 associates to the access point wirelessly.",
    devices:
      "1 × Cisco 2911 router, 1 × Cisco 2960-24TT switch, 1 × AccessPoint-PT, 1 × PC (wired), 1 × laptop fitted with a WPC300N Wireless-N notebook adapter",
    configuration:
      "Configured a DHCP pool named HOME-WIFI on the router for 192.168.1.0/24 with default router 192.168.1.1, connected the access point to the switch, and swapped the laptop's default module for the WPC300N wireless adapter so it could associate with the access point.",
    testing:
      "Confirmed on the laptop's wireless monitor that it was associated in Infrastructure Mode at 2.4 GHz with full signal strength and link quality, verified it received an address from the HOME-WIFI pool, and pinged between the wireless laptop and the wired host.",
    learned:
      "That a wireless client needs the right adapter module before it can associate at all, and that the access point simply bridges wireless clients into the same LAN and DHCP scope as the wired devices.",
    github: "https://github.com/muynamarkandrei/cisco-packet-tracer-home-lab/tree/main/02-wireless-lan",
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
    date: "Aug 2, 2026",
    link: "/certificates/Computer_Hardware_Basics_certificate_markandreimuyna31-gmail-com_d594f38d-b4c4-426b-8d76-91ac058b6d50.pdf",
  },
  {
    name: "IT Customer Support Basics",
    issuer: "Cisco Networking Academy",
    date: "Feb 5, 2026",
    link: "/certificates/it-customer-support.pdf",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy (DICT-ITU DTC Initiative)",
    date: "Apr 18, 2025",
    link: "/certificates/intro_cyber.pdf",
  },
  {
    name: "Introduction to Packet Tracer Exam",
    issuer: "Cisco Networking Academy",
    date: "May 27, 2024",
    link: "/certificates/intro_packet.pdf",
  },
  {
    name: "Cloud Security Fundamentals",
    issuer: "Palo Alto Networks",
    date: "Jul 27, 2026",
    link: "/certificates/cloud_security_fundamentals.pdf",
  },
  {
    name: "Network Threats and Security",
    issuer: "Palo Alto Networks",
    date: "Jul 27, 2026",
    link: "/certificates/networks_threat_and_security.pdf",
  },
  {
    name: "Data Center Security",
    issuer: "Palo Alto Networks",
    date: "Jul 28, 2026",
    link: "/certificates/data_center_security.pdf",
  },
  {
    name: "Networks in the Cloud",
    issuer: "Palo Alto Networks",
    date: "Jul 30, 2026",
    link: "/certificates/networks_in_the_cloud.pdf",
  },
  {
    name: "Salesforce Supported Virtual Internship Program 2025 — Philippines",
    issuer: "SmartBridge (Salesforce partner)",
    date: "Jan 8, 2026",
    link: "/certificates/salesforce.pdf",
  },
];

