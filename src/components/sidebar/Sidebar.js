// Sidebar.js

import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { media } from '../../media/media';
import { Context } from '../../Context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(true);
    const{onSent,prevPrompts,setRecentPrompt,newchat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
       await onSent(prompt)
    }

    const containerStyle = {
      width: extended ? '16%' : '6%',
    };

    const fontSizeStyle = {
      fontSize: extended ? '' : '20px',

    };
    const fontSizeStyles = {
        fontSize: extended ? '' : '20px',
        margin: extended ? '' : '0 0 0 5px',
  
      };
    const newchats = {
      borderRadious: extended? '' : '50px',
      height: extended? '' : '40px',
      width: extended? '' : '40px',
    }
    const fLogo = {
      height: extended? '' : '40px',
      width: extended? '' : '40px',
    }
    const Plogo = {
        margin: extended ? '' : '0 0 0 4px',

    }
    const menu = {
        position: extended? '' : 'absolute',
        bottom: extended? '' : '80px',
        left: extended? '' : '22px',
        padding: extended? '' : '0',
        height: extended? '' : '30px',
        width: extended? '' : '30px',
        fontSize: extended? '' : '16px',
        lineHeight: extended? '' : '30px',
    }

      
    return (
        <div className="sidebar" style={containerStyle}>
            <div className="top">
                <div className="logo">
                    <img src={media.logo} alt="logo" style={Plogo} />
                    {extended ? <h1>ZahAI</h1> : null}
                    <i style={menu} className={`fa-light menu ${extended ? 'fa-arrow-left-to-line' : 'fa-arrow-right-to-line'}`} onClick={() => setExtended(prev => !prev)}></i>
                </div>
                <div className='block'>
                    <div className="new-chat" style={newchats} onClick={()=>newchat()}>
                        <p><i className="fa-light fa-plus" style={fontSizeStyle}></i></p>
                        {extended ? 
                        <div className='kbg-tag'>
                            <kbd>Ctrl</kbd>
                            <kbd>I</kbd>
                        </div>
                        : null}
                    </div> 
                </div>
                <div className='sidebar-menu'>
                    <ul>
                        <li>
                            <a href="/">
                                <i className="fa-light fa-magnifying-glass" style={fontSizeStyles}></i>
                                {extended ? <p>Home</p> : null}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-light fa-compass" style={fontSizeStyles}></i>
                                {extended ? <p>Discover</p> : null}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-light fa-rectangle-vertical-history" style={fontSizeStyles}></i>
                                {extended ? <p>Library</p> : null}
                            </a>
                        </li>
                    </ul>
                </div>
                {extended ? 
                <div className='recent-menu'>
                    <ul>
                        {prevPrompts.map((item,index) =>{
                            return(
                            <li key={index} onClick={()=>loadPrompt(item)}>
                                <a href="#">
                                    <p>{item.slice(0,10)}..</p>
                                    <i className="fa-light fa-layer-group"></i>
                                </a>
                            </li>
                            )
                        })}
                        <li>
                            <a href="#">
                                <p>What is react...</p>
                                <i className="fa-light fa-layer-group"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>What is react...</p>
                                <i className="fa-light fa-layer-group"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p>What is react...</p>
                                <i className="fa-light fa-layer-group"></i>
                            </a>
                        </li>
                    </ul>
                </div> : null}
                {extended ? 
                <div className='menu-upgrade'>
                    <a href="">Try Pro</a>
                    <p>Upgrade for image upload, smarter AI, and more Pro Search.</p>
                    <button>
                        <i className="fa-light fa-arrow-up-right"></i>
                        <span>Learn More</span>
                    </button>
                </div> : null}
            </div>
            <div className="bottom">
                <div className='client-detail'>
                    <img src={media.client} alt=""  style={fLogo} />
                    {extended ? <p>zahidalicodes</p> : null}
                    {extended ? <i className="fa-light fa-gear"></i> : null}
                </div>
            </div>
            {extended ?
            <div className='bottom-2'>
                <div className='social-links'>
                    <div className='download'>
                        <a href="">
                            <i className="fa-light fa-mobile"></i>
                            <span>Download</span>
                        </a>
                    </div>
                    <div className='social-icons'>
                        <a href="">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-discord"></i>
                        </a>
                    </div>
                </div>
            </div> : null}
            
        </div>
    );
};

export default Sidebar;
