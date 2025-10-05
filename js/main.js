// main.js - initializer wiring UI and jobs modules
document.addEventListener('DOMContentLoaded', () => {
    // anchors
    document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click', e=>{e.preventDefault(); const t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth'}); }));

    // search
    const searchBtn = document.querySelector('.search-form .btn-accent');
    if(searchBtn) searchBtn.addEventListener('click', e=>{e.preventDefault(); showNotification('Searching jobs (simulated)');});

    // job card buttons
    document.querySelectorAll('.job-card').forEach(card=>{
        card.querySelectorAll('button').forEach(btn=>{
            btn.addEventListener('click', ()=>{
                if(btn.textContent.toLowerCase().includes('apply')) applyJob(); else saveJob();
            });
        });
    });
});

