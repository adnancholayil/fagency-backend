require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./src/models/Project');
const Review = require('./src/models/Review');

const projects = [
  {
    category: "Web Development",
    title: "Elekyo Storefront",
    desc: "A high-performance e-commerce platform with seamless shopping experience.",
    color: "text-[#FFC107]",
    details: "Elekyo is a sophisticated e-commerce solution featuring a modern storefront, optimized product discovery, and a fluid checkout process built for high conversions.",
    features: ["Custom UI/UX", "Lightning Fast Load", "Responsive Storefront", "Secure Checkout", "Product Management"],
    link: "https://elekyo.vercel.app",
    image: "/elekyo/elekyo.jpg"
  },
  {
    category: "Web Development",
    title: "EMEA HSS Special School",
    desc: "A dedicated digital portal for a specialized education center for students with special needs.",
    color: "text-[#FFC107]",
    details: "EMEA HSS is a premier special school dedicated to providing inclusive education and specialized support. The portal serves as a bridge between the institution and the community, facilitating better communication and accessibility to educational resources.",
    features: ["Educational UI/UX", "Inclusive Design", "Responsive Portal", "Community Bridge", "Resource Management"],
    link: "https://emeaspecialcare.vercel.app/",
    image: "/emea/emea.jpg"
  },
  {
    category: "Graphic Design",
    title: "Computer World Monthly Branding",
    desc: "A comprehensive monthly design package for Computer World, featuring promotional posters and product showcases.",
    color: "text-[#FFC107]",
    details: "Ongoing creative support for Computer World, delivering high-impact visual content for their hardware lineup. This monthly project includes professional product retouching, promotional banners, and social media assets designed to drive sales and brand awareness.",
    features: ["Product Marketing", "Monthly Campaign", "Brand Consistency", "Hardware Visualization"],
    images: [
      "/portfolio/computerworld/Dell%20Latitude%203310%202-in-1%20shop%20last%202.jpg",
      "/portfolio/computerworld/Dell%20Latitude%203420%20-%201.jpg",
      "/portfolio/computerworld/delloptiplex2.jpg",
      "/portfolio/computerworld/HP%20840-G5-MAIN.jpg"
    ]
  }
];

const testimonials = [
  {
    name: "Aditya Sharma",
    role: "Founder of EduVantage",
    text: "Fagency transformed our educational portal into a modern learning ecosystem. Their attention to UX detail is world-class.",
    rating: 5
  },
  {
    name: "Priya Lakshmi",
    role: "Marketing Head at SilkRoute",
    text: "The social media campaign they edited for us went viral within 48 hours. They truly understand the pulse of digital storytelling.",
    rating: 5
  },
  {
    name: "Rohan Mehra",
    role: "CTO at NexusLink",
    text: "Their custom CRM software has streamlined our entire sales operation. The integration was seamless and the support is exceptional.",
    rating: 5
  },
  {
    name: "Ananya Iyer",
    role: "CEO of UrbanDecor",
    text: "The E-commerce storefront they built increased our sales by 150%. Their technical expertise in Next.js is simply unmatched.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Director at Innotech",
    text: "Working with them on our brand documentary was a pleasure. They captured our vision perfectly with cinematic precision.",
    rating: 5
  },
  {
    name: "Sanya Gupta",
    role: "Creative Lead at DesignHub",
    text: "The event posters they designed were the talk of the town. Bold, minimalist, and perfectly aligned with our brand values.",
    rating: 5
  }
];

const seedDB = async () => {
  try {
    console.log('Connecting to database:', process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    await Project.deleteMany({});
    console.log('Cleared existing projects');
    
    await Review.deleteMany({});
    console.log('Cleared existing reviews');

    await Project.insertMany(projects);
    console.log('Inserted projects');

    await Review.insertMany(testimonials);
    console.log('Inserted reviews');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
