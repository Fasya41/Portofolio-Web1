import React from "react";
import DataImage, {listTools, listProyek} from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 gap-10 xl:gap-20">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage3}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Debug Hari Ini, Bangga Besok 🤣</q>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, You can call me FASYA!
          </h1>

          <p className="text-base mb-6 opacity-50">
            Writes code 💻 • Breaks code 🐛 • Fixes code 🔧 • Recompiles life 🔁  
            Fresh Graduate 👨‍🎓 | Machine Learning 🤖 • Data Science 📊 • App Dev 📱  
            Fueled by Coffee ☕ | Debugging longer than I’ve been sleeping properly😂  
          </p>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#"
              className="bg-red-800 p-4 rounded-2xl hover:bg-red-700"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>

            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s rounded-full"
          loading="lazy"
        />
      </div>

      <div>
        {/* Tentang */}
        <div className="tentang mt-32 py-10" id="tentang">
          <div className="xl:w-2/3 lg:3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">           
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md mb-10 sm:hidden"
              loading="lazy"
            />

            <p className="text-base/loose mb-10">
              I am a Bachelor of Computer and Network Engineering with a strong curiosity for
              programming. I love learning new technologies, solving coding challenges, and
              enjoying the little wins along the way. I am also a team-oriented person who
              enjoys collaborating, sharing ideas, and growing together. With a positive and
              adaptive mindset, I am always excited to explore new possibilities and create
              meaningful projects.
            </p>

            <div className="flex items-center justify-between gap-10">
              <img
                src={DataImage.HeroImage2}
                alt="Image"
                className="w-25 rounded-md hidden sm:block"
                loading="lazy"
              />

              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    4<span className="text-red-700">+</span>
                  </h1>
                  <p>proyek selesei</p>
                </div>

                <div>
                  <h1 className="text-4xl mb-1">
                    4<span className="text-red-700">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">My Tools</h1>

            <p className="xl:w-52 lg:w-2/4 md:w-2/3 sm:w3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              "Innovation thrives where curiosity and the right tools come together”
            </p>

            <div className="tools-box mt-14 grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
              {listTools.map((tool) => (
                <div
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 cursor-pointer group"
                  key={tool.id} 
                  data-aos="fade-up" 
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                >
                  <img
                    src={tool.gambar}
                    alt="Tool Image 1"
                    className="w-15 mb-4 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                    loading="lazy"
                  />
                  <div>
                    <h4  className="font-bold">{tool.nama}</h4>
                    <p className="opacity-50">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <div className="proyek mt3-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">My Projects</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Here are some projects I have created.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-2 grid-cols-1 gap-4">
              {listProyek.map((proyek) => (
                <div key={proyek.id} className="p-4 bg-zinc-800  rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
                  <img src={proyek.gambar} alt="Proyek Image"  loading="lazy" />
                  <div>
                    <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                    <p className="text-base/loose mb-4">{proyek.desk}</p>
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool, index) => (
                        <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <a href="#" className="bg-red-800 p-3 rounded-lg block border border-zinc-600 hover:bg-red-700">Lihat Website</a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div className="Kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl text-center mb-2 font-bold" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari Terhubung Dengan Saya</p>
        <form action="https://formsubmit.co/muhfadhil1229@gmail.com" 
              method="POST" 
              className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" 
              autoComplete="off" 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="nama" placeholder="Masukkan Nama......" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email....." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Messages</label>
              <textarea name="pesan" id="pesan" cols="45" rows="8" placeholder="Pesan....."
              className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-red-800 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-red-700">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
