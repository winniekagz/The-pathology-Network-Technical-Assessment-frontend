import { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";

const Avatar = ({ imageUrl }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [image, setImage] = useState("images/user2.png");

    const handlebase64 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
        console.log(reader.result)


    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <div className="relative">
            <img
                className='h-24 w-24 rounded-full border-1 border-dark-blue -mt-16'
              
                src={image}
                alt="Avatar"
            />
            {isEditing && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <label className="cursor-pointer">
                        <HiOutlineCamera className="text-blue-green text-2xl" />
                        <input
                            type="file"
                            className="hidden border-none rounder-full"
                            onChange={handlebase64}
                        />
                    </label>
                </div>
            )}
            {!isEditing && (
                <button
                    className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    onClick={handleEditClick}
                >
                    <HiOutlineCamera className="text-xl border bg-dark-blue" />
                </button>
            )}
        </div>
    );
};

export default Avatar;
