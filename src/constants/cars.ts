import { StaticImageData } from "next/image";

// Assets
import audiEtronGt from "@/assets/vehicles/audi-etron-gt.png";
import bmwX5M from "@/assets/vehicles/bmw-x5-m.png";
import porsche718 from "@/assets/vehicles/porsche-718-boxster.png";
import mercedesSClass from "@/assets/vehicles/mercedes-s-class.png";
import mitsubishiLancer from "@/assets/vehicles/mitsubishi-lancer.png";
import toyotaSupra from "@/assets/vehicles/toyota-supra.png";

export interface Car {
  id: string;
  name: string;
  category: string;
  price: number;
  images: StaticImageData[];
  description: string;
  features: string[];
}

export const mockCars: Car[] = [
  {
    id: "1",
    name: "Audi e-tron GT",
    category: "SPORTS",
    images: [audiEtronGt, mitsubishiLancer, porsche718, mercedesSClass],
    description: "The Audi e-tron GT is a high-performance electric luxury sedan that combines powerful dual-motor acceleration with sleek, aerodynamic design and premium interior.",
    price: 629,
    features: [
      "Dual-motor all-wheel drive",
      "Adaptive air suspension",
      "Executive interior package",
      "Bang & Olufsen sound system",
      "Matrix LED headlights",
      "Wireless charging pad",
      "Panoramic glass roof",
      "Surround-view camera system",
    ],
  },
  {
    id: "2",
    name: "Porsche 718 Boxster",
    category: "SPORTS",
    images: [porsche718, toyotaSupra, audiEtronGt, bmwX5M],
    description: "The 718 Boxster embodies Porsche's legendary mid-engine roadster philosophy with turbocharged performance and exceptional handling dynamics for pure driving pleasure.",
    price: 699,
    features: [
      "Retractable soft-top roof",
      "Porsche Active Suspension",
      "Sport exhaust system",
      "Lane keeping assist",
      "Sport Chrono package",
      "Bose surround sound",
      "Adaptive cruise control",
      "Premium leather seats",
    ],
  },
  {
    id: "3",
    name: "Mercedes-Benz S-Class",
    category: "LUXURY",
    images: [mercedesSClass, bmwX5M, audiEtronGt, porsche718],
    description: "The pinnacle of luxury car engineering, the S-Class offers a serene driving experience with cutting-edge technology and hand-crafted interior materials.",
    price: 629,
    features: [
      "Rear-seat entertainment",
      "Soft-close doors",
      "Active ambient lighting",
      "Burmester high-end sound",
      "Nappa leather upholstery",
      "Multicontour front seats",
      "Airmatic suspension",
      "Driver assistance package",
    ],
  },
  {
    id: "4",
    name: "Mitsubishi Lancer",
    category: "SPORTS",
    images: [mitsubishiLancer, toyotaSupra, porsche718, audiEtronGt],
    description: "A rally-inspired icon, the Mitsubishi Lancer delivers raw performance and exceptional handling in a compact sedan format that stays true to its heritage.",
    price: 450,
    features: [
      "All-wheel control (AWC)",
      "Recaro sport seats",
      "Brembo braking system",
      "Rockford Fosgate audio",
      "HID headlights",
      "Leather-wrapped steering",
      "Sport-tuned suspension",
      "Carbon fiber accents",
    ],
  },
  {
    id: "5",
    name: "Toyota Supra",
    category: "SPORTS",
    images: [toyotaSupra, audiEtronGt, porsche718, mercedesSClass],
    description: "The Toyota Supra represents automotive perfection refined over generations, offering ultimate performance and a driver-centric cockpit.",
    price: 580,
    features: [
      "Active rear differential",
      "Adaptive variable suspension",
      "Brembo 4-piston brakes",
      "JBL HiFi surround sound",
      "Heated power seats",
      "Head-up display (HUD)",
      "Supra Connect services",
      "Launch control",
    ],
  },
  {
    id: "6",
    name: "BMW X5 M",
    category: "SUV",
    images: [bmwX5M, mercedesSClass, toyotaSupra, audiEtronGt],
    description: "Commanding presence meets M-performance engineering in the BMW X5 M, providing SUV versatility with the heart of a thoroughbred sports car.",
    price: 750,
    features: [
      "M-tuned xDrive system",
      "Active M differential",
      "M-Sport exhaust system",
      "Merino leather interior",
      "Harman Kardon sound",
      "Comfort access system",
      "Dynamic stability control",
      "Gesture control",
    ],
  },
  {
    id: "7",
    name: "Aston Martin",
    category: "LUXURY",
    images: [audiEtronGt, mercedesSClass, porsche718, toyotaSupra],
    description: "Elegance and power converge in the Aston Martin, a masterpiece of British design that offers a visceral driving experience and timeless style.",
    price: 850,
    features: [
      "V12 high-performance engine",
      "Hand-crafted leather",
      "Carbon ceramic brakes",
      "Aero-active cooling",
      "Track-mode dynamics",
      "Premium navigation",
      "Custom audio system",
      "Exposed carbon details",
    ],
  },
  {
    id: "8",
    name: "Ferrari",
    category: "SPORTS",
    images: [porsche718, audiEtronGt, toyotaSupra, mitsubishiLancer],
    description: "The name says it all. This Ferrari delivers extreme performance and emotional design that makes every journey an unforgettable event.",
    price: 999,
    features: [
      "Side slip control (SSC)",
      "Magnetorheological damping",
      "Carbon fiber steering wheel",
      "F1-dual clutch gearbox",
      "Daytona style seats",
      "High-power HiFi",
      "Scuderia shields",
      "Engine bay lighting",
    ],
  },
  {
    id: "9",
    name: "Lamborghini",
    category: "SPORTS",
    images: [mitsubishiLancer, audiEtronGt, toyotaSupra, bmwX5M],
    description: "Bold, aggressive, and undeniably fast, the Lamborghini is a statement of intent on any road, combining brute force with Italian flair.",
    price: 999,
    features: [
      "Aero Lamborghini Attiva",
      "Forged composites",
      "All-wheel steering",
      "Titanium exhaust",
      "Alcantara interior",
      "Dynamic engine mounts",
      "Digital cockpit",
      "Lifting system",
    ],
  },
];
