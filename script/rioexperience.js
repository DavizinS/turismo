const langBtn = document.getElementById('lang-toggle');
let currentLang = 'pt';
function updateLang() {
    document.querySelectorAll('.lang').forEach(el => {
        const pt = el.getAttribute('data-pt');
        const en = el.getAttribute('data-en');
        el.textContent = (currentLang === 'pt') ? pt : en;
    });
    document.documentElement.lang = currentLang === 'pt' ? 'pt-br' : 'en';
    langBtn.textContent = (currentLang === 'pt') ? 'EN' : 'PT';
}
langBtn.onclick = () => {
    currentLang = (currentLang === 'pt') ? 'en' : 'pt';
    updateLang();
    closeModal();
    closePartnerModal();
};
updateLang();

const POINTS_DATA = {
    "paodeacucar": {
        pt: {
            title: "Pão de Açúcar",
            img: "imagens/paodeacucar2.jpg",
            desc: "Um dos cartões postais mais emblemáticos do Rio, com vista 360º da cidade, acessível por teleférico. Ideal para fotos, trilhas e pôr do sol.",
            price: "R$ 150,00 (teleférico ida e volta) - grátis para trilheiros",
            address: "Av. Pasteur, 520 - Urca, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/V25WgBSAM5fMCUYV6"
        },
        en: {
            title: "Sugarloaf Mountain",
            img: "imagens/paodeacucar2.jpg",
            desc: "One of Rio’s most iconic landmarks, 360º city view, accessible by cable car. Perfect for photos, hiking and sunsets.",
            price: "Approx. R$ 150 (round-trip cable car) – free for hikers",
            address: "Av. Pasteur, 520 - Urca, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/V25WgBSAM5fMCUYV6"
        }
    },
    "cristo": {
        pt: {
            title: "Cristo Redentor",
            img: "imagens/cristo.jpg",
            desc: "Eleito uma das Sete Maravilhas do Mundo Moderno, impressiona pela imponência e vista panorâmica da cidade.",
            price: "R$ 97,50 (trem) ou R$ 35,00 (van)",
            address: "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/YMGJw2ZJb4Uv5rAZA"
        },
        en: {
            title: "Christ the Redeemer",
            img: "imagens/cristo.jpg",
            desc: "One of the New Seven Wonders of the World, impressive city view and grandeur.",
            price: "Approx. R$ 97.50 (train) or R$ 35 (van)",
            address: "Tijuca National Park - Alto da Boa Vista, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/YMGJw2ZJb4Uv5rAZA"
        }
    },
    "ipanema": {
        pt: {
            title: "Ipanema",
            img: "imagens/ipanema.png",
            desc: "Famosa pela música e vibe descontraída, lugar para curtir a praia e pôr do sol no Arpoador.",
            price: "Acesso livre (praia pública)",
            address: "Av. Vieira Souto - Ipanema, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/b1N3vw1hJxSEfKQh8"
        },
        en: {
            title: "Ipanema Beach",
            img: "imagens/ipanema.png",
            desc: "Famous for music and relaxed vibe, enjoy the beach and sunset at Arpoador.",
            price: "Free access (public beach)",
            address: "Av. Vieira Souto - Ipanema, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/b1N3vw1hJxSEfKQh8"
        }
    },
    "escada": {
        pt: {
            title: "Escadaria Selarón",
            img: "imagens/escada-lapa.jpg",
            desc: "Obra de arte a céu aberto, decorada com azulejos do mundo todo. Ícone da criatividade carioca.",
            price: "Acesso livre",
            address: "R. Manuel Carneiro - Santa Teresa, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/VXYoXYeDPUJbB43E7"
        },
        en: {
            title: "Selarón Steps",
            img: "imagens/escada-lapa.jpg",
            desc: "Open-air artwork decorated with tiles from around the world. Icon of Rio’s creativity.",
            price: "Free access",
            address: "R. Manuel Carneiro - Santa Teresa, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/VXYoXYeDPUJbB43E7"
        }
    },
    "lapa": {
        pt: {
            title: "Arcos da Lapa",
            img: "imagens/lapa.jpg",
            desc: "O maior símbolo da boemia carioca, palco de festas, shows e muita história.",
            price: "Acesso livre",
            address: "Av. República do Paraguai - Centro, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/xA3nmpEjH5HM2kqVA"
        },
        en: {
            title: "Lapa Arches",
            img: "imagens/lapa.jpg",
            desc: "Symbol of Rio nightlife, host of parties, concerts and history.",
            price: "Free access",
            address: "Av. República do Paraguai - Centro, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/xA3nmpEjH5HM2kqVA"
        }
    },
    "museuamanha": {
        pt: {
            title: "Museu do Amanhã",
            img: "imagens/museudoamanha.jpg",
            desc: "Museu futurista na zona portuária, dedicado à ciência e sustentabilidade. Experiência interativa imperdível.",
            price: "R$ 30,00 (inteira)",
            address: "Praça Mauá, 1 - Centro, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/cTPP4BzDrzVQaEKC9"
        },
        en: {
            title: "Museum of Tomorrow",
            img: "imagens/museudoamanha.jpg",
            desc: "Futuristic museum dedicated to science and sustainability. Interactive experience.",
            price: "R$ 30 (full price)",
            address: "Praça Mauá, 1 - Centro, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/cTPP4BzDrzVQaEKC9"
        }
    },
    "maracana": {
        pt: {
            title: "Maracanã",
            img: "imagens/maracana.jpg",
            desc: "O estádio mais famoso do mundo, palco de finais históricas e visitas guiadas.",
            price: "R$ 75,00 (tour guiado)",
            address: "Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/2Y1HiRDNwssva7mC6"
        },
        en: {
            title: "Maracanã Stadium",
            img: "imagens/maracana.jpg",
            desc: "World’s most famous stadium, host to historic finals and guided tours.",
            price: "R$ 75 (guided tour)",
            address: "Av. Pres. Castelo Branco, Portão 3 - Maracanã, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/2Y1HiRDNwssva7mC6"
        }
    },
    "ilhafiscal": {
        pt: {
            title: "Ilha Fiscal",
            img: "imagens/Castelinho.jpg",
            desc: "Ilha histórica com arquitetura única, cenário do último baile do império. Passeios de barco disponíveis.",
            price: "R$ 40,00 (barco + visita guiada)",
            address: "Praça XV de Novembro, s/n - Centro, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/MWWMxr1eJGvNbyXWA"
        },
        en: {
            title: "Fiscal Island",
            img: "imagens/Castelinho.jpg",
            desc: "Historic island with unique architecture, last empire ball. Boat tours available.",
            price: "R$ 40 (boat + guided visit)",
            address: "Praça XV de Novembro, s/n - Centro, Rio de Janeiro - RJ",
            maps: "https://goo.gl/maps/MWWMxr1eJGvNbyXWA"
        }
    }
};
const CATEGORIES_DATA = {
    "shoppings": {
        pt: {
            title: "Shoppings",
            img: "imagens/shopping.jpg",
            list: [
                "BarraShopping",
                "Shopping RioSul",
                "VillageMall",
                "Shopping Tijuca",
                "Shopping Leblon"
            ]
        },
        en: {
            title: "Shopping Malls",
            img: "imagens/shopping.jpg",
            list: [
                "BarraShopping",
                "RioSul Shopping Center",
                "VillageMall",
                "Tijuca Shopping",
                "Leblon Mall"
            ]
        }
    },
    "praias": {
        pt: {
            title: "Praias",
            img: "imagens/praias.jpg",
            list: [
                "Copacabana",
                "Ipanema",
                "Leblon",
                "Praia do Pepê",
                "Prainha"
            ]
        },
        en: {
            title: "Beaches",
            img: "imagens/praias.jpg",
            list: [
                "Copacabana",
                "Ipanema",
                "Leblon",
                "Pepê Beach",
                "Prainha"
            ]
        }
    },
    "entretenimento": {
        pt: {
            title: "Eventos",
            img: "imagens/entretenimento.jpg",
            list: [
                "Carnaval do Rio",
                "Réveillon de Copacabana",
                "Festival do Rio",
                "Shows na Lapa",
                "Circuito das Feiras Gastronômicas"
            ]
        },
        en: {
            title: "Events",
            img: "imagens/entretenimento.jpg",
            list: [
                "Rio Carnival",
                "Copacabana New Year’s Eve",
                "Rio Film Festival",
                "Concerts at Lapa",
                "Gastronomic Fairs Circuit"
            ]
        }
    },
    "hoteis": {
        pt: {
            title: "Hotéis",
            img: "imagens/hoteis.jpg",
            desc: "Entre em contato para parcerias com nosso setor de hotelaria.",
            contact: "E-mail: parcerias@riobrasilexperience.com<br>WhatsApp: (21) 99999-8888"
        },
        en: {
            title: "Hotels",
            img: "imagens/hoteis.jpg",
            desc: "Contact us for partnership opportunities with our hotel network.",
            contact: "E-mail: partnerships@riobrasilexperience.com<br>WhatsApp: +55 21 99999-8888"
        }
    }
};

