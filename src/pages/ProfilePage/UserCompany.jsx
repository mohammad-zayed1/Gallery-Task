//icons
import { PiBuildingsFill, PiShareNetworkThin } from "react-icons/pi";
import { MdWork } from "react-icons/md";

function UserCompany() {
  const company = JSON.parse(localStorage.getItem("user")).company;
  return (
    <div>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
        <div>
          <span className="text-sm pl-1 ">Company</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <PiBuildingsFill className="text-[#32aa32]" />
            <span>{company.name}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1">Catch Phrase</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <MdWork className="text-[orange]" />
            <span>{company.catchPhrase}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1">Bs</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <PiShareNetworkThin className="text-[#4bbfe6]" />
            <span>{company.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCompany;
