/* ===== CONTENT: edit here ===== */
const DRIVE_MAG='https://drive.google.com/drive/folders/1hevcfi5plGfmvFS1M2N-0t9EmI5z0eui?usp=sharing';
const PROJECTS=[
 {id:'brand',title:'JENESIS SALVATIERRA | BRAND DESIGN',
  imgs:['gg_vertical.png','gg_badge2.png','gg_icon.png','gg_badge1.png','gg_stacked.png','gg_horizontal.png'],
  desc:'This project focused on creating a visual identity that represents growth, innovation, and personal development. Through thoughtful typography, symbolic elements, and a harmonious blend of colors, I developed a logo design that reflects the brand’s identity, purpose, and vision.',
  links:[['Link:','https://drive.google.com/drive/folders/110k0JcF4s0ltAf2TY5PHDHcQq-cocuIr?usp=sharing']]},
 {id:'cafe',title:'JENESIS SALVATIERRA | CAFEADVERTISING',
  imgs:['cafe_1.jpg','cafe_2.jpg'],
  desc:'This project focused on creating a visual identity that represents the brand of the inspired existing cafe.',
  links:[['Link:','https://drive.google.com/drive/folders/11yJmcZgQQmhHHDNd_KtY6Fo3bNtJzgdA?usp=sharing']]},
 {id:'digital',title:'JENESIS SALVATIERRA | DIGITALMARKETING',
  imgs:['bh_social.png','bh_icon.png','bh_site_tall.png','bh_site_overview.png','bh_hero.png','bh_drinks.png','bh_location.png','bh_contact.png','bh_header.png','bh_logo_banner.png'],
  desc:'Brew Haven needed a cohesive digital presence to showcase its brand and seasonal offerings. I focused on creating engaging promotional graphics, website layouts, and visually appealing content that highlight its products, strengthen brand identity, and attract potential customers.',
  links:[['Link:','https://drive.google.com/drive/folders/1RWp7fdfvfTPScU9VLmB8XLhF_9xyNY8g?usp=sharing'],['Landing Page:','https://jcsalvatierra.github.io/brew-haven-site/']]},
 {id:'magazine',title:'JENESIS SALVATIERRA | MAGAZINEME',
  imgs:['mag_cover.png','mag_whothat.png','mag_achievements.png','mag_interests.png','mag_vogue.png'],
  desc:'A creative magazine project showcasing my personality, interests, and creativity through editorial layouts and visual storytelling. Inspired by modern fashion magazines, I combined photography, typography, and carefully arranged compositions to create a personalized publication that reflects my identity, passions, and creative perspective.',
  links:[['Link:',DRIVE_MAG]]},
 {id:'typography',title:'JENESIS SALVATIERRA | TYPOGRAPHYPOSTER',
  imgs:['himig_poster.png','himig_poster.png'],
  desc:'A typography poster project featuring Himig Café, a fictional coffee shop brand that combines the warmth of coffee with the creativity of music. Through expressive typography, carefully selected fonts, and music-inspired visual elements, I created a cohesive design that communicates the café’s identity, personality, and welcoming atmosphere.',
  links:[['Link:','https://drive.google.com/drive/folders/1D8NYJD_3j7TyCHnhHP1Z5YcBWqK4lJzl?usp=sharing']]},
 {id:'promo',title:'JENESIS SALVATIERRA | GRAPHIC DESIGNER PROMO VIDEO',
  imgs:['vid_1.png','vid_jcs2.png','vid_2.png','vid_3.png','vid_jcs1.png','vid_jcs3.png','vid_typo.png','vid_ads.png','vid_social.png'],
  desc:'A promotional video project showcasing my graphic design skills and creative approach to visual communication. Through engaging visuals, cohesive branding, typography, and carefully crafted layouts, I developed promotional content designed to highlight creative services, capture audience attention, and deliver a clear and memorable brand message.',
  links:[['Link:','https://drive.google.com/file/d/1UyASqZILSDi4vWIMcpDHRC5ayen3Ad-L/view?usp=sharing']]},
 {id:'uiux',title:'JENESIS SALVATIERRA | UIUX MIDTERM ACT',
  imgs:['ux_1.png','ux_2.png','ux_3.png'],
  desc:'A UI/UX design project focused on creating a user-friendly food ordering experience through an interactive website prototype. Using Canva, I designed connected screens featuring restaurant menus, product selection, a shopping cart, order summaries, and checkout. The design emphasizes intuitive navigation, organized layouts, and a seamless ordering process to provide users with a convenient and accessible experience.',
  links:[['Link:','https://drive.google.com/file/d/1Ox0u1liAdwLBHJvxtUgOl9qWb0va5HZe/view?usp=sharing']]}
];
/* Features page: what opens (inside the window) when each picture is clicked. Order: Codemon, Filming Competition, Brew Haven, Modern Press */
const FEAT=[
 {t:'Codemon',url:'https://drive.google.com/file/d/1Jev0FfGnBXrMUwvMePTAFfjU0MQdfhpV/view?usp=sharing'},
 {t:'Filming Competition',url:'https://www.facebook.com/share/v/1Cb525ash1/'},
 {t:'Brew Haven Café',url:'https://jcsalvatierra.github.io/brew-haven-site/',extra:[['Drive file','https://drive.google.com/file/d/1WFjccGe-VEwWl5ZmekstXPh4rtm9NPAZ/view?usp=sharing'],['Drive folder','https://drive.google.com/drive/folders/1RWp7fdfvfTPScU9VLmB8XLhF_9xyNY8g?usp=sharing']]},
 {t:'Modern Press',url:DRIVE_MAG}
];
/* Certificates, shown in this order. Add/remove paths here. */
const CERTS=['cert-01.jpg','cert-02.jpg','cert-03.jpg','cert-04.jpg','cert-05.jpg','cert-06.jpg','cert-07.jpg','cert-08.jpg','cert-09.jpg','cert-10.jpg','cert-11.jpg','cert-12.jpg','cert-13.jpg','cert-14.jpg','cert-15.jpg','cert-16.jpg','cert-17.jpg','cert-18.jpg','cert-19.jpg','cert-20.jpg','cert-21.jpg','cert-22.jpg','cert-23.jpg','cert-24.jpg'];
const FL={"about": [{"src": "f_about_0.jpg", "x": 100, "y": 118, "w": 100, "h": 100}, {"src": "f_about_1.jpg", "x": 590, "y": 57, "w": 88, "h": 78}, {"src": "f_about_2.jpg", "x": 678, "y": 27, "w": 100, "h": 100}, {"src": "f_about_3.jpg", "x": 1023, "y": 173, "w": 100, "h": 100}, {"src": "f_about_4.jpg", "x": 83, "y": 392, "w": 100, "h": 100}, {"src": "f_about_5.jpg", "x": 171, "y": 470, "w": 100, "h": 100}, {"src": "f_about_6.jpg", "x": 1122, "y": 442, "w": 100, "h": 100}], "exp": [{"src": "f_exp_0.jpg", "x": 100, "y": 118, "w": 100, "h": 100}, {"src": "f_exp_1.jpg", "x": 1023, "y": 173, "w": 100, "h": 100}, {"src": "f_exp_2.jpg", "x": 83, "y": 392, "w": 100, "h": 100}, {"src": "f_exp_3.jpg", "x": 171, "y": 470, "w": 100, "h": 100}, {"src": "f_exp_4.jpg", "x": 1122, "y": 442, "w": 100, "h": 100}], "skills": [{"src": "f_skills_0.jpg", "x": 100, "y": 118, "w": 100, "h": 100}, {"src": "f_skills_1.jpg", "x": 590, "y": 57, "w": 100, "h": 103}, {"src": "f_skills_2.jpg", "x": 1023, "y": 173, "w": 100, "h": 100}, {"src": "f_skills_3.jpg", "x": 83, "y": 392, "w": 100, "h": 100}, {"src": "f_skills_4.jpg", "x": 171, "y": 470, "w": 100, "h": 100}, {"src": "f_skills_5.jpg", "x": 1122, "y": 442, "w": 100, "h": 100}], "projects": [{"src": "f_projects_0.jpg", "x": 100, "y": 118, "w": 100, "h": 100}, {"src": "f_projects_1.jpg", "x": 678, "y": 27, "w": 100, "h": 100}, {"src": "f_projects_2.jpg", "x": 1023, "y": 173, "w": 100, "h": 100}, {"src": "f_projects_3.jpg", "x": 83, "y": 392, "w": 100, "h": 100}, {"src": "f_projects_4.jpg", "x": 171, "y": 470, "w": 100, "h": 100}, {"src": "f_projects_5.jpg", "x": 1122, "y": 442, "w": 100, "h": 100}], "thanks": [{"src": "f_thanks_0.jpg", "x": 1023, "y": 173, "w": 100, "h": 100}, {"src": "f_thanks_1.jpg", "x": 590, "y": 57, "w": 88, "h": 100}, {"src": "f_thanks_2.jpg", "x": 678, "y": 27, "w": 100, "h": 100}, {"src": "f_thanks_3.jpg", "x": 171, "y": 470, "w": 100, "h": 100}, {"src": "f_thanks_4.jpg", "x": 1122, "y": 442, "w": 100, "h": 100}], "home": [{"src": "f_home_0.jpg", "x": 950, "y": 50, "w": 100, "h": 100}, {"src": "f_home_1.jpg", "x": 1158, "y": 170, "w": 100, "h": 100}, {"src": "f_home_2.jpg", "x": 1045, "y": 350, "w": 100, "h": 100}, {"src": "f_home_3.jpg", "x": 1157, "y": 527, "w": 100, "h": 100}]};
