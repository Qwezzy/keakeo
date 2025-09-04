import {
  Building2,
  FileText,
  FileSignature,
  BadgePercent,
  FileBadge2,
  Archive,
  FileEdit,
  CalendarClock,
  HardHat,
  HeartHandshake,
  Truck,
  Laptop,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Company Registration",
    description: "Register your new company (Pty) Ltd with CIPC.",
    longDescription: "We handle the entire process of registering your new private company with the Companies and Intellectual Property Commission (CIPC), ensuring all legal requirements are met for a smooth start.",
    icon: Building2,
  },
  {
    title: "CSD Report",
    description: "Central Supplier Database registration and report.",
    longDescription: "Get registered on the government's Central Supplier Database (CSD) to become eligible for government tenders. We'll manage your profile and provide you with a comprehensive CSD report.",
    icon: FileText,
  },
  {
    title: "B-BBEE Affidavit",
    description: "B-BBEE affidavit for Exempted Micro Enterprises.",
    longDescription: "For businesses with an annual turnover of less than R10 million, we assist in obtaining a B-BBEE Affidavit, a crucial document for proving your B-BBEE status for tenders and contracts.",
    icon: FileSignature,
  },
  {
    title: "Tax Clearance Certificate",
    description: "Obtain your Tax Clearance Certificate from SARS.",
    longDescription: "A Tax Clearance Certificate is essential for proving that your tax affairs are in order. We liaise with SARS on your behalf to secure your certificate efficiently.",
    icon: BadgePercent,
  },
  {
    title: "Letter of Good Standing",
    description: "COIDA Letter of Good Standing from the Compensation Fund.",
    longDescription: "We help you obtain a Letter of Good Standing from the Compensation Fund, proving that you are compliant with the Compensation for Occupational Injuries and Diseases Act (COIDA).",
    icon: FileBadge2,
  },
  {
    title: "Shelf Company",
    description: "Purchase a pre-registered shelf company.",
    longDescription: "Need a company with a history? We offer shelf companies that are fully registered and compliant, ready for you to start trading immediately.",
    icon: Archive,
  },
  {
    title: "Amendments (CK)",
    description: "Make changes to your company or CC details.",
    longDescription: "Whether you need to change directors, update your company address, or amend other company details, we manage the entire CIPC amendment process for you.",
    icon: FileEdit,
  },
  {
    title: "Annual Returns",
    description: "File your CIPC annual returns to stay compliant.",
    longDescription: "Avoid penalties and de-registration by ensuring your CIPC annual returns are filed correctly and on time. We manage this critical compliance task for you.",
    icon: CalendarClock,
  },
  {
    title: "CIDB Registration",
    description: "Construction Industry Development Board registration.",
    longDescription: "For construction companies, CIDB registration is a must. We assist with new registrations and grade upgrades, opening doors to larger construction tenders.",
    icon: HardHat,
  },
  {
    title: "COIDA Registration",
    description: "Register for COIDA with the Department of Labour.",
    longDescription: "We handle your COIDA registration, ensuring your business and employees are covered for occupational injuries and diseases as required by law.",
    icon: HeartHandshake,
  },
  {
    title: "Import/Export License",
    description: "Obtain your license to trade internationally.",
    longDescription: "Expand your business horizons. We facilitate the application process for your import and export license, helping you navigate customs and trade regulations.",
    icon: Truck,
  },
  {
    title: "Website Design",
    description: "Professional website design and development.",
    longDescription: "Establish a strong online presence with a professionally designed website. We create modern, responsive websites that reflect your brand and attract customers.",
    icon: Laptop,
  },
  {
    title: "Google Ads",
    description: "Managed Google Ads campaigns to grow your business.",
    longDescription: "Reach your target audience effectively with our managed Google Ads campaigns. We create, monitor, and optimize your ads to maximize your return on investment.",
    icon: Megaphone,
  },
];
