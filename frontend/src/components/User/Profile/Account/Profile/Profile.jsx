import React , { useState } from 'react'
import './Profile.scss';

export const Profile = ({UserProfile}) => {
    const [CoverOption,setCoverOption] = useState(false);
    const [Cover,setCover] = useState(null);

    const handleCoverOption = () =>{
        setCoverOption(!CoverOption)
    }

    const handleCoverChange = (e) =>{
        setCover(e.target.files[0])
    }

    const handleFileOpen = ()=>{
        document.getElementById('fileInput').click();
    }

    const handleSaveChange = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('user_id', 1);

        if (Cover) {
            formData.append('cover_picture', Cover);
        }
    
        try {
            const response = await fetch('http://localhost:5000/cover', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`Error! Status: ${response.status}`);
            }
    
            const newCover = await response.json();
            console.log(`Cover updated successfully : ${newCover}`);
        }
        catch (error) {
            console.error(`Error updating cover: ${error}`);
        }
    };
    
    return (
        <>
            <div className='Profile'>
                <div className='Details'>
                    <img src={UserProfile} alt="" />
                    <div className='ImgOptions Details-Options'>
                        <div className='Options'>
                            <div className='Icon-Bg' title='Edit Cover' onClick={handleCoverOption}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19ZM12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13C16 15.2091 14.2091 17 12 17Z"></path></svg>
                            </div>
                            {CoverOption &&
                                <div className='List'>
                                    <ul>
                                        <li onClick={handleFileOpen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5761 14.5764L15.7067 10.707C15.3162 10.3164 14.683 10.3164 14.2925 10.707L6.86484 18.1346C5.11358 16.6671 4 14.4636 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9014 19.8509 13.7679 19.5761 14.5764ZM8.58927 19.2386L14.9996 12.8283L18.6379 16.4666C17.1992 18.6003 14.7613 19.9998 11.9996 19.9998C10.7785 19.9998 9.62345 19.7268 8.58927 19.2386ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z"></path></svg>
                                            Update
                                            <input type="file" className='File-Input' id='fileInput' onChange={handleCoverChange}/>
                                        </li>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                                            Remove
                                        </li>

                                        <li onClick={handleSaveChange}>
                                            Save changes
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
