import { BookOpenIcon, ClipboardDocumentCheckIcon, CubeIcon, EnvelopeIcon, HomeIcon, InformationCircleIcon, LightBulbIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import ProjectCard from "./props/Card";
import Card from "./assets/video/cardCollection.mp4";
import batara from "./assets/video/batara.mp4";
import ScrollReveal from "./props/ScrollR";
const Portofolio = () => {
  const navList = [
    {
      id: 1,
      text: "Home",
      icon: HomeIcon,
      href: "Home",
    },
    {
      id: 2,
      text: "Skills",
      icon: BookOpenIcon,
      href: "Skills",
    },
    {
      id: 3,
      text: "About me",
      icon: InformationCircleIcon,
      href: "About",
    },
    {
      id: 4,
      text: "Experience",
      icon: ClipboardDocumentCheckIcon,
      href: "Experience",
    },
    {
      id: 5,
      text: "Project",
      icon: CubeIcon,
      href: "Project",
    },
    {
      id: 6,
      text: "Contact",
      icon: EnvelopeIcon,
      href: "Contact",
    },
  ];
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const onChange = (e) => {
    setNama(e.target.value);
    setEmail(e.target.value);
    setPesan(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();

    const nomorWA = "6287877763571";
    const link = `https://api.whatsapp.com/send?phone=${nomorWA}&text=Halo, nama saya ${nama}. %0A${pesan}`;

    window.open(link, "_blank");
  };
  const skills = [
    {
      id: 1,
      text: "HTML/CSS",
      accuracy: 1.0,
    },
    {
      id: 2,
      text: "Javascript",
      accuracy: 1.0,
    },
    {
      id: 3,
      text: "React",
      accuracy: 0.4,
    },
    {
      id: 4,
      text: "Node js",
      accuracy: 0.9,
    },
    {
      id: 5,
      text: "Express js",
      accuracy: 0.97,
    },
    {
      id: 6,
      text: "Python",
      accuracy: 1.0,
    },
    {
      id: 7,
      text: "Flask",
      accuracy: 0.9,
    },
    {
      id: 8,
      text: "Java",
      accuracy: 0.8,
    },
    {
      id: 9,
      text: "Vue js",
      accuracy: 1.0,
    },
    {
      id: 10,
      text: "TailwindCSS",
      accuracy: 1.0,
    },
    {
      id: 11,
      text: "PostgresSQL",
      accuracy: 0.9,
    },
  ];
  const project = [
    {
      id: 1,
      text: "pendaftaran pelatihan rumah inovative",
      teknologi: ["html/css ", "sqlite ", "Tailwind css ", "laravel"],
      link: "testing",
      img: "src/assets/img/image.png",
      video: "testing",
      deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolores.",
    },
    {
      id: 2,
      text: "CardCollectionAnime",
      teknologi: ["react js ", "API terbuka ", "Tailwind css"],
      link: "https://koleksikartuanime.vercel.app/",
      img: "src/assets/img/image copy 2.png",
      video: Card,
      deskripsi: "Web koleksi kartu gambar anime",
    },
    {
      id: 3,
      text: "BataraChat",
      teknologi: ["react js ", "gemini AI ", "Tailwind css"],
      link: "https://batara-chatbot.vercel.app/",
      img: "src/assets/img/image copy 3.png",
      video: batara,
      deskripsi:
        "Implementasi Google Gemini AI menggunakan React dan Express, menghadirkan asisten virtual dengan kemampuan pemrosesan bahasa alami yang canggihAsisten virtual cerdas berbasis Gemini AI dengan integrasi Fullstack React-Express",
    },
    {
      id: 4,
      text: "web donasi barang bekas",
      teknologi: ["vue js ", "flesk ", "Tailwind css", "PostgresSQL"],
      link: "https://batarachat.vercel.app/",
      img: "src/assets/img/image.png",
      video: "testing",
      deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolores.",
    },
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const heading = ["I am a front end developer", "I am a Back end developer", "My passion is AI engineering"];
    const currentText = heading[textIndex];

    const interval = setInterval(() => {
      setDisplayText(currentText.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 100);

    if (charIndex === currentText.length) {
      clearInterval(interval);

      setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % heading.length);
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [charIndex, textIndex]);
  return (
    <>
      <header>
        <nav
          className={`sticky top-0 z-50 flex items-center justify-between p-9 transition-all duration-300
  ${scroll ? "backdrop-blur-md bg-gray-800/50 shadow-lg overflow-x-hidden z-50" : "bg-gray-800"}
  `}
        >
          <h1 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">BimaSena</h1>
          <ul className="flex items-center space-x-9 text-gray-300">
            {navList.map((item) => {
              return (
                <li key={item.id} className="cursor-pointer">
                  <a href={`#${item.href}`} className="flex items-center hover:text-gray-400 transition-all hover:animate-pulse">
                    <item.icon className="h-5 w-5 relative -left-1" /> {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <ScrollReveal>
          <section id="Home" className="relative flex flex-col md:flex-row items-center justify-around px-12 pt-30  pb-32 bg-gray-800 ">
            <div className="max-w-4xl">
              <h1 className="text-white text-6xl  font-extrabold leading-tight">
                Hi, I'm Bima <br />
                <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <div className="mt-6 ">
                <p className=" text-gray-400 text-lg leading-relaxed">Passionate software developer based in Surabaya, focusing on building clean, scalable, and user-friendly applications.</p>
                <button className="mt-8 cursor-pointer px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg shadow-purple-900/20 transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wider">
                  <a href="src/assets/dokumen/CV_bima (1).pdf">Download CV</a>
                </button>
              </div>
            </div>

            <div className="mt-12 md:mt-0 relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                <img src="src/assets/img/download (21).jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        </ScrollReveal>
        <main>
          <ScrollReveal>
            <section className="py-28 px-12 bg-gray-900" id="Skills">
              <div className="text-center mb-10">
                <h1 className="capitalize text-4xl font-bold text-white">
                  <span className="transition-all text-gray-400 hover:text-gray-600 animate-pulse">#</span>my <span className="text-purple-700">skill</span>
                </h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill) => (
                  <div key={skill.id} className="p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors cursor-pointer">
                    <p className="text-gray-300 font-medium mb-3">{skill.text}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full transition-all duration-1000" style={{ width: `${skill.accuracy * 100}%` }}></div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 text-right">{(skill.accuracy * 100).toFixed(0)}%</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
          <ScrollReveal>
            <section className="bg-gray-800 py-28" id="About">
              <div className="text-center mb-10">
                <h1 className="capitalize text-4xl font-bold text-white">
                  <span className="transition-all text-gray-400 hover:text-gray-600 animate-pulse">#</span>about <span className="text-purple-700">me</span>
                </h1>
              </div>

              <div className="flex flex-col items-center justify-center gap-16">
                <div className="logo w-72 h-72 bg-black overflow-hidden rounded-md rounded-tr-4xl rounded-bl-4xl shadow-[0_0_20px_rgba(90,0,160,0.9)] border-2 border-gray-600">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="terminator"
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="text max-w-xl text-center text-gray-400 ">
                  <p>
                    Hi, I'm <span className="font-bold">Bima</span>, a <span className="font-bold">junior software developer from Surabaya</span>. I recently graduated with a bachelor's degree in Informatics Engineering and have 6 months of
                    experience as a software developer intern. I enjoy building web applications and exploring machine learning, including developing a terminal-based chatbot using Naive Bayes for text classification
                  </p>
                </div>
              </div>
            </section>
          </ScrollReveal>
          <ScrollReveal>
            <section className="bg-gray-800 py-2 z-0" id="Experience">
              <div className="text-center mb-10">
                <h1 className="capitalize text-4xl font-bold text-white">
                  <span className="transition-all text-gray-400 hover:text-gray-600 animate-pulse">#</span> my <span className="text-purple-700">experience</span>
                </h1>
              </div>
              <div className="flex justify-center group">
                <div className="bg-gray-900 border border-gray-700 rounded-bl-2xl rounded-tl-2xl p-6  text-gray-300 z-40 hover:bg-gray-800 cursor-pointer transition-all duration-100">
                  <h3 className="text-xl font-semibold text-white">Software Developer Intern</h3>

                  <p className="text-purple-500">BPSDMP Kominfo Surabaya • 6 Months</p>

                  <ul className="mt-4 list-disc list-inside text-sm">
                    <li>Developed web interfaces</li>
                    <li>Worked with frontend and backend</li>
                    <li>Implemented API integration</li>
                  </ul>
                </div>

                <button className="rounded-br-2xl rounded-tr-2xl p-2 w-14 cursor-pointer bg-purple-700 hover:bg-purple-800 transition-all flex items-center justify-center relative right-16 group-hover:right-0" title="Download Sertifikat">
                  <a href="src/assets/dokumen/BIMA SENA WIHARTONO PUTRA _3.pdf">
                    <ArrowDownTrayIcon className="w-7 h-7 text-gray-300" />
                  </a>
                </button>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="bg-gray-800 py-28" id="Project">
              <div className="text-center mb-10">
                <h1 className="capitalize text-4xl font-bold text-white">
                  <span className="transition-all text-gray-400 hover:text-gray-600 animate-pulse">#</span> my <span className="text-purple-700">project</span>
                </h1>
              </div>

              {/* PERBAIKAN 1: Gunakan Grid agar tinggi tiap kolom otomatis sama (stretch) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  justify-items-center max-w-6xl mx-auto px-4 py-10">
                {project.map((item) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          </ScrollReveal>
          <ScrollReveal>
            <section className="bg-gray-800 py-28" id="Contact">
              <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                  <h1 className="capitalize text-4xl font-bold text-white">
                    <span className="transition-all text-gray-400 hover:text-gray-600 animate-pulse">#</span> contact <span className="text-purple-700">me</span>
                  </h1>
                  <p className="text-gray-400 mt-4">Punya pertanyaan atau ingin bekerja sama? Hubungi saya kapan saja.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Kolom 1: Informasi Kontak */}
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">Ayo diskusikan project Anda</h2>
                      <p className="text-gray-400 leading-relaxed">Saya terbuka untuk peluang kerja lepas (freelance) atau posisi full-time. Mari buat sesuatu yang luar biasa bersama-sama!</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-gray-300">
                        <div className="bg-gray-700 p-3 rounded-md text-purple-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span>bimasopan14@gmail.com</span>
                      </div>

                      <div className="flex items-center gap-4 text-gray-300">
                        <div className="bg-gray-700 p-3 rounded-md text-purple-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span>Surabaya, Indonesia</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
                    <form className="space-y-5" onSubmit={submitForm}>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Nama Lengkap</label>
                        <input
                          type="text"
                          onChange={onChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600 transition-colors"
                          placeholder="Masukkan nama..."
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Email</label>
                        <input
                          type="email"
                          onChange={onChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600 transition-colors"
                          placeholder="email@contoh.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Pesan</label>
                        <textarea
                          rows="4"
                          onChange={onChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-600 transition-colors resize-none"
                          placeholder="Apa yang bisa saya bantu?"
                        ></textarea>
                      </div>

                      <button className="w-full bg-purple-700 cursor-pointer hover:bg-purple-800 text-white font-semibold py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02]">Kirim Pesan</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </main>
      </header>
      <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2 italic">
                <span className="text-purple-700">#</span> Bima<span className="text-gray-400">Sena</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-xs">Membangun solusi digital yang inovatif dengan fokus pada performa dan estetika.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#Home" className="text-gray-400 hover:text-purple-500 transition-colors text-sm uppercase tracking-wider">
                Home
              </a>
              <a href="#Project" className="text-gray-400 hover:text-purple-500 transition-colors text-sm uppercase tracking-wider">
                Project
              </a>
              <a href="#Contact" className="text-gray-400 hover:text-purple-500 transition-colors text-sm uppercase tracking-wider">
                Contact
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/mr88-zodiak" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-700 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/bima-putra-b56a703b6/" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-700 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-purple-500">BimaSena</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portofolio;