function openModal(html) {
    const bg = document.getElementById('modal-bg');
    const modal = document.getElementById('modal');
    document.getElementById('modal-content').innerHTML = html;
    bg.classList.add('active');
    bg.style.display = 'flex';
    setTimeout(()=>{ modal.focus(); },100);
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('modal-bg').classList.remove('active');
    setTimeout(()=>{document.getElementById('modal-bg').style.display='none';},200);
    document.body.style.overflow = '';
}
document.getElementById('modal-close').onclick = closeModal;
document.getElementById('modal-bg').onclick = function(e) {
    if (e.target === this) closeModal();
};
document.addEventListener('keydown', function(e){
    if(document.getElementById('modal-bg').classList.contains('active') && e.key === "Escape") closeModal();
});

function getCurrentLang() {
    return document.documentElement.lang && document.documentElement.lang.substring(0,2) === "en" ? "en" : "pt";
}
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(){
        let id = this.getAttribute('data-id');
        showModalPoint(id);
    });
});
function showModalPoint(id) {
    const lang = getCurrentLang();
    const data = POINTS_DATA[id] && POINTS_DATA[id][lang];
    if(!data) return;
    openModal(
        `<div class="img-modal-zoom">
            <img src="${data.img}" alt="${data.title}" id="modal-tour-img" style="cursor:zoom-in" />
        </div>
        <h2>${data.title}</h2>
        <p>${data.desc}</p>
        <p style="margin:0.8em 0 0 0;font-weight:600;color:#2b6;">
          ${(lang === "pt" ? "Estimativa de preço: " : "Estimated price: ") + data.price}
        </p>
        <p style="margin:0.7em 0 0.1em 0;">
          <strong>${lang === "pt" ? "Endereço:" : "Address:"}</strong> ${data.address}
        </p>
        <a href="${data.maps}" target="_blank" style="color: #3a70bf; display: inline-block; margin-top: 0.6em;">
          <img src="imagens/maps.svg" alt="Maps" style="vertical-align:middle;width:18px;margin-right:4px;"> 
          ${lang === "pt" ? "Ver no Google Maps" : "View on Google Maps"}
        </a>`
    );
    setTimeout(()=>{
        let img = document.getElementById('modal-tour-img');
        if(img){
            img.onclick = function(){
                openZoomImg(data.img, data.title);
            };
        }
    },250);
}

