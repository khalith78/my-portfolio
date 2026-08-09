/// <reference types="vite/client" />
import { Project, Service, Skill, Experience, Testimonial } from "./types";
import Mograph from "./assets/icons/mograph.svg";
import Video from "./assets/icons/video.svg";
import UiuxIcon from "./assets/icons/design.svg";

export const projectsData: Project[] = [
  
  {
    id: "poster1",
    title: "Headphone Poster",
    category: "graphic",
    categoryLabel: "Graphic Design & Posters",
    image: "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Headphone%20Poster.jpg",
    description: "Creative promotional poster featuring a modern headphone concept.",
    longDescription: "A high-impact poster designed with bold typography, vibrant colors, and premium composition to showcase modern graphic design skills.",
    client: "Personal Project",
    role: "Graphic Designer",
    year: "2026",
    duration: "1 Day",
    skillsUsed: ["Photoshop", "Illustrator"],
    challenge: "Create a visually striking promotional poster.",
    solution: "Used strong typography, clean composition, and professional color grading.",
    keyDeliverables: [
      "High Resolution Poster",
      "Print Ready Version",
      "Editable Source File"
    ],
    gallery: [
      "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Headphone%20Poster.jpg"
    ]
  },
  {
    id: "poster2",
    title: "Lewis Hamilton × Ferrari Poster",
    category: "graphic",
    categoryLabel: "Graphic Design & Posters",
    image: "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Lewis%20Hamilton%20Ferrari%20Post.jpg",
    description: "A modern sports poster celebrating Lewis Hamilton's move to Ferrari with bold typography and premium visual composition.",
    longDescription:
      "A conceptual sports poster inspired by Lewis Hamilton's Ferrari era. The design combines portrait compositing, Formula 1 imagery, strong red-and-white branding, and dynamic typography to create a premium editorial-style poster suitable for social media and print.",
    client: "Personal Project",
    role: "Graphic Designer",
    year: "2026",
    duration: "1 Day",
    skillsUsed: ["Photoshop", "Illustrator"],
    challenge:
      "Design a visually powerful motorsport poster that captures the excitement and prestige of Ferrari while maintaining a clean, modern layout.",
    solution:
      "Combined high-quality cutouts, bold typography, Ferrari-inspired color palette, and balanced composition to create a striking promotional artwork.",
    keyDeliverables: [
     "High Resolution Poster",
     "Social Media Version",
     "Print Ready Design"
  ],
    gallery: [
      "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Lewis%20Hamilton%20Ferrari%20Post.jpg"
    ]
  },
  {
    id: "poster3",
    title: "Kerala Monsoon Travel Poster",
    category: "graphic",
    categoryLabel: "Graphic Design & Posters",
    image: "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Travel%20Agency%20Poster%202.jpg",
    description: "A promotional travel poster designed to showcase Kerala's monsoon tourism package with a fresh, nature-inspired visual style.",
    longDescription:
      "A travel campaign poster created to promote Kerala's monsoon destinations. The design combines scenic photography, clean typography, vibrant green accents, and clear call-to-action elements to highlight popular destinations including Munnar, Thekkady, Alleppey, and Kovalam. The layout is optimized for social media and print advertising.",
    client: "Personal Project",
    role: "Graphic Designer",
    year: "2026",
    duration: "1 Day",
    skillsUsed: ["Photoshop", "Illustrator"],
    challenge:
      "Create an eye-catching tourism advertisement that instantly communicates the beauty of Kerala while keeping travel information easy to read.",
    solution:
      "Used atmospheric imagery, bold typography, high-contrast labels, and a structured layout to create a modern promotional travel poster.",
    keyDeliverables: [
      "Social Media Poster",
      "Print Ready Design",
      "High Resolution Artwork"
  ],
    gallery: [
      "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Travel%20Agency%20Poster%202.jpg"
    ]
  },
  {
  id: "poster4",
  title: "MT Helmet Product Advertisement Poster",
  category: "graphic",
  categoryLabel: "Graphic Design & Posters",

  image:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/MT%20Helmet.jpg",

  description:
    "A premium product advertisement poster designed for a motorcycle helmet brand, focusing on bold typography, product presentation, and a modern automotive visual style.",

  longDescription:
    "A high-impact product marketing poster created for MT Helmets. The design showcases the Hummer B Air F2 Matt Grey Full Face Helmet with a dark premium background, strong headline typography, and clean product positioning. The composition combines automotive aesthetics, brand identity, and commercial advertising elements to create a professional promotional visual.",

  client: "Personal Project",

  role: "Graphic Designer",

  year: "2026",

  duration: "1 Day",

  skillsUsed: [
    "Photoshop",
    "Illustrator"
  ],

  challenge:
    "Create a premium helmet advertisement that highlights the product features while maintaining a bold and modern brand identity.",

  solution:
    "Used high-contrast lighting, dark cinematic backgrounds, strong typography hierarchy, and product-focused composition to create an impactful promotional poster.",

  keyDeliverables: [
    "Product Advertisement Poster",
    "Social Media Campaign Design",
    "High Resolution Artwork"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/MT%20Helmet.jpg"
  ]
},
{
  id: "poster5",
  title: "Travel Agency Promotional Poster",
  category: "graphic",
  categoryLabel: "Graphic Design & Posters",

  image:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Travel%20Agency%20Poster%201.jpg",

  description:
    "A modern travel agency promotional poster designed to showcase holiday packages with attractive visuals, clear typography, and engaging travel-focused composition.",

  longDescription:
    "A promotional travel campaign poster created for a travel agency brand. The design combines destination imagery, vibrant colors, structured typography, and strong visual hierarchy to communicate travel packages effectively. The composition focuses on creating an exciting and trustworthy experience for customers looking for holiday and tourism services.",

  client: "Personal Project",

  role: "Graphic Designer",

  year: "2026",

  duration: "1 Day",

  skillsUsed: [
    "Photoshop",
    "Illustrator"
  ],

  challenge:
    "Create an attractive travel advertisement that captures attention while presenting destination information and package details clearly.",

  solution:
    "Used high-quality travel imagery, balanced typography, vibrant color combinations, and clean layout structure to create a professional tourism marketing poster.",

  keyDeliverables: [
    "Travel Advertisement Poster",
    "Social Media Campaign Design",
    "High Resolution Artwork"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Travel%20Agency%20Poster%201.jpg"
  ]
},
{
  id: "poster6",
  title: "Nature Tree Environmental Poster",
  category: "graphic",
  categoryLabel: "Graphic Design & Posters",

  image:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Nature%20Tree%20Poster.jpg",

  description:
    "A nature-inspired environmental poster designed to communicate sustainability, greenery, and the importance of protecting nature through a powerful visual concept.",

  longDescription:
    "A conceptual environmental poster created with a focus on nature conservation and visual storytelling. The design combines natural elements, tree imagery, balanced composition, and meaningful typography to create an awareness-driven artwork. The poster highlights the connection between humans and nature while maintaining a clean and impactful graphic style.",

  client: "Personal Project",

  role: "Graphic Designer",

  year: "2026",

  duration: "1 Day",

  skillsUsed: [
    "Photoshop",
    "Illustrator"
  ],

  challenge:
    "Create a visually engaging environmental poster that communicates the importance of nature and sustainability in a simple yet impactful way.",

  solution:
    "Used nature-based imagery, harmonious color tones, creative composition, and strong typography hierarchy to build an emotional connection with the audience.",

  keyDeliverables: [
    "Environmental Awareness Poster",
    "Social Media Artwork",
    "High Resolution Design"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Nature%20Tree%20Poster.jpg"
  ]
},{
  id: "poster7",
  title: "Carpenter Hiring Service Advertisement Post",
  category: "graphic",
  categoryLabel: "Graphic Design & Posters",

  image:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Hiring%20Carpenter%20Post.jpg",

  description:
    "A professional hiring advertisement post designed to promote carpenter services with clear information, strong visuals, and an effective service-focused layout.",

  longDescription:
    "A service promotion graphic created for a carpenter hiring campaign. The design focuses on communicating job/service information clearly through structured typography, relevant imagery, and an attractive layout. The poster is optimized for digital marketing platforms to help businesses reach potential customers quickly and effectively.",

  client: "Personal Project",

  role: "Graphic Designer",

  year: "2026",

  duration: "1 Day",

  skillsUsed: [
    "Photoshop",
    "Illustrator"
  ],

  challenge:
    "Create an informative service advertisement that attracts attention while making the hiring message easy to understand.",

  solution:
    "Used clear typography hierarchy, professional imagery, balanced spacing, and marketing-focused design elements to create an engaging promotional post.",

  keyDeliverables: [
    "Social Media Advertisement Post",
    "Service Promotion Artwork",
    "High Resolution Design"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Hiring%20Carpenter%20Post.jpg"
  ]
},
{
  id: "poster8",
  title: "Anniversary Celebration Social Media Post",
  category: "graphic",
  categoryLabel: "Graphic Design & Posters",

  image:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Anniversary%20Celeb%20Post.jpg",

  description:
    "A premium anniversary celebration post designed to highlight a special occasion with elegant visuals, balanced typography, and an attractive social media layout.",

  longDescription:
    "A celebration-themed social media design created for an anniversary event. The artwork combines elegant design elements, decorative visuals, and a refined typography style to communicate the importance of the occasion. The layout focuses on creating an emotional and visually appealing announcement suitable for digital platforms.",

  client: "Personal Project",

  role: "Graphic Designer",

  year: "2026",

  duration: "1 Day",

  skillsUsed: [
    "Photoshop",
    "Illustrator"
  ],

  challenge:
    "Create an elegant anniversary celebration design that feels premium while clearly presenting the event message and details.",

  solution:
    "Used sophisticated typography, balanced spacing, attractive visual elements, and a celebration-focused color palette to create a polished event promotional post.",

  keyDeliverables: [
    "Social Media Celebration Post",
    "Event Announcement Artwork",
    "High Resolution Design"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Anniversary%20Celeb%20Post.jpg"
  ]
}
  
];

