import { BiSolidCity } from "react-icons/bi";
import { GiStreetLight } from "react-icons/gi";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";
import { FaFax } from "react-icons/fa";
function UserAddress() {
  const address = JSON.parse(localStorage.getItem("user")).address;
  console.log("userAddress", address);
  return (
    <div>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
        <div>
          <span className="text-sm pl-1 pb-1">City</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <BiSolidCity className="text-[#32aa32]" />
            <span>{address.city}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1 pb-1">Street</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <GiStreetLight className="text-[orange]" />
            <span>{address.street}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1 pb-1">Apartment</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <MdOutlineAirlineSeatIndividualSuite className="text-[#4bbfe6]" />
            <span>{address.suite}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1 pb-1">ZipCode</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg ">
            <FaFax className="text-[red]" />
            <span>{address.zipcode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddress;