// Lightbox Zoom
function openZoomImg(src, alt) {
    let bg = document.getElementById('zoom-img-bg');
    let img = document.getElementById('zoom-img-modal');
    img.src = src; img.alt = alt || '';
    bg.classList.add('active');
    bg.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeZoomImg() {
    let bg = document.getElementById('zoom-img-bg');
    bg.classList.remove('active');
    setTimeout(()=>{ bg.style.display='none'; },200);
    document.body.style.overflow = '';
}
document.getElementById('zoom-img-close').onclick = closeZoomImg;
document.getElementById('zoom-img-bg').onclick = function(e){ if(e.target===this) closeZoomImg(); }
document.addEventListener('keydown', function(e){
    if(document.getElementById('zoom-img-bg').classList.contains('active') && e.key === "Escape") closeZoomImg();
});

document.querySelectorAll('.more-card').forEach(card => {
    card.addEventListener('click', function(e){
        e.preventDefault();
        let id = this.getAttribute('data-id');
        showModalCategory(id);
    });
});
function showModalCategory(id) {
    const lang = getCurrentLang();
    const data = CATEGORIES_DATA[id] && CATEGORIES_DATA[id][lang];
    if(!data) return;
    if(id === "hoteis") {
        openModal(`<img src="${data.img}" alt="${data.title}" /><h2>${data.title}</h2><p>${data.desc}</p><div class="contact">${data.contact}</div>`);
    } else {
        const items = data.list.map(item=>`<li>${item}</li>`).join('');
        openModal(`<img src="${data.img}" alt="${data.title}" /><h2>${data.title}</h2><ul>${items}</ul>`);
    }
}

// Parceiros
const partnerModalContent = {
  pt: `<h2>Seja um parceiro!</h2>
      <p>Preencha o formulário abaixo ou envie sua proposta para <strong>parceiros@riobrasilexperience.com</strong>.<br>
      Nossa equipe entrará em contato para explicar como funciona a parceria e divulgar seus serviços para turistas do mundo todo!</p>
      <p><strong>WhatsApp:</strong> <a href="https://wa.me/5521999998888" target="_blank">(21) 99999-8888</a></p>
      <form style="margin-top:1em;" onsubmit="alert('Obrigado! Retornaremos em breve.'); return false;">
        <input required type="text" placeholder="Seu nome ou empresa" style="width:100%;margin-bottom:0.7em;padding:0.5em;" />
        <input required type="email" placeholder="Seu e-mail" style="width:100%;margin-bottom:0.7em;padding:0.5em;" />
        <textarea required placeholder="Como gostaria de ser parceiro?" style="width:100%;padding:0.5em;height:65px;"></textarea>
        <button type="submit" class="btn-parceiro" style="width:100%;margin-top:1em;">Enviar</button>
      </form>
     `,
  en: `<h2>Become a partner!</h2>
      <p>Fill out the form below or send your proposal to <strong>partners@riobrasilexperience.com</strong>.<br>
      Our team will contact you to explain the partnership and promote your services to travelers worldwide!</p>
      <p><strong>WhatsApp:</strong> <a href="https://wa.me/5521999998888" target="_blank">+55 21 99999-8888</a></p>
      <form style="margin-top:1em;" onsubmit="alert('Thank you! We will contact you soon.'); return false;">
        <input required type="text" placeholder="Your name or company" style="width:100%;margin-bottom:0.7em;padding:0.5em;" />
        <input required type="email" placeholder="Your e-mail" style="width:100%;margin-bottom:0.7em;padding:0.5em;" />
        <textarea required placeholder="How would you like to be a partner?" style="width:100%;padding:0.5em;height:65px;"></textarea>
        <button type="submit" class="btn-parceiro" style="width:100%;margin-top:1em;">Send</button>
      </form>
     `
};
const modalParceiroBg = document.getElementById('modal-parceiro-bg');
const modalParceiro = document.getElementById('modal-parceiro');
const btnParceiro = document.getElementById('btn-parceiro');
const modalParceiroClose = document.getElementById('modal-parceiro-close');
function showPartnerModal() {
  const lang = getCurrentLang();
  document.getElementById('modal-parceiro-content').innerHTML = partnerModalContent[lang];
  modalParceiroBg.classList.add('active');
  modalParceiroBg.style.display = 'flex';
  setTimeout(()=>{ modalParceiro.focus(); },100);
  document.body.style.overflow = 'hidden';
}
function closePartnerModal() {
  modalParceiroBg.classList.remove('active');
  setTimeout(()=>{ modalParceiroBg.style.display='none'; },200);
  document.body.style.overflow = '';
}
btnParceiro.onclick = showPartnerModal;
modalParceiroClose.onclick = closePartnerModal;
modalParceiroBg.onclick = function(e) { if (e.target === this) closePartnerModal(); };
document.addEventListener('keydown', function(e){
    if(modalParceiroBg.classList.contains('active') && e.key === "Escape") closePartnerModal();
});
langBtn.addEventListener('click', closePartnerModal);

document.querySelectorAll('.parceiro-card').forEach(card => {
    card.onclick = function() {
        const id = this.getAttribute('data-id');
        if(id === 'turismorj') {
            openModal(`<img src="/imagens/icone-parceiros.svg" alt="Turismo RJ" style="max-width:90px;margin:1em auto;display:block;border-radius:13px;" /><h2>Turismo RJ</h2><p class="lang" data-pt="Agência carioca especializada em roteiros sob medida para o Rio." data-en="Rio travel agency specialized in custom tours.">Agência carioca especializada em roteiros sob medida para o Rio.</p><a href="mailto:contato@turismorj.com.br">contato@turismorj.com.br</a>`);
        }
        if(id === 'riotours') {
            openModal(`<img src="/imagens/icone-parceiros.svg" alt="Rio Tours" style="max-width:90px;margin:1em auto;display:block;border-radius:13px;" /><h2>Rio Tours</h2><p class="lang" data-pt="Guias turísticos credenciados para experiências locais e exclusivas." data-en="Certified guides for exclusive local experiences.">Guias turísticos credenciados para experiências locais e exclusivas.</p><a href="mailto:contato@riotours.com.br">contato@riotours.com.br</a>`);
        }
        updateLang();
    }
});
