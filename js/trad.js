(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const html=document.documentElement,body=document.body;
const rm=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
const name=t=>t.split('| ')[1]||t;
/* ---------- theme ---------- */
const tb=$('#themebtn'),tm=$('#thememenu');
function setTheme(t){if(t!=='mac'&&t!=='dark')t='gg';html.dataset.theme=t;try{localStorage.setItem('tradTheme',t)}catch(e){}$$('button',tm).forEach(b=>b.setAttribute('aria-checked',b.dataset.t===t))}
const closeTm=()=>{tm.hidden=true;tb.setAttribute('aria-expanded',false)};
tb.onclick=e=>{e.stopPropagation();tm.hidden=!tm.hidden;tb.setAttribute('aria-expanded',!tm.hidden)};
$$('button',tm).forEach(b=>b.onclick=()=>{setTheme(b.dataset.t);closeTm()});
document.addEventListener('click',e=>{if(!tm.hidden&&!tm.contains(e.target)&&!tb.contains(e.target))closeTm()});
setTheme(html.dataset.theme);
/* ---------- decor (mood board) ---------- */
const BF=(a,b,w,x,y,d)=>`<svg class="bf" viewBox="0 0 40 30" width="${w}" style="left:${x}%;top:${y}%;animation-delay:${d}s"><path d="M20 15C16 4 4 2 3 9c-1 7 8 9 17 6z" fill="${a}"/><path d="M20 15C24 4 36 2 37 9c1 7-8 9-17 6z" fill="${a}"/><path d="M20 15C14 18 8 26 12 28c5 1 8-7 8-13z" fill="${b}"/><path d="M20 15C26 18 32 26 28 28c-5 1-8-7-8-13z" fill="${b}"/><path d="M20 8v15" stroke="#7b6bb0" stroke-width="1.2" stroke-linecap="round"/></svg>`;
const SP=([x,y,s,d])=>`<svg class="sp" viewBox="0 0 20 20" width="${s}" style="left:${x}%;top:${y}%;animation-delay:${d}s"><path d="M10 0l2.2 7.8L20 10l-7.8 2.2L10 20l-2.2-7.8L0 10l7.8-2.2z" fill="#E2BE47"/></svg>`;
$('#decor').innerHTML=[BF('#E2BE47','#CAA66B',44,5,30,0),BF('#9D8FBC','#C1B9D5',36,92,18,1.2),BF('#E2BE47','#CAA66B',32,88,70,2.4),BF('#90A8FD','#C1B9D5',38,12,78,.6),BF('#E2BE47','#CAA66B',28,60,8,3)].join('')+[[3,10,18,0],[30,6,14,1],[96,45,16,.5],[50,92,12,2],[78,90,14,1.5],[20,50,12,2.5],[6,62,14,.8],[70,30,12,1.8]].map(SP).join('');
/* ---------- nav ---------- */
const nav=$('#nav'),bg=$('#burger');
bg.onclick=()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
$$('#links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');bg.setAttribute('aria-expanded',false)}));
const secs=['home','about','skills','experience','projects','certifications','features','contact'].map(id=>$('#'+id));
if('IntersectionObserver' in window){
 const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#links a').forEach(a=>a.setAttribute('aria-current',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
 secs.forEach(s=>spy.observe(s));
 const rv=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rv.unobserve(e.target)}}),{threshold:.12});
 $$('.rv').forEach(el=>rv.observe(el));
}else $$('.rv').forEach(el=>el.classList.add('in'));
/* ---------- overlay helpers ---------- */
let lastFocus=null;
const anyOpen=()=>$$('.ov').some(o=>!o.hidden);
function openOv(o,focus){lastFocus=document.activeElement;o.hidden=false;body.classList.add('lock');(focus||$('.x',o)).focus()}
function closeOv(o){if(o.hidden)return;o.hidden=true;if(!anyOpen())body.classList.remove('lock');if(lastFocus&&lastFocus.focus&&o.id!=='guide')try{lastFocus.focus()}catch(e){}}
/* ---------- projects ---------- */
const grid=$('#pgrid');
grid.innerHTML=PROJECTS.map(p=>{const d=p.desc||'';return `<a class="win pc rv" href="#project/${p.id}"><div class="wb"><i></i><i></i><i></i></div><div class="pimg"><img loading="lazy" src="${p.imgs[0]}" alt=""></div><div class="pcb"><span class="pt">${name(p.title)}</span><span class="pe">${d.length>118?d.slice(0,115).trim()+'…':d}</span><span class="go">View project →</span></div></a>`}).join('');
$$('.rv',grid).forEach(el=>el.classList.add('in'));
const pv=$('#pv');let pi=0,ii=0;
function renderP(){const p=PROJECTS[pi],n=PROJECTS.length;
 $('#pvt').textContent=p.title;
 $('#pvi').src=p.imgs[ii];$('#pvi').alt=name(p.title)+' image '+(ii+1);
 $('#pvth').innerHTML=p.imgs.map((s,j)=>`<button data-j="${j}" aria-label="Show image ${j+1}" aria-current="${j===ii}"><img src="${s}" alt=""></button>`).join('');
 $('#pvd').textContent=p.desc||'';
 $('#pvk').innerHTML=p.links.map(([l,u])=>`<a href="${u}" target="_blank" rel="noopener"><b>${l.replace(':','')}</b>${u}</a>`).join('');
 $('#pprev').href='#project/'+PROJECTS[(pi-1+n)%n].id;$('#pnext').href='#project/'+PROJECTS[(pi+1)%n].id;
 $$('#pip,#pin').forEach(b=>b.hidden=p.imgs.length<2)}
