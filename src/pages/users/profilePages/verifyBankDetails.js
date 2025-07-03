import { FaUniversity, FaUser, FaFileUpload, FaEdit } from "react-icons/fa";
import CustomButton from "../../../components/customButton";
import { IoMdAdd } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
const bankDetails = [
    { icon: <FaUniversity />, label: "Bank", value: "ICICI" },
    { icon: <FaUser />, label: "Account Holder Name", value: "Karam Singh Rawat" },
    { icon: <MdAccountBox />, label: "Account No", value: "7280125288" },
    { icon: <BiSolidBank />, label: "IFSC Code", value: "ICIC0007198" },
    { icon: <TbWorld />, label: "Swift Code", value: "-" },
    { icon: <FaFileUpload />, label: "Cheque/Bank Statement", value: "Uploaded" },
];

export default function VerifyBankDetails() {
    return (
        <div className=" bg-gray-100 h-screen ">
            <div className="sm:max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">Verify Bank Details</h2>

                </div>
                <div className=" bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex flex-row items-center justify-between mb-4">
                        <CustomButton title="Add Bank Details" startIcon={<IoMdAdd />} />

                    </div>
                    <div className="space-y-4 bg-white relative border border-gray-300 sm:w-96 p-5 rounded-md shadow">
                        <button className="absolute w-fit -top-3 bg-black p-1 rounded -right-3 text-gray-200 hover:text-gray-300">
                            <FaEdit size={16} />
                        </button>



                        {bankDetails.map((item, index) => (
                            <div key={index} className="flex items-center rounded justify-between py-1 px-3   border border-gray-200 gap-2 text-secondary">
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    <span className="text-xs font-semibold text-secondary">{item.label}</span>
                                </div>
                                <span className="text-xs font-medium text-secondary ml-2">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
