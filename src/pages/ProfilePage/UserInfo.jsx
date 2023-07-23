/* eslint-disable react/prop-types */
// icons
import { CgRename } from "react-icons/cg";
import { BsPhone } from "react-icons/bs";
import { MdEmail, MdWeb } from "react-icons/md";

function UserInfo({ user }) {
  return (
    <div>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
        <div>
          <span className="text-sm pl-1 pb-1">Name</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <CgRename className="text-[#32aa32]" />
            <span>{user.name}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1 pb-1">Phone</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <BsPhone className="text-[orange]" />
            <span>{user.phone}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1 pb-1">Email</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg">
            <MdEmail className="text-[#4bbfe6]" />
            <span>{user.email}</span>
          </div>
        </div>
        <div>
          <span className="text-sm pl-1 pb-1">Website</span>
          <div className=" flex items-center justify-start gap-2 p-4 bg-white rounded-md shadow-lg ">
            <MdWeb className="text-[red]" />
            <span>{user.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