const step=d=>{const n=PROJECTS[pi].imgs.length;ii=(ii+d+n)%n;renderP()};
$('#pip').onclick=()=>step(-1);$('#pin').onclick=()=>step(1);
$('#pvth').onclick=e=>{const b=e.target.closest('button');if(b){ii=+b.dataset.j;renderP()}};
$('#pvx').onclick=()=>{location.hash='#projects'};
pv.addEventListener('click',e=>{if(e.target===pv)location.hash='#projects'});
function route(){const m=location.hash.match(/^#project\/(.+)$/);
 if(m){const i=PROJECTS.findIndex(p=>p.id===m[1]);if(i<0){location.hash='#projects';return}
  const was=pv.hidden;pi=i;ii=0;renderP();if(was)openOv(pv)}
 else closeOv(pv)}
addEventListener('hashchange',route);
/* ---------- certificates ---------- */
const cert=$('#cert'),cimg=$('#cimg'),cg=$('#cgrid'),see=$('#cseeall');let ci=0;
const showC=()=>{cimg.innerHTML=CERTS.length?`<img src="${CERTS[ci]}" alt="Certificate ${ci+1} of ${CERTS.length}">`:'';$('#ccnt').textContent=CERTS.length?`${ci+1} / ${CERTS.length}`:''};
const gridMode=o=>{cert.classList.toggle('gm',o);see.textContent=o?'‹ Back':'See all'};
if(!CERTS.length){see.hidden=true;$('.cview',cert).hidden=true}
cg.innerHTML=CERTS.map((s,i)=>`<button class="cgi" data-i="${i}" aria-label="Open certificate ${i+1}"><i>${i+1}</i><img loading="lazy" src="${s.replace('cert-','t-')}" alt=""></button>`).join('');
$('#cprev').onclick=()=>{if(CERTS.length){ci=(ci-1+CERTS.length)%CERTS.length;showC()}};
$('#cnext').onclick=()=>{if(CERTS.length){ci=(ci+1)%CERTS.length;showC()}};
see.onclick=()=>gridMode(!cert.classList.contains('gm'));
cg.onclick=e=>{const b=e.target.closest('.cgi');if(b){ci=+b.dataset.i;showC();gridMode(false)}};
showC();
cert.addEventListener('keydown',e=>{if(!CERTS.length||cert.classList.contains('gm'))return;if(e.key==='ArrowRight')$('#cnext').click();if(e.key==='ArrowLeft')$('#cprev').click()});
/* ---------- features ---------- */
const FIMG=['pol_game.jpg','pol_film.jpg','pol_web.jpg','pol_press.jpg'],FLAB=['Games','Filming Competition','Trend Media','Modern Press'];
$('#fgrid').innerHTML=FEAT.map((f,k)=>`<button class="fc" data-k="${k}" aria-label="Open ${f.t}"><img src="${FIMG[k]}" alt="${f.t}"><span>${FLAB[k]}</span></button>`).join('');
const emb=u=>{let m;if(m=u.match(/drive\.google\.com\/file\/d\/([^/?]+)/))return `https://drive.google.com/file/d/${m[1]}/preview`;if(m=u.match(/drive\.google\.com\/drive\/folders\/([^?/]+)/))return `https://drive.google.com/embeddedfolderview?id=${m[1]}#grid`;if(/facebook\.com/.test(u))return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(u)}&show_text=false&width=734`;return u};
const fv=$('#fv'),ff=$('#ff');
const closeF=()=>{closeOv(fv);ff.src='about:blank'};
$('#fgrid').onclick=e=>{const b=e.target.closest('.fc');if(!b)return;const d=FEAT[b.dataset.k];$('#ft').textContent=d.t;
 const l=(h,t)=>`<a class="fb" href="${h}" target="_blank" rel="noopener">${t}</a>`;
 $('#fa').innerHTML=l(d.url,'Open in new tab ↗')+(d.extra||[]).map(([t,h])=>l(h,t+' ↗')).join('');ff.src=emb(d.url);openOv(fv)};
$('#fx').onclick=closeF;fv.addEventListener('click',e=>{if(e.target===fv)closeF()});
/* ---------- instructions ---------- */
const gd=$('#guide'),gb=$('#gbtn');
const closeG=()=>{if(gd.hidden||gd.classList.contains('out'))return;gd.classList.add('out');setTimeout(()=>{gd.hidden=true;gd.classList.remove('out');if(!anyOpen())body.classList.remove('lock');gb.hidden=false;gb.focus()},rm()?0:420)};
gb.onclick=()=>{gb.hidden=true;gd.hidden=false;body.classList.add('lock');$('#gx').focus()};
$('#gx').onclick=closeG;gd.addEventListener('click',e=>{if(e.target===gd)closeG()});
/* ---------- keys ---------- */
addEventListener('keydown',e=>{
 if(e.key==='Escape'){closeTm();if(!gd.hidden)closeG();else if(!fv.hidden)closeF();else if(!pv.hidden)location.hash='#projects'}
 else if(!pv.hidden&&fv.hidden&&gd.hidden){if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)}});
/* ---------- start ---------- */
body.classList.add('lock');$('#gx').focus();
route();
})();
