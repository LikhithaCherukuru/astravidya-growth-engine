export { LOGO_URL, BRAND_NAME, BRAND_TAGLINE, PHONE, PHONE_RAW, EMAIL, ADDRESS } from "@/lib/logo";
import {
  Globe, Smartphone, Search, Share2, Megaphone, Palette, Image as ImageIcon, Video,
  Stethoscope, Building2, Gem, GraduationCap, ShoppingBag,
  Sparkles, Rocket, Users, Award, Zap, Target,
} from "lucide-react";
import healthcareImg from "@/assets/healthcare.jpeg";
import realestateImg from "@/assets/realestate.png";
import jewelleryImg from "@/assets/jewellery.png";
import educationImg from "@/assets/education.png";
import ecommerceImg from "@/assets/e-commerce.png";
import politicsImg from "@/assets/politics.png";
import alankaraThumb from "@/assets/thumbnail/alankara-ai.png";
import charanThumb from "@/assets/thumbnail/charangroup.png";
import gnThumb from "@/assets/thumbnail/gn-jewellery.png";
import narayanaThumb from "@/assets/thumbnail/narayana.png";
import sadhgruhaThumb from "@/assets/thumbnail/sadhgruha.png";
import swechaThumb from "@/assets/thumbnail/swecha.png";

export const services = [

  { icon: Globe, title: "Website Development", desc: "Static, dynamic, ecommerce, corporate websites & landing pages built for conversion.",
    items: ["Static Websites", "Dynamic Websites", "Ecommerce Websites", "Corporate Websites", "Landing Pages"] },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps that delight users on every device.",
    items: ["Android Apps", "iOS Apps", "Hybrid Apps", "Flutter Applications"] },
  { icon: Search, title: "AI SEO Services", desc: "Rank higher with AI-driven keyword strategy and technical optimization.",
    items: ["Local SEO", "Technical SEO", "Keyword Research", "AI Content Optimization"] },
  { icon: Share2, title: "Social Media Marketing", desc: "Grow your audience and engagement across all major platforms.",
    items: ["Facebook", "Instagram", "LinkedIn", "YouTube", "X (Twitter)"] },
  { icon: Megaphone, title: "Paid Advertising", desc: "ROI-focused ad campaigns optimized daily by AI and human experts.",
    items: ["Facebook Ads", "Instagram Ads", "Google Ads", "YouTube Ads"] },
  { icon: Palette, title: "Branding Services", desc: "Memorable identities that make your business unforgettable.",
    items: ["Logo Design", "Business Branding", "Brand Identity", "Corporate Identity"] },
  { icon: ImageIcon, title: "Creative Design", desc: "Print and digital creatives that convert browsers into buyers.",
    items: ["Brochure Design", "Flyer Design", "Banner Design", "Product Catalog Design"] },
  { icon: Video, title: "Affordable Video Creation", desc: "Cinematic videos at prices that fit every budget.",
    items: ["Promotional Videos", "Doctor Marketing Videos", "Real Estate Videos", "Jewelry Ads", "Social Media Reels", "Product Videos", "Business Introduction Videos"] },
] as const;

export const industries = [
  { icon: Stethoscope, slug: "doctors", title: "Doctors & Hospitals",
    desc: "Patient acquisition campaigns, clinic branding, and reputation management for healthcare.",
    services: ["Doctor Profile Branding", "Local SEO for Clinics", "Patient Lead Ads", "Reels & Testimonials"],
    result: "3.2x patient inquiries in 90 days", color: "from-purple-500 to-fuchsia-500" },
  { icon: Building2, slug: "real-estate", title: "Real Estate",
    desc: "Property showcase videos, lead funnels and high-intent ad campaigns.",
    services: ["Project Launch Campaigns", "Drone & Walkthrough Videos", "Meta & Google Lead Ads", "Landing Pages"],
    result: "1,200+ verified buyer leads / month", color: "from-violet-500 to-purple-600" },
  { icon: Gem, slug: "jewelers", title: "Jewelers",
    desc: "Premium product shoots, festive campaigns and Instagram-first storytelling.",
    services: ["Product Photography", "Festival Ad Campaigns", "Instagram Reels", "Ecommerce Catalog"],
    result: "5.7x ROAS during Diwali", color: "from-fuchsia-500 to-pink-500" },
  { icon: GraduationCap, slug: "education", title: "Educational Institutions",
    desc: "Admission funnels, course marketing and student engagement campaigns.",
    services: ["Admission Lead Gen", "Campus Tour Videos", "Webinar Funnels", "SEO for Courses"],
    result: "10,000+ admission inquiries", color: "from-indigo-500 to-violet-600" },
  { icon: ShoppingBag, slug: "ecommerce", title: "Ecommerce Businesses",
    desc: "Conversion-optimized stores, product ads and full-funnel growth.",
    services: ["Shopify / Custom Stores", "Product Ads", "Email & Retargeting", "Influencer Reels"],
    result: "4.1x average ROAS", color: "from-purple-600 to-fuchsia-600" },
] as const;

