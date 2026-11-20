'use strict';
const messages = {
  zh: {
    skip:'跳转到正文',brand:'学术主页',navAbout:'关于',navResearch:'研究',navPapers:'论文',navJourney:'经历',navLabel:'主导航',menuLabel:'切换导航',
    name:'朱骋凯<span class="name-dot">.</span>',otherName:'Chengkai Zhu',role:'博士研究生 · 复旦大学',heroIntro:'探索 2.5D 芯粒系统的<br>电源网络优化与物理设计。',viewWork:'查看研究成果',metaLocation:'中国 · 上海',portraitAlt:'朱骋凯在 ICCAD 2026 会议现场',photoCaption:'会议现场',
    focusLabel:'研究关键词',tag1:'2.5D 芯粒系统',tag2:'电源网络优化',tag3:'物理设计',aboutTitle:'你好，我是骋凯。',
    aboutBody:'我目前是复旦大学的博士研究生，自 2025 年秋季加入 CODA lab。此前，我在南京邮电大学获得学士学位。',
    aboutDetail:'我的研究围绕 2.5D 芯粒系统展开，关注电源网络优化与物理设计。目前的工作包括电源网络几何与 TSV 布局的联合优化，以及大规模芯粒系统的分析式布局。',labProfile:'在 CODA lab 了解更多',newsTitle:'近期动态',
    news1:'CNE-PDN 获华大九天 PyAether 生态活动<strong>卓越成果奖</strong>。',news2:'CNE-PDN 获 <strong>ICCAD 2026</strong> 录用。',news3:'加入复旦大学 <strong>CODA lab</strong>，开启博士阶段的研究。',
    researchTitle:'从芯粒到系统。',researchNote:'以优化方法，连接电路与系统设计。',r1Title:'2.5D 芯粒系统',r1Body:'面向先进封装中的芯粒集成，研究系统级物理设计问题。',r2Title:'电源网络优化',r2Body:'联合优化 PDN 几何与 TSV 布局，关注动态压降与供电性能。',r3Title:'分析式物理设计',r3Body:'探索超大规模、多光罩芯粒系统的分析式布局方法。',
    papersTitle:'研究成果',filterAll:'全部',filterConference:'会议',filterJournal:'期刊',filterLabel:'筛选论文',accepted:'已录用',firstAuthor:'第一作者',journalPaper:'期刊论文',cite:'引用',paperLink:'论文',corresponding:'† 通讯作者。论文题名保留英文原文。',
    educationTitle:'求学经历',eduDate:'2025 — 至今',fudan:'复旦大学',degree:'博士研究生',eduNote:'CODA lab',undergraduate:'本科阶段',njupt:'南京邮电大学',bachelor:'学士学位',honorsTitle:'荣誉与奖励',awardTitle:'卓越成果奖',awardProgram:'华大九天 PyAether 生态活动',awardDetails:'查看获奖信息',
    electronicsPrize:'国家级一等奖',electronicsContest:'2023 年全国大学生电子设计竞赛（TI 杯）',embeddedPrize:'国家级三等奖',embeddedContest:'2023 年全国大学生嵌入式芯片设计与应用大赛',awardTeammates:'与徐秋旸、邹学亮共同获得',meritStudent:'江苏省三好学生',
    contactTitle:'交流，让想法更进一步。',contactBody:'欢迎围绕芯粒系统、电源网络与物理设计交流。',labPage:'课题组主页',footerName:'朱骋凯',backTop:'回到顶部',citationTitle:'引用此论文',citationHint:'BibTeX · 按已公布的书目信息整理',copyCitation:'复制引用',copied:'已复制',copyFailed:'请选中文本手动复制',closeLabel:'关闭',
    description:'朱骋凯，复旦大学 CODA lab 博士研究生。研究 2.5D 芯粒系统的电源网络优化与物理设计。',title:'朱骋凯 Chengkai Zhu · 学术主页'
  },
  en: {
    skip:'Skip to content',brand:'ACADEMIC PORTFOLIO',navAbout:'About',navResearch:'Research',navPapers:'Publications',navJourney:'Journey',navLabel:'Main navigation',menuLabel:'Toggle navigation',
    name:'Chengkai<br>Zhu<span class="name-dot">.</span>',otherName:'',role:'Doctoral Student · Fudan University',heroIntro:'Exploring power delivery and physical design for 2.5D chiplet systems.',viewWork:'Explore my research',metaLocation:'Shanghai, China',portraitAlt:'Chengkai Zhu at ICCAD 2026',photoCaption:'At the conference',
    focusLabel:'RESEARCH FOCUS',tag1:'2.5D Chiplet Systems',tag2:'Power Delivery Networks',tag3:'Physical Design',aboutTitle:'Hi, I’m Chengkai.',
    aboutBody:'I am a doctoral student at Fudan University. I joined CODA lab in Fall 2025. Previously, I received my bachelor’s degree from Nanjing University of Posts and Telecommunications.',
    aboutDetail:'My research focuses on power-delivery-network optimization and physical design for 2.5D chiplet systems. My work includes joint optimization of PDN geometry and TSV layout, as well as analytical placement for large-scale chiplet systems.',labProfile:'More at CODA lab',newsTitle:'Latest updates',
    news1:'CNE-PDN received the <strong>Outstanding Achievement Award</strong> in Empyrean’s PyAether Ecosystem Program.',news2:'CNE-PDN was accepted to <strong>ICCAD 2026</strong>.',news3:'Joined <strong>CODA lab</strong> at Fudan University as a doctoral student.',
    researchTitle:'From chiplets to systems.',researchNote:'Connecting circuits and systems through optimization.',r1Title:'2.5D Chiplet Systems',r1Body:'System-level physical design for chiplet integration in advanced packaging.',r2Title:'Power Delivery Networks',r2Body:'Co-optimizing PDN geometry and TSV layouts, with a focus on dynamic voltage drop and power delivery.',r3Title:'Analytical Physical Design',r3Body:'Analytical placement methods for ultra-large-scale, multi-reticle chiplet systems.',
    papersTitle:'Selected work',filterAll:'All',filterConference:'Conference',filterJournal:'Journal',filterLabel:'Filter publications',accepted:'Accepted',firstAuthor:'First author',journalPaper:'Journal article',cite:'Cite',paperLink:'Paper',corresponding:'† Corresponding authors.',
    educationTitle:'Academic journey',eduDate:'2025 — Present',fudan:'Fudan University',degree:'Doctoral student',eduNote:'CODA lab',undergraduate:'Undergraduate studies',njupt:'Nanjing University of Posts and Telecommunications',bachelor:'Bachelor’s degree',honorsTitle:'Honors & awards',awardTitle:'Outstanding Achievement Award',awardProgram:'Empyrean’s PyAether Ecosystem Program',awardDetails:'View award announcement',
    electronicsPrize:'National First Prize',electronicsContest:'2023 National Undergraduate Electronics Design Contest (TI Cup)',embeddedPrize:'National Third Prize',embeddedContest:'2023 National Undergraduate Embedded Chip Design and Application Contest',awardTeammates:'Awarded jointly with Qiuyang Xu and Xueliang Zou',meritStudent:'Jiangsu Provincial Merit Student',
    contactTitle:'Good ideas start with a conversation.',contactBody:'Happy to connect on chiplet systems, power delivery, and physical design.',labPage:'Lab profile',footerName:'Chengkai Zhu',backTop:'Back to top',citationTitle:'Cite this paper',citationHint:'BibTeX · Based on available bibliographic information',copyCitation:'Copy citation',copied:'Copied',copyFailed:'Please select and copy the text manually',closeLabel:'Close',
    description:'Chengkai Zhu, doctoral student at Fudan University and CODA lab. Power-delivery-network optimization and physical design for 2.5D chiplet systems.',title:'Chengkai Zhu · Academic Homepage'
  }
};
const citations = {
  cne: `@inproceedings{zhu2026cnepdn,
  title = {CNE-PDN: Joint Optimization of PDN Geometry and TSV Layout via Component-Level Neural Parasitic Extraction for 2.5D IC},
  author = {Zhu, Chengkai and Huang, Jinhong and Song, Boxiang and Yang, Xihan and Wang, Siwen and Zhao, Yiyang and Zhu, Keren and Yan, Changhao},
  booktitle = {IEEE/ACM International Conference on Computer-Aided Design (ICCAD)},
  year = {2026}
}`,
  ultra: `@article{huang2026ultra25d,
  title = {ULTRA-2.5D: An Analytical Placement Framework for Ultra-Large-Scale Multi-Reticle Chiplet Systems},
  author = {Huang, Jinhong and Wang, Yuyan and Song, Boxiang and Zhu, Chengkai and Zeng, Yuman and Li, Jiayao and Zhu, Keren and Feng, Lang and Yan, Changhao and Chen, Chixiao and Zeng, Xuan},
  journal = {IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems},
  year = {2026}
}`
};
let currentLanguage = 'en';
function setLanguage(language, updateUrl = true) {
  currentLanguage = language === 'en' ? 'en' : 'zh';
  const copy = messages[currentLanguage];
  document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-i18n]').forEach(element => { if (copy[element.dataset.i18n] !== undefined) element.innerHTML = copy[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => element.setAttribute('aria-label', copy[element.dataset.i18nAria]));
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {element.alt = copy[element.dataset.i18nAlt];});
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage)));
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.description;
  document.getElementById('copy-status').textContent = '';
  try {localStorage.setItem('chengkai-language', currentLanguage);} catch {}
  if (updateUrl) {const url = new URL(location.href);url.searchParams.set('lang', currentLanguage);history.replaceState(null, '', url);}
}
let savedLanguage;try {savedLanguage = localStorage.getItem('chengkai-language');} catch {}
setLanguage(new URL(location.href).searchParams.get('lang') || savedLanguage || 'en', false);
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
menuToggle.addEventListener('click', () => {const expanded = menuToggle.getAttribute('aria-expanded') === 'true';menuToggle.setAttribute('aria-expanded', String(!expanded));mobileNav.hidden = expanded;});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {mobileNav.hidden = true;menuToggle.setAttribute('aria-expanded', 'false');}));
document.addEventListener('keydown', event => {if (event.key === 'Escape') {mobileNav.hidden = true;menuToggle.setAttribute('aria-expanded', 'false');}});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {item.classList.toggle('active', item === button);item.setAttribute('aria-pressed', String(item === button));});
  document.querySelectorAll('.paper[data-type]').forEach(paper => {paper.hidden = button.dataset.filter !== 'all' && paper.dataset.type !== button.dataset.filter;});
}));
const citationDialog = document.getElementById('citation-dialog');
document.querySelectorAll('[data-cite]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('citation-text').textContent = citations[button.dataset.cite];
  document.getElementById('copy-status').textContent = '';
  citationDialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => citationDialog.close());
citationDialog.addEventListener('click', event => {if (event.target === citationDialog) {const bounds = citationDialog.getBoundingClientRect();if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) citationDialog.close();}});
document.getElementById('copy-citation').addEventListener('click', async () => {
  try {await navigator.clipboard.writeText(document.getElementById('citation-text').textContent);document.getElementById('copy-status').textContent = messages[currentLanguage].copied;}
  catch {document.getElementById('copy-status').textContent = messages[currentLanguage].copyFailed;const range = document.createRange();range.selectNodeContents(document.getElementById('citation-text'));const selection = window.getSelection();selection.removeAllRanges();selection.addRange(range);}
});
if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main section[id]')].filter(section => document.querySelector(`.desktop-nav a[href="#${section.id}"]`));
  const observer = new IntersectionObserver(entries => {entries.forEach(entry => {if (entry.isIntersecting) {document.querySelectorAll('.desktop-nav a').forEach(link => {const active = link.hash === `#${entry.target.id}`;link.classList.toggle('active', active);if (active) link.setAttribute('aria-current', 'location');else link.removeAttribute('aria-current');});}});}, {rootMargin:'-20% 0px -55% 0px', threshold:0});
  sections.forEach(section => observer.observe(section));
}