export const motionProjectsData: Project[] = [

  {
 
  id: "motion1",

  title: "Beyond Social Media: Building Your Own Ecommerce Platform",

  category: "motion",

  categoryLabel: "Motion Graphics",

  orientation:"landscape",


  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Beyond%20Social%20Media.jpg",


  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Expanding%20Beyond%20Social%20Media%20Why%20Should%20You%20Own%20an%20Ecommerce%20Website.mp4",


  duration: "00:55",


  description:
    "A motion graphics explainer video highlighting why businesses should move beyond social media and establish their own ecommerce presence.",


  longDescription:
    "This motion design project transforms a business concept into an engaging visual story. Through animated typography, clean iconography, and smooth transitions, the video explains the importance of owning an ecommerce platform instead of depending only on third-party social media channels.",


  client: "Personal Project",

  role: "Motion Designer",

  year: "2026",


  skillsUsed:[
    "After Effects",
    "Premiere Pro",
    "Motion Graphics",
    "Typography Animation"
  ],


  challenge:
    "Communicate a business-focused idea in a simple and engaging way while keeping viewers interested throughout the explanation.",


  solution:
    "Created a modern motion graphics system using animated text, visual storytelling, icons, and smooth scene transitions to simplify complex ecommerce concepts.",


  keyDeliverables:[
    "Motion Graphics Explainer Video",
    "Social Media Optimized Version",
    "Typography Animation",
    "Visual Storytelling"
  ],


  gallery:[
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Beyond%20Social%20Media.jpg"
  ],


  image:""

  },


{
  id: "motion2",

  title: "Beyond Borders: Kinetic Typography Reel",

  category: "motion",

  categoryLabel: "Motion Graphics",

  orientation: "portrait",


  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Beyond%20Borders.jpg",


  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Beyond%20Borders.mp4",


  duration: "01:00",


  description:
    "A vertical kinetic typography motion reel exploring expressive text animation, rhythm, and visual storytelling.",


  longDescription:
    "Beyond Borders is a portrait-format motion design experiment focused on bringing words to life through kinetic typography. The project combines animated text, timing, transitions, and visual effects to create an engaging storytelling experience optimized for short-form digital platforms.",


  client: "Personal Project",


  role: "Motion Designer",


  year: "2026",


  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Kinetic Typography",
    "Motion Design"
  ],


  challenge:
    "Create an engaging vertical motion piece where typography becomes the main visual element while maintaining clarity and flow.",


  solution:
    "Designed custom typography animations with dynamic movement, smooth transitions, and rhythm-based timing to transform static words into an immersive visual experience.",


  keyDeliverables: [
    "Vertical Motion Reel",
    "Kinetic Typography Animation",
    "Social Media Optimized Export"
  ],


  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Beyond%20Borders.jpg"
  ],


  image: ""
},

  
{
  id: "motion3",

  title: "WhatsApp Order Tracking: Simplifying Customer Experience",

  category: "motion",

  categoryLabel: "Motion Graphics",

  orientation: "portrait",


  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20WhatsApp%20Order.jpg",


  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Whatsapp%20made%20order%20tracking%20easy.mp4",


  duration: "01:00",


  description:
    "A vertical motion graphic explainer showcasing how WhatsApp-based order tracking can improve customer communication and shopping experience.",


  longDescription:
    "This motion design project explains a simple digital solution for managing customer orders through WhatsApp. Using clean typography, animated icons, and engaging transitions, the video presents how businesses can make order tracking faster and more convenient for customers.",


  client: "Personal Project",


  role: "Motion Designer",


  year: "2026",


  skillsUsed: [
    "After Effects",
    "Premiere Pro",
    "Motion Graphics",
    "Visual Storytelling"
  ],


  challenge:
    "Communicate a business workflow clearly while keeping the content engaging for short-form digital platforms.",


  solution:
    "Created a fast-paced motion system using animated UI elements, icons, typography, and smooth transitions to explain the customer journey visually.",


  keyDeliverables: [
    "Vertical Explainer Video",
    "Social Media Reel Format",
    "Motion Graphics Animation",
    "MP4 Export"
  ],


  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20WhatsApp%20Order.jpg"
  ],


  image: ""

  },
  {
  id: "motion4",

  title: "Introducing ZenBasket",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation: "portrait",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20What%20is%20ZenBasket.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/What%20is%20ZenBasket.mp4",

  duration: "00:60",

  description:
    "A product explainer animation introducing ZenBasket through engaging visuals and clean motion graphics.",

  longDescription:
    "A modern motion design explainer created to introduce ZenBasket and communicate its features through animated typography, smooth transitions, and visually engaging storytelling.",

  client: "ZenBasket",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Explain the product concept clearly while keeping the audience engaged throughout the video.",

  solution:
    "Created a clean motion system using animated typography, icons, transitions, and structured visual storytelling to simplify the product message.",

  keyDeliverables: [
    "Product Explainer Video",
    "Motion Graphics Animation",
    "Digital Marketing Version"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20What%20is%20ZenBasket.jpg"
  ],

  image: ""
},

