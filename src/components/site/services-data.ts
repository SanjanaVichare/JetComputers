import {
  Cpu, Wrench, Network, Server, LifeBuoy, Globe, Smartphone, Code2,
  ShieldCheck, Building2, CalendarClock, MonitorCog, Disc3, ShieldAlert, Mail,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Computer Hardware Sales",
    description: "Genuine desktops, laptops, components and accessories from trusted brands.",
    icon: Cpu,
    points: ["Branded & assembled systems", "Workstations & peripherals", "Bulk procurement for offices"],
  },

  {
    title: "Software Sales & Installation",
    description: "Licensed software procurement with proper installation and activation.",
    icon: Disc3,
    points: ["Productivity & design tools", "Accounting software", "License management"],
  },
  {
    title: "Annual Maintenance Contracts",
    description: "Predictable monthly costs with proactive maintenance and priority response.",
    icon: CalendarClock,
    points: ["Preventive checks", "Hardware & software AMC", "Discounted spare parts"],
  },
  {
    title: "Networking Setup",
    description: "Reliable wired and wireless networks tuned for performance and security.",
    icon: Network,
    points: ["Structured cabling", "Wi-Fi planning & access points", "Routers, switches, firewalls"],
  },
  {
    title: "Server Setup",
    description: "On-premise and hybrid server deployments configured to grow with your business.",
    icon: Server,
    points: ["File, print & domain servers", "Backups & disaster recovery", "Virtualization & RAID"],
  },
  {
    title: "IT Support",
    description: "Friendly, technical support — remote or on-site — when you need it most.",
    icon: LifeBuoy,
    points: ["Helpdesk & ticketing"],
  },
  {
    title: "Office IT Setup",
    description: "Move-in ready IT for new offices — workstations, network, printers and security.",
    icon: Building2,
    points: ["Site survey & planning", "End-to-end deployment", "Documentation & handover"],
  },
  {
    title: "Antivirus Installation",
    description: "Enterprise-grade endpoint protection deployed across your devices.",
    icon: ShieldAlert,
    points: ["Centralized console", "Renewals & monitoring"],
  },
  {
    title: "IT Auditing & Security Control",
    description: "Enterprise-focused monitoring, access control and endpoint security solutions for modern workplaces.",
    icon: ShieldCheck,
    points: [
      "Website blacklisting & whitelisting",
      "Email access control & whitelisting",
      "USB / pendrive blocking policies",
      "Screenshot restriction & monitoring",
    ],
  },
  {
    title: "Website Development",
    description: "Modern, responsive websites that load fast and represent your brand well.",
    icon: Globe,
    points: ["Business & e-commerce sites", "SEO & analytics ready", "CMS & hosting setup"],
  },
  {
    title: "App Development",
    description: "Native-feeling mobile apps for Android and iOS, designed and built end-to-end.",
    icon: Smartphone,
    points: ["UI/UX design", "API integrations", "Play Store / App Store delivery"],
  },
  {
    title: "Software Development",
    description: "Custom business software, automations and internal tools tailored to your workflows.",
    icon: Code2,
    points: ["Inventory & billing apps", "Workflow automation", "Database design"],
  },
];

export const whyChooseUs = [
  { title: "Practical results", body: "Solutions that actually fit your team — not over-engineered, not under-built.", icon: ShieldCheck },
  { title: "Long-term support", body: "We stay involved after delivery, so your IT keeps working as your business grows.", icon: LifeBuoy },
  { title: "Single point of contact", body: "From hardware to software to networks — one trusted partner for everything IT.", icon: Building2 },
  { title: "Transparent pricing", body: "Clear quotes, honest advice, and no surprise charges on bills or renewals.", icon: CalendarClock },
];
