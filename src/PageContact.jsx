// PageContact.js
import MyMap from "./PageContact/MyMap";
import contact1 from "./assets/contact1.jpg";

const PageContact = () => {
  return (
    <>
      {/* 顶部 Banner */}
      <div>
        <img
          className="w-screen object-cover"
          src={contact1}
          alt="Contact Banner"
        />
      </div>

      {/* 联系信息 + 地图 */}
      <div className="flex flex-col-reverse md:flex-row justify-between p-12 gap-8">
        {/* 联系信息 */}
        <div className="flex flex-col text-3xl font-lato text-red-600 p-8 max-w-lg">
          <h2>Contact us：</h2>

          <div className="mt-4 text-2xl text-black font-lato space-y-1">
            <p>McGill University</p>
            <p>Department of Materials Engineering</p>
            <p>Room 2160, Wong Building</p>
            <p>3610 Rue University</p>
            <p>Montreal, H3A 0C5</p>
            <p>Canada</p>
            <p>Cell: +1 514 944 3358</p>
            <p>Fax: +1 514 398 4492</p>
            <a
              href="mailto:salim.brahimi@mcgill.ca"
              className="hover:text-slate-500"
            >
              E-mail: salim.brahimi@mcgill.ca
            </a>
          </div>
        </div>

        {/* 地图 */}
        <div className="w-full md:w-2/5 h-96 rounded-lg overflow-hidden shadow-lg">
          <MyMap />
        </div>
      </div>
    </>
  );
};

export default PageContact;
