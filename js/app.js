(()=>{
const $=(s,r=document)=>r.querySelector(s), view=$('#view'), stage=$('#stage');
const MW={certifications:1090,skills:960,project:1280};
let cur='home';
/* scale the 1280x720 stage to the screen (narrow screens zoom on the centre) */
function fit(){const w=innerWidth,h=innerHeight;let s=Math.min(w/1280,h/720);
 if(w<720)s=w/(MW[cur]||820);
 stage.style.transform=`translate(${(w-1280*s)/2}px,${(h-720*s)/2}px) scale(${s})`}
/* ---- helpers ---- */
const H=(x,cap,fs,txt,fitw,c)=>[c?x-600:x,cap-.13*fs,`<span class="cond${c?' c':''}" data-fit="${fitw}" style="font-size:${fs}px">${txt}</span>`,c?'width:1200px;text-align:center':''];
const P=(x,yc,fs,lh,lines,css='')=>[x,yc-lh/2,lines.join('<br>'),`font-size:${fs}px;line-height:${lh}px;${css}`];
const PC=(x,yc,fs,lh,lines)=>[x-500,yc-lh/2,lines.join('<br>'),`width:1000px;text-align:center;font-size:${fs}px;line-height:${lh}px`];
const bl=l=>`<span style="display:inline-block;width:13px">•</span>${l}`;
function win(x,y,w,h,bar,items=[],o={}){
 const it=items.map(([ix,iy,html,css])=>`<div class="t" style="left:${ix-x}px;top:${iy-y}px;${css||''}">${html}</div>`).join('');
 const g=o.green?`<a class="d g" href="${o.green}" style="--i:2" aria-label="Continue to Thank You"></a>`:`<i class="d g" style="--i:2"></i>`;
 return `<section class="win ${o.cls||''}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:${o.z||1};${o.v||''}"><div class="bar" style="height:${bar}px"><i class="d r" style="--i:0"></i><i class="d o" style="--i:1"></i>${g}</div>${it}${o.raw||''}</section>`}
const FO={pink:[312,52],blue:[157,346],green:[895,88],peach:[1060,518]};
const GGC={pink:'#C1B9D5',blue:'#90A8FD',green:'#C2AF00',peach:'#CAA66B'};
const fsvg=(c,w,h)=>`<svg class="fgg" viewBox="0 0 80 66" width="${w}" height="${h}" aria-hidden="true"><path d="M4 12a6 6 0 016-6h20l6 7h34a6 6 0 016 6v39a6 6 0 01-6 6H10a6 6 0 01-6-6z" fill="${c}" style="filter:brightness(.86)"/><path d="M4 22a6 6 0 016-6h60a6 6 0 016 6v36a6 6 0 01-6 6H10a6 6 0 01-6-6z" fill="${c}"/><path d="M4 22a6 6 0 016-6h60a6 6 0 016 6v5H4z" fill="#fff" opacity=".35"/></svg>`;
const folders=()=>Object.entries(FO).map(([c,[x,y]])=>`<span class="abs" style="left:${x-3}px;top:${y-2}px;width:80px;height:67px"><img class="fm" src="fo_${c}.png" alt="" width="80" height="67">${fsvg(GGC[c],80,67)}</span>`).join('');
const fl=(p,to={},lab={})=>(FL[p]||[]).map((f,i)=>{const im=`<img src="${f.src}" alt="">`,st=`left:${f.x}px;top:${f.y}px;width:${f.w}px;height:${f.h}px`;
 const a=to[i]?`<a class="fl" href="#/${to[i]}" style="${st}">${im.replace('<img','<img style="width:100%;height:100%;display:block"')}</a>`:`<div class="fl" style="${st}">${im.replace('<img','<img style="width:100%;height:100%;display:block"')}</div>`;
 const l=lab[i]?`<span class="lab sm" style="left:${f.x+f.w/2}px;top:${f.y+f.h+4}px">${lab[i]}</span>`:'';return a+l}).join('');
const logo=(src,x,y,w,h,to)=>{const im=`<img src="${src}" alt="" style="width:100%;height:100%;object-fit:contain;display:block">`,st=`left:${x}px;top:${y}px;width:${w}px;height:${h}px`;return to?`<a class="abs lg" href="#/${to}" style="${st}">${im}</a>`:`<div class="abs lg" style="${st}">${im}</div>`};
const DOCK=[['notes','about','about me'],['safari','experience','experience'],['camera','skills','skills'],['photos','projects','projects'],['calendar','certifications','certification'],['messages','contact','contact me'],['heart','features','features'],['mail','thanks','contact']];
const DX=[367,437,507,577,648,718,789,859];
const GGI={notes:['#EBCB5E','#C9A24A','<rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>'],safari:['#A9BBFF','#7E92E8','<circle cx="12" cy="12" r="8"/><path d="M15.5 8.5L13.2 13.2 8.5 15.5 10.8 10.8z" fill="#fff"/>'],camera:['#B0A5CF','#8575A8','<rect x="3" y="7" width="18" height="12" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8 7l1.5-2h5L16 7"/>'],photos:['#DDCCF2','#A992CF','<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.5" fill="#fff"/><path d="M5 17l4-4 3 3 3-2 4 3"/>'],calendar:['#DFC48E','#B89455','<rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 10h16M8 4v4M16 4v4"/>'],messages:['#D4C21F','#9A8C00','<path d="M5 6h14a1 1 0 011 1v8a1 1 0 01-1 1h-8l-4 3v-3H5a1 1 0 01-1-1V7a1 1 0 011-1z"/><circle cx="9" cy="11" r=".9" fill="#fff"/><circle cx="12" cy="11" r=".9" fill="#fff"/><circle cx="15" cy="11" r=".9" fill="#fff"/>'],heart:['#E8C8EE','#B88FCF','<path d="M12 19s-6.500-4-6.500-9A3.800 3.800 0 0112 8a3.800 3.800 0 016.500 2c0 5-6.500 9-6.500 9z" fill="#fff" stroke="none"/>'],mail:['#A99CCB','#6F5FA3','<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 8l9 6 9-6"/>']};
const ggic=k=>{const[a,b,g]=GGI[k];return `<svg class="ic-gg" viewBox="0 0 58 58" aria-hidden="true"><defs><linearGradient id="gi${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="58" height="58" rx="14" fill="url(#gi${k})"/><rect x="1" y="1" width="56" height="28" rx="13" fill="#fff" opacity=".2"/><g transform="translate(11 11) scale(1.5)" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${g}</g></svg>`};
const dock=act=>`<nav class="dock" aria-label="Portfolio sections"><i class="v1"></i><i class="v2"></i>${DOCK.map(([k,to,tip],i)=>{const pf=act==='profile'&&to==='about',on=act===to||pf,tt=pf?'profile':tip;return `<a class="dk${on?' act':''}" href="#/${to}"${k==='notes'?' data-choose aria-haspopup="menu"':''} style="left:${DX[i]-342}px" aria-label="${tt}"${on?' aria-current="page"':''}><img src="ic_${k}.png" alt="">${ggic(k)}<span class="tip">${tt}</span></a>`}).join('')}<div class="dpop" id="dpop" role="menu" hidden><a role="menuitem" href="#/profile">Profile</a><a role="menuitem" href="#/about">About me</a></div></nav>`;
const wrap=(act,html)=>`<div class="cc" style="position:absolute;inset:0">${html}${dock(act)}</div>`;
/* ---- pages ---- */
const R={
home(){const NF={"profile": [64.0, 48.7, 76.0, 64.0], "features": [178.0, 48.7, 76.7, 64.0], "aboutme": [63.3, 148.7, 76.0, 64.7], "contact": [178.7, 148.7, 76.0, 64.7], "experiences": [63.3, 256.0, 76.0, 64.0], "skills": [64.0, 375.3, 76.0, 64.0], "projects": [63.3, 481.3, 76.0, 64.0], "certifications": [63.3, 584.7, 76.0, 64.0]};
 const GG={profile:'#9D8FBC',features:'#E2BE47',aboutme:'#C1B9D5',contact:'#90A8FD',experiences:'#CAA66B',skills:'#C2AF00',projects:'#DDBBEA',certifications:'#7B6BB0'};
 const lab=(t,x,y,to)=>`<a class="lab" href="#/${to}" style="left:${x}px;top:${y-8}px">${t}</a>`;
 const fo=[['profile','Profile','profile',101,125],['features','features','features',217,125],['aboutme','about me','about',101,232],['contact','contact','contact',217,232],['experiences','experiences','experience',101,340],['skills','skills','skills',101,457],['projects','projects','projects',101,563],['certifications','certifications','certifications',101,665]]
  .map(([k,t,to,lx,ly])=>{const [x,y,w,h]=NF[k];return `<a class="abs" href="#/${to}" aria-label="${t}" style="left:${x}px;top:${y}px"><img class="fm" src="nf_${k}.png" alt="" width="${w}" height="${h}">${fsvg(GG[k],w,h)}</a>${lab(t,lx,ly,to)}`}).join('');
 const T=FL.home,ln=['project/cafe','project/digital','project/typography','project/cafe'],ly=[168,278,460,632];
 const tn=T.map((f,i)=>`<a class="fl np" href="#/${ln[i]}" style="left:${f.x}px;top:${f.y}px;width:${f.w}px;height:${f.h}px"><img src="${f.src}" alt="project ${i+1}" style="width:100%;height:100%;display:block"></a><span class="lab" style="left:${f.x+50}px;top:${ly[i]-8}px">project#${i+1}</span>`).join('');
 return wrap('',`${fo}${tn}<img class="abs wm-mac" src="wordmark.png" alt="Portfolio" style="left:298px;top:180px;width:710px;height:270px"><div class="wm-gg" role="img" aria-label="Portfolio"><span aria-hidden="true">Portfolio</span></div><div class="htx" style="left:306px">MY DOCUMENTS</div><div class="htx" style="right:284px">JENESIS C. SALVATIERRA</div>`)},
profile(){
 const chips=['Computer Science Student','Software Development','Computer Hardware','Graphic Design','Photography &amp; Videography'].map(t=>`<span>${t}</span>`).join('');
 const ps=['I am a versatile and creative individual with interests and experience across different areas of technology, digital design, and multimedia production.','My background in Computer Science has allowed me to explore programming, software development, computer hardware, and technical problem-solving. Beyond technology, I also have a passion for creative work, including graphic design, publication layout, digital content creation, photography, and videography.','I enjoy working with different tools and exploring various creative and technical disciplines. From developing software and working with computer hardware to designing marketing materials, business cards, and visual publications, I appreciate the opportunity to turn ideas into something functional and visually engaging.','I believe that creativity and technical knowledge complement each other. I am always open to learning new skills, exploring different fields, collaborating with others, and taking on opportunities that allow me to grow both professionally and creatively.'].map(t=>`<p>${t}</p>`).join('');
 const raw=`<div class="pf"><aside><div class="pfp"><img src="profile.jpg" alt="Jenesis C. Salvatierra"></div><h2>Jenesis C. Salvatierra</h2></aside><div class="pfr" tabindex="0"><div class="chips">${chips}</div>${ps}</div></div>`;
 return wrap('profile',folders()+fl('about',{},{3:'Filming',6:'Photography'})+win(247,125,806,410,52,[],{raw}))},
about(){const L=['Hey! I’m <b>Jenesis C. Salvatierra</b>, a BSCS student','passionate about programming, software','development, and technology. I enjoy turning ideas','into functional applications, exploring new','technologies, and solving problems through code.','My goal is to continuously develop my technical','skills, expand my knowledge in computer science,','and create meaningful digital solutions through','creativity, innovation, and continuous learning.'];
 return wrap('about',folders()+fl('about',{},{3:'Filming',6:'Photography'})+win(267,135,746,365,52,[[296,213,`<img src="portrait.jpg" alt="Jenesis C. Salvatierra" style="width:222px;height:268px;display:block;box-shadow:0 1px 4px rgba(0,0,0,.25)">`,''],P(563,245,19.5,22,L)]))},
experience(){
 const a=win(205,87,423,266,51,[H(220,171,33,'GRAPHIC DESIGNER',221),P(220,221,17.5,22,['<b>Concept Media</b>']),P(214,247,17.5,21.7,['Developing visual concepts, shot lists, styling','recommendations, and creative strategies that','ensure every poster,brands,letter is aligned with','the client’s brand goals.'])],{z:1});
 const b=win(588,23,422,262,51,[H(603,107,33,'CREATIVE DIRECTION/PHOTOGRAPHY',401),P(603,158,17.5,22,['<b>Creative Lab</b>']),P(603,188,17.5,22,['Photographing brand launches, seasonal','promotions, and marketing campaigns with a','focus on storytelling, audience engagement, and','business growth.'])],{z:2});
 const c=win(537,303,421,235,51,[H(552,387,33,'PROGRAMMER',166),P(552,437,17.5,22,['<b>Fieldwork Creative</b>']),P(552,456,15.7,18.2,['Developing functional, efficient, and user-focused software','solutions through programming, designed to solve','problems, improve processes, and bring innovative ideas to','life across applications, websites, and digital platforms.'])],{z:3});
 return wrap('experience',folders()+fl('exp')+a+b+c)},
skills(){
 const s1=win(178,85,449,415,51,[H(198,163,40,'PROGRAMMING AND',272),H(198,207,40,'DEVELOPMENT',199),P(203,286,19.5,22.7,['C Programming','C++ Programming','Python Programming','Matplotlib and Data Visualization','Application Development'].map(bl),'padding-left:0'),[198,429,'<i class="rule" style="width:408px;left:0;top:0"></i>','']]);
 const s2=win(653,85,450,415,51,[H(674,163,40,'GRAPHICS AND DESIGN',306),P(674,228,18.5,22,['Perfect for brands needing a large variety of','content in a single shoot.']),P(693,293,19.5,22.4,['Canva','Graphic Design','Typography and Layout Design','Digital Presentation Design','Visual Content Creation'].map(bl)),[674,429,'<i class="rule" style="width:407px;left:0;top:0"></i>','']]);
 return wrap('skills',folders()+fl('skills')+logo('gg_icon.png',698,28,64,64)+s1+s2)},
projects(){
 const lk=PROJECTS.map(q=>`<a href="#/project/${q.id}">${q.title.split('| ')[1]}</a>`).join('');
 const raw=`<button class="vp" id="vp" aria-expanded="false" aria-controls="vpl" style="left:${640-341-85}px;top:${484-213}px">View Projects</button><div class="vpl" id="vpl" hidden style="left:30px;top:62px;width:538px;height:200px"><p>Select a project to open its page</p><div>${lk}</div></div>`;
 return wrap('projects',folders()+fl('projects',{0:'project/cafe',1:'project/typography',2:'project/digital',3:'project/digital',4:'project/cafe',5:'project/promo'})+logo('gg_icon.png',595,58,88,88,'project/brand')+win(341,213,598,300,50,[H(640,300,90,'PROJECT BOARD',510,1),PC(640,387,19,22,['Here’s a curated collection of my graphic design projects,','showcasing my creativity, visual storytelling, and design skills','through typography, branding, digital layouts, and creative visual','compositions.'])],{raw}))},
certifications(){
 const ar=d=>`<button class="arrow" data-d="${d}" style="left:${(d<0?165:1055)-119}px;top:${262-37}px" aria-label="${d<0?'Previous':'Next'} certificate"><svg viewBox="0 0 92 104"><path d="${d<0?'M2 52 L86 2 Q90 0 90 6 L74 52 L90 98 Q90 104 86 102 Z':'M90 52 L6 2 Q2 0 2 6 L18 52 L2 98 Q2 104 6 102 Z'}" stroke="#9e9e9e" stroke-width="3" stroke-linejoin="round"/></svg></button>`;
 const w=win(119,37,1051,475,80,[],{v:'--dw:14px;--dh:14px;--dl:39px;--dt:27px;--dgap:18.5px',raw:`${ar(-1)}${ar(1)}<div class="cv" id="cv" style="left:${250-119}px;top:${122-37}px;width:790px;height:378px"></div><div class="cnt" id="cnt"></div><button class="cs" id="cs">See all</button><div class="cg" id="cg"></div>`});
 return wrap('certifications',w)},
features(){
 const pol=(k,src,x,y,w,h)=>[x,y,`<button class="pol" data-k="${k}" aria-label="Open ${FEAT[k].t}"><img src="${src}.jpg" alt="${FEAT[k].t}" style="width:${w}px;height:${h}px"></button>`,''];
 const lb=(t,cx,cap,w)=>[cx-300,cap-3,`<span class="cond c" data-fit="${w}" style="font-size:19px;font-weight:700;letter-spacing:0">${t}</span>`,'width:600px;text-align:center'];
 const items=[H(409,218,40,'MY WORK HAS BEEN FEATURED ON',463),pol(0,'pol_game',301,269,97,116),pol(1,'pol_film',358,358,97,117),pol(2,'pol_web',593,285,97,117),pol(3,'pol_press',859,360,97,116),lb('GAMES',463,295,67),lb('FILMING',567,420,76),lb('COMPETITION',567,438,128),lb('TREND',757,366,64),lb('MEDIA',757,384,62),lb('MODERN',932,288,82),lb('PRESS',932,306,62),[164,484,'Click the pictures to see the images and watch the videos.','width:1000px;text-align:center;font-size:14px;line-height:18px;color:var(--muted)']];
 const raw=`<button class="fx" id="fx" hidden aria-label="Close preview">×</button><div class="fv" id="fv" hidden><div class="fh"><b id="ft"></b><span id="fa"></span></div><iframe id="ff" title="Preview" allowfullscreen></iframe><p class="fn">If the preview doesn’t load, use “Open in new tab”.</p></div>`;
 return wrap('features',folders()+win(284,138,761,375,51,items,{raw}))},
contact(){
 const J=['I am always open to connecting with fellow students,','developers, and technology enthusiasts. Feel free to','reach out for collaboration, professional opportunities,'];
 const jl=J.map((l,i)=>[270,220+i*37.7-19,l,'width:778px;text-align:justify;text-align-last:justify;font-size:28px;line-height:38px;white-space:normal']);
 const ic=(y,svg)=>[262,y-18,svg,'width:40px;height:36px;display:flex;align-items:center;justify-content:center'];
 const sv=p=>`<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round">${p}</svg>`;
 const gh='<svg viewBox="0 0 16 16" width="32" height="32" fill="none" stroke="currentColor" stroke-width=".7"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
 const ph='<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M6.6 10.800c1.400 2.800 3.800 5.100 6.600 6.600l2.200-2.200c.3-.3.7-.4 1-.2 1.100.4 2.300.6 3.600.6.600 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.600 21 3 13.400 3 4c0-.6.400-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .7-.2 1z"/></svg>';
 const rows=[[407,sv('<rect x="2" y="5" width="20" height="14"/><path d="M2 5l10 8 10-8M2 19l7-7M22 19l-7-7"/>'),`Email: <a href="mailto:salvatierrajenesis@gmail.com">salvatierrajenesis@gmail.com</a>`],[444,gh,`GitHub: <a href="https://jcsalvatierra.github.io" target="_blank" rel="noopener">https://jcsalvatierra.github.io</a>`],[482,ph,`Phone Number:<a href="tel:09563266848">09563266848</a>`]];
 const items=[H(269,162,56,'CONTACT ME',250),...jl,P(270,333-19+19,28,38,['or inquiries.'],'font-size:28px'),...rows.flatMap(([y,s,t])=>[ic(y,s),[314,y-19,t,'font-size:28.5px;line-height:38px']])];
 return wrap('contact',win(246,40,813,465,95,items,{green:'#/thanks',v:'--dw:38px;--dh:24px;--dl:39px;--dt:33px;--dgap:47px',cls:'oval'}))},
thanks(){const L=[['HAVE AN IDEA OR PROJECT IN MIND? LET’S',467],['CONNECT, COLLABORATE, AND BRING',415],['CREATIVE IDEAS TO LIFE THROUGH',380],['TECHNOLOGY, DESIGN, AND INNOVATION.',454]];
 const items=[PC(633,293,14.5,17,['Thank you for taking the time to explore my work. I look forward to bringing your','brand vision to life.']),...L.map(([t,w],i)=>H(633,324.5+i*36,38,t,w,1))];
 return wrap('thanks',folders()+fl('thanks',{},{})+logo('gg_vertical.png',100,120,92,92)+logo('gg_badge2.png',98,408,70,70)+win(341,213,598,267,50,items))}
};
/* ---- project detail ---- */
const slug=id=>PROJECTS.findIndex(p=>p.id===id);
function project(id){const n=PROJECTS.length;let i=Math.max(0,slug(id)),k=0;const p=PROJECTS[i];
 const url=u=>`<a href="${u}" target="_blank" rel="noopener">${u}</a>`;
 const nav=d=>`#/project/${PROJECTS[(i+d+n)%n].id}`;
 const th=p.imgs.map((s,j)=>`<button class="th" data-j="${j}" aria-label="Show image ${j+1}"><img src="${s}" alt=""></button>`).join('');
 const mk=()=>{const a=p.imgs[k],b=p.imgs.length>1?p.imgs[(k+1)%p.imgs.length]:null;
  $('.pair',view).innerHTML=`<div class="pi"><img src="${a}" alt="${p.title} image ${k+1}"><a class="nx p" href="${nav(-1)}">‹ Prev</a></div>${b?`<div class="pi"><img src="${b}" alt="${p.title} image ${(k+1)%p.imgs.length+1}"><a class="nx n" href="${nav(1)}">Next ›</a></div>`:''}`;
  view.querySelectorAll('.th').forEach((t,j)=>t.setAttribute('aria-current',j===k))};
 view.innerHTML=`<div class="pd"><aside class="side"><div class="sbar"><i class="d r" style="--i:0"></i><i class="d o" style="--i:1"></i><i class="d g" style="--i:2"></i></div><div class="thumbs">${th}</div></aside>
 <div class="main"><header class="hdr"><a class="bk" href="#/projects" aria-label="Back to Project Board"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4l-8 8 8 8"/></svg></a><div class="pill">${p.title}</div><button class="mn" aria-label="All projects" aria-expanded="false"><svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button></header>
 <nav class="menu" hidden>${PROJECTS.map(q=>`<a href="#/project/${q.id}"${q.id===p.id?' aria-current="true"':''}>${q.title.split('| ')[1]}</a>`).join('')}</nav>
 <div class="body"><div class="pair"></div><div class="txt"><div>${p.desc||''}</div><div>${p.links.map(([l,u])=>`<p>${l}<br>${url(u)}</p>`).join('')}</div></div></div></div></div>`;
 mk();
 view.querySelectorAll('.th').forEach(t=>t.onclick=()=>{k=+t.dataset.j;mk()});
 const mn=$('.mn',view),mu=$('.menu',view);mn.onclick=()=>{mu.hidden=!mu.hidden;mn.setAttribute('aria-expanded',!mu.hidden)};
}
/* ---- router ---- */
function fitText(){const gg=document.documentElement.dataset.theme==='gg';view.querySelectorAll('[data-fit]').forEach(e=>{e.style.transform='none';const fs=e.dataset.fs||(e.dataset.fs=parseFloat(e.style.fontSize));e.style.fontSize=fs+'px';const w=e.offsetWidth;if(!w)return;const r=e.dataset.fit/w;if(gg)e.style.fontSize=Math.min(fs,fs*r)+'px';else e.style.transform=`scaleX(${r})`})}
const emb=u=>{let m;if(m=u.match(/drive\.google\.com\/file\/d\/([^/?]+)/))return `https://drive.google.com/file/d/${m[1]}/preview`;if(m=u.match(/drive\.google\.com\/drive\/folders\/([^?/]+)/))return `https://drive.google.com/embeddedfolderview?id=${m[1]}#grid`;if(/facebook\.com/.test(u))return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(u)}&show_text=false&width=734`;return u};
function fv(){const o=$('#fv'),x=$('#fx'),f=$('#ff');const close=()=>{o.hidden=x.hidden=true;f.src='about:blank'};
 const link=(h,t)=>`<a class="fb" href="${h}" target="_blank" rel="noopener">${t}</a>`;
 view.querySelectorAll('.pol').forEach(b=>b.onclick=()=>{const d=FEAT[b.dataset.k];$('#ft').textContent=d.t;$('#fa').innerHTML=link(d.url,'Open in new tab ↗')+(d.extra||[]).map(([t,h])=>link(h,t+' ↗')).join('');f.src=emb(d.url);o.hidden=x.hidden=false;x.focus()});
 x.onclick=close;addEventListener('keydown',e=>{if(e.key==='Escape'&&cur==='features'&&!o.hidden)close()})}
function vp(){const b=$('#vp'),l=$('#vpl');const t=o=>{l.hidden=!o;b.setAttribute('aria-expanded',o);b.textContent=o?'Close':'View Projects'};b.onclick=()=>t(l.hidden);addEventListener('keydown',e=>{if(e.key==='Escape'&&cur==='projects')t(false)})}
function certs(){let c=0;const cv=$('#cv');if(!cv)return;const w=$('.win',view),g=$('#cg'),sb=$('#cs');
 const show=()=>{cv.innerHTML=CERTS.length?`<img src="${CERTS[c]}" alt="Certificate ${c+1} of ${CERTS.length}">`:'';$('#cnt').textContent=CERTS.length?`${c+1} / ${CERTS.length}`:''};
 const grid=o=>{w.classList.toggle('gm',o);sb.textContent=o?'‹ Back':'See all';sb.setAttribute('aria-pressed',o)};
 if(!CERTS.length)sb.hidden=true;
 g.innerHTML=CERTS.map((s,i)=>`<button class="cgi" data-i="${i}" aria-label="Open certificate ${i+1}"><i>${i+1}</i><img loading="lazy" src="${s.replace('cert-','t-')}" alt=""></button>`).join('');
 sb.onclick=()=>grid(!w.classList.contains('gm'));
 g.onclick=e=>{const b=e.target.closest('.cgi');if(b){c=+b.dataset.i;show();grid(false)}};
 view.querySelectorAll('.arrow').forEach(b=>b.onclick=()=>{if(!CERTS.length)return;c=(c+ +b.dataset.d+CERTS.length)%CERTS.length;show()});
 addEventListener('keydown',e=>{if(cur!=='certifications'||!CERTS.length||!document.body.contains(cv))return;if(w.classList.contains('gm')){if(e.key==='Escape')grid(false);return}if(e.key==='ArrowRight')c=(c+1)%CERTS.length;else if(e.key==='ArrowLeft')c=(c-1+CERTS.length)%CERTS.length;else return;show()});show()}
function route(){const h=(location.hash.replace(/^#\/?/,'')||'home').split('/');let pg=h[0];
 if(pg==='project'){cur='project';project(h[1]||PROJECTS[0].id)}
 else{if(!R[pg])pg='home';cur=pg;view.innerHTML=R[pg]();fitText();if(pg==='certifications')certs();if(pg==='projects')vp();if(pg==='features')fv()}
 view.classList.remove('in');void view.offsetWidth;view.classList.add('in');document.body.classList.toggle('on-home',cur==='home');fit();document.title=({home:'Portfolio',project:'Projects'}[pg]||pg[0].toUpperCase()+pg.slice(1))+' | Jenesis C. Salvatierra'}
addEventListener('hashchange',route);addEventListener('resize',fit);
(document.fonts&&document.fonts.ready||Promise.resolve()).then(()=>{fitText()});
const TH={mac:1,dark:1,gg:1},html=document.documentElement,tm=$('#thememenu'),tb=$('#themebtn');
function setTheme(t){if(!TH[t])t='mac';html.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}tm.querySelectorAll('button').forEach(b=>b.setAttribute('aria-checked',b.dataset.t===t));requestAnimationFrame(fitText)}
tb.onclick=e=>{e.stopPropagation();tm.hidden=!tm.hidden;tb.setAttribute('aria-expanded',!tm.hidden)};
tm.querySelectorAll('button').forEach(b=>b.onclick=()=>{setTheme(b.dataset.t);tm.hidden=true;tb.setAttribute('aria-expanded',false)});
document.addEventListener('click',e=>{if(!tm.hidden&&!tm.contains(e.target)&&!tb.contains(e.target)){tm.hidden=true;tb.setAttribute('aria-expanded',false)}});
addEventListener('keydown',e=>{if(e.key==='Escape')tm.hidden=true});
const BF=(c1,c2,w,x,y,d)=>`<svg class="bf" viewBox="0 0 40 30" width="${w}" style="left:${x}px;top:${y}px;animation-delay:${d}s" aria-hidden="true"><path d="M20 15C16 4 4 2 3 9c-1 7 8 9 17 6z" fill="${c1}"/><path d="M20 15C24 4 36 2 37 9c1 7-8 9-17 6z" fill="${c1}"/><path d="M20 15C14 18 8 26 12 28c5 1 8-7 8-13z" fill="${c2}"/><path d="M20 15C26 18 32 26 28 28c-5 1-8-7-8-13z" fill="${c2}"/><path d="M20 8v15" stroke="#7b6bb0" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const SP=([x,y,s,d])=>`<svg class="sp" viewBox="0 0 20 20" width="${s}" style="left:${x}px;top:${y}px;animation-delay:${d}s" aria-hidden="true"><path d="M10 0l2.2 7.8L20 10l-7.8 2.2L10 20l-2.2-7.8L0 10l7.8-2.2z" fill="#E2BE47"/></svg>`;
$('#decor').innerHTML=[BF('#E2BE47','#CAA66B',44,70,262,0),BF('#9D8FBC','#C1B9D5',36,1170,90,1.2),BF('#E2BE47','#CAA66B',32,1130,640,2.4),BF('#90A8FD','#C1B9D5',38,236,640,.6),BF('#E2BE47','#CAA66B',28,960,34,3)].join('')+[[40,60,18,0],[430,40,14,1],[1230,330,16,.5],[640,30,12,2],[1000,690,14,1.5],[300,690,12,2.5],[60,520,14,.8],[1210,520,12,1.8]].map(SP).join('');
let saved;try{saved=localStorage.getItem('theme')}catch(e){}
setTheme(saved);
route();
document.addEventListener('click',e=>{const pop=$('#dpop');if(!pop)return;const n=e.target.closest('[data-choose]');
 if(n){e.preventDefault();pop.hidden=!pop.hidden;$('.dock').classList.toggle('pop',!pop.hidden);return}
 if(!pop.hidden&&!e.target.closest('#dpop')){pop.hidden=true;$('.dock').classList.remove('pop')}});
const gd=$('#guide'),gb=$('#gbtn'),gx=$('.gx');
const rm=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
const closeG=()=>{if(gd.hidden||gd.classList.contains('out'))return;gd.classList.add('out');setTimeout(()=>{gd.hidden=true;gd.classList.remove('out');gb.hidden=false;gb.focus()},rm()?0:380)};
gb.onclick=()=>{gb.hidden=true;gd.hidden=false;gx.focus()};
gx.onclick=closeG;gd.onclick=e=>{if(e.target===gd)closeG()};
addEventListener('keydown',e=>{if(e.key==='Escape'){closeG();const pop=$('#dpop');if(pop&&!pop.hidden){pop.hidden=true;$('.dock').classList.remove('pop')}}});
gx.focus();
})();