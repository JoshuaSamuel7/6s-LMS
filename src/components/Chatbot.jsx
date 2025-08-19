import React, { useState,useEffect,useRef } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import SendIcon from '@mui/icons-material/Send';
import { chatbotQA } from "../data/chatbot.json";
import SmartToyIcon from '@mui/icons-material/SmartToy';
function Chatbot() {
    const [chats,setChats]= useState([{message:"Hi! How may I help You!",sender:"admin"}]);
    const [message,setMessage]=useState();
    const suggestions=[{disp:"Courses",question:"what courses am I enrolled in?"},{disp:"Achievements", question:"what achievements have I earned recently?"},{disp:"Performance",question:"how have I performed overall in quizzes?"}];
    const chatRef=useRef();
    useEffect(() => {
        if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }}, [chats]);
    const addMessage =()=>{
        if (!message.trim()) return;
        setChats(prevChats=>[...prevChats,{message:message,sender:"user"}]);
        setTimeout(() => {
            botreply(message);
        }, 1000);
        setMessage("")
        
    }
    const botreply=(message)=>{
        const botmsg=chatbotQA.find(u=>u.question.toLowerCase()===message.toLowerCase());
        setChats(prevChats=>[...prevChats,{message:botmsg? botmsg.answers :"Sry Enter a Different Text",sender:"admin"}]);
    }
    const handleQuestion=(quest)=>{
        setMessage(quest)
    }
  return (
    <>
    <Paper sx={{width:{xs:"70vw",md:"22vw",lg:"22vw"},height:"58vh", background:"#17212B", borderRadius:"30px"}}>
        <div className="chatbox">
            <div className="chats" ref={chatRef}>
            {
                chats.map((chat,key)=>{
                    return chat.sender==="admin"?
                    <div className='bot'>
                    <SmartToyIcon sx={{fontSize:"20px"}}/>
                    <div className='bot-msg'>
                        {chat.message}
                    </div>
                    </div>
                    :
                    <div className='user'>
                    <div className='user-msg'>
                        {chat.message}
                    </div>
                    <p className='user-initial'>J</p>
                    </div>
                    
                })
            }
            </div>
            <div className="suggestions">
                {suggestions.map((suggest,key)=>{
                    return (
                        <div className="suggest-box" key={key}>
                            <button onClick={()=>handleQuestion(suggest.question)}>{suggest.disp}</button>
                        </div>
                    )
                })}
            </div>            
            <div className="chat-input">
            <input type="text"
             name="input-msg"
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
             autoComplete='off'
             placeholder='Enter Your Message'
            onKeyDown={(e) => e.key === "Enter" && addMessage()}
            />
            <button className='send' onClick={()=>addMessage()}><SendIcon/></button>
            </div>
        </div>

    </Paper>
    </>
  )
}

export default Chatbot