export const whyChooseUs = [
  { icon: Sparkles, title: "Affordable Pricing", desc: "Premium quality at startup-friendly prices." },
  { icon: Zap, title: "AI-Powered Solutions", desc: "Latest AI tools woven into every campaign." },
  { icon: Rocket, title: "Fast Delivery", desc: "Most projects shipped in under 14 days." },
  { icon: Users, title: "Dedicated Team", desc: "A senior strategist owns your account." },
  { icon: Target, title: "Industry Expertise", desc: "Deep playbooks for 5+ verticals." },
  { icon: Award, title: "Proven Results", desc: "10+ successful campaigns delivered." },
] as const;

export const processSteps = [
  { n: "01", title: "Consultation", desc: "Discovery call to understand goals & constraints." },
  { n: "02", title: "Research", desc: "Market, audience and competitor deep-dive." },
  { n: "03", title: "Strategy", desc: "Channel mix, KPIs and 90-day roadmap." },
  { n: "04", title: "Design", desc: "Brand, UI and creative direction approved." },
  { n: "05", title: "Development", desc: "Build, integrate and QA across devices." },
  { n: "06", title: "Marketing", desc: "Launch campaigns and start collecting data." },
  { n: "07", title: "Optimization", desc: "Continuous AI-driven improvement loop." },
] as const;

export const stats = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "K+", label: "Audience Reached" },
  { value: 95, suffix: "%", label: "Client Retention" },
] as const;

export const testimonials = [
  {
    name: "Dr. Srinivas",
    role: "Founder, Sri Srinivas Gastro Clinic",
    quote:
      "Our online presence transformed completely. Patient inquiries increased significantly within weeks of launching our campaigns.",
  },
  {
    name: "Dr. Praveen Kumar",
    role: "Director, Swecha Asthma & Allergy Center",
    quote:
      "Professional branding, targeted advertising, and engaging content helped us reach more patients than ever before.",
  },
  {
    name: "Dr. Vidushi",
    role: "Founder, Vidushi Children's Clinic",
    quote:
      "The social media videos and digital campaigns created strong local awareness and boosted appointment bookings.",
  },
  {
    name: "Dr. Narayana",
    role: "Chairman, Narayana Multi Speciality Hospital",
    quote:
      "Their team delivered modern healthcare branding and performance marketing that enhanced our hospital's visibility.",
  },
  {
    name: "G. N. Reddy",
    role: "Owner, GN Jewellers",
    quote:
      "Elegant creatives and festive campaigns helped us attract more customers and increase jewellery showroom visits.",
  },
  {
    name: "Raj Kumar",
    role: "Owner, Raj Jewellery",
    quote:
      "The premium branding and social media content perfectly reflected our craftsmanship and improved customer engagement.",
  },
] as const;

export const faqs = [
  { q: "How long does it take to build a website?", a: "Most websites are delivered in 7-21 days depending on complexity. Landing pages can go live in 3-5 days." },
  { q: "Do you offer SEO for new websites?", a: "Yes. Every site we build ships with technical SEO, schema, sitemap and performance optimization." },
  { q: "Can you guarantee #1 Google rankings?", a: "No ethical agency can. We guarantee transparent reporting, white-hat AI SEO and consistent ranking improvements." },
  { q: "Do you build mobile apps for both iOS and Android?", a: "Yes. We build native iOS, native Android and cross-platform Flutter apps." },
  { q: "What is AI SEO?", a: "AI SEO uses machine learning for keyword clustering, content scoring and SERP intent matching to outrank competitors faster." },
  { q: "How much do social media services cost?", a: "Monthly retainers start at an affordable entry point and scale with content volume and ad spend management." },
  { q: "Do you run Google Ads and Meta Ads?", a: "Yes. We manage Google, YouTube, Facebook, Instagram and LinkedIn ad campaigns end-to-end." },
  { q: "Will you design my logo from scratch?", a: "Absolutely. Our branding service includes logo, color system, typography and full brand guidelines." },
  { q: "Do you produce video ads in-house?", a: "Yes. We have an in-house production team for doctor, real estate, jewelry and product video ads." },
  { q: "Can you handle ecommerce platforms like Shopify and WooCommerce?", a: "Yes — Shopify, WooCommerce, Magento and fully custom React/Next stacks." },
  { q: "How do you measure marketing success?", a: "Through KPIs you care about: qualified leads, cost-per-lead, ROAS, organic traffic and revenue attribution." },
  { q: "Do you offer monthly retainer plans?", a: "Yes, with flexible 3, 6 and 12 month plans. No long lock-ins." },
  { q: "Will my website be mobile-friendly?", a: "Every site is mobile-first, accessible and tested across 20+ devices." },
  { q: "Do you provide content writing?", a: "Yes — AI-assisted but human-edited copywriting for web, ads, blogs and social." },
  { q: "Can you migrate my existing website?", a: "Yes. We handle full migrations with zero SEO loss using 301 redirects and content audits." },
  { q: "Do you offer maintenance after launch?", a: "Yes. We offer monthly maintenance, security updates and performance monitoring." },
  { q: "What industries do you specialize in?", a: "Healthcare, real estate, jewelry, education and ecommerce — though we work across many sectors." },
  { q: "Can you help with influencer marketing?", a: "Yes, we run influencer discovery, outreach and campaign management." },
  { q: "Do you provide branded video reels?", a: "Yes — short-form reels optimized for Instagram, YouTube Shorts and TikTok." },
  { q: "How do I get started?", a: "Just call us or message on WhatsApp. We'll schedule a free 30-minute strategy session." },
] as const;

