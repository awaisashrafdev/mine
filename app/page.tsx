"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Box } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";
import {
  Download,
  ChevronDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Calendar,
  MapPin,
  Zap,
  Target,
  Award,
  Users,
  TrendingUp,
  Shield,
  Cpu,
  Database,
  Server,
  Layers,
} from "lucide-react";
import Navigation from "@/components/navigation";
import CustomCursor from "@/components/custom-cursor";
import MatrixRain from "@/components/matrix-rain";
import ParticleField from "@/components/particle-field";
import ContactForm from "@/components/contact-form";

// Placeholder components - you'll need to create these or remove the imports

const GlitchText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => <h1 className={className}>{text}</h1>;

// Floating 3D Elements
function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color="#8b5cf6" wireframe />
    </Box>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    {
      name: "React/Next.js",
      level: 80, // Tumhara main stack
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript/TypeScript",
      level: 75, // Strong base
      icon: <Cpu className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "UI/UX Design",
      level: 60, // Decent design sense
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Mobile Development",
      level: 35, // Thoda kaam kia hoga React Native waghera
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Full Stack",
      level: 70, // Frontend strong, backend thoda kam
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Database Design",
      level: 55, // Normal MongoDB / Firebase level
      icon: <Database className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Server Architecture",
      level: 40, // Kam experience hoga ismein
      icon: <Server className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "DevOps",
      level: 25, // Thoda bohat deploy kiya hoga (Vercel, Netlify etc)
      icon: <Layers className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const projects = [
    {
      title: "Free Instagram Followers Tool",
      description:
        "A sleek and animated web app that mimics an Instagram followers generator UI. Built with modern UI/UX design for demo and fun purposes.",
      tech: ["Next.js", "Tailwind CSS", "React Hook Form", "Framer Motion"],
      image: "/projects/free-followers.png",
      github: "https://github.com/awaisashrafdev/follwer-free",
      live: "https://quranwebsite-seven.vercel.app/",
      featured: true,
    },
    {
      title: "Ali Hassan - Hafiz Quran Portfolio",
      description:
        "A personal portfolio website for a Hafiz-e-Quran, showcasing his credentials, availability for teaching, and testimonials. Fully responsive and SEO-friendly.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/projects/ali-hassan-hafiz.png",
      github: "https://github.com/awaisashrafdev/Quran-",
      live: "#",
      featured: true,
    },
  ];

  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Freelance & Personal Projects",
      period: "2025 - Present",
      description:
        "Working on modern and responsive websites using Next.js, Tailwind CSS, and TypeScript. Focused on UI/UX design, animation effects, and performance optimization.",
      achievements: [
        "Built 10+ stylish and animated frontend projects",
        "Designed and deployed my personal portfolio website",
        "Integrated contact forms, animations, and third-party APIs",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Remote (Self-Guided)",
      period: "2024 - 2025",
      description:
        "Completed hands-on projects, cloned websites, and practiced full-stack concepts with MongoDB, Express.js, and Next.js.",
      achievements: [
        "Cloned real-world apps like YouTube and Instagram",
        "Practiced authentication systems with JWT & cookies",
        "Explored deployment using Vercel and Netlify",
      ],
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Projects Completed",
      icon: <Target className="w-8 h-8" />,
    },
    {
      number: "8+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "1+",
      label: "Years Experience",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "99%",
      label: "Success Rate",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  if (!isClient) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="relative w-60 h-60">
          {/* Central Glowing Planet */}
          <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-purple-600 rounded-full shadow-[0_0_60px_15px_rgba(168,85,247,0.6)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Outer orbiting planets */}
          <motion.div
            className="absolute w-4 h-4 bg-pink-500 rounded-full shadow-lg top-0 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            style={{ originX: 0.5, originY: 4.5 }}
          />

          <motion.div
            className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-md top-0 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
            style={{ originX: 0.5, originY: 5.5 }}
          />

          <motion.div
            className="absolute w-2.5 h-2.5 bg-yellow-400 rounded-full shadow top-0 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            style={{ originX: 0.5, originY: 6.5 }}
          />

          {/* Shimmer shine on whole loader */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 pointer-events-none"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <CustomCursor />
      <Navigation activeSection={activeSection} />
      <MatrixRain />

      {/* Enhanced 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars
            radius={300}
            depth={60}
            count={2000}
            factor={10}
            saturation={0}
            fade
          />
          <FloatingCube position={[-3, 2, -2]} />
          <FloatingCube position={[3, -1, -3]} />
          <FloatingCube position={[0, 3, -4]} />
          <FloatingCube position={[-2, -2, -1]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <ParticleField />

      {/* Animated Background Elements */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY, scaleX }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-6000"></div>
      </motion.div>

      {/* Hero Section - Massive and Dramatic */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center z-10 py-20"
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="w-64 h-64 mx-auto mb-12 relative group">
              {/* Multiple rotating rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-spin-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-40 animate-spin-reverse"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-30 animate-spin-slow"></div>

              {/* Main Avatar */}
              <div className="relative w-full h-full rounded-full border-4 border-gradient-to-r from-purple-500 to-pink-500 overflow-hidden bg-gray-900 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-purple-500/50 mt-8">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center text-8xl font-bold text-white relative overflow-hidden">
                  <img src="/awais.jpg" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-shimmer"></div>
                </div>
              </div>

              {/* Floating particles around avatar */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-${
                      (i % 6) + 1
                    } opacity-80`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <GlitchText
              text="I'm Awais Ashraf"
              className="text-6xl md:text-9xl font-black mb-8 text-white drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-32 mb-12 flex items-center justify-center"
          >
            <div className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              <span className="inline-block animate-text-reveal drop-shadow-lg">
                SIGMA DEVELOPER
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-2xl md:text-4xl mb-12 max-w-5xl mx-auto leading-relaxed text-gray-300 font-light"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              Architecting Digital Empires
            </span>
            <br />
            <span className="text-xl md:text-2xl">
              Building Tomorrow's Web with Today's Innovation ⚡
            </span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transform-gpu">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=awaisashraf.dev@gmail.com&su=Hire%20Request&body=Hi%20Awais%2C%20I%20want%20to%20hire%20you...">
                {" "}
                <span className="relative z-10 flex items-center justify-center">
                  <Zap className="mr-3 group-hover:animate-bounce" size={24} />
                  HIRE ME
                </span>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 group-hover:animate-shimmer"></div>
            </button>

            <a
              href="/CV.pdf"
              download
              className="group inline-block px-12 py-6 border-4 border-purple-500 text-purple-400 font-bold text-xl rounded-2xl transition-all duration-500 hover:bg-purple-500 hover:text-white hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 backdrop-blur-sm"
            >
              <Download
                className="inline mr-3 group-hover:animate-bounce"
                size={24}
              />
              DOWNLOAD CV
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-12 h-12 text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section - Expanded */}
      <section id="about" className="relative py-32 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About me
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Web Developer
                </span>
                <br />
                Passionate & Creative Coder
              </h3>

              <p className="text-xl text-gray-300 leading-relaxed">
                I'm Awais, a dedicated web developer with 1 year of experience
                in building modern, responsive, and user-friendly websites. I
                love bringing designs to life with clean code and creative
                flair.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                My core tools include{" "}
                <span className="text-white font-semibold">
                  Next.js, React, and Tailwind CSS
                </span>
                , which I use to develop fast, scalable, and visually appealing
                web experiences. Whether it's a portfolio, landing page, or
                dynamic app — I focus on performance, detail, and impact.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                  <Shield className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Security First
                  </h4>
                  <p className="text-gray-400">
                    Enterprise-grade security in every project
                  </p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
                  <Zap className="text-purple-400 mb-4" size={32} />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Lightning Fast
                  </h4>
                  <p className="text-gray-400">
                    Optimized for maximum performance
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mt-12">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=awaisashraf.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-purple-400 text-lg hover:underline"
                >
                  <Mail size={24} />
                  <span className="font-semibold">
                    awaisashraf.dev@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+923258537217"
                  className="flex items-center gap-3 text-purple-400 text-lg hover:underline"
                >
                  <Phone size={24} />
                  <span className="font-semibold">+923258537217</span>
                </a>
              </div>

              <div className="flex gap-6 mt-8">
                <a
                  href="https://github.com/awaisashrafdev"
                  className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Github className="text-purple-400" size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-awais-6b0a5030b/"
                  className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="text-purple-400" size={28} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center text-9xl font-bold text-white">
                  <img src="/AC.jpg" alt="" />
                </div>

                {/* Floating tech icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-10 w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center animate-float-1">
                    <Code className="text-purple-400" size={24} />
                  </div>
                  <div className="absolute top-40 right-10 w-12 h-12 bg-pink-500/30 rounded-lg flex items-center justify-center animate-float-2">
                    <Database className="text-pink-400" size={24} />
                  </div>
                  <div className="absolute bottom-40 left-16 w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center animate-float-3">
                    <Server className="text-blue-400" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section id="skills" className="relative py-32 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SKILLS
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`text-transparent bg-gradient-to-r ${skill.color} bg-clip-text group-hover:scale-125 transition-transform duration-500`}
                  >
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </h3>

                <div className="relative">
                  <div className="w-full bg-gray-800 rounded-full h-4 mb-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 2, delay: index * 0.1 }}
                      className={`bg-gradient-to-r ${skill.color} h-4 rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-shimmer"></div>
                    </motion.div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-medium">
                      Mastery Level
                    </span>
                    <span className="text-2xl font-bold text-purple-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Massive */}
      <section id="projects" className="relative py-32 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              PROJECTS
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Behold the digital empires I've built. Each project represents
              countless hours of innovation, optimization, and pure coding
              excellence.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center mb-12 text-purple-400">
              FEATURED BUILDS
            </h3>
            <div className="grid lg:grid-cols-3 gap-12">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                  >
                    <div className="relative overflow-hidden h-80">
                      <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                        PROJECT IMAGE
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                      <div className="absolute top-4 right-4">
                        <div className="px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full text-white font-bold text-sm">
                          FEATURED
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-6">
                        <a
                          href={project.github}
                          className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 font-semibold"
                        >
                          <Github size={20} />
                          Source Code
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 font-semibold"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-4xl font-bold text-center mb-12 text-purple-400">
              MORE BUILDS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="relative overflow-hidden h-48">
                      <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center text-white font-bold">
                        PROJECT
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Enhanced */}
      <section id="experience" className="relative py-32 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              EXPERIENCE
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-20 last:mb-0"
              >
                <div className="flex items-center mb-8">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-6 animate-pulse"></div>
                  <div className="flex items-center gap-6 text-purple-400 text-lg">
                    <Calendar size={20} />
                    <span className="font-bold">{exp.period}</span>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 ml-12 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25">
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-3 text-purple-400 mb-6 text-xl">
                    <MapPin size={20} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-purple-400 mb-4">
                      Key Achievements:
                    </h4>
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-16 w-1 h-32 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="relative py-32 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CONNECT WITH ME
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Ready to build something extraordinary? Let's create digital magic
              together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-4xl font-bold text-white mb-8">
                  Let's Build Empires
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  I'm always interested in ambitious projects and revolutionary
                  ideas. Whether you need a complete digital transformation or
                  want to push the boundaries of web technology, I'm your sigma
                  developer.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=awaisashraf.dev@gmail.com"
                  className="flex items-center gap-6 text-gray-300 group hover:text-purple-400 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Mail className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Email</p>
                    <p className="text-lg">awaisashraf.dev@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923258537217"
                  className="flex items-center gap-6 text-gray-300 group hover:text-purple-400 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Phone className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Phone</p>
                    <p className="text-lg">+923258537217</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-6 mt-12">
                <a
                  href="https://github.com/awaisashrafdev"
                  className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Github className="text-purple-400" size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-awais-6b0a5030b/"
                  className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="text-purple-400" size={28} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800 z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-gray-400 font-light">
            © 2025 Awais Rajput - Sigma Developer.
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              {" "}
              Crafted with 🔥 and infinite ☕
            </span>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes text-reveal {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(-90deg);
          }
        }

        @keyframes float-5 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-22px) rotate(270deg);
          }
        }

        @keyframes float-6 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(-270deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-text-reveal {
          animation: text-reveal 0.8s ease-out;
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 3.5s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 4s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float-4 3.2s ease-in-out infinite;
        }
        .animate-float-5 {
          animation: float-5 3.8s ease-in-out infinite;
        }
        .animate-float-6 {
          animation: float-6 3.3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}
