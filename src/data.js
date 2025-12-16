import HeroImage from "/assets/my-hero.jpg";
import HeroImage2 from "/assets/my-hero2.jpg";
import HeroImage3 from "/assets/my-hero3.jpg";

const Image = {
  HeroImage,
  HeroImage2,
  HeroImage3
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/flutter.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/dart.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/python.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Flutter",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Dart",
    ket: "Lenguage",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Python",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/1.png";
import Proyek2 from "/assets/proyek/2.png";
import Proyek3 from "/assets/proyek/3.png";
import Proyek4 from "/assets/proyek/4.png";
import Proyek5 from "/assets/proyek/5.png";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website API",
    desk: "This project is a web-based platform with API endpoints for managing a game database. It supports user authentication (register, login, logout), database operations, documentation pages, and front-end views for interacting with the API. Built using PHP and MySQL, the endpoints can be used by external applications.",
    tools: ["HTML", "CSS", "Javascript", "MySql"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Chatbot with API LLM",
    desk: "FasyaCHT is an AI-powered chatbot web app with a modern, real-time chat bubble interface. It supports dark and light modes, features a minimalist and responsive design, and provides contextual, informative responses tailored to user needs.",
    tools: ["HTML", "CSS", "Javascript", "Google Gemini"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "cow disease prediction application",
    desk: "aplikasi diagnosis penyakit ternak berbasis Flutter yang memproses gejala sapi secara offline. Input pengguna diubah menjadi vektor fitur yang dianalisis oleh model Random Forest untuk mengklasifikasikan penyakit seperti Skabies, Koksidiosis, Avitaminosis, dan Endometritis.",
    tools: ["Flutter", "Python", "Random Forest", "Firebase", "Flask"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "cow disease prediction Web",
    desk: "The web version uses Streamlit to provide an online interface for livestock disease prediction. Users submit symptoms through the browser, which are processed by the same Random Forest model to generate disease predictions accessible from any desktop device.",
    tools: ["Python", "Google Collaboratory", "Streamlit"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Web Portfolio is a personal portfolio website that features a clean home page, profile photo, and downloadable resume, along with a project section showcasing selected work.",
    tools: ["HTML", "CSS", "Javascript", "React", "Tailwind"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];
