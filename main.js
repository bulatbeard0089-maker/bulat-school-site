
(function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('navLinks');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }));
  }

  const y = document.getElementById('year');
  if(y) y.textContent = String(new Date().getFullYear());

  const newsWrap = document.querySelector('[data-news]');
  if(newsWrap){
    fetch('assets/data/news.json')
      .then(r => r.json())
      .then(items => {
        const frag = document.createDocumentFragment();
        items.sort((a,b) => (b.date||'').localeCompare(a.date||''));
        for(const it of items){
          const el = document.createElement('article');
          el.className = 'card';
          const date = formatDate(it.date);
          el.innerHTML = `
            <div class="meta">${date} • ${escapeHtml(it.category || 'новости')}</div>
            <h3>${escapeHtml(it.title || '')}</h3>
            <p>${escapeHtml(it.excerpt || '')}</p>
            ${it.link ? `<div class="card-actions"><a class="btn btn-sm btn-ghost" href="${it.link}">Читать</a></div>` : ``}
          `;
          frag.appendChild(el);
        }
        newsWrap.innerHTML = '';
        newsWrap.appendChild(frag);
      })
      .catch(() => {});
  }

  const form = document.querySelector('[data-contact-form]');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const st = form.querySelector('[data-form-status]');
      if(st) st.textContent = 'Заявка отправлена ✅ Мы свяжемся с вами.';
      form.reset();
    });
  }

  function formatDate(iso){
    if(!iso) return '—';
    const d = new Date(iso);
    if(Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('ru-RU', {year:'numeric', month:'long', day:'2-digit'});
  }
  function escapeHtml(s){
    return String(s)
      .replaceAll('&','&amp;')
      .replaceAll('<','&lt;')
      .replaceAll('>','&gt;')
      .replaceAll('"','&quot;')
      .replaceAll("'","&#039;");
  }
})();
