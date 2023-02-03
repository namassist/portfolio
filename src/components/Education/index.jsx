import BangReact from "../../assets/img/bg-react.png";

export const Education = () => {
  return (
    <section className="pb-5 relative min-h-[600px]" id="education">
      <div className="container mx-auto">
        <h2 className="font-semibold text-3xl text-center">Education</h2>
        <div className="flex justify-center space-x-5 mt-20">
          <div className="w-5/12">
            <h3 className="uppercase font-semibold text-xl text-[#FF499E]">
              SMK Negeri 1 Jamblang
            </h3>
            <ul className="mx-auto list-square marker:text-[#FF499E] marker:text-xl ml-7">
              <li>2017 - 2020</li>
              <li>Nilai rata-rata 87.0/100.0</li>
              <li>Computer Network Engineering</li>
              <li>Organization</li>
              <ul className="text-sm text-gray-100 space-y-0.5">
                <li>Network Engineering Club</li>
                <li>
                  <span className="font-bold">Anggota </span>
                  2018-2019
                </li>
              </ul>
            </ul>
          </div>
          <div className="w-5/12">
            <h3 className="uppercase font-semibold text-xl text-[#FF499E]">
              Politeknik Negeri Semarang
            </h3>
            <ul className="list-square marker:text-[#FF499E] marker:text-xl ml-7">
              <li>2020 - Sekarang</li>
              <li>IPK 3.65/4.00</li>
              <li>D4 - Teknologi Rekayasa Komputer</li>
              <li>Organization</li>
              <ul className="text-sm text-gray-100 space-y-0.5">
                <li>Polytechnic Computer Club</li>
                <li>
                  <span className="font-bold">Kepala Departemen Software </span>
                  2021-2022
                </li>
                <ul className="list-disc marker:text-gray-100 marker:text-sm ml-4">
                  <li>Mengadakan pelatihan mengenai software</li>
                  <li>
                    Membantu perihal software pada program kerja yang akan
                    berlangsung
                  </li>
                  <li>
                    Menghasilkan produk dan portfolio yang berhubungan dengan
                    software
                  </li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
        <div className="w-full border-b-2 border-b-[#FF499E] mt-10"></div>
      </div>
      <img
        src={BangReact}
        className="absolute -bottom-[10%] left-[-30%] scale-[.80]"
      />
    </section>
  );
};