{
  id: "motion5",

  title: "Hire Indian Developers",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Hire%20Indian%20Devs.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Hire%20Indian%20Devs.mp4",

  duration: "00:60",

  description:
    "A promotional motion graphics video created to highlight the benefits of hiring skilled Indian developers for modern businesses.",

  longDescription:
    "A dynamic promotional video designed to communicate the value of hiring Indian developers through engaging motion graphics, animated typography, smooth transitions, and visually driven storytelling.",

  client: "Hire Indian Developers",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Present the advantages of hiring Indian developers in a simple, engaging, and visually appealing format.",

  solution:
    "Created a fast-paced motion design system combining animated typography, graphics, transitions, and structured storytelling to communicate the message effectively.",

  keyDeliverables: [
    "Promotional Video",
    "Motion Graphics Animation",
    "Digital Marketing Video"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Hire%20Indian%20Devs.jpg"
  ],

  image: ""
},

{
  id: "motion6",

  title: "Looking for AI Developers",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20AI%20Devs.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Looking%20for%20AI%20Devs.mp4",

  duration: "00:60",

  description:
    "A modern promotional animation created to attract businesses looking for skilled AI developers.",

  longDescription:
    "A visually engaging motion graphics video focused on communicating the demand for AI development talent. The animation combines clean typography, dynamic transitions, and technology-inspired visuals to create a strong promotional message.",

  client: "AI Developers",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Communicate the need for experienced AI developers while maintaining a modern technology-focused visual style.",

  solution:
    "Developed a clean and energetic motion system using animated typography, graphical elements, transitions, and visual storytelling tailored to the AI and technology space.",

  keyDeliverables: [
    "AI Recruitment Video",
    "Motion Graphics Animation",
    "Digital Marketing Version"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20AI%20Devs.jpg"
  ],

  image: ""
},

