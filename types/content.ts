// --- Shared primitives --------------------------------------------------------

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface BeforeAfter {
  before: ImageAsset;
  after: ImageAsset;
  label?: string;
}

export interface FigmaEmbed {
  url: string;         // Figma share URL
  title?: string;
  height?: number;     // default 600
  allowFullscreen?: boolean;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  rgb?: string;
  usage?: string;
  on?: "light" | "dark" | "both";
}

export interface ColorGroup {
  name: string;
  description?: string;
  swatches: ColorSwatch[];
}

export interface Annotation {
  id: string;
  x: number;          // percentage 0-100
  y: number;
  label: string;
  description?: string;
}

export type Tag = string;

// --- Content block types (rendered via ContentRenderer) -----------------------

export type ContentBlock =
  | { type: "text"; body: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "callout"; variant: "info" | "warning" | "insight" | "note"; body: string }
  | { type: "image"; image: ImageAsset; annotations?: Annotation[] }
  | { type: "gallery"; images: ImageAsset[]; columns?: 2 | 3 | 4 }
  | { type: "before-after"; comparison: BeforeAfter }
  | { type: "figma"; embed: FigmaEmbed }
  | { type: "color-system"; groups: ColorGroup[] }
  | { type: "code"; language: string; code: string; label?: string }
  | { type: "divider" }
  | { type: "spec-table"; rows: Array<{ property: string; value: string; notes?: string }> };

// --- Page-level content models ------------------------------------------------

export interface BasePage {
  slug: string;
  title: string;
  badge?: string;
  subtitle?: string;
  description: string;
  tags?: Tag[];
  status?: "draft" | "published" | "wip";
  lastUpdated?: string;   // ISO date
}

/** Visual principles: Glass, Blur, Transparency, Layering, etc. */
export interface PrinciplePage extends BasePage {
  category: "principle";
  rationale: string;
  keyIdeas?: string[];
  blocks: ContentBlock[];
}

/** Foundation tokens: Typography, Spacing, Motion, Elevation */
export interface FoundationPage extends BasePage {
  category: "foundation";
  blocks: ContentBlock[];
}

/** Color systems: full palette documentation */
export interface ColorSystemPage extends BasePage {
  category: "color-system";
  groups: ColorGroup[];
  blocks?: ContentBlock[];
}

/** Hero layouts / hero patterns */
export interface HeroSystemPage extends BasePage {
  category: "hero-system";
  heroImage?: ImageAsset;
  blocks: ContentBlock[];
}

/** UI component patterns */
export interface ComponentPage extends BasePage {
  category: "component";
  anatomy?: ImageAsset;
  blocks: ContentBlock[];
  figma?: FigmaEmbed;
}

/** Page templates / layout patterns */
export interface TemplatePage extends BasePage {
  category: "template";
  previewImage?: ImageAsset;
  blocks: ContentBlock[];
  figma?: FigmaEmbed;
}

export type AnyPage =
  | PrinciplePage
  | FoundationPage
  | ColorSystemPage
  | HeroSystemPage
  | ComponentPage
  | TemplatePage;

// --- Navigation ---------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  iconColor?: string;
  badge?: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  pinned?: boolean;
  iconColor?: string;
  items: NavItem[];
}
