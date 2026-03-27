import { generateOgImage } from "@/lib/og/og-template";
import { getOgConfig } from "@/lib/og/og-config";

export const runtime = "nodejs";
export const alt = "Private Readings | Mary Sophia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const config = getOgConfig("readings");
  return generateOgImage(config);
}
