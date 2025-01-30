import Modal from "react-modal";
import { FaTimes } from "react-icons/fa"; // Import close icon from react-icons
import "./global.css"; // You can still keep your global styles if needed
import { ShineBorder } from "../ui/shine-border";

// Make sure you bind the modal to your app's element for accessibility
Modal.setAppElement("#root");

const DialogBox = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal"
            overlayClassName="overlay"
        >
            <ShineBorder
                className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <div className="modal-content p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto sm:max-w-lg">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                        <FaTimes size={24} />
                    </button>

                    <h2 className="text-2xl font-semibold text-gray-300 mb-4">GPA Calculator</h2>
                    <p className="text-gray-400 mb-4 text-sm sm:text-base">
                        Developed by <span className="font-semibold">Rasika Rakhewar</span>
                        <br />
                        <span className="italic">This app is specially designed for DBATU (Dr. Babasaheb Ambedkar Technological University) students.</span>
                        <br />
                        <span className="font-semibold">Note:</span> The credits and curriculum are updated according to the latest DBATU guidelines.
                    </p>
                    <div className="grades-table mt-4">
                        <h3 className="text-xl font-semibold text-gray-300 mb-2">Grades</h3>
                        <table className="w-full text-gray-400">
                            <thead>
                                <tr>
                                    <th className="border px-2 py-1">Grade</th>
                                    <th className="border px-2 py-1">Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-2 py-1">EX (91-100)</td>
                                    <td className="border px-2 py-1">10.0</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">AA (86-90)</td>
                                    <td className="border px-2 py-1">9.0</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">AB (81-85)</td>
                                    <td className="border px-2 py-1">8.5</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">BB (76-80)</td>
                                    <td className="border px-2 py-1">8.0</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">BC (71-75)</td>
                                    <td className="border px-2 py-1">7.5</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">CC (66-70)</td>
                                    <td className="border px-2 py-1">7.0</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">CD (61-65)</td>
                                    <td className="border px-2 py-1">6.5</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">DD (56-60)</td>
                                    <td className="border px-2 py-1">6.0</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">DE (51-55)</td>
                                    <td className="border px-2 py-1">5.5</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">EE (40-50)</td>
                                    <td className="border px-2 py-1">5.0</td>
                                </tr>
                                <tr>
                                    <td className="border px-2 py-1">FF (&lt;40)</td>
                                    <td className="border px-2 py-1">0.0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ShineBorder>
        </Modal>
    );
};

export default DialogBox;
