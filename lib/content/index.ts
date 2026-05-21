import type { PrinciplePage, ColorSystemPage, FoundationPage } from "@/types/content";

// --- Visual Principles --------------------------------------------------------

export const principles: PrinciplePage[] = [
  {
    slug: "agentic-glass",
    category: "principle",
    title: "Agentic Glass",
    subtitle: "A tech-forward frosted glass aesthetic for AI-native surfaces",
    description:
      "We are all in on AI this year. To reflect this strategy, SAP.com leaned into a tech-forward frosted glass aesthetic. Agentic Glass is the visual language of layered depth, translucency, and a modern premium feel.",
    rationale:
      "As SAP positions itself as the AI company for business, the visual system must communicate intelligence and sophistication at first glance. Glass surfaces signal that the product is alive, layered, and aware -- not flat and static. This principle underpins every surface decision across SAP.com.",
    keyIdeas: [
      "Layered depth: surfaces feel like physical panes of glass stacked in space",
      "Translucency: content behind surfaces bleeds through with intention",
      "Modern premium feel: refined, not flashy -- restraint is part of the aesthetic",
      "AI-native: the glass metaphor aligns with the ambient, intelligent nature of Joule and agentic products",
    ],
    tags: ["glass", "transparency", "ai", "surfaces", "depth", "joule"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "What this looks like",
      },
      {
        type: "text",
        body: "Agentic Glass manifests as layered UI panels with soft blur, luminous borders, and translucent fills. The effect is visible across hero sections, product UI overlays, Joule chat interfaces, and card components. Rather than opaque white or solid dark surfaces, elements float as semi-transparent panes -- each layer subtly revealing the context behind it.",
      },
      {
        type: "image",
        image: {
          src: "",
          alt: "Agentic Glass -- hero section example with layered glass panels and Joule AI interface",
          caption: "Placeholder: Add hero glass surface screenshot or Figma embed",
        },
      },
      {
        type: "heading",
        level: 2,
        text: "Usage guidance",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Background blur", value: "8px - 24px", notes: "Stronger blur for higher z-index layers" },
          { property: "Background opacity", value: "8% - 18%", notes: "White at 10% is the default glass fill" },
          { property: "Border opacity", value: "10% - 20%", notes: "Luminous top-edge highlight at 20%" },
          { property: "Grain opacity", value: "3% - 6%", notes: "Subtle noise texture for material feel" },
          { property: "Border radius", value: "12px - 24px", notes: "Consistent with spatial system" },
          { property: "Shadow", value: "0 8px 32px rgba(0,0,0,0.24)", notes: "Depth cue beneath floating panels" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Where it appears",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Hero sections", value: "Glass card overlays on gradient backgrounds", notes: "Primary expression of the principle" },
          { property: "Product UI previews", value: "Frosted UI panels showing Fiori screens", notes: "Lightbox and cutout treatments" },
          { property: "Joule / AI chat", value: "Glass input fields and response surfaces", notes: "Ambient, agentic feel" },
          { property: "Navigation overlays", value: "Mega-menu and drawer backgrounds", notes: "Layer 2 glass treatment" },
          { property: "Resource cards", value: "Subtle glass on hover states", notes: "Layer 1 treatment" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Visual references",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Joule chat interface with glass input panel", caption: "Placeholder: Joule glass UI" },
          { src: "", alt: "Product hero with layered glass card overlay", caption: "Placeholder: Hero glass treatment" },
          { src: "", alt: "Navigation drawer with frosted glass background", caption: "Placeholder: Nav glass" },
          { src: "", alt: "Resource card with glass hover state", caption: "Placeholder: Card glass treatment" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Agentic Glass -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "blur-diffusion",
    category: "principle",
    title: "Blur",
    subtitle: "Diamond blur and diffusion as a visual principle",
    description:
      "Blur is not a decorative effect -- it is a spatial and atmospheric signal. SAP.com uses two distinct blur systems: backdrop blur for glass surfaces, and diffusion blur for hero backgrounds and gradient atmospheres.",
    rationale:
      "Blur communicates depth of field and spatial hierarchy. Elements that are further in the z-stack are optically softened. Diffusion blur creates the atmosphere of light passing through glass -- the signature look of the SAP.com hero system. The 'Diamond blur' is a specific organic gradient blur treatment used in background compositions.",
    keyIdeas: [
      "Backdrop blur communicates z-depth on glass surfaces",
      "Diamond blur: a soft, organic multi-color diffusion used in hero backgrounds",
      "Blur is never applied to primary reading content -- only to context and atmosphere",
      "Blur radius is proportional to z-index layer",
    ],
    tags: ["blur", "depth", "diffusion", "diamond", "spatial", "hierarchy"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Two types of blur",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Backdrop blur", value: "CSS backdrop-filter: blur()", notes: "Applied to glass surface backgrounds" },
          { property: "Diamond blur", value: "Organic multi-color radial gradients", notes: "Background atmosphere in hero sections" },
          { property: "Diffusion glow", value: "Large-radius low-opacity radials", notes: "Ambient light simulation behind content" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Blur depth scale",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Layer 0 -- Canvas", value: "No blur", notes: "Full-bleed backgrounds, page base" },
          { property: "Layer 1 -- Raised", value: "blur(8px)", notes: "Cards, panels, sections" },
          { property: "Layer 2 -- Float", value: "blur(16px)", notes: "Dropdowns, tooltips, drawers" },
          { property: "Layer 3 -- Overlay", value: "blur(24px)", notes: "Modals, command palette, sheets" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Diamond blur examples",
      },
      {
        type: "text",
        body: "Diamond blur backgrounds appear as softly blended color fields -- blues, indigos, and pinks diffusing into each other with no hard edges. They create the impression of light refracting through a prism or gemstone. Used exclusively in hero and feature section backgrounds.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Diamond blur -- blue to indigo organic gradient", caption: "Placeholder: Blue-indigo diamond blur" },
          { src: "", alt: "Diamond blur -- indigo to pink field", caption: "Placeholder: Indigo-pink diamond blur" },
          { src: "", alt: "Diamond blur -- deep blue with indigo diffusion", caption: "Placeholder: Deep blue diamond blur" },
          { src: "", alt: "Product UI example with diamond blur background", caption: "Placeholder: Product UI on diamond blur" },
        ],
        columns: 4,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Blur & Diffusion -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "transparency",
    category: "principle",
    title: "Transparency",
    subtitle: "Opacity as a semantic signal across UI layers",
    description:
      "Transparency levels in SAP.com's system are not aesthetic choices -- they are a semantic system communicating state, hierarchy, and spatial depth. Every opacity value maps to a specific meaning.",
    rationale:
      "Random or decorative use of transparency fragments visual hierarchy. By assigning semantic meaning to each opacity level, the system ensures that users instinctively understand what is primary, secondary, inactive, or contextual -- without explicit labels.",
    keyIdeas: [
      "Opacity scale maps directly to semantic meaning, not decoration",
      "Glass surfaces layer transparent fills to create spatial depth",
      "Photography and UI elements use transparency to integrate with backgrounds",
      "Transparency enables the 'bleed-through' effect where context shows beneath foreground content",
    ],
    tags: ["transparency", "opacity", "hierarchy", "semantic", "glass"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "The opacity scale",
      },
      {
        type: "spec-table",
        rows: [
          { property: "100%", value: "Primary content", notes: "Headings, key UI, active states, CTAs" },
          { property: "60%", value: "Secondary content", notes: "Body text, descriptions, labels" },
          { property: "40%", value: "Tertiary / muted", notes: "Captions, metadata, timestamps" },
          { property: "20%", value: "Disabled", notes: "Inactive controls, placeholders" },
          { property: "10%", value: "Glass surface fill", notes: "Frosted panel backgrounds (white at 10%)" },
          { property: "7%", value: "Subtle fill", notes: "Hover states, selection backgrounds" },
          { property: "5%", value: "Divider / border", notes: "Hairline separators" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Transparency in practice",
      },
      {
        type: "text",
        body: "Transparency allows product UI screenshots, photography, and graphic elements to feel integrated with the background rather than pasted on top. The SAP icon and logo family use transparency to overlap with background photography. UI cutouts show Fiori screens bleeding into hero backgrounds via transparent masks.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "SAP logo transparent overlap on photography", caption: "Placeholder: Logo transparency treatment" },
          { src: "", alt: "UI panel with 10% white glass fill layered over gradient", caption: "Placeholder: Glass surface transparency" },
          { src: "", alt: "Icon set at varying opacity levels showing hierarchy", caption: "Placeholder: Icon opacity scale" },
          { src: "", alt: "RISE with SAP diagram using transparent overlay layers", caption: "Placeholder: Diagram transparency" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Transparency -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "layering",
    category: "principle",
    title: "Layering",
    subtitle: "Spatial depth through intentional z-stacking of content and UI",
    description:
      "Layering is how SAP.com creates the perception of physical space. UI panels, photography, icons, and graphic elements are stacked intentionally to create foreground, midground, and background relationships.",
    rationale:
      "Flat interfaces lack spatial cues that guide attention and communicate importance. SAP.com's layering system creates a cinematic depth-of-field effect -- primary content is crisp and forward, context recedes, backgrounds dissolve into atmosphere. This is visible in hero sections, product UI treatments, and diagram compositions.",
    keyIdeas: [
      "Every composition has a deliberate foreground, midground, and background",
      "Icons and UI elements are cut out and overlaid on photography",
      "Product UI panels float above background gradients with glass treatment",
      "Photography is cropped and masked to integrate with the spatial stack",
    ],
    tags: ["layering", "z-depth", "spatial", "composition", "depth-of-field"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "The spatial stack",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Layer 0 -- Canvas", value: "z-index: 0", notes: "Gradient backgrounds, full-bleed photography" },
          { property: "Layer 1 -- Surface", value: "z-index: 10", notes: "Cards, content panels, grid items" },
          { property: "Layer 2 -- Float", value: "z-index: 20", notes: "Sticky nav, dropdowns, icon overlays" },
          { property: "Layer 3 -- Overlay", value: "z-index: 30", notes: "Modals, drawers, Joule panels" },
          { property: "Layer 4 -- System", value: "z-index: 40", notes: "Toasts, notifications, system alerts" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Layering in hero compositions",
      },
      {
        type: "text",
        body: "Hero sections demonstrate the full layering principle. A gradient or photography background sits at Layer 0. Product UI screenshots or graphic elements float at Layer 1 with glass treatment. Icon lockups or callout elements appear at Layer 2. The Joule prompt bar or CTA floats at Layer 3, closest to the viewer.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Hero section showing full 3-layer composition: bg gradient, UI panel, icon overlay", caption: "Placeholder: Hero layer breakdown" },
          { src: "", alt: "Joule agentic UI with layered panels floating over photography", caption: "Placeholder: Joule layering example" },
          { src: "", alt: "Industry topic page with photography + UI cutout layers", caption: "Placeholder: Industry hero layering" },
          { src: "", alt: "BAIP hero with dark background + floating glass UI", caption: "Placeholder: BAIP layering" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Layering -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "light-diffusion",
    category: "principle",
    title: "Light Diffusion",
    subtitle: "Ambient luminance and atmospheric depth",
    description:
      "Light diffusion defines how light sources behave across SAP.com's visual system, creating atmosphere, guiding attention, and suggesting spatial depth through large-radius radial gradients and soft glows.",
    rationale:
      "Without a coherent light model, compositions feel flat and disconnected. SAP.com establishes a single dominant light source per composition -- typically positioned above and behind the primary content -- that radiates outward via large, soft gradients. This creates perceptual warmth and spatial atmosphere that connects all elements in the composition.",
    keyIdeas: [
      "One dominant light source per composition, never competing",
      "Large-radius radial gradients (800px+) simulate natural light spread",
      "Glow effects are very low opacity (2-5%) -- presence without weight",
      "Accent blues and indigos carry their own luminance cues in the dark system",
      "Light diffusion differentiates AI/agentic content from standard editorial content",
    ],
    tags: ["light", "glow", "atmosphere", "diffusion", "radial-gradient", "hero"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Light source model",
      },
      {
        type: "text",
        body: "Each hero section has one primary light source, positioned typically above-center or radiating from behind a focal element. This source emits via a large radial gradient (800px-1600px radius) at very low opacity (3-8%). Secondary glows may exist but must be significantly dimmer and use complementary hues. The AI/agentic product family uses cooler blue-indigo light; editorial and photography-led sections use warmer neutral light.",
      },
      {
        type: "callout",
        variant: "warning",
        body: "Multiple competing light sources of equal intensity break the spatial model and create visual noise. Always establish one clear dominant source per composition.",
      },
      {
        type: "heading",
        level: 2,
        text: "Light in the AI product family",
      },
      {
        type: "text",
        body: "The Joule, BAIP, and agentic product heroes use a distinctive blue-indigo light signature that has become synonymous with SAP AI. This is the same family as the diamond blur gradient system -- cool, electric, intelligent. It signals 'AI context' at a glance and differentiates AI-forward pages from standard editorial pages.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "AI Agents & Autonomous Domains diagram with blue-indigo light diffusion", caption: "Placeholder: AI product light treatment" },
          { src: "", alt: "Joule hero with electric blue glow radiating from behind UI panel", caption: "Placeholder: Joule light diffusion" },
          { src: "", alt: "RISE with SAP layered diagram showing warm neutral light", caption: "Placeholder: RISE light treatment" },
          { src: "", alt: "Knowledge Core diagram with ambient diffusion behind layered panels", caption: "Placeholder: Knowledge Core light" },
        ],
        columns: 2,
      },
      {
        type: "spec-table",
        rows: [
          { property: "AI / agentic context", value: "Blue 6–Indigo 6 (organic)", notes: "Joule, BAIP, Autonomous Domains" },
          { property: "Standard editorial", value: "Neutral white-blue (very low opacity)", notes: "Topic pages, resources, general content" },
          { property: "Industry / LOB", value: "Matches LOB color family", notes: "Teal for supply chain, green for agriculture, etc." },
          { property: "Glow opacity range", value: "2% - 8%", notes: "Never more than 8% -- restraint is key" },
          { property: "Radius range", value: "600px - 1600px", notes: "Wider for full-bleed hero, narrower for panel sections" },
        ],
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Light Diffusion -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
];

// --- Color --------------------------------------------------------------------

export const colorPages: FoundationPage[] = [
  {
    slug: "examples",
    category: "foundation",
    title: "Color Examples",
    subtitle: "Introduction of gradients and revisiting color as a wayfinding conversation",
    description:
      "SAP.com's color system introduces a new role for color: not just brand expression, but spatial wayfinding. Each section, LOB, and industry has a color signature. Gradients are organized into three systems -- Organic, Graphic Pattern, and Linear -- each with a distinct role.",
    tags: ["color", "gradients", "wayfinding", "LOB", "industry"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Three gradient systems",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Organic gradient", value: "Soft, multi-color diffusion blends", notes: "Reserved for areas with a product focus (and AI). Blues, indigos, pinks." },
          { property: "Graphic pattern gradient", value: "Bold, brand-element color fields", notes: "Leverages brand elements -- SAP blues, teals, pinks, deep blue." },
          { property: "Linear gradient", value: "Clean directional blends", notes: "Adds light and dimension. More structured, less atmospheric." },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Organic gradients",
      },
      {
        type: "text",
        body: "Organic gradients are reserved for AI and product-focused content. They are multi-color, soft-edged diffusions that create the impression of light refracting through a prism. Blues, indigos, and pinks are the dominant hues. These are the background field for Agentic Glass surfaces.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Organic gradient — Blue 9 to Indigo 6", caption: "Blue 9 to Indigo 6" },
          { src: "", alt: "Organic gradient — Indigo 5 to Blue 6", caption: "Indigo 5 to Blue 6" },
          { src: "", alt: "Organic gradient — Raspberry 6 to Indigo 6", caption: "Raspberry 6 to Indigo 6" },
          { src: "", alt: "Organic gradient — Blue 11 to Blue 7", caption: "Blue 11 to Blue 7" },
          { src: "", alt: "Organic gradient — Indigo 6 to Blue 7", caption: "Indigo 6 to Blue 7" },
          { src: "", alt: "Organic gradient — Pink 6 to Indigo 5", caption: "Pink 6 to Indigo 5" },
        ],
        columns: 3,
      },
      {
        type: "heading",
        level: 2,
        text: "Graphic pattern gradients",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Graphic pattern — Blue 6", caption: "Blue 6" },
          { src: "", alt: "Graphic pattern — Teal 5", caption: "Teal 5" },
          { src: "", alt: "Graphic pattern — Pink 6", caption: "Pink 6" },
          { src: "", alt: "Graphic pattern — Blue 11", caption: "Blue 11" },
        ],
        columns: 4,
      },
      {
        type: "heading",
        level: 2,
        text: "Linear gradients",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Linear gradient — Blue 3 to White", caption: "Blue 3 to White" },
          { src: "", alt: "Linear gradient — Teal 5 to White", caption: "Teal 5 to White" },
          { src: "", alt: "Linear gradient — Blue 9 to Blue 6", caption: "Blue 9 to Blue 6" },
          { src: "", alt: "Linear gradient — Indigo 6 to Indigo 5", caption: "Indigo 6 to Indigo 5" },
        ],
        columns: 4,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Color System -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "topic-areas",
    category: "foundation",
    title: "Topic Areas",
    subtitle: "Color as wayfinding across SAP.com topic sections",
    description:
      "Each major content category on SAP.com has a defined color signature. Topic areas, Lines of Business (LOBs), and Industries each use a distinct gradient that enables users to orient themselves within the site at a glance.",
    tags: ["color", "LOB", "industry", "topic-areas", "wayfinding"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Topic area colors",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Integration Suite", value: "Blue 11 — #00144A", notes: "Technical integration products" },
          { property: "Joule Studio",       value: "Indigo 6 — #5C32D5", notes: "AI development and agentic products" },
          { property: "BDC",                value: "Teal 6 — #046C7A", notes: "Business Data Cloud" },
          { property: "BTP + BTM",          value: "Teal 5 — #0B8A8F", notes: "Technology platform" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Integration Suite — Blue 11", caption: "Blue 11 (#00144A)" },
          { src: "", alt: "Joule Studio — Indigo 6", caption: "Indigo 6" },
          { src: "", alt: "BDC — Teal 6", caption: "Teal 6" },
          { src: "", alt: "BTP + BTM — Teal 5", caption: "Teal 5" },
        ],
        columns: 4,
      },
      {
        type: "heading",
        level: 2,
        text: "Lines of Business (LOB) colors",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Automotive",                value: "Grey 6 — #556B7D",    notes: "" },
          { property: "Aerospace",                 value: "Indigo 9 — #3C134D",  notes: "" },
          { property: "Chemicals",                 value: "Green 6 — #38A832",   notes: "" },
          { property: "Agriculture",               value: "Mango 4 — #FFC300",   notes: "" },
          { property: "Retail",                    value: "Teal 7 — #0780B8",    notes: "" },
          { property: "Wholesale distribution",    value: "Mango 3 — #FFE572",   notes: "" },
          { property: "Mining",                    value: "Mango 6 — #E78C07",   notes: "" },
          { property: "Government software",       value: "Indigo 5 — #7E7FFF",  notes: "" },
          { property: "Financial services",        value: "Blue 9 — #0040BB",    notes: "" },
          { property: "Construction and real estate", value: "Grey 9 — #223548", notes: "" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "SAP product suite colors",
      },
      {
        type: "spec-table",
        rows: [
          { property: "SCM (Supply Chain)", value: "Blue 7–Indigo 6 organic", notes: "Spend management, HCM, Finance" },
          { property: "CX (Customer Experience)", value: "Blue 5 — #4488FF", notes: "" },
          { property: "Autonomous Suite", value: "Indigo 5–Blue 6 gradient", notes: "" },
          { property: "AI (General)", value: "Blue 9–Indigo 9", notes: "" },
          { property: "ERP", value: "Blue 11 — #00144A", notes: "" },
        ],
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Topic Areas, LOBs & Industries -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "lobs",
    category: "foundation",
    title: "Lines of Business",
    subtitle: "Color signatures for SAP Lines of Business",
    description:
      "Each SAP Line of Business has a defined color gradient used for hero backgrounds, card accents, and section wayfinding. The palette spans the full spectrum to provide distinct visual identities.",
    tags: ["color", "LOB", "wayfinding", "brand"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "spec-table",
        rows: [
          { property: "Supply Chain Management", value: "Blue 7–Indigo 6 organic", notes: "Spend management, HCM, Finance shared palette" },
          { property: "Customer Experience (CX)", value: "Blue 5 — #4488FF", notes: "" },
          { property: "Autonomous Suite", value: "Indigo 5–Blue 6 gradient", notes: "" },
          { property: "Enterprise Resource Planning", value: "Blue 11 — #00144A", notes: "" },
          { property: "Finance", value: "Blue 9 — #0040BB", notes: "" },
          { property: "Human Capital Management", value: "Teal 6 — #046C7A", notes: "" },
          { property: "Spend Management", value: "Indigo 9 — #3C134D", notes: "" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Supply Chain Management — Blue 7 to Indigo 6", caption: "SCM — Blue 7 to Indigo 6" },
          { src: "", alt: "CX — Blue 5", caption: "CX — Blue 5" },
          { src: "", alt: "ERP — Blue 11", caption: "ERP — Blue 11" },
          { src: "", alt: "Finance — Blue 9", caption: "Finance — Blue 9" },
        ],
        columns: 4,
      },
    ],
  },
  {
    slug: "industries",
    category: "foundation",
    title: "Industries",
    subtitle: "Color signatures for SAP industry verticals",
    description:
      "Industry pages on SAP.com each carry a distinct color identity. These industry colors differentiate verticals and create immediate visual recognition for users navigating from one industry to another.",
    tags: ["color", "industry", "wayfinding", "vertical"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "spec-table",
        rows: [
          { property: "Automotive",                   value: "Grey 6 — #556B7D",    notes: "" },
          { property: "Aerospace & Defense",           value: "Indigo 9 — #3C134D",  notes: "" },
          { property: "Chemicals",                     value: "Green 6 — #38A832",   notes: "" },
          { property: "Agriculture",                   value: "Mango 4 — #FFC300",   notes: "" },
          { property: "Retail",                        value: "Teal 7 — #0780B8",    notes: "" },
          { property: "Wholesale Distribution",        value: "Mango 3 — #FFE572",   notes: "" },
          { property: "Mining",                        value: "Mango 6 — #E78C07",   notes: "" },
          { property: "Government Software",           value: "Indigo 5 — #7E7FFF",  notes: "" },
          { property: "Financial Services",            value: "Blue 9 — #0040BB",    notes: "" },
          { property: "Construction & Real Estate",    value: "Grey 9 — #223548",    notes: "" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Automotive — Grey 6", caption: "Grey 6" },
          { src: "", alt: "Aerospace & Defense — Indigo 9", caption: "Indigo 9" },
          { src: "", alt: "Retail — Teal 7", caption: "Teal 7" },
          { src: "", alt: "Financial Services — Blue 9", caption: "Blue 9" },
        ],
        columns: 4,
      },
    ],
  },
  {
    slug: "gradients",
    category: "foundation",
    title: "Gradients",
    subtitle: "The three gradient systems used across SAP.com",
    description:
      "SAP.com uses three distinct gradient systems: Organic, Graphic Pattern, and Linear. Each has a defined role and usage context. Gradients are the primary background system for hero sections and card treatments.",
    tags: ["color", "gradients", "organic", "linear", "graphic-pattern"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "spec-table",
        rows: [
          { property: "Organic", value: "Soft multi-color diffusion", notes: "AI and product-focused content. Blues, indigos, pinks." },
          { property: "Graphic Pattern", value: "Bold brand-element color fields", notes: "SAP blues, teals, pinks, deep blue" },
          { property: "Linear", value: "Clean directional blends", notes: "Light and dimension. Structured, less atmospheric." },
        ],
      },
      {
        type: "callout",
        variant: "insight",
        body: "Organic gradients are reserved for AI-native and product-focused content. Graphic pattern gradients appear in brand-forward sections. Linear gradients provide subtle depth in editorial contexts.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Organic gradient — Blue 9 to Indigo 6", caption: "Blue 9 to Indigo 6" },
          { src: "", alt: "Graphic pattern — Blue 6", caption: "Blue 6" },
          { src: "", alt: "Linear gradient — Blue 3 to White", caption: "Blue 3 to White" },
        ],
        columns: 3,
      },
    ],
  },
  {
    slug: "graphic-pattern",
    category: "foundation",
    title: "Graphic Pattern",
    subtitle: "Bold brand-element color fields for SAP.com",
    description:
      "Graphic pattern gradients leverage SAP brand elements to create bold, high-impact color fields. They use the full SAP brand palette -- blues, teals, pinks, and deep blue -- for sections requiring strong brand presence.",
    tags: ["color", "graphic-pattern", "brand", "bold"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "gallery",
        images: [
          { src: "", alt: "Graphic pattern — Blue 6", caption: "Blue 6" },
          { src: "", alt: "Graphic pattern — Teal 5", caption: "Teal 5" },
          { src: "", alt: "Graphic pattern — Pink 6", caption: "Pink 6" },
          { src: "", alt: "Graphic pattern — Blue 11", caption: "Blue 11" },
        ],
        columns: 4,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Graphic Pattern Gradients -- Sapphire 2026 Design Production",
          height: 500,
        },
      },
    ],
  },
  {
    slug: "linear",
    category: "foundation",
    title: "Linear Gradients",
    subtitle: "Clean directional blends for depth and structure",
    description:
      "Linear gradients add light and dimension to sections without the atmospheric quality of organic blends. They are more structured and work well in editorial and informational contexts where subtle depth is needed.",
    tags: ["color", "linear", "gradient", "structured"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "gallery",
        images: [
          { src: "", alt: "Linear gradient -- light blue to white", caption: "Placeholder: Linear light blue" },
          { src: "", alt: "Linear gradient -- teal to light", caption: "Placeholder: Linear teal" },
          { src: "", alt: "Linear gradient -- deep blue directional", caption: "Placeholder: Linear deep blue" },
          { src: "", alt: "Linear gradient -- indigo directional", caption: "Placeholder: Linear indigo" },
        ],
        columns: 4,
      },
    ],
  },
  {
    slug: "organic",
    category: "foundation",
    title: "Organic Gradients",
    subtitle: "Soft multi-color diffusion for AI and product-focused content",
    description:
      "Organic gradients are SAP.com's most expressive color treatment. Reserved for AI-native and product-focused hero sections, they create the impression of light refracting through glass. Blues, indigos, and pinks are the dominant hues.",
    tags: ["color", "organic", "gradient", "ai", "diffusion"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "callout",
        variant: "insight",
        body: "Organic gradients are exclusively used for AI and product-focused content. Do not use them for editorial, news, or generic marketing pages.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Organic gradient -- blue-indigo field", caption: "Placeholder: Organic blue-indigo" },
          { src: "", alt: "Organic gradient -- indigo-blue", caption: "Placeholder: Organic indigo" },
          { src: "", alt: "Organic gradient -- pink-indigo wide field", caption: "Placeholder: Organic pink" },
          { src: "", alt: "Organic gradient -- deep blue diffusion", caption: "Placeholder: Organic deep blue" },
          { src: "", alt: "Organic gradient -- blue-indigo", caption: "Placeholder: Organic blue-indigo" },
          { src: "", alt: "Organic gradient -- indigo-pink blend", caption: "Placeholder: Organic indigo-pink" },
        ],
        columns: 3,
      },
    ],
  },
];

