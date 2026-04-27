import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFileUrl(path: string | undefined) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
    ? new URL(process.env.NEXT_PUBLIC_API_URL).origin
    : "http://10.10.7.94:5004";
    
  return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