{
  id: "motion7",

  title: "Netflix vs Blockbuster",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Biz%20Strategy.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Netflix_vs_Blockbuster.mp4",

  duration: "00:60",

  description:
    "A business strategy motion graphic exploring the rise of Netflix and the decline of Blockbuster.",

  longDescription:
    "A storytelling-driven motion design video comparing Netflix and Blockbuster to highlight how changing customer behavior, technology, and business strategy can transform an entire industry.",

  client: "Business Strategy",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Explain a complex business transformation in a concise and engaging format that is easy for viewers to understand.",

  solution:
    "Used animated storytelling, visual comparisons, typography, transitions, and supporting graphics to present the Netflix versus Blockbuster case study in an engaging way.",

  keyDeliverables: [
    "Business Strategy Video",
    "Motion Graphics Animation",
    "Educational Content Video"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Biz%20Strategy.jpg"
  ],

  image: ""
},

{
  id: "motion8",

  title: "Theme Video",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Theme%20Video.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Theme%20Video.mp4",

  duration: "00:60",

  description:
    "A visually immersive theme video created using expressive motion graphics and engaging visual storytelling.",

  longDescription:
    "A creative theme-based motion design project combining typography, visual elements, transitions, and rhythmic animation to establish a strong visual identity and engaging viewing experience.",

  client: "Theme Video",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Create a visually compelling video that establishes a distinct theme while maintaining consistency throughout the animation.",

  solution:
    "Built a cohesive motion language using typography, graphical elements, transitions, and visual rhythm to create a memorable thematic experience.",

  keyDeliverables: [
    "Theme Video",
    "Motion Graphics Animation",
    "Visual Storytelling"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Theme%20Video.jpg"
  ],

  image: ""
},

{
  id: "motion9",

  title: "Website Launch Video",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Website%20Launch%20Video.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Website%20Launch%20Video.mp4",

  duration: "00:60",

  description:
    "A website launch animation created to introduce a new digital experience through engaging motion graphics.",

  longDescription:
    "A polished launch video designed to create excitement around a new website. The project uses animated typography, interface-inspired visuals, smooth transitions, and structured storytelling to showcase the digital experience.",

  client: "Website Launch",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Create an engaging launch video that introduces the website and captures attention across digital platforms.",

  solution:
    "Designed a modern motion sequence using animated text, interface visuals, transitions, and dynamic compositions to build excitement around the website launch.",

  keyDeliverables: [
    "Website Launch Video",
    "Motion Graphics Animation",
    "Digital Marketing Version"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Website%20Launch%20Video.jpg"
  ],

  image: ""
},



{
  id: "motion11",

  title: "Work Life Balance",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Work%20Life.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Work%20Life%20Balance.mp4",

  duration: "00:60",

  description:
    "A motion graphics video exploring the importance of maintaining a healthy balance between professional and personal life.",

  longDescription:
    "A visually engaging storytelling piece focused on work-life balance. The animation combines expressive graphics, typography, transitions, and relatable visual storytelling to communicate the importance of balance and well-being.",

  client: "Work Life Balance",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Communicate the concept of work-life balance in a relatable and engaging way without making the message feel overly complex.",

  solution:
    "Used simple visual metaphors, animated typography, smooth transitions, and structured storytelling to make the message accessible and engaging.",

  keyDeliverables: [
    "Awareness Video",
    "Motion Graphics Animation",
    "Social Media Video"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Work%20Life.jpg"
  ],

  image: ""
},

