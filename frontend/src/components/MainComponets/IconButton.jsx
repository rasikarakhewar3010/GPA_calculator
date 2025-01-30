import  { useState } from "react";
import { FaInfoCircle } from "react-icons/fa"; // Importing the icon
import DialogBox from "./DialogBox"; // Import the DialogBox component

const IconButton = ({ className }) => { // Accept className as a prop
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Open modal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal} // Trigger the modal open
        className={`fixed top-5 right-5 p-3  rounded-full text-white ${className}`} // Apply className here
      >
        <FaInfoCircle size={24} /> {/* Icon inside button */}
      </button>

      {/* Pass state and function to DialogBox */}
      <DialogBox isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default IconButton;
