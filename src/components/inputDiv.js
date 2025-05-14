import { FaLock } from 'react-icons/fa';

const InputDiv = ({
    leftIcons=<></>,
    children
}) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full ">
     {leftIcons && <div className="bg-gray-100 w-10 justify-center h-full border-r border-gray-300 flex items-center">
        {leftIcons}
      </div>}
      {/* <input
        type="password"
        placeholder="Password"
        className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
      /> */}
      {children}
    </div>
  );
};

export default InputDiv;
