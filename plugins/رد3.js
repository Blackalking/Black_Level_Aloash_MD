
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^حبك$/i.test(m.text)) { 
     responses = [ 
 '*اعشقك 🥹*'  
     ]; 
} else if (/^بوتى حبك|تخطبنى$/i.test(m.text)) { 
     responses = [ 
       '*دوبت خلاث♥🐥*',  
     ]; 
   }else if (/^زعلان|زعلانه $/i.test(m.text)) { 
     responses = [ 
'*متزعلش انا جنبك💎🩵*'
     ]; 
 }else if (/^تسلملى$/i.test(m.text)) { 
     responses = [ 
'*سلمك ربى من كل سوء و شر🌻♥️*'
     ]; 
   }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
'*عايش و قاعد على قلبكو😂😁*'
   ]; 
   }else if (/^عاوزه حضن|اوف يح$/i.test(m.text)) { 
     responses = [ 
'*من عيونى 🌚💔*',
'*بطلو تحمرش بق🙂💔*',
'*ما تيجى 🌚💋*',
]; 
   }else if (/^محترم؟$/i.test(m.text)) { 
     responses = [ 
'*اه عندك مانع  🙁*',
'*ايوه يبت البارده🫥*',
'*اها يا ابن البارده🙄*',   ]; 

     }else if (/^اخرس|مسمعش صوتك$/i.test(m.text)) { 
     responses = [ 
       '*حاتر🌚♥*',  

     ]; 
}else if (/^نونه/i.test(m.text)) { 
     responses = [ 
       '*خد الرضعه😂🍼*',  

     ]; 
   }else if (/^كيفك$/i.test(m.text)) { 
     responses = [ 
'احسن منك🌚♥️'
     ]; 
   } else if (/^غلس$/i.test(m.text)) { 
     responses = [ 
'*طز فيك مش حوار🌚*'
     ]; 
     }else if (/^🙂$/i.test(m.text)) { 
     responses = [ 
       'مالك يروحى ايش صار',  

     ];
     }else if (/^بلاك بوت|بلاكى|بلاكي$/i.test(m.text)) { 
     responses = [ 
       '🌚♥دقاته ',  
       '🌚♥نبضه و حياتو',
     ];
     }else if (/^انا البابا$/i.test(m.text)) { 
     responses = [ 
       'ماما حلوه و تيته احلى و شايفك اهبل😂🥹',  

     ];
     }else if (/^سلاموز|سلاموكا$/i.test(m.text)) { 
     responses = [ 
       '*طريق سلامه انت♥*',
      '🌚♥بودعك ',

     ];
     }else if (/^حمرا$/i.test(m.text)) { 
     responses = [ 
       '*توتك♥*',  

     ]; 
     }else if (/^ روقان|هدوء|سكوت$/i.test(m.text)) { 
     responses = [ 
       'احلى هدوء و سكوت و روقان🌚',  

     ];
     }else if (/^ مزه|مزة$/ .test(m.text)) { 
     responses = [ 
       '*احلى مزه كمان♥*',  
     ];
       }else if (/^شرموط$/i.test(m.text)) { 
     responses = [ 
       '*بس يا ابنى*',
      '*صلى على النبى*',
      '*ما هو العبب مش عليك العيب على الخروف ال جاب مرا و قال انو جاب راجل و انتو الاتنين خرفان زى بعض*',
     ];
            }else if (/^شافت غيرى|لقيت بديلى|سيبنى لوحدى$/i.test(m.text)) { 
     responses = [ 
       '*يبقى فكك*',  
     ];
            }else if (/^قول$/i.test(m.text)) { 
     responses = [ 
       '*كلام كتير بس بقا مش بيجبب همو♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
