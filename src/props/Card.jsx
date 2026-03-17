import React, { useRef, useState } from "react";

const ProjectCard = ({ item }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State untuk baca selengkapnya

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (item.video && item.video !== "testing" && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay dicegah:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (item.video && item.video !== "testing" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full max-w-88 bg-gray-900 rounded-md shadow-md overflow-hidden flex flex-col cursor-pointer transition-all duration-200 hover:shadow-purple-500 group">
      {/* Area Media */}
      <div className="relative w-full h-40 overflow-hidden bg-black shrink-0">
        {item.video !== "testing" && (
          <video ref={videoRef} muted loop playsInline className="w-full h-full object-cover">
            <source src={item.video} type="video/mp4" />
          </video>
        )}
        <img
          src={item.img}
          alt={item.text}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
            ${isHovered && item.video !== "testing" ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h1 className="text-white font-semibold mb-2 line-clamp-2 uppercase text-sm tracking-wider">{item.text}</h1>

          {/* PERBAIKAN: Logika Teks Deskripsi */}
          <div className="relative">
            <p className={`text-gray-400 text-sm transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>{item.deskripsi}</p>

            {/* Tombol Baca Selengkapnya - Hanya muncul jika deskripsi panjang (misal > 100 karakter) */}
            {item.deskripsi.length > 100 && (
              <button onClick={() => setIsExpanded(!isExpanded)} className="text-purple-400 text-xs mt-1 hover:text-purple-300 transition-colors font-medium underline underline-offset-2">
                {isExpanded ? "Sembunyikan" : "Baca Selengkapnya"}
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {item.teknologi.map((tech, index) => (
            <span key={index} className="text-[10px] bg-gray-700 text-gray-300 px-2 py-0.5 rounded hover:bg-purple-900 transition-all duration-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-700 cursor-pointer hover:bg-purple-800 text-white py-2 px-4 rounded transition-all duration-300 w-full text-sm font-medium">View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
