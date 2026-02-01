import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Job Portal",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/Project1.png",
    tags: ["React", "TailwindCSS", "MongoDB", "Express", "NodeJS"],
    demoUrl: "https://jobportalui-black.vercel.app/",
    githubUrl: "https://github.com/PrateekRajput12/JobPortal-UI.git",
  },
  {
    id: 2,
    title: "Video Streaming Application",
    description:
      "Video Streaming Application youtube clone",
    image: "/projects/Project2.png",
    tags: ["React", "Redux", "tailwindCSS"],
    demoUrl: "https://mytube-swart.vercel.app/",
    githubUrl: "https://github.com/PrateekRajput12/Youtube",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform ",
    image: "/projects/Project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://prateekecommerce.vercel.app/",
    githubUrl: "https://github.com/PrateekRajput12/Eccomerce",
  },
  {
    id: 4,
    title: "Streamify",
    description:
      "Real-time video calling and chat application built with MERN stack. Users can send and accept friend requests, chat instantly, and start secure video calls once connected.",
    image: "/projects/Project4.png",
    tags: ["MERN", "WebRTC", "Socket.io", "Stream Chat"],
    demoUrl: "https://talky-evzp.onrender.com",
    githubUrl: "https://github.com/PrateekRajput12/talky",
  },
  {
    id: 5,
    title: "ShopEase",
    description:
      "Full-stack eCommerce platform built with MERN stack featuring user authentication, product management, order tracking, and an admin panel for managing products, categories, and users.",
    image: "/projects/Project5.png",
    tags: ["MERN", "Redux", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://ecommerce-91p6.onrender.com/",
    githubUrl: "https://github.com/PrateekRajput12/eCcomerce",
  },
  {
    id: 6,
    title: "NetVision",
    description:
      "Netflix clone built with MERN stack featuring user authentication, dynamic movie listings, trailers, and personalized watchlists with a responsive modern UI.",
    image: "/projects/Project6.png",
    tags: ["MERN", "TMDB API", "React", "TailwindCSS"],
    demoUrl: "https://netflix-nu-jade.vercel.app/",
    githubUrl: "https://github.com/PrateekRajput12/Netflix",
  },
  {
    id: 7,
    title: "Luxury Beauty",
    description:
      "Beauty Parlour Website – Designed and developed a modern beauty parlour platform with service management, appointment scheduling, gallery display, and a fully responsive UI.", image: "/projects/Project7.png",
    tags: ["MERN", "React", "TailwindCSS"],
    demoUrl: "https://beauty-parlour-rho.vercel.app/",
    githubUrl: "https://github.com/PrateekRajput12/Beauty-Parlour",
  },
  {
    id: 8,
    title: "Saloon",
    description:
      "Designed and developed a stylish salon website with service management, appointment scheduling, stylist details, gallery display, and a fully responsive modern UI.", image: "/projects/Project8.png",
    tags: ["MERN", "React", "JSX", "Motion", "TailwindCSS"],
    demoUrl: "https://saloon-plum.vercel.app/",
    githubUrl: "https://github.com/PrateekRajput12/Saloon",
  },
  {
    id: 9,
    title: "RealEstate Agent",
    description:
      "Designed and developed a real estate agent website with property showcases, lead inquiry forms, WhatsApp integration, booking options, and a sleek responsive UI."
    , image: "/projects/Project9.png",
    tags: ["MERN", "React", "JSX", "Motion", "TailwindCSS"],
    demoUrl: "https://realestate1-e863.onrender.com/",
    githubUrl: "https://github.com/PrateekRajput12/Real-State-Agent",
  }



];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card relative rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-start text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex absolute bottom-4 justify-between    items-center">
                  <div className="flex  space-x-3 ">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/PrateekRajput12"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
