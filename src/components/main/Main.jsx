import React, { useContext, useEffect, useRef } from "react";
import "./main.css";
import { useState } from "react";
import { Context } from "../../Context/Context";
import { media } from '../../media/media';

const Main = () => {
    
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

    const autoResize = () => {
        const textarea = document.getElementById("autoResizeTextarea");
        textarea.style.height = "auto"; // Reset height to auto
        textarea.style.height = Math.min(textarea.scrollHeight, 150) + "px"; // Set height to scroll height, capped at 400px
      };
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // Trigger click event on send button
          document.getElementById('sendBtn').click();
        }
      };

      const resultRef = useRef(null);

      useEffect(() => {
        // Scroll to the bottom of the "result" div when it's rendered or updated
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }, [resultData, loading]);
    return (
        <>
            <div className="Home">
                {!showResult
                ?<>
                <div className="home-content">
                    <h1>Where knowledge begins</h1>
                    <div className="serach-box">
                    <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    id="autoResizeTextarea"
                    rows={1}
                    placeholder="Ask anything..."
                    className="textarea"
                    onInput={autoResize}
                    onKeyPress={handleKeyPress} // Add this line
                    />

                        
                        <div className="upload-opt">
                            <ul>
                                <a className="tooltip">
                                    <i className="fa-light fa-bars-filter"></i>
                                    Focus
                                    <span className="tooltiptext">Set a focus for your sources</span>
                                </a>
                                <a className="tooltip">
                                    <i className="fa-light fa-circle-plus"></i>
                                    Attach
                                    <span className="tooltiptext2">Attach images, text, or PDFs. 3 left today</span>
                                </a>
                            </ul>
                            <ul>
                                <div className="toggle-switch">
                                    <input type="checkbox" id="toggle" checked={isChecked} onChange={handleToggle} />
                                    <div className={isChecked ? "switch checked" : "switch"} onClick={handleToggle}></div>
                                    <label htmlFor="toggle" className={isChecked ? "label-active" : "label-inactive"}>
                                        Pro
                                    </label>
                                </div>
                                <li  className={`send-btn  ${input ? 'active' : ''}`} id="sendBtn"  onClick={()=>onSent()}>
                                <i className="fa-regular fa-arrow-right"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="other-main">
                        <div className="other-links">
                            <a>
                                <i className="fa-light fa-right-from-bracket"></i>
                                <p>Try searching</p>
                            </a>
                            <div>
                                <p>🪗 Are accordions French?</p>
                            </div>
                            <div>
                                <p>🪧 Are billboards still effective?</p>
                            </div>
                        </div>
                        <div className="other-links">
                            <div>
                                <p>🪦 What's the history of tombstones?</p>
                            </div>
                            <div>
                                <p>🌳 The oldest tree in the world</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </>
                :<>
                <div className="scroll-container" style={{ height: '400px', overflowY: 'scroll' }}>
                <div className="result" ref={resultRef}>
                <div className="result-title">
                    <img src={media.user} alt="user"/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={media.logo} alt="logo" />
                    {loading
                    ? <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                        </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
                </div>
                </div>
                <div className="send-srch">
                    <div className="border">
                    <i className="fa-light fa-circle-plus"></i>
                        <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        id="autoResizeTextarea"
                        rows={1}
                        placeholder="Ask anything..."
                        className="textarea"
                        onInput={autoResize}
                        onKeyPress={handleKeyPress} // Add this line

                    />
                    
                    <ul>
                        <li className={`send-btn ${input ? 'active' : ''}`} id="sendBtn" onClick={()=>onSent()} >
                            <i className="fa-regular fa-arrow-right"></i>
                        </li>
                    </ul>
                    </div>
                </div>
                </>
                }
              
            </div>      
        </>   
    );
};

export default Main;
