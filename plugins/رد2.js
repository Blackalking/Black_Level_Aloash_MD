
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^قليل الادب$/i.test(m.text)) { 
     responses = [ 
 '*مظلوم يبيه 😩❤‍🔥*'  
     ]; 
} else if (/^بوسنى|بوسني|حبنى|احضنى$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥اموت انا فى عسل دا*',  
     ]; 
   }else if (/^ثافل|سافل $/i.test(m.text)) { 
     responses = [ 
'*مؤدب يكلب البحر💎🩵*'
     ]; 
 }else if (/^نصاب|نصابه $/i.test(m.text)) { 
     responses = [ 
'*مظلوم اككيد😩❤‍🔥*'
     ]; 
   }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
'*احتين على احتك 😂😁*'
   ]; 
   }else if (/^بوت بوسني؟|بوت بوسنى$/i.test(m.text)) { 
     responses = [ 
'*من عيونى 🌚💔*',
'*بطلو تحمرش بق🙂💔*',
'*ما تيجى 🌚💋*',
]; 
   }else if (/^مؤدب؟$/i.test(m.text)) { 
     responses = [ 
'*اه عندك مانع  🙁*',
'*ايوه يبت البارده🫥*',
'*اها يا ابن البارده🙄*',   ]; 

     }else if (/^اسكت|اسكت ساكت$/i.test(m.text)) { 
     responses = [ 
       '*حاتر🌚♥*',  

     ]; 
}else if (/^امك/i.test(m.text)) { 
     responses = [ 
       '*الام تنشال على راس يحب🌚❤*',  

     ]; 
   }else if (/^ازيك$/i.test(m.text)) { 
     responses = [ 
'طنط عامله اكل اى انهارده🌚♥️'
     ]; 
   } else if (/^رخم$/i.test(m.text)) { 
     responses = [ 
'*عارف متزهقنيش🌚*'
     ]; 
     }else if (/^😘$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^اوامر|الاوامر|مهام$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكتب النقطه يا حمار ',  
       '🌚♥فين النقطه يلى هجبب ليا نقطه',
     ];
     }else if (/^ماما$/i.test(m.text)) { 
     responses = [ 
       'ماما حلوه و تيته احلى و شايفك هبله😂🥹',  

     ];
     }else if (/^بوتى بحبك|موت فيا$/i.test(m.text)) { 
     responses = [ 
       '*بوسينى اول♥*',
      '🌚♥موافق ',

     ];
     }else if (/^هووى$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^ مسا فل|مساء الفل|مثا بوتى$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير🌚',  

     ];
     }else if (/^ صباحو عسل|صباح المهلبيه$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^خول$/i.test(m.text)) { 
     responses = [ 
       '*بس يا ابنى*',
      '*صلى على النبى*',
      '*ما هو العبب مش عليك العيب على الخروف ال جاب مرا و قال انو جاب راجل و انتو الاتنين خرفان زى بعض*',
     ];
            }else if (/^مش بيرد|كارفه|كارف$/i.test(m.text)) { 
     responses = [ 
       '*يبقى فكك*',  
     ];
            }else if (/^تيزك$/i.test(m.text)) { 
     responses = [ 
       '*تيزك انتى♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
