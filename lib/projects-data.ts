export interface Edit {
  id: string
  title: string
  subtitle: string
  duration: string
  thumbnail: string
  videoUrl?: string
  category: string
  description: string
}

export interface Design {
  id: string
  title: string
  subtitle: string
  thumbnail: string
  category: string
  images: string[]
  description: string
}

export const edits: Edit[] = [
  {
    id: "podcast-clip-edit",
    title: "PODCAST CLIP EDIT",
    subtitle: "High Retention",
    duration: "0:45",
    thumbnail: "/edits/podcast.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Podcast",
    description: "A high-retention podcast clip edit designed to maximize engagement and watch time. This project involved cutting down a longer podcast segment into a punchy, attention-grabbing short-form video. Key techniques included dynamic text overlays, strategic zoom cuts, and rhythm-based editing to maintain viewer interest throughout."
  },
  {
    id: "fitness-brand-reel",
    title: "FITNESS BRAND REEL",
    subtitle: "Energy. Pace. Flow.",
    duration: "0:38",
    thumbnail: "/edits/fitness.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Brand",
    description: "An energetic brand reel created for a fitness company. The edit focuses on showcasing the brand's energy and values through fast-paced cuts synchronized to an upbeat soundtrack. Color grading was carefully tuned to match the brand's visual identity while maintaining a premium feel."
  },
  {
    id: "product-reel",
    title: "PRODUCT REEL",
    subtitle: "Cinematic Edit",
    duration: "0:29",
    thumbnail: "/edits/product.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Product",
    description: "A cinematic product showcase reel that elevates the product through dramatic lighting, smooth transitions, and atmospheric sound design. The edit emphasizes the product's premium qualities through careful composition and pacing that builds anticipation."
  },
  {
    id: "motivational-short",
    title: "MOTIVATIONAL SHORT",
    subtitle: "Bold Cuts. Impact.",
    duration: "0:31",
    thumbnail: "/edits/motivational.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Motivational",
    description: "A powerful motivational short designed to inspire and captivate. This edit combines impactful visuals with a carefully curated soundtrack to create an emotional journey. Bold typography and dynamic transitions reinforce the motivational message."
  },
]

export const designs: Design[] = [
  {
    id: "alumni-branding",
    title: "Alumni Branding",
    subtitle: "Identity Design",
    thumbnail: "/designs/alumni.jpg",
    category: "Branding",
    images: ["/designs/alumni.jpg"],
    description: "A comprehensive brand identity project for the Alumni Association. This project involved creating a cohesive visual system including logo design, color palette, typography guidelines, and various brand collateral. The design reflects the prestigious heritage of the institution while maintaining a modern, approachable feel."
  },
  {
    id: "event-posters",
    title: "Event Posters",
    subtitle: "Design",
    thumbnail: "/designs/posters.jpg",
    category: "Print",
    images: ["/designs/posters.jpg"],
    description: "A collection of event posters designed for various college events and fests. Each poster was crafted to capture the unique energy and theme of the event while maintaining visual consistency across the series. The designs incorporate bold typography, vibrant colors, and striking imagery."
  },
  {
    id: "social-media-design",
    title: "Social Media Design",
    subtitle: "Feed & Carousels",
    thumbnail: "/designs/social.jpg",
    category: "Social Media",
    images: ["/designs/social.jpg"],
    description: "A complete social media design package including feed posts, carousel designs, and story templates. The designs maintain a cohesive visual identity while being optimized for engagement across different platforms. Each piece was crafted to stop the scroll and communicate effectively."
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    subtitle: "Web & Mobile",
    thumbnail: "/designs/uiux.jpg",
    category: "UI/UX",
    images: ["/designs/uiux.jpg"],
    description: "A collection of UI/UX design projects spanning web and mobile applications. These designs focus on creating intuitive user experiences while maintaining visual appeal. Each project involved user research, wireframing, prototyping, and high-fidelity design iterations."
  },
]

export const editCategories = ["All", "Podcast", "Brand", "Product", "Motivational"]
export const designCategories = ["All", "Branding", "Print", "Social Media", "UI/UX"]

export interface Experience {
  id: string
  title: string
  position?: string | string[]
  description: string
  icon?: string
  fullDescription: string
  highlights: string[]
  bestWork?: {
    title: string;
    description: string;
  }[]
}

export const experiences: Experience[] = [
  {
    id: "alumni-association",
    title: "H.R. College Alumni Association",
    position: [
      "Alumni Relations Officer (May 2026 - Present)",
      "Alumni Secretary (May 2025 - April 2026)"
    ],
    description: "Leading branding, communications and engagement initiatives for the alumni network.",
    icon: "/hr-college-logo.png",
    fullDescription: "Started as Alumni Secretary and later transitioned into a full-time Alumni Relations Officer role after contributing to alumni engagement initiatives. My work combines design, content, strategy and community-building to strengthen the connection between H.R. College and its alumni network.",
    highlights: [
      "Designed the Alumni Portal in Figma and helped define features and user experience",
      "Achieved 50+ paid member registrations within the first week of launch",
      "Managing official H.R. College and H.R. Alumni Association social media presence",
      "Worked on Alumni Magazine, Welcome Kits, identity cards, visiting cards and merchandise concepts"
    ],
    bestWork: [
      {
        title: "Portal UI design",
        description: "[Description of your UI design work here...]"
      },
      {
        title: "Alumni Feed",
        description: "[Description of your work on the Alumni Feed here...]"
      },
      {
        title: "Alumni Merchandise",
        description: "[Description of merchandise design here...]"
      },
      {
        title: "Alumni flyers",
        description: "[Description of flyers designed here...]"
      },
      {
        title: "New logo for alumni association",
        description: "[Description of the new logo design process here...]"
      },
      {
        title: "Alumni Newsletter",
        description: "[Description of the newsletter work here...]"
      }
    ]
  },
  {
    id: "students-council",
    title: "The Students' Council",
    position: "Digital Arts and Technicals Head (2024-2026)",
    description: "Leading creative direction across college campaigns, events and digital experiences.",
    icon: "/students-council-logo.png",
    fullDescription: "As the Digital Arts & Technicals Head, I led the creative direction behind multiple college initiatives and experiences, ensuring that every campaign and event had a strong and consistent visual identity. From social media and branding assets to video content and on-ground execution, my role focused on turning ideas into engaging visual experiences while leading and mentoring a creative team.",
    highlights: [
      "Produced the H.R. Video - showcased at official college events for two consecutive years",
      "Led the Council's creative and technical direction across multiple events",
      "Designed the Instagram feed and Core Reveal campaigns",
      "Developed branding assets across digital and on-ground experiences",
      "Oversaw end-to-end technical execution and event operations"
    ]
  },
  {
    id: "freelance-work",
    title: "Freelance Video Editing Work",
    position: "Freelance Video Editor (2023 - Present)",
    description: "Creating short-form content designed to capture attention and keep audiences engaged.",
    icon: "/freelance-logo.png",
    fullDescription: "Started by editing content for Instagram creators and YouTube Shorts, focusing on transforming raw footage into engaging videos through storytelling, pacing and motion design. My work continues to evolve through experimentation and refining visual styles.",
    highlights: [
      "Edited short-form content for Instagram Reels and YouTube Shorts",
      "Integrated motion graphics and visual effects into projects",
      "Multiple videos reached lakhs to millions of views",
      "Constantly refining editing techniques and creative workflows",
      "Built personal projects and reworked older edits to improve quality"
    ]
  }
]
