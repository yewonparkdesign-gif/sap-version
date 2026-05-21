import type { NavSection } from "@/types/content";

export const navigation: NavSection[] = [
  {
    title: "Overview",
    pinned: true,
    items: [
      { label: "Introduction", href: "/", iconColor: "#0070F2" },
      { label: "Visual Direction", href: "/foundations/visual-direction", iconColor: "#0B8A8F" },
    ],
  },
  {
    title: "Visual Principles",
    iconColor: "#7E7FFF",
    items: [
      { label: "Agentic Glass", href: "/principles/agentic-glass" },
      { label: "Blur & Diffusion", href: "/principles/blur-diffusion" },
      { label: "Transparency", href: "/principles/transparency" },
      { label: "Layering", href: "/principles/layering" },
      { label: "Light Diffusion", href: "/principles/light-diffusion" },
    ],
  },
  {
    title: "Color",
    iconColor: "#0B8A8F",
    items: [
      { label: "Examples", href: "/color/examples" },
      { label: "Topic Areas", href: "/color/topic-areas" },
      { label: "LOBs", href: "/color/lobs" },
      { label: "Industries", href: "/color/industries" },
      { label: "Gradients", href: "/color/gradients" },
      { label: "Graphic Pattern", href: "/color/graphic-pattern" },
      { label: "Linear", href: "/color/linear" },
      { label: "Organic", href: "/color/organic" },
    ],
  },
  {
    title: "Product Visualization",
    iconColor: "#0070F2",
    items: [
      { label: "Key Features", href: "/product-visualization/key-features" },
      { label: "Key Capabilities", href: "/product-visualization/key-capabilities" },
      { label: "Hero Graphics", href: "/product-visualization/hero-graphics" },
      { label: "Video Thumbnails", href: "/product-visualization/video-thumbnails" },
      { label: "Product Trials & Tours", href: "/product-visualization/trials-tours" },
    ],
  },
  {
    title: "Hero",
    iconColor: "#DF1278",
    items: [
      { label: "Homepage", href: "/hero/homepage" },
      { label: "Topic Overview", href: "/hero/topic-overview" },
      { label: "Topic Pages", href: "/hero/topic-lobs", badge: "LOB" },
      { label: "Topic Pages", href: "/hero/topic-customized", badge: "Customized" },
    ],
  },
  {
    title: "Resources",
    iconColor: "#E78C07",
    items: [
      { label: "Resource Types", href: "/resources/resource-types" },
      { label: "Colors & Color Pairings", href: "/resources/color-pairings" },
    ],
  },
  {
    title: "Company Logos",
    iconColor: "#188918",
    items: [
      { label: "Partners", href: "/company-logos/partners" },
      { label: "Partner Apps", href: "/company-logos/partner-apps" },
      { label: "Customer Stories", href: "/company-logos/customer-stories" },
    ],
  },
  {
    title: "Analyst Reports",
    iconColor: "#0040BB",
    items: [
      { label: "Overview", href: "/analyst-reports" },
    ],
  },
  {
    title: "Diagrams & Graphics",
    iconColor: "#BB006C",
    items: [
      { label: "Overview", href: "/diagrams/overview" },
      { label: "In-Body Custom Graphics", href: "/diagrams/in-body-graphics" },
    ],
  },
];