{
  id: "motion12",

  title: "Yazh Sarees",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Yazh%20Sarees.jpg",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Yazh%20Sarees.mp4",

  duration: "00:60",

  description:
    "A stylish promotional motion video created for Yazh Sarees, combining elegant visuals with engaging brand storytelling.",

  longDescription:
    "A fashion-focused motion design video created to showcase Yazh Sarees through elegant compositions, animated typography, smooth transitions, and visually rich storytelling that reflects the brand's traditional and contemporary appeal.",

  client: "Yazh Sarees",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Present the saree brand in a visually elegant way while creating an engaging promotional experience for the audience.",

  solution:
    "Created a refined visual language using elegant typography, smooth transitions, product-focused compositions, and rhythmic motion to complement the saree brand.",

  keyDeliverables: [
    "Brand Promotional Video",
    "Motion Graphics Animation",
    "Social Media Marketing Video"
  ],

  gallery: [
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Yazh%20Sarees.jpg"
  ],

  image: ""
},
{
  id: "motion10",

  title: "Website Video",

  category: "motion",

  categoryLabel: "Motion Design",

  orientation:"landscape",

  thumbnail: "",

  video:
    "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Website%20Video%201.mp4",

  duration: "00:60",

  description:
    "A website-focused motion video created to communicate a digital product or online experience through engaging visuals.",

  longDescription:
    "A clean digital motion design piece created to showcase a website experience through animated visual elements, transitions, typography, and structured storytelling.",

  client: "Website Project",

  role: "Motion Designer",

  year: "2026",

  skillsUsed: [
    "After Effects",
    "Illustrator",
    "Premiere Pro"
  ],

  challenge:
    "Present the website experience in a visually engaging format while keeping the communication clear and easy to follow.",

  solution:
    "Created a streamlined motion sequence using typography, digital interface elements, transitions, and visual storytelling to highlight the website.",

  keyDeliverables: [
    "Website Video",
    "Motion Graphics Animation",
    "Digital Presentation Video"
  ],

  gallery: [],

  image: ""
},

{
id: "motion13",

title: "Centizen Products",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Centizen%20products.png",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Centizen%20products.mp4",

duration: "00:60",

description:
"A product-focused motion video showcasing Centizen's products through clean visuals, engaging transitions, and structured storytelling.",

longDescription:
"A promotional motion design video created to showcase Centizen's product offerings through engaging visual compositions, animated typography, smooth transitions, and a clear storytelling approach that communicates the product value effectively.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Present multiple products clearly while maintaining a visually engaging and consistent brand experience.",

solution:
"Created a structured motion system using product-focused visuals, animated typography, transitions, and clean compositions to communicate the offerings effectively.",

keyDeliverables: [
"Product Promotional Video",
"Motion Graphics Animation",
"Digital Marketing Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Centizen%20products.png"
],

image: ""
},

{
id: "motion14",

title: "City Bikers Posters",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20city%20bikers.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/City%20BIkers%20Posters.mp4",

duration: "00:60",

description:
"A dynamic promotional motion video transforming City Bikers poster designs into engaging animated content.",

longDescription:
"A visually energetic motion design piece created for City Bikers, bringing poster-based campaign visuals to life through animated compositions, typography, transitions, and rhythmic movement designed for digital audiences.",

client: "City Bikers",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Transform static poster artwork into an engaging motion experience without losing the visual impact of the original designs.",

solution:
"Animated the poster elements with dynamic transitions, typography movement, visual emphasis, and rhythmic pacing to create a more engaging promotional format.",

keyDeliverables: [
"Animated Poster Video",
"Motion Graphics",
"Social Media Promotional Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20city%20bikers.jpg"
],

image: ""
},

{
id: "motion15",

title: "Cut Costs",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Cut%20costs.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Cut%20Costs%20.mp4",

duration: "00:60",

description:
"An informative motion video communicating cost-saving ideas through clear visuals, animated typography, and concise storytelling.",

longDescription:
"A business-focused motion design video created to communicate cost reduction concepts in a simple and engaging way using animated typography, supporting graphics, transitions, and structured visual storytelling.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Communicate cost-saving concepts quickly while keeping the information easy to understand and visually engaging.",

solution:
"Used concise messaging, animated typography, supporting visual elements, and smooth transitions to turn the business message into an engaging motion experience.",

keyDeliverables: [
"Business Explainer Video",
"Motion Graphics Animation",
"Digital Marketing Version"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Cut%20costs.jpg"
],

image: ""
},

{
id: "motion16",

title: "Gratuity",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Gratuity.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Gratuity.mp4",

duration: "00:60",

description:
"An informative explainer video simplifying gratuity concepts through clean motion graphics and accessible visual storytelling.",

longDescription:
"A professional motion design explainer created to make gratuity-related information easier to understand through animated typography, explanatory visuals, structured transitions, and a clear communication style.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Simplify a financial and employee-related topic so that the audience can understand the key information quickly.",

solution:
"Created a clear visual narrative using animated text, icons, transitions, and structured information to make the topic approachable and engaging.",

keyDeliverables: [
"Explainer Video",
"Motion Graphics",
"Social Media Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Gratuity.jpg"
],

image: ""
},

{
id: "motion17",

title: "Hire Quality",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Hire%20Quality.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Hire%20Quality.mp4",

duration: "00:60",

description:
"A recruitment-focused motion video highlighting the importance of hiring quality talent through engaging visuals and concise storytelling.",

longDescription:
"A professional promotional motion video focused on the value of quality hiring, combining animated typography, modern graphics, transitions, and structured storytelling to communicate the recruitment message effectively.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Communicate the importance of quality hiring in a concise format that captures the attention of potential clients and employers.",

solution:
"Developed a strong visual narrative using bold typography, animated graphics, transitions, and messaging focused on the benefits of hiring quality talent.",

keyDeliverables: [
"Recruitment Promotional Video",
"Motion Graphics Animation",
"Social Media Marketing Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Hire%20Quality.jpg"
],

image: ""
},

