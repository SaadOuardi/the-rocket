import React, { useEffect, useState } from 'react';

export const ToggleMode = () => {

    const [darkMode, setDarkMode] = useState(true);

    const handleDark = () => {
        setDarkMode(!darkMode);
        if(darkMode){
            document.querySelectorAll('header, .container').forEach(Element =>{
                Element.style.backgroundColor = 'var(--secondary-bg)';
            })
            document.querySelectorAll('body, main, main .Main-Body, main .Main-Header').forEach(Element =>{
                Element.style.backgroundColor = 'var(--primary-bg)';
            })
            document.querySelectorAll('.Profile img').forEach(Element =>{
                Element.style.border = '4px solid var(--primary-bgColor-bm)';
            })
            document.querySelectorAll('h1, h2, h3, h4, h5, h6, li, a, p, svg, span').forEach(Element =>{
                Element.style.color = 'var(--text-color)';
            })
            document.querySelectorAll('.Icon-Bg svg, .Container-Bg a').forEach(Element =>{
                Element.style.color = 'var(--icon-color)';
            })
            document.querySelectorAll('.Icon-Bg svg').forEach(Element =>{
                Element.style.color = 'white';
            })
            document.querySelectorAll('li svg').forEach(Element =>{
                Element.style.color = 'black';
            })
            // Hover //
            document.querySelectorAll('.Sidebar a').forEach(Element =>{
                Element.addEventListener('mouseover', ()=>{
                    Element.style.backgroundColor ='var(--primary-hoverBgColor-bm)';
                })
                Element.addEventListener('mouseout', () => {
                    Element.style.backgroundColor = '';
                });
            })
        }else{
            document.querySelectorAll('header, .container').forEach(Element =>{
                Element.style.backgroundColor = 'var(--dark-secondary-bg)';
            })
            document.querySelectorAll('body, main, main .Main-Body, main .Main-Header').forEach(Element =>{
                Element.style.backgroundColor = 'var(--dark-primary-bg)';
            })
            document.querySelectorAll('.Profile img').forEach(Element =>{
                Element.style.border = '4px solid var(--primary-bgColor-dm)';
            })
            document.querySelectorAll('h1, h2, h3, h4, h5, h6, li, a, p, svg, span').forEach(Element =>{
                Element.style.color = 'var(--dark-text-color)';
            })
            document.querySelectorAll('.Icon-Bg svg, .Container-Bg a').forEach(Element =>{
                Element.style.color = 'var(--dark-icon-color)';
            })
            document.querySelectorAll('li svg').forEach(Element =>{
                Element.style.color = 'white';
            })

            // Hover //
            document.querySelectorAll('.Sidebar a').forEach(Element =>{
                Element.addEventListener('mouseover', ()=>{
                    Element.style.backgroundColor ='var(--primary-hoverBgColor-dm)';
                })
                Element.addEventListener('mouseout', () => {
                    Element.style.backgroundColor = '';
                });
            })
        }
    }
    // useEffect(()=>{
    //     handleDark();
    // }, [])
    return (
        <>
            {!darkMode ? (
                <div className='Icon-Bg' title='Dark Mode' onClick={handleDark}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                </div>
            ):(
                <div className='Icon-Bg' title='Light Mode' onClick={handleDark}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                </div>
            )}
        </>
    )
}

