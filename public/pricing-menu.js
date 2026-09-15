if(location.pathname.replace(/^\/+|\/+$/g,'').toLowerCase()==='fvm-pricing'){
  const services=[
    {name:'NFC Review Cards',price:'$40',meta:'1 card · $30 each for 2+',text:'Premium NFC cards that make it easy for customers to leave reviews, follow your socials or visit your business—all with a tap.'},
    {name:'Custom Landing Page',price:'$99 / year',text:'A personalized landing page connected to your NFC cards. Keep your information, social links, reviews and more in one place.'},
    {name:'Website Design & Deployment',price:'$559',meta:'$499 bundled with yearly subscription',text:'A custom-designed, mobile-optimized website with SEO setup and initial optimization to help drive attention to your business.'},
    {name:'Website Redesign & SEO Migration',price:'$500–$1,500',featured:true,text:'Modernize an existing website while preserving valuable SEO, links, URLs, analytics, repositories and working functionality. We rebuild what needs improvement, remove what no longer serves the site and protect the structure your business already relies on. Final pricing depends on site size, migration complexity and the amount of SEO work required.'},
    {name:'Website Yearly Upkeep',price:'$299 / year',text:'Hosting and ongoing website upkeep, including routine updates and small tweaks. Larger overhauls or major changes are priced separately.'},
    {name:'Website Hosting Only',price:'$99 / year',text:'Secure hosting and uptime maintenance after your website is designed and approved. Edits, content changes and design support are priced separately.'},
    {name:'Logo Design / Redesign',price:'$100',text:'Custom logo design or redesign with three unique variations and unlimited tweaks to the selected concept.'},
    {name:'Custom Creative Work',price:'Custom quote',text:'Animations, commercials, music, branding assets, social media content and more—priced around the scope of your project.'}
  ];
  const markup=`<section class="text-pricing" aria-labelledby="service-menu-heading"><div class="section-label"><span id="service-menu-heading">Services & starting prices</span></div><div class="fvm-service-grid">${services.map(s=>`<article class="fvm-service${s.featured?' featured':''}"><div><h2>${s.name}</h2>${s.meta?`<p class="service-meta">${s.meta}</p>`:''}</div><strong>${s.price}</strong><p>${s.text}</p></article>`).join('')}</div><p class="pricing-note">Starting prices are provided for quick reference. Final quotes reflect project scope, materials, migration needs and turnaround.</p></section>`;
  const observer=new MutationObserver(()=>{const sheet=document.querySelector('.price-sheet');if(!sheet||document.querySelector('.text-pricing'))return;sheet.insertAdjacentHTML('beforebegin',markup);const label=sheet.querySelector('.section-label span');if(label)label.textContent='Designed pricing sheet';observer.disconnect()});
  observer.observe(document.querySelector('#app'),{childList:true,subtree:true});
}