{
id: "motion18",

title: "How Does Unpaid Leave Affect Payroll?",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20unpaid%20leave.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/How%20does%20unpaid%20leave%20affect%20payroll.mp4",

duration: "00:60",

description:
"An educational motion explainer showing how unpaid leave can impact payroll calculations.",

longDescription:
"A payroll-focused explainer video created to visually explain the relationship between unpaid leave and salary calculations through clear animated graphics, typography, transitions, and easy-to-follow storytelling.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Explain the payroll impact of unpaid leave in a way that is simple, informative, and easy for employees and businesses to understand.",

solution:
"Used animated payroll concepts, typography, icons, and structured visual sequences to simplify the information and make the explanation engaging.",

keyDeliverables: [
"Payroll Explainer Video",
"Motion Graphics Animation",
"Educational Social Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20unpaid%20leave.jpg"
],

image: ""
},

{
id: "motion19",

title: "How to Apply",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20How%20to%20Apply.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/How%20to%20apply.mp4",

duration: "00:60",

description:
"A step-by-step instructional motion video designed to make the application process simple and easy to follow.",

longDescription:
"A clean instructional motion design video created to guide viewers through an application process using numbered steps, animated typography, visual cues, transitions, and a structured storytelling approach.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Present the application process clearly without overwhelming the viewer with too much information.",

solution:
"Structured the content into simple visual steps supported by animated text, icons, transitions, and clear visual hierarchy.",

keyDeliverables: [
"Instructional Video",
"Motion Graphics Animation",
"Digital Guide Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20How%20to%20Apply.jpg"
],

image: ""
},

{
id: "motion20",

title: "Online Ordering System for Restaurants in India",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Restaurant.png",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Online%20ordering%20system%20for%20restaurant%20in%20India.mp4",

duration: "00:60",

description:
"A product explainer showcasing an online ordering solution designed for restaurants in India.",

longDescription:
"A product-focused motion design video created to introduce an online ordering system for restaurants in India, using interface-inspired visuals, animated typography, transitions, and structured storytelling to communicate the solution and its benefits.",

client: "Restaurant Technology",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Explain the value of an online ordering solution to restaurant owners in a clear and engaging way.",

solution:
"Created a product-focused visual narrative using animated interface elements, typography, icons, transitions, and benefit-driven storytelling.",

keyDeliverables: [
"Product Explainer Video",
"UI Motion Graphics",
"Digital Marketing Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Restaurant.png"
],

image: ""
},

{
id: "motion21",

title: "SSR and SEO",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20SSR%20and%20SEO.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/SSR%20and%20SEO.mp4",

duration: "00:60",

description:
"An educational motion video explaining the relationship between server-side rendering and SEO.",

longDescription:
"A technology-focused motion design explainer created to communicate SSR and SEO concepts through simplified visuals, animated typography, diagrams, transitions, and structured technical storytelling.",

client: "Technology",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Simplify technical concepts around SSR and SEO for viewers who may not have a deep technical background.",

solution:
"Used visual diagrams, animated typography, icons, and step-by-step storytelling to break down the technical concepts into understandable segments.",

keyDeliverables: [
"Technical Explainer Video",
"Motion Graphics Animation",
"Educational Content"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20SSR%20and%20SEO.jpg"
],

image: ""
},

{
id: "motion22",

title: "Shipping Solutions",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Shipping%20Solutions.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Shipping%20Solutions.mp4",

duration: "00:60",

description:
"A solution-focused motion video presenting shipping and logistics capabilities through engaging visual storytelling.",

longDescription:
"A business promotional motion design video created to communicate shipping solutions through logistics-inspired visuals, animated typography, transitions, and structured storytelling that highlights the value of an efficient shipping solution.",

client: "Shipping Solutions",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Present shipping capabilities in a way that clearly communicates efficiency, reliability, and business value.",

solution:
"Created a clean visual system using logistics graphics, animated typography, transitions, and solution-focused messaging.",

keyDeliverables: [
"Service Promotional Video",
"Motion Graphics Animation",
"Digital Marketing Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Shipping%20Solutions.jpg"
],

image: ""
},



{
id: "motion24",

title: "Why Choose Centizen",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Why%20Choose%20Centizen.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/Why%20Choose%20Centizen.mp4",

duration: "00:60",

description:
"A brand-focused motion video highlighting the reasons businesses can choose Centizen as a technology partner.",

longDescription:
"A corporate promotional motion video created to communicate Centizen's strengths and value proposition through polished visual storytelling, animated typography, brand-focused graphics, and smooth transitions.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Communicate Centizen's value proposition in a concise and visually memorable way.",

solution:
"Created a professional motion system combining brand visuals, animated typography, icons, transitions, and benefit-focused messaging.",

keyDeliverables: [
"Corporate Promotional Video",
"Brand Motion Graphics",
"Marketing Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Why%20Choose%20Centizen.jpg"
],

image: ""
},