// --- Product UI ---------------------------------------------------------------

export const productUIPages: FoundationPage[] = [
  {
    slug: "overview",
    category: "foundation",
    title: "Product UI",
    subtitle: "Leveraging more UI snippets where possible across image categories",
    description:
      "SAP.com is shifting toward showing more actual product UI across the site. Products now combine dimension and frost effects, leaning into specific moments through the use of cutouts and highlights. This applies across key features, capabilities, hero graphics, video thumbnails, and product trials.",
    tags: ["product-ui", "fiori", "joule", "cutouts", "highlights"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "The UI visual approach",
      },
      {
        type: "text",
        body: "Rather than showing flat product screenshots, SAP.com now treats product UI as a design material. UI panels are cropped, masked, and composited with dimension: frosted glass frames, drop shadows, cutout elements that break the frame, and highlight treatments that draw the eye to key interactions. The Joule Work experience and Fiori screens are the primary UI families shown.",
      },
      {
        type: "callout",
        variant: "insight",
        body: "Products now combine dimension and frost: UI panels float above backgrounds with glass treatment, cutouts bleed out of frames, and highlights emphasize specific UI moments rather than showing the full application.",
      },
      {
        type: "heading",
        level: 2,
        text: "Five UI content categories",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Key features", value: "Lightbox treatment + full product visualization", notes: "Selected UI moments cropped to highlight one capability" },
          { property: "Key capabilities", value: "Paired before/after or side-by-side UI", notes: "Shows AI augmentation of existing workflows" },
          { property: "Hero graphics", value: "Full-bleed composited UI in hero section", notes: "UI as the hero visual with glass + cutout treatment" },
          { property: "Video thumbnails", value: "Photography + UI composite + play button", notes: "Consistent frosted glass play overlay" },
          { property: "Product trials & tours", value: "Browser-framed UI screenshots", notes: "Full product visualization in browser chrome" },
        ],
      },
    ],
  },
  {
    slug: "key-features",
    category: "foundation",
    title: "Key Features",
    subtitle: "Lightbox and full product visualization treatments",
    description:
      "Key feature sections show selected product UI moments using two treatments: a lightbox view that isolates a cropped UI panel, and a full product visualization that shows more complete application context.",
    tags: ["product-ui", "key-features", "lightbox", "fiori"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Lightbox treatment",
      },
      {
        type: "text",
        body: "The lightbox treatment crops the product UI to isolate one specific feature or interaction. The UI panel has a frosted glass frame, subtle drop shadow, and sits on a clean white or near-white background. This treatment is used for feature callouts in editorial sections.",
      },
      {
        type: "image",
        image: {
          src: "",
          alt: "Key features lightbox -- A/B Test Reporting UI cropped to show key interaction",
          caption: "Placeholder: Lightbox treatment example",
        },
      },
      {
        type: "heading",
        level: 2,
        text: "Full product visualization",
      },
      {
        type: "text",
        body: "Full product visualization shows more complete application context -- multiple panels, navigation, and data visible. Used for sections where the breadth of capability is the message rather than a single interaction.",
      },
      {
        type: "image",
        image: {
          src: "",
          alt: "Full product visualization -- analytics dashboard with multiple data panels",
          caption: "Placeholder: Full product visualization example",
        },
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Key Features -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "key-capabilities",
    category: "foundation",
    title: "Key Capabilities",
    subtitle: "Showing AI augmentation of existing SAP workflows",
    description:
      "Key capabilities sections demonstrate how Joule and AI features augment existing SAP workflows. The visual treatment pairs standard Fiori UI with an AI overlay or side panel, showing the before/after of an AI-assisted interaction.",
    tags: ["product-ui", "key-capabilities", "joule", "ai", "fiori"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "AI augmentation visual pattern",
      },
      {
        type: "text",
        body: "The key capabilities visual pattern shows a split or layered composition: standard Fiori UI on one side, Joule AI panel emerging from it on the other. This makes the AI augmentation story visible at a glance -- the UI you know, now made more intelligent.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Spend Intelligence dashboard with Joule AI panel overlay", caption: "Placeholder: Spend Intelligence + Joule" },
          { src: "", alt: "Performance review Fiori screen with AI summary panel", caption: "Placeholder: Performance review + AI" },
          { src: "", alt: "Goal planning UI with AI assistant chat", caption: "Placeholder: Goal planning + Joule" },
          { src: "", alt: "Joule preparing for performance discussion -- mobile view", caption: "Placeholder: Joule mobile capability" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Key Capabilities -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "hero-graphics",
    category: "foundation",
    title: "Hero Graphics",
    subtitle: "Product UI as the hero visual across SAP.com product pages",
    description:
      "Hero graphics use composited product UI as the primary visual in hero sections. Rather than photography, the hero image is a crafted UI composition showing the product in action -- with glass treatment, cutouts, and ambient light.",
    tags: ["product-ui", "hero-graphics", "composite", "fiori", "joule"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Hero graphic examples",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Tax and trade management -- UI hero with shipping container photography", caption: "Placeholder: Tax & trade hero graphic" },
          { src: "", alt: "SCM Innovations -- white card hero with UI panel", caption: "Placeholder: SCM hero graphic" },
          { src: "", alt: "SAP AI services and models -- indigo gradient UI hero", caption: "Placeholder: AI services hero graphic" },
          { src: "", alt: "Talent management system -- photography + Joule chat panel", caption: "Placeholder: Talent management hero graphic" },
          { src: "", alt: "Finance -- photography + production data chart", caption: "Placeholder: Finance hero graphic" },
          { src: "", alt: "Gen AI Hub -- UI composite hero", caption: "Placeholder: Gen AI Hub hero graphic" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Hero Graphics -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "video-thumbnails",
    category: "foundation",
    title: "Video Thumbnails",
    subtitle: "Consistent composite thumbnails for video content across SAP.com",
    description:
      "Video thumbnails use a consistent composite treatment: photography or UI screenshot as the base, with a frosted glass play button overlay and optional UI panel inset. Four distinct styles cover the range of content types.",
    tags: ["product-ui", "video", "thumbnails", "photography"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Thumbnail treatments",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Photography + play", value: "Person or scene with frosted glass play button", notes: "Standard editorial and customer story videos" },
          { property: "Photography + UI diagonal", value: "Person photo with UI panel at diagonal crop", notes: "Product explainer videos" },
          { property: "UI + Joule prompt", value: "Indigo/blue gradient with Joule input field", notes: "AI product and Joule demo videos" },
          { property: "UI screenshot + play", value: "Browser-framed product UI with play overlay", notes: "Product tours and feature demos" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Video thumbnail -- woman with tablet, photography + play button", caption: "Placeholder: Photography thumbnail" },
          { src: "", alt: "Video thumbnail -- engineer with laptop, diagonal UI crop", caption: "Placeholder: Photography + UI thumbnail" },
          { src: "", alt: "Video thumbnail -- Joule prompt bar on indigo gradient", caption: "Placeholder: Joule / AI thumbnail" },
          { src: "", alt: "Video thumbnail -- Fiori dashboard with play overlay", caption: "Placeholder: Product UI thumbnail" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Video Thumbnails -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "trials-tours",
    category: "foundation",
    title: "Product Trials & Tours",
    subtitle: "Browser-framed product visualizations for trial and tour entry points",
    description:
      "Product trials and tours use browser-framed UI screenshots to show the product in its native context. Two treatments are defined: product trials (showing analytical/dashboard views) and product tours (showing workflow and feature discovery).",
    tags: ["product-ui", "trials", "tours", "browser-frame"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Product trials",
      },
      {
        type: "text",
        body: "Product trial visuals use a browser chrome frame around a full-fidelity Fiori screenshot. The frame grounds the experience in a familiar desktop context and signals that this is a real, working application. Dashboard and analytical views are preferred for trials -- showing data richness.",
      },
      {
        type: "image",
        image: {
          src: "",
          alt: "Product trial visual -- analytics dashboard in browser chrome frame",
          caption: "Placeholder: Product trial browser frame",
        },
      },
      {
        type: "heading",
        level: 2,
        text: "Product tours",
      },
      {
        type: "text",
        body: "Product tour visuals use the same browser chrome but show feature discovery moments -- search results, recommendations, guided workflows. The Engagement Cloud example shows a product finder with search results, signaling interactivity.",
      },
      {
        type: "image",
        image: {
          src: "",
          alt: "Product tour visual -- Engagement Cloud product finder with search results",
          caption: "Placeholder: Product tour browser frame",
        },
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Product Trials & Tours -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
];

// --- Hero ---------------------------------------------------------------------

export const heroPages: FoundationPage[] = [
  {
    slug: "overview",
    category: "foundation",
    title: "Hero",
    subtitle: "Hero layout systems across SAP.com page types",
    description:
      "The hero system covers the full range of hero layouts across SAP.com: homepage, topic overview, LOB topic pages, and customized pages. Each has a defined visual approach with consistent application of the glass, blur, layering, and light diffusion principles.",
    tags: ["hero", "layout", "homepage", "topic", "LOB"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Hero system overview",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Homepage hero -- Autonomous Enterprise with diamond shape graphic", caption: "Placeholder: Homepage hero" },
          { src: "", alt: "Joule hero -- indigo gradient with UI panels", caption: "Placeholder: Joule hero" },
          { src: "", alt: "Supply chain hero -- photography with UI overlay", caption: "Placeholder: Supply chain hero" },
          { src: "", alt: "Industry AI solutions hero -- photography + UI", caption: "Placeholder: Industry AI hero" },
          { src: "", alt: "BAIP hero -- dark background with glass UI", caption: "Placeholder: BAIP hero" },
          { src: "", alt: "Joule for Consultants -- product photography", caption: "Placeholder: Joule Consultants hero" },
          { src: "", alt: "Manufacturing hero -- photography + data visualization", caption: "Placeholder: Manufacturing hero" },
          { src: "", alt: "SAP Integration Suite hero -- UI composite", caption: "Placeholder: Integration Suite hero" },
        ],
        columns: 4,
      },
    ],
  },
  {
    slug: "homepage",
    category: "foundation",
    title: "Homepage Hero",
    subtitle: "The flagship hero -- Autonomous Enterprise",
    description:
      "The SAP.com homepage hero communicates SAP's Autonomous Enterprise positioning. The design uses a large-scale custom graphic -- an abstract diamond/prism shape in blue and indigo -- with a clean typographic lockup and single CTA. The hero is minimal, confident, and AI-forward.",
    tags: ["hero", "homepage", "autonomous-enterprise", "joule"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Design approach",
      },
      {
        type: "text",
        body: "The homepage hero leads with the message 'Autonomous Enterprise -- This is the beginning of better -- where your business can think, adapt, and act like never before.' The visual is a large abstract prism/diamond graphic in electric blue and indigo, positioned center-right. The layout is intentionally spacious with no product UI -- the message is strategic, not feature-level.",
      },
      {
        type: "callout",
        variant: "insight",
        body: "The homepage hero is the only hero that does not show product UI. The abstract graphic is the visual -- it signals transformation and intelligence without specificity.",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Headline", value: "Autonomous Enterprise", notes: "Large, bold, centered or left-aligned" },
          { property: "Subhead", value: "Beginning of better... think, adapt, act", notes: "Single sentence, conversational" },
          { property: "CTA", value: "See Joule in action", notes: "Single primary CTA, SAP blue" },
          { property: "Visual", value: "Abstract prism/diamond graphic", notes: "Electric blue-indigo, center-right" },
          { property: "Background", value: "White to light blue gradient", notes: "Clean, spacious, brand-consistent" },
        ],
      },
      {
        type: "image",
        image: {
          src: "",
          alt: "Homepage hero -- Autonomous Enterprise with diamond prism graphic and Joule CTA",
          caption: "Placeholder: Homepage hero full comp",
        },
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Homepage Hero -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "topic-overview",
    category: "foundation",
    title: "Topic Overview Heroes",
    subtitle: "LOB, Industry, BAIP, and Joule topic overview hero patterns",
    description:
      "Topic overview heroes cover the main topic landing pages: LOBs (e.g. Supply Chain, Industry AI Solutions), the SAP Business AI Platform (BAIP), and Joule. Each uses a distinct visual approach suited to its content type.",
    tags: ["hero", "topic", "LOB", "industry", "BAIP", "joule"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Topic hero patterns",
      },
      {
        type: "spec-table",
        rows: [
          { property: "LOB pages (e.g. Supply Chain)", value: "Photography hero with UI overlay panel + Joule prompt", notes: "Photography grounds in real-world context; UI shows product capability" },
          { property: "Industry AI Solutions", value: "Photography with icon/UI composite overlay", notes: "Industry imagery with product UI integration" },
          { property: "BAIP", value: "Dark blue gradient hero with glass UI cards", notes: "Premium, AI-forward treatment with multiple product icons" },
          { property: "Joule", value: "Indigo-blue gradient hero with chat UI panel", notes: "AI-native, electric color, conversational UI as hero visual" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Autonomous supply chain hero -- photography + UI + Joule prompt", caption: "Placeholder: Supply chain topic hero" },
          { src: "", alt: "Industry AI solutions hero -- photography + UI composite", caption: "Placeholder: Industry AI topic hero" },
          { src: "", alt: "BAIP hero -- dark blue with glass UI cards", caption: "Placeholder: BAIP topic hero" },
          { src: "", alt: "Joule hero -- indigo-blue gradient + chat interface", caption: "Placeholder: Joule topic hero" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Topic Overview Heroes -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "topic-lobs",
    category: "foundation",
    title: "Topic Pages (LOBs)",
    subtitle: "Hero and section patterns for LOB topic area pages",
    description:
      "Topic pages cover the full range of content sub-pages: LOB topic areas (e.g. SCM, Product Trials, Blogs & Resources), Customer Stories, Innovations, and Partner pages. Each has a defined hero and section visual treatment.",
    tags: ["hero", "topic-pages", "LOB", "customer-stories", "partner"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Topic page types",
      },
      {
        type: "spec-table",
        rows: [
          { property: "LOB topic area (e.g. SCM)", value: "Blue gradient hero + UI composite card", notes: "Product-focused, shows key capability" },
          { property: "Customer stories", value: "Photography + company logo overlay", notes: "Pfizer, KIND, TELUS -- logo prominent on photography" },
          { property: "Product trials", value: "Blue gradient + product icon", notes: "Trial entry point, minimal UI" },
          { property: "Innovations", value: "UI card with diagrams and data", notes: "Technical, data-rich visual treatment" },
          { property: "Blogs & resources", value: "Photography + text overlay", notes: "Editorial treatment, person or scene photography" },
          { property: "Partners", value: "Partner finder UI with CTA", notes: "Functional, form-forward" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Extended topic page patterns",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Open data ecosystem", value: "SAP logo + icon lockup on gradient", notes: "Technology partnership visual" },
          { property: "Business data fabric", value: "Layered diagram with Master Data Management", notes: "Abstract data visualization treatment" },
          { property: "Joule Studio", value: "Person photography + UI chat", notes: "Developer/consultant audience" },
          { property: "Intelligent content", value: "UI panel + icon", notes: "Clean, minimal" },
          { property: "SAP Integration Suite", value: "Multi-partner logo grid", notes: "Ecosystem visual" },
          { property: "RISE with SAP", value: "Journey diagram hero", notes: "Process/transformation visual" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "SCM topic area hero -- blue gradient + UI card", caption: "Placeholder: SCM topic page" },
          { src: "", alt: "Customer stories section -- Pfizer + KIND logos on photography", caption: "Placeholder: Customer stories" },
          { src: "", alt: "Open data ecosystem -- SAP + partner icons", caption: "Placeholder: Open data ecosystem" },
          { src: "", alt: "RISE with SAP journey diagram", caption: "Placeholder: RISE with SAP" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Topic Pages -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "topic-customized",
    category: "foundation",
    title: "Topic Pages",
    badge: "Customized",
    subtitle: "Customized hero treatments for specific SAP.com topic pages",
    description:
      "Some topic pages on SAP.com receive a fully customized hero treatment that goes beyond the standard LOB template. These pages use unique photography, custom graphics, or specialized layouts that reflect the specific product or campaign context.",
    tags: ["hero", "customized", "topic", "photography"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "callout",
        variant: "note",
        body: "Customized topic pages follow the visual principles but break from the standard grid template. Each requires individual art direction approval.",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Open data ecosystem", value: "SAP logo + icon lockup on gradient", notes: "Technology partnership visual" },
          { property: "Business data fabric", value: "Layered diagram with Master Data labels", notes: "Abstract data visualization" },
          { property: "Joule Studio", value: "Person photography + UI chat panel", notes: "Developer/consultant audience" },
          { property: "SAP Integration Suite", value: "Multi-partner logo grid", notes: "Ecosystem visual" },
          { property: "RISE with SAP", value: "Journey diagram as hero", notes: "Process/transformation visual" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Open data ecosystem hero -- icon lockup on gradient", caption: "Placeholder: Open data ecosystem hero" },
          { src: "", alt: "Joule Studio hero -- person photography + chat UI", caption: "Placeholder: Joule Studio hero" },
          { src: "", alt: "RISE with SAP journey diagram", caption: "Placeholder: RISE with SAP hero" },
          { src: "", alt: "Integration Suite partner logo grid", caption: "Placeholder: Integration Suite hero" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Customized Topic Pages -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
];

// --- Resources ----------------------------------------------------------------

export const resourcesPages: FoundationPage[] = [
  {
    slug: "overview",
    category: "foundation",
    title: "Resources",
    subtitle: "Featured resources section -- design extension across resource types",
    description:
      "The Resources section received a design extension to lean into SAP's extended palette and graphic elements. The featured resources area is a mini design system within SAP.com -- not yet complete, with plans to extend to other resource types.",
    tags: ["resources", "cards", "palette", "resource-types"],
    status: "wip",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "callout",
        variant: "note",
        body: "The resources section design extension is in progress. We have done this mini design extension to the featured resources section and there are plans to extend this to other resource types.",
      },
      {
        type: "heading",
        level: 2,
        text: "Featured resources cards",
      },
      {
        type: "text",
        body: "The featured resources section shows a grid of resource cards with extended color treatment. Cards use the full SAP palette -- not just brand blue -- with each card having a distinct background color and a consistent card anatomy: source tag, title, body text, and 'Read customer story' link.",
      },
      {
        type: "image",
        image: {
          src: "",
          alt: "Featured resources section -- four-card grid with extended color palette",
          caption: "Placeholder: Resources section overview",
        },
      },
    ],
  },
  {
    slug: "resource-types",
    category: "foundation",
    title: "Resource Types",
    subtitle: "Ten defined resource card types across SAP.com",
    description:
      "SAP.com defines ten distinct resource card types, each with a consistent visual anatomy. The types cover analyst reports (IDC, Spotlight), SAP-authored content, community, discovery center, help, learning, news center, and partner finder.",
    tags: ["resources", "cards", "IDC", "analyst", "community"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Resource card types",
      },
      {
        type: "spec-table",
        rows: [
          { property: "IDC (Analyst report)", value: "IDC + Spotlight badge, title, body, image", notes: "External analyst content" },
          { property: "SAP content", value: "SAP logo tag, title, body", notes: "SAP-authored whitepapers, guides" },
          { property: "Generic (no source)", value: "Title, body, image placeholder", notes: "Unbranded content" },
          { property: "Community", value: "SAP Community tag, title, body", notes: "Community posts and discussions" },
          { property: "Discovery Center", value: "SAP Discovery Center tag, title, body", notes: "Product exploration content" },
          { property: "Help", value: "SAP Help tag, title, body", notes: "Documentation and support" },
          { property: "Learning", value: "SAP Learning tag, title, body", notes: "Training and certification content" },
          { property: "Learning (variant)", value: "SAP Learning tag, different layout", notes: "Alternative learning card" },
          { property: "News Center", value: "SAP News Center tag, title, body", notes: "Press releases and news" },
          { property: "Partner Finder", value: "SAP Partner Finder tag, title, body", notes: "Partner directory entries" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "IDC analyst report card -- with Spotlight badge and title", caption: "Placeholder: IDC resource card" },
          { src: "", alt: "SAP content card -- logo tag with title and body", caption: "Placeholder: SAP resource card" },
          { src: "", alt: "Community card -- SAP Community tag", caption: "Placeholder: Community card" },
          { src: "", alt: "Discovery Center card", caption: "Placeholder: Discovery Center card" },
          { src: "", alt: "Help card -- SAP Help tag", caption: "Placeholder: Help card" },
          { src: "", alt: "News Center card", caption: "Placeholder: News Center card" },
        ],
        columns: 3,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Resource Types -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "color-pairings",
    category: "foundation",
    title: "Colors & Color Pairings",
    subtitle: "Extended palette and combination system for resource cards",
    description:
      "The resource card color system uses SAP's extended palette across ten background colors. Color combinations define which card colors work together in a multi-card row, ensuring visual variety without clashing.",
    tags: ["resources", "color", "pairings", "palette"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Ten card colors",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Blue 6",       value: "#0070F2", notes: "Primary SAP brand blue" },
          { property: "Teal 6",       value: "#009B9B", notes: "Secondary brand teal" },
          { property: "Green 7",      value: "#188918", notes: "Success / agriculture" },
          { property: "Mango 6",      value: "#E78C07", notes: "Warm accent / gold" },
          { property: "Red 6",        value: "#EE3939", notes: "Energy / retail / warning" },
          { property: "Pink 6",       value: "#F31BBB", notes: "Bold brand accent" },
          { property: "Indigo 5",     value: "#7E7FFF", notes: "AI / agentic" },
          { property: "Grey 8",       value: "#354A5E", notes: "Cool dark neutral" },
          { property: "Grey 5",       value: "#8394A5", notes: "Warm grey / neutral" },
          { property: "Grey 11",      value: "#121721", notes: "Premium dark navy" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Color combination system",
      },
      {
        type: "text",
        body: "Color pairings define which card backgrounds can appear together in a row of 3-4 cards. The system ensures no two adjacent cards share the same hue family. Warm and cool colors alternate. The combination grid shows approved and non-approved pairings for both the standard palette and the extended bold palette.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Color pairings grid -- standard palette combinations", caption: "Placeholder: Standard color combinations" },
          { src: "", alt: "Color pairings grid -- bold palette combinations", caption: "Placeholder: Bold color combinations" },
          { src: "", alt: "Example row -- blue + grey + neutral combination", caption: "Placeholder: Example card row combination" },
          { src: "", alt: "Example row -- teal + pink + dark combination", caption: "Placeholder: Example bold row combination" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Color Pairings -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
];

// --- Company Logos ------------------------------------------------------------

export const companyLogosPages: FoundationPage[] = [
  {
    slug: "overview",
    category: "foundation",
    title: "Company Logos",
    subtitle: "Customer story and partner logo usage across SAP.com",
    description:
      "Company logos appear in two primary contexts on SAP.com: customer story hero sections (showing customer brand on photography) and partner app listings (showing partner product icons). Each context has defined usage guidelines.",
    tags: ["logos", "customer-stories", "partners", "brand"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Two logo contexts",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Customer Stories", value: "Logo overlaid on hero photography", notes: "Large, prominent, reversed or full-color on image" },
          { property: "Partner Apps", value: "App icon in card grid", notes: "Square icon format, consistent sizing" },
          { property: "Customer story grid", value: "Logo + photo card in results grid", notes: "Pfizer, Howdens, Circulor, Microsoft examples" },
        ],
      },
    ],
  },
  {
    slug: "partners",
    category: "foundation",
    title: "Partners",
    subtitle: "Logo treatment for SAP partner brands on SAP.com",
    description:
      "SAP partner logos appear in co-branding contexts, partner ecosystem diagrams, and partner-focused content sections. Guidelines ensure consistent presentation of partner brands alongside SAP brand identity.",
    tags: ["logos", "partners", "co-brand", "ecosystem"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Partner logo usage",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Partner co-brand", value: "SAP logo + partner logo horizontal lockup", notes: "Equal visual weight, separated by divider" },
          { property: "Ecosystem grid", value: "Partner logos in a grid with SAP at center", notes: "Used in integration/ecosystem diagrams" },
          { property: "Partner finder card", value: "Partner logo in card with name and description", notes: "Directory listing format" },
          { property: "Co-marketing hero", value: "Dual logo treatment in hero section", notes: "Partnership announcements and joint campaigns" },
        ],
      },
      {
        type: "callout",
        variant: "note",
        body: "Always use the partner's approved logo file. Never recreate or modify partner logos. Request assets directly from the partner's brand team.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "SAP + partner co-brand lockup example", caption: "Placeholder: Co-brand lockup" },
          { src: "", alt: "Partner ecosystem grid -- AWS, Snowflake, Google, Databricks", caption: "Placeholder: Partner ecosystem grid" },
          { src: "", alt: "Partner finder card grid", caption: "Placeholder: Partner finder cards" },
        ],
        columns: 3,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Partners -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "customer-stories",
    category: "foundation",
    title: "Customer Stories",
    subtitle: "Logo and photography treatment for customer story pages",
    description:
      "Customer story heroes use large-format photography with the customer company logo prominently overlaid. The treatment varies by brand -- some logos are reversed to white, others appear in full color. The photography should feel premium and contextually relevant to the customer's industry.",
    tags: ["logos", "customer-stories", "photography", "brand"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Hero treatment",
      },
      {
        type: "text",
        body: "Customer story hero sections feature a large landscape photograph with the customer logo placed prominently in the upper portion of the image. The logo treatment should respect the customer brand -- use the brand's preferred logo version (full color, white, or dark) against the photograph. The photograph should be high quality and contextually relevant to the customer's business.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Pfizer customer story hero -- logo on laboratory photography", caption: "Placeholder: Pfizer hero treatment" },
          { src: "", alt: "KIND customer story hero -- logo on outdoor/nature photography", caption: "Placeholder: KIND hero treatment" },
        ],
        columns: 2,
      },
      {
        type: "heading",
        level: 2,
        text: "Customer story grid cards",
      },
      {
        type: "text",
        body: "In the 'See how customers are succeeding with SAP' section, each card shows a small thumbnail of the customer's photography with their logo overlaid. Cards have a consistent aspect ratio and the logo appears in the lower-left or center of the card.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Customer story grid showing Pfizer, Howdens, TELUS, and fund management cards", caption: "Placeholder: Customer story grid" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Customer Stories -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
  {
    slug: "partner-apps",
    category: "foundation",
    title: "Partner Apps",
    subtitle: "Partner app icon treatment in the SAP partner ecosystem",
    description:
      "Partner app icons appear in a consistent card grid format. Each partner app has a square icon at a defined size, appearing in a white card with the app name below. The treatment is clean and app-store-like -- the partner brand is the hero.",
    tags: ["logos", "partners", "partner-apps", "icons"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Partner app card grid",
      },
      {
        type: "text",
        body: "Partner apps are displayed in a consistent grid of white cards. Each card contains the partner's app icon at a standard size (64x64 or 80x80), the app name, and a brief description. The grid typically shows 3 cards per row. The white card treatment ensures every partner brand appears equally, regardless of their logo style.",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "Partner app grid showing three partner icons in white cards", caption: "Placeholder: Partner app grid" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Partner Apps -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
];

// --- Analyst Reports ----------------------------------------------------------

export const analystReportsPages: FoundationPage[] = [
  {
    slug: "overview",
    category: "foundation",
    title: "Analyst Reports",
    subtitle: "Design standards for analyst report cards and layouts",
    description:
      "Analyst report content on SAP.com follows a defined visual treatment. IDC reports and analyst spotlight content use a specific card anatomy with source branding, report title, abstract, and download CTA. The visual system ensures external analyst content integrates seamlessly with SAP-authored content.",
    tags: ["analyst-reports", "IDC", "spotlight", "cards", "external"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Analyst report card anatomy",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Source badge", value: "IDC logo or analyst firm name", notes: "Always present, top-left of card" },
          { property: "Spotlight badge", value: "'Spotlight' label in brand color", notes: "Used for featured/promoted analyst content" },
          { property: "Report title", value: "Bold, 2-3 lines max", notes: "Full IDC report title" },
          { property: "Abstract", value: "2-3 sentence summary", notes: "SAP-authored, not analyst copy" },
          { property: "Cover image", value: "IDC report cover thumbnail", notes: "Placeholder if no cover available" },
          { property: "CTA", value: "Download report / Read report", notes: "Primary action, SAP blue" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Layout contexts",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Featured card", value: "Large format, above fold", notes: "Single featured analyst report" },
          { property: "Card grid", value: "3-column grid with standard card", notes: "Multiple reports in a section" },
          { property: "Resource list", value: "Horizontal card with cover image left", notes: "In resources/downloads sections" },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "IDC analyst report card -- featured format with Spotlight badge", caption: "Placeholder: IDC featured card" },
          { src: "", alt: "Analyst report grid -- three IDC cards in a row", caption: "Placeholder: Analyst report grid" },
          { src: "", alt: "Analyst report in resource list -- horizontal layout", caption: "Placeholder: Analyst report list item" },
        ],
        columns: 3,
      },
      {
        type: "callout",
        variant: "note",
        body: "Analyst report cover images are provided by the analyst firm (IDC, Forrester, Gartner). Always use the official report cover -- do not create custom imagery for these cards.",
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "Analyst Reports -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
];

// --- Diagrams & Graphics ------------------------------------------------------

export const diagramsPages: FoundationPage[] = [
  {
    slug: "overview",
    category: "foundation",
    title: "Diagrams & Graphics",
    subtitle: "In-body and hero custom graphics for SAP.com",
    description:
      "Diagrams and custom graphics are a key part of SAP.com's visual system. They cover two contexts: in-body graphics (within editorial content) and hero custom graphics (as hero visuals). Both follow strict style guidelines for color, iconography, and composition.",
    tags: ["diagrams", "graphics", "in-body", "hero", "custom"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Two diagram contexts",
      },
      {
        type: "spec-table",
        rows: [
          { property: "In-body custom graphics", value: "Editorial diagrams within page content", notes: "Ecosystem maps, architecture diagrams, workflow charts" },
          { property: "Hero custom graphics", value: "Diagram as the hero visual", notes: "Large-scale, high-impact compositions" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Diagram examples",
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "AI Agents & Autonomous Domains diagram -- layered architecture with Knowledge Core, Intelligent Compute, Lakehouse Storage", caption: "Placeholder: Autonomous Domains diagram" },
          { src: "", alt: "RISE with SAP Methodology -- horizontal journey diagram", caption: "Placeholder: RISE methodology diagram" },
          { src: "", alt: "Q4 Future Release placeholder card", caption: "Placeholder: Q4 release card" },
          { src: "", alt: "Partner ecosystem diagram -- circular with SAP, AWS, Snowflake, Google, Databricks", caption: "Placeholder: Partner ecosystem diagram" },
        ],
        columns: 2,
      },
    ],
  },
  {
    slug: "in-body-graphics",
    category: "foundation",
    title: "In-Body Custom Graphics",
    subtitle: "Diagrams and graphics used within SAP.com editorial content",
    description:
      "In-body custom graphics appear within the body of page content -- not as heroes. They include ecosystem maps, SAP integration architecture diagrams, UI composite illustrations, and partner ecosystem visualizations.",
    tags: ["diagrams", "in-body", "ecosystem", "architecture", "icons"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Graphic types",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Ecosystem map", value: "SAP product/partner icon grid on gradient background", notes: "Shows integration ecosystem breadth" },
          { property: "Architecture diagram", value: "Layered stack with labels and connectors", notes: "Technical architecture visualization" },
          { property: "UI composite", value: "Multiple UI panels arranged compositionally", notes: "Shows product UI family together" },
          { property: "Partner ecosystem", value: "Circular or radial layout with logos", notes: "SAP + AWS + Snowflake + Google + Databricks" },
          { property: "Process flow", value: "Linear left-to-right with nodes", notes: "Workflow and methodology diagrams" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Style guidelines",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Icon style", value: "SAP icon family -- consistent stroke weight", notes: "Never mix icon families" },
          { property: "Background", value: "Gradient (blues/teals) or white", notes: "Match surrounding page context" },
          { property: "Typography", value: "Inter, same scale as body system", notes: "Labels are secondary to the visual" },
          { property: "Connectors", value: "Dashed or solid lines, SAP blue", notes: "Arrows show directionality" },
          { property: "Color", value: "Follows product/LOB color system", notes: "AI/agentic = blue-indigo; data = teal; etc." },
        ],
      },
      {
        type: "gallery",
        images: [
          { src: "", alt: "SAP Business Data Cloud ecosystem -- SAP + partner icons on gradient", caption: "Placeholder: BDC ecosystem diagram" },
          { src: "", alt: "Icon connection flow -- SAP Joule + partner icons with dashed connectors", caption: "Placeholder: Icon connection diagram" },
          { src: "", alt: "UI composite -- multiple Fiori + Joule panels arranged", caption: "Placeholder: UI composite diagram" },
          { src: "", alt: "Partner ecosystem circle -- AWS, Snowflake, Google, Databricks around SAP", caption: "Placeholder: Partner ecosystem diagram" },
        ],
        columns: 2,
      },
      {
        type: "figma",
        embed: {
          url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPLACEHOLDER",
          title: "In-Body Custom Graphics -- Sapphire 2026 Design Production",
          height: 600,
        },
      },
    ],
  },
];

// --- Foundations (Visual Direction) -------------------------------------------

export const foundations: FoundationPage[] = [
  {
    slug: "visual-direction",
    category: "foundation",
    title: "Visual Direction",
    subtitle: "SAP.com Web Visual System -- May 2026",
    description:
      "This is the living documentation of the SAP.com Web Visual System. It covers the full art direction across the site: visual principles, color, product UI, hero layouts, resources, company logos, and diagrams. This system governs how SAP.com looks, feels, and communicates across every page type.",
    tags: ["strategy", "direction", "overview", "art-direction"],
    status: "published",
    lastUpdated: "2026-05-20",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "What this system covers",
      },
      {
        type: "spec-table",
        rows: [
          { property: "Agentic Glass", value: "Visual principles for AI-native surfaces", notes: "The foundational aesthetic -- glass, blur, layering, light" },
          { property: "Color", value: "Gradient systems and wayfinding palette", notes: "Organic, graphic pattern, linear; topic/LOB/industry mapping" },
          { property: "Product UI", value: "How SAP products appear across the site", notes: "Key features, capabilities, hero graphics, video, trials" },
          { property: "Hero", value: "Hero layout systems for all page types", notes: "Homepage, topic overview, topic pages, customized" },
          { property: "Resources", value: "Resource card types and color system", notes: "10 card types, 10 background colors, combination grid" },
          { property: "Company Logos", value: "Customer story and partner app treatments", notes: "Photography + logo; partner app icon grid" },
          { property: "Diagrams & Graphics", value: "In-body and hero custom graphics", notes: "Ecosystem maps, architecture, process flows, UI composites" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Strategic context",
      },
      {
        type: "text",
        body: "SAP is all in on AI. The visual system reflects this -- every design decision is made in the context of positioning SAP as the AI company for business. The Agentic Glass aesthetic, the AI-native color system (blues, indigos, electric), and the product UI treatment all signal intelligence, capability, and transformation.",
      },
      {
        type: "callout",
        variant: "insight",
        body: "The overarching visual direction: tech-forward, frosted glass, layered depth, translucency, modern premium feel. Every surface should feel like it belongs to a company that is building the next generation of enterprise software.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to use this system",
      },
      {
        type: "text",
        body: "Use the navigation on the left to explore each section. Each section contains the design rationale, usage guidelines, visual examples, and a Figma embed for the live spec. The Figma embeds will be populated as files are published -- placeholders indicate where embeds will appear.",
      },
    ],
  },
];

// --- Color Systems (legacy route, keep for compatibility) ---------------------

export const colorSystems: ColorSystemPage[] = [];

// --- Content registry ---------------------------------------------------------

export function getPrincipleBySlug(slug: string): PrinciplePage | undefined {
  return principles.find((p) => p.slug === slug);
}

export function getColorSystemBySlug(slug: string): ColorSystemPage | undefined {
  return colorSystems.find((c) => c.slug === slug);
}

export function getFoundationBySlug(slug: string): FoundationPage | undefined {
  return [
    ...foundations,
    ...colorPages,
    ...productUIPages,
    ...heroPages,
    ...resourcesPages,
    ...companyLogosPages,
    ...analystReportsPages,
    ...diagramsPages,
  ].find((f) => f.slug === slug);
}

export function getAnalystReportsPage(): FoundationPage | undefined {
  return analystReportsPages[0];
}
