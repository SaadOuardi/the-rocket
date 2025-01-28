import React, { useState, useEffect } from 'react';
import { Loading } from '../../../Main/Loading/Loading';
import { Alert } from '../../../../../lightboxes/Alert/Alert';
import './CreatePost.scss';
const Icon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg>
    )
}

export const CreatePost = ({Profile,Username,userID}) => {
    const [post, setPost] = useState(true);
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [PostBtn,setPostBtn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [PostSuccess,setPostSuccess] = useState(false);

    useEffect(() => {
            const ContentInput = document.getElementById('contentInput');
            const FileInput = document.getElementById('fileInput')
            const FileButton = document.getElementById('Add-File');
            const PostButton = document.getElementById('Post-Btn');
            // File Icon //
            FileInput.style.display = 'none';
            FileButton.addEventListener('click', () =>{
                FileInput.click();
            })
            // Post Button //
            if(ContentInput.value ===''){
                PostButton.classList = 'disabled';
            }else{
                PostButton.classList = 'enabled';
            }
    }, []);

    const handlePost = () =>{
        setPost(!post)
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
        const PostButton = document.getElementById('Post-Btn');

        if(e.target.value.length > 0){
            setPostBtn(true);
            PostButton.classList = 'enabled';

        }else{
            setPostBtn(false);
            PostButton.classList = 'disabled';
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));

        const ScrollContainer = document.getElementById('scrollContainer');
        if (ScrollContainer) {
            if (file) {
                ScrollContainer.classList.remove('Scroll');
            }else {
                ScrollContainer.classList.add('Scroll');
            }
        }
    };

    const handleImageRemove = () =>{
        setImagePreview(false);
    };

    const handlePostSuccess = () =>{
        setPostSuccess(!PostSuccess);
        setTimeout(() => {
            setPostSuccess(false);
        }, 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            if(!PostBtn){
                return;
            }else{
                setIsLoading(true);

                setTimeout(() => {
                    handlePostSuccess();
                }, 2000);
    
                setTimeout(() => {
                    window.location.reload();
                }, 5000);

                const formData = new FormData();
                formData.append('user_id', userID);
                formData.append('content', content);
                if (image) {
                    formData.append('image_url', image);
                }
                try {
                    const response = await fetch('http://localhost:5000/api/posts', {
                        method: 'POST',
                        body: formData,
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const newPost = await response.json();
                    console.log('Post created:', newPost);
    
                } catch (error) {
                    console.error('Error creating post:', error);
                }
            }
    };

    return (
        <>
            {isLoading && 
                <Loading />
            }
            
            {PostSuccess && 
                <Alert Icon={Icon} Message={`Post submitted successfully`} BgColor='rgb(4, 186, 4)'/>
            }

            {post &&
                <div className='Main-Lightbox Main-CreatePost'>
                    <div className='Lightbox Lightbox-CreatePost'>
                        <div className='Icon-Bg Close-Icon' onClick={handlePost}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                        </div>
                        <div className='CreatePost'>
                            <div className='Header'>
                                <div className='Header-Content'>
                                    <div className='Flex-Center'>
                                        <h1>Create post</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='Body'>
                                <div className='Body-Content Flex-Start Flex-Column'>
                                    <div className='Profile-Input Flex-Center'>
                                        <div className='Flex-Center'>
                                            <img src={Profile} alt={Username} className="Profile" />
                                        </div>
                                        <div className='Input-Status Status'>
                                            <textarea 
                                                value={content}
                                                onChange={handleContentChange}
                                                placeholder='What is on your mind?'
                                                id='contentInput'>
                                            </textarea>
                                        </div>
                                    </div>
                                    { imagePreview && image &&
                                        <div className='Scroll' id='scrollContainer'>
                                                <div className='Image-Preview'>
                                                    <img src={imagePreview} alt="" />
                                                    <div className='Icon-Bg' onClick={handleImageRemove}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                                                    </div>
                                                </div>
                                        </div>
                                    }
                                    <div className='Flex-Center Flex-Column Flex-Start'>
                                        <div className='Select-Input'>
                                            <select>
                                                <option value="" key="">Public</option>
                                                <option value="" key="">Friends</option>
                                                <option value="" key="">Only me</option>
                                                <option value="" key="">Close Friends</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className='Footer'>
                                <div className='Footer-Content Flex-Center'>
                                    <div className='Input-File'>
                                        <input
                                            id='fileInput'
                                            type="file"
                                            onChange={handleImageChange}
                                        />
                                        <div className='Flex-Center'>
                                            <div className='Icon-Bg' id='Add-File'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                                            </div>

                                            <div className='Icon-Bg' id=''>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 2L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44749 2 3.9985 2H16ZM13 10H12V15H13V10ZM11 10H9C7.89543 10 7 10.8954 7 12V13C7 14.1046 7.89543 15 9 15H10C10.5523 15 11 14.5523 11 14V12H9V13H10V14H9C8.44772 14 8 13.5523 8 13V12C8 11.4477 8.44772 11 9 11H11V10ZM17 10H14V15H15V13H17V12H15V11H17V10Z"></path></svg>
                                            </div>

                                            <div className='Icon-Bg' id=''>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13H15C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13H7ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='Flex-Center'>
                                        <button id='Post-Btn' onClick={handleSubmit}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};