{
id: "motion25",

title: "Form 16 vs Form 26AS",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Form%2016%20and%20Form%2026AS.png",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/What%20is%20the%20difference%20between%20Form%2016%20and%20Form%2026AS.mp4",

duration: "00:60",

description:
"An informative motion explainer comparing Form 16 and Form 26AS in a simple and engaging format.",

longDescription:
"A finance-focused educational motion video created to explain the difference between Form 16 and Form 26AS using clear comparisons, animated typography, supporting visuals, transitions, and structured storytelling.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Explain the difference between two commonly used tax documents without making the information difficult to understand.",

solution:
"Created a comparison-driven visual narrative using animated text, icons, structured information, and clear transitions to simplify the topic.",

keyDeliverables: [
"Tax Explainer Video",
"Motion Graphics Animation",
"Educational Social Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20Form%2016%20and%20Form%2026AS.png"
],

image: ""
},

{
id: "motion26",

title: "What is TDS and How is it Calculated?",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20TDS.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/What%20is%20TDS%20and%20how%20is%20it%20Calculated.mp4",

duration: "00:60",

description:
"An educational motion video explaining TDS and its calculation through clear visual storytelling.",

longDescription:
"A finance-focused motion design explainer created to simplify the concept of Tax Deducted at Source and explain its calculation using animated typography, visual examples, transitions, and structured storytelling.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Make a tax-related concept and calculation process easy to understand for a general audience.",

solution:
"Used visual examples, animated numbers, typography, icons, and step-by-step transitions to explain the TDS calculation process clearly.",

keyDeliverables: [
"Tax Explainer Video",
"Educational Motion Graphics",
"Social Media Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20TDS.jpg"
],

image: ""
},

{
id: "motion27",

title: "Payroll Reports",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20payroll%20reports.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/What%20are%20payroll%20reports%20and%20why%20are%20they%20important.mp4",

duration: "00:60",

description:
"An informative motion explainer highlighting what payroll reports are and why they are important for businesses.",

longDescription:
"A business-focused motion design video created to explain the purpose and importance of payroll reports through clean visual storytelling, animated data concepts, typography, transitions, and structured messaging.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Explain the importance of payroll reports in a way that is clear and relevant to business audiences.",

solution:
"Created a structured visual narrative using report-inspired graphics, animated data elements, typography, icons, and smooth transitions.",

keyDeliverables: [
"Business Explainer Video",
"Payroll Motion Graphics",
"Educational Marketing Video"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20payroll%20reports.jpg"
],

image: ""
},

{
id: "motion28",

title: "3 Mistakes",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20three%20mistakes.jpg",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/3%20Mistakes%20.mp4",

duration: "00:60",

description:
"An engaging educational motion video highlighting three common mistakes through clear visuals and concise storytelling.",

longDescription:
"A social-media-friendly motion design video structured around three common mistakes, using bold typography, animated graphics, visual emphasis, and fast-paced transitions to make the information memorable and engaging.",

client: "Centizen",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Present three key mistakes in a short format while making each point visually distinct and memorable.",

solution:
"Used numbered sections, bold typography, animated visual cues, transitions, and rhythmic pacing to create a clear and engaging educational experience.",

keyDeliverables: [
"Educational Motion Video",
"Social Media Reel",
"Motion Graphics Animation"
],

gallery: [
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/TB%20for%20three%20mistakes.jpg"
],

image: ""
},

{
id: "motion23",

title: "ZB Industry Themes",

category: "motion",

categoryLabel: "Motion Design",

orientation: "portrait",

thumbnail: "",

video:
"https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/ax3aga3nui2o/b/portfolio-media/o/ZB%20Industry%20Themes.mp4",

duration: "00:60",

description:
"A thematic motion design video exploring industry-focused visual concepts through engaging animation and storytelling.",

longDescription:
"A motion design piece created around ZB industry themes, using animated typography, visual transitions, thematic compositions, and structured storytelling to communicate industry-specific ideas in an engaging digital format.",

client: "ZenBasket",

role: "Motion Designer",

year: "2026",

skillsUsed: [
"After Effects",
"Illustrator",
"Premiere Pro"
],

challenge:
"Create a flexible visual language that can communicate multiple industry themes while maintaining consistency and engagement.",

solution:
"Developed thematic compositions with animated typography, transitions, visual elements, and a consistent motion system to connect different industry-focused messages.",

keyDeliverables: [
"Industry Theme Video",
"Motion Graphics Animation",
"Digital Marketing Content"
],

gallery: [],

image: ""
} 


];




export const servicesData: Service[] = [
  {
    id: "uiux",
    title: "Visual & Interactive Design",
    description: "I focus on crafting intuitive interfaces and interactive experiences that improve usability, engagement, and overall user satisfaction.",
    iconName: UiuxIcon,
    bulletPoints: [
      "Bespoke wireframing & prototyping",
      "Responsive layouts (Mobile, Tablet, Desktop)",
      "High-contrast premium user interfaces",
      "Interactive micro-animations & layout flow"
    ],
    deliverables: ["Figma source files", "Style systems", "Interactive preview link", "Dev-ready specs"],
    averageTurnaround: "10-14 Business Days"
  },
  {
    id: "video",
    title: "Video Production & Editing",
    description: "I manage concept development, production, and high-quality editing to create impactful videos for social and brand campaigns.",
    iconName: Video,
    bulletPoints: [
      "Creative concept & script storyboarding",
      "Multicam dynamic editing & pacing",
      "Professional color correction & grading",
      "Audio mixing & custom sound design"
    ],
    deliverables: ["4K Master files (MP4/ProRes)", "Social cutdowns (9:16 & 1:1)", "Clean project source templates", "Custom LUT profiles"],
    averageTurnaround: "5-7 Business Days"
  },
  {
    id: "mograph",
    title: "MoGraph & Explainer Video",
    description: "I create high-quality motion graphics and explainer videos that simplify complex ideas and turn them into clear, engaging visual stories.",
    iconName: Mograph,
    bulletPoints: [
      "Dynamic 2D character animation",
      "Modern kinetic typography layouts",
      "Infographic data visualizations",
      "Layered composite effects & transitions"
    ],
    deliverables: ["High-res animation files", "Alpha transparent overlays (Lottie/WebM)", "Vector storyboards", "Sound-effects package"],
    averageTurnaround: "7-10 Business Days"
  }
];