export const portfolioItems = [
  {
    title: "",
    category: "Health Care",
    tag: "",
    image: healthcareImg,
    gradient: "from-purple-500 to-fuchsia-500",
    caseStudy:
      "We helped a healthcare organization improve patient acquisition through AI-powered SEO, targeted advertising campaigns, appointment booking optimization, and a responsive website. The result was increased online visibility, higher patient engagement, and a significant growth in appointment requests.",
  },

  {
    title: "",
    category: "Real Estate",
    tag: "",
    image: realestateImg,
    gradient: "from-purple-600 to-fuchsia-600",
    caseStudy:
      "We developed a complete digital marketing strategy for a real estate company including property showcase videos, lead-generation landing pages, Meta and Google Ads campaigns, and CRM integration. This helped generate qualified property leads and improve conversion rates.",
  },

  {
    title: "",
    category: "Jewellery",
    tag: "",
    image: jewelleryImg,
    gradient: "from-pink-500 to-purple-500",
    caseStudy:
      "We created premium branding assets, luxury product creatives, Instagram reels, festive campaigns, and ecommerce promotions for a jewelry brand. The campaign increased social engagement, online inquiries, and seasonal sales performance.",
  },

  {
    title: "",
    category: "Education",
    tag: "",
    image: educationImg,
    gradient: "from-purple-500 to-indigo-500",
    caseStudy:
      "We assisted educational institutions with admission marketing, SEO, student lead funnels, webinar promotions, and content marketing. The strategy improved student enrollment inquiries and strengthened the institution's online presence.",
  },

  {
    title: "",
    category: "E-Commerce",
    tag: "",
    image: ecommerceImg,
    gradient: "from-purple-600 to-pink-500",
    caseStudy:
      "We built and optimized ecommerce stores with conversion-focused UI, product advertising campaigns, email automation, and retargeting strategies. The result was higher sales, improved customer retention, and increased return on ad spend.",
  },

  {
    title: "",
    category: "Politics",
    tag: "",
    image: politicsImg,
    gradient: "from-indigo-600 to-violet-500",
    caseStudy:
      "We provided political campaign branding, social media management, voter engagement strategies, digital advertising, and public outreach campaigns. The initiative increased audience reach, community engagement, and campaign visibility.",
  },
] as const;

export const portfolioCategories = [
  "All", "Health Care", "Real Estate", "Jewellery", "Education", "E-Commerce", "Politics",
] as const;


export const videos = [
  {
    title: "Narayana Hospital Advertisement",
    category: "Doctor Advertisement",
    duration: "0:45",
    thumbnail: narayanaThumb,
    driveId: "11i9ujy_2TNf46YtFyF5-FdH9J5wRB0eP",
  },

  {
    title: "Swecha Hospital Advertisement",
    category: "Doctor Advertisement",
    duration: "1:10",
    thumbnail: swechaThumb,
    driveId: "1DKdKcjlYRUQ_LAzXXcJI9QczxwXyGy6q",
  },

  {
    title: "Charan Group Real Estate",
    category: "Real Estate Advertisement",
    duration: "1:30",
    thumbnail: charanThumb,
    driveId: "1xHmnHMy8icX1YQWBpF9H9IEMJmm-rhKc",
  },

  {
    title: "Sadhgruha Developers",
    category: "Real Estate Advertisement",
    duration: "2:00",
    thumbnail: sadhgruhaThumb,
    driveId: "1y7CFDFnsXmIZGw6Zg4AnKT-kI3Q5Kgwr",
  },

  {
    title: "GN Jewellery",
    category: "Jewelry Advertisement",
    duration: "0:30",
    thumbnail: gnThumb,
    driveId: "1CCjiL8qtLuVhhnivMXr0j-MoIWm2nRKW",
  },

  {
    title: "Alankara AI Jewellery",
    category: "Jewelry Advertisement",
    duration: "1:00",
    thumbnail: alankaraThumb,
    driveId: "1fsmeL6I4e_LSzrLvH6VhqYe2HG7_ul-e",
  },

  {
    title: "Fun Market Learning For Kids",
    category: "Education Videos",
    duration: "2:37",
    youtubeUrl: "https://youtu.be/jzeK05l8Kqw?si=GYBCHeruJfDANzJu",
  },

  {
    title: "Adventure Stories",
    category: "Education Videos",
    duration: "3:13",
    youtubeUrl: "https://youtu.be/LGOLoUGJNJU?si=Exm2oldxiyCwEehG",
  },
] as const;



export const videoCategories = [
  "All", "Doctor Advertisement", "Real Estate Advertisement", "Jewelry Advertisement", "Education Videos",
] as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/videos", label: "Videos" },
  { to: "/industries", label: "Industries" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
