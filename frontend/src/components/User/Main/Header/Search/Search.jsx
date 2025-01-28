import React , { useState } from 'react';
import { User } from '../../../Home/Follow/Follow';
import User2 from '../../../../../assets/images/profile/Tfue.png';
import User3 from '../../../../../assets/images/profile/ElonMusk.webp';
import User4 from '../../../../../assets/images/profile/Fortnite.png';
import './Search.scss';

export const SearchBtn = () =>{
    const [Search,setSearch] = useState(true);
    const [SearchList,setSearchList] = useState(false);
    const handleSearch = () =>{
        setSearch(!Search)
    }
    const handleSearchList = () =>{
        setSearchList(!SearchList)
    }
    return(
        <>
                <div className='Search'>
                    <div className='Flex-Center'>
                        {Search &&
                            <div title='Search' className='Icon-Bg'onClick={handleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path></svg>
                            </div>
                        }

                        {!Search &&
                            <div className='Search-Open Flex-Center'>
                                <div title='Exit' className='Icon-Bg' onClick={handleSearch}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
                                </div>

                                <div className="search__container">
                                    <input type="search" placeholder="Search" list='search__choices' id="search" onClick={handleSearchList}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi search-icon" viewBox="0 0 16 16"><path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/></svg>
                                </div>

                                {SearchList &&
                                    <div className='Search-List container'>
                                        <User userProfile={User2} userName='Tfue' userUsername='Tfue'/>
                                        <User userProfile={User3} userName='Elon Musk' userUsername='ElonMusk'/>
                                        <User userProfile={User4} userName='Fortnite' userUsername='Fortnite'/>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
        </>
    )
}