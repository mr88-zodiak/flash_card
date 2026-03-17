import { motion } from "framer-motion";

export const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Mulai dari transparan dan agak ke bawah
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul di layar: Full opacity dan posisi normal
      viewport={{ once: true, margin: "-100px" }} // Animasi hanya sekali, muncul 100px sebelum mentok layar
      transition={{ duration: 0.6, ease: "easeOut" }} // Durasi animasi
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