export const skillsData: Skill[] = [
  {
    id: "Photoshop",
    name: "Photoshop",
    logo: "Ps",
    colorClass: "bg-sky-950/80 border-sky-500/30 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.1)]",
    textColorClass: "text-sky-400",
    proficiency: 95,
    description: "Photo compositing, visual asset touch-ups, color balancing, and raster layout composition."
  },
  {
    id: "Illustrator",
    name: "Illustrator",
    logo: "Ai",
    colorClass: "bg-orange-950/80 border-orange-500/30 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.1)]",
    textColorClass: "text-orange-400",
    proficiency: 90,
    description: "Vector illustration, brand identity marks, icons, print assets, and storyboards."
  },
  {
    id: "After Effects",
    name: "After Effects",
    logo: "Ae",
    colorClass: "bg-violet-950/80 border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.1)]",
    textColorClass: "text-violet-400",
    proficiency: 95,
    description: "Kinetic typography, motion tracking, particle expressions, UI animation, and VFX compositing."
  },
  {
    id: "Premiere Pro",
    name: "Premiere Pro",
    logo: "Pr",
    colorClass: "bg-indigo-950/80 border-indigo-500/30 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)]",
    textColorClass: "text-indigo-400",
    proficiency: 92,
    description: "Multicam video cutting, audio track mixing, rhythmic pacing, transitions, and timing."
  },
  {
    id: "Figma",
    name: "Figma",
    logo: "Fi",
    colorClass: "bg-rose-950/80 border-rose-500/30 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]",
    textColorClass: "text-rose-400",
    proficiency: 88,
    description: "Collaborative UI/UX prototyping, layout wireframing, design system structure, and handoffs."
  },
    {
    id: "Canva",
    name: "Canva",
    logo: "Ca",
    colorClass: "bg-cyan-950/80 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]",
    textColorClass: "text-cyan-400",
    proficiency: 90,
    description: "Social media creatives, marketing designs, presentations, branded content, and rapid visual layouts."
  },

  {
    id: "Davinci Resolve",
    name: "Davinci Resolve",
    logo: "Dr",
    colorClass: "bg-teal-950/80 border-teal-500/30 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.1)]",
    textColorClass: "text-teal-400",
    proficiency: 85,
    description: "Cinematic color grading, raw footage correction, node-based editing, and audio polishing."
  },  {
    id: "Lightroom",
    name: "Lightroom",
    logo: "Lr",
    colorClass: "bg-blue-950/80 border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    textColorClass: "text-blue-400",
    proficiency: 88,
    description: "Photo color correction, exposure balancing, tone adjustments, image enhancement, and professional photo finishing."
  }
];

export const experienceData: Experience[] = [
  {
    id: "centizen",
    company: "Centizen",
    role: "Multimedia Designer",
    period: "Jan 2024 - Present",
    logoText: "Centizen",
    description: [
      "Designed high-impact branding, online marketing collateral, and UI assets for web, social media channels, and high-quality print catalogs.",
      "Collaborated closely with cross-functional product and marketing teams to deliver visually engaging design layouts and customized motion graphics.",
      "Streamlined design workflows by maintaining brand consistency across multiple digital and print assets, ensuring timely delivery of marketing campaigns.",
      "Created interactive prototypes and design mockups for web and mobile interfaces, incorporating stakeholder feedback to enhance usability and user experience."
    ],
    skills: ["After Effects", "Premiere Pro", "Figma", "Illustrator", "Photoshop"],
    achievements: [
      "Increased average video engagement rate by 42% across corporate LinkedIn announcements.",
      "Standardized the social-media graphic layouts, cutting asset turnaround time by 30% via robust templates."
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram Sharma",
    role: "Marketing Director",
    company: "Aura Premium Goods",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    content: "Working with Mohamed was a absolute breeze. He redesigned our entire e-commerce showcase, and the feedback from our customers has been outstanding. His attention to detail, micro-animations, and aesthetic timing are world-class."
  },
  {
    id: "t2",
    name: "Ananya Nair",
    role: "Product Owner",
    company: "Vanguard Tech Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    content: "The Kinetic Typography video Mohamed crafted for our mission statement launch went viral on LinkedIn. He turned complex ideas into visual poetry. His mastery over motion graphics is undeniable. Highly recommended!"
  },
  {
    id: "t3",
    name: "David Sterling",
    role: "Lead Consultant",
    company: "Apex Consulting Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    content: "Our B2B closing rate increased by 25% after integrating Mohamed's custom explainer video into our pitch deck. He has a unique talent for translating technical databases into striking visual storyboards that appeal to executives."
  }
];
