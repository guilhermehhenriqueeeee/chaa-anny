// ─────────────────────────────────────────────
// GUEST LIST DATA
// ─────────────────────────────────────────────
const guests = [
    { id: 'g1',  name: 'Tia Madalena',         gift: '1 pacote de fralda + mimo do site' },
    { id: 'g2',  name: 'Jaqueline',             gift: '1 pacote de fralda + mimo do site' },
    { id: 'g3',  name: 'Luana',                 gift: '1 pacote de fralda + mimo do site' },
    { id: 'g4',  name: 'Tia Eliana',            gift: '1 pacote de fralda + mimo do site' },
    { id: 'g5',  name: 'Monize',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g6',  name: 'Tia Cleuza',            gift: '1 pacote de fralda + mimo do site' },
    { id: 'g7',  name: 'Tia Vergínia',          gift: '1 pacote de fralda + mimo do site' },
    { id: 'g8',  name: 'Tia Luci',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g9',  name: 'Suliane',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g10', name: 'Tia Vera',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g11', name: 'Juliana',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g12', name: 'Bruna',                 gift: '1 pacote de fralda + mimo do site' },
    { id: 'g13', name: 'Milena',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g14', name: 'Rosevane',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g15', name: 'Samanta',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g16', name: 'Vladia',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g17', name: 'Rose',                  gift: '1 pacote de fralda + mimo do site' },
    { id: 'g18', name: 'Mariana',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g19', name: 'Renata',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g20', name: 'Beatriz',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g21', name: 'Micieli',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g22', name: 'Tia Lica',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g23', name: 'Emili',                 gift: '1 pacote de fralda + mimo do site' },
    { id: 'g24', name: 'Rebeca',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g25', name: 'Tia Laine',             gift: '1 pacote de fralda + mimo do site' },
    { id: 'g26', name: 'Daiane',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g27', name: 'Denise',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g28', name: 'Emili (2)',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g29', name: 'Tia Maraisa e Mariana', gift: '1 pacote de fralda + mimo do site' },
    { id: 'g30', name: 'Tia Ana',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g31', name: 'Simone',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g32', name: 'Bia Lucas',             gift: '1 pacote de fralda + mimo do site' },
    { id: 'g33', name: 'Tia Neia',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g34', name: 'Taiuane',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g35', name: 'Tia Malta',             gift: '1 pacote de fralda + mimo do site' },
    { id: 'g36', name: 'Rose (2)',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g37', name: 'Yanca',                 gift: '1 pacote de fralda + mimo do site' },
    { id: 'g38', name: 'Glaucia',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g39', name: 'Luiza',                 gift: '1 pacote de fralda + mimo do site' },
    { id: 'g40', name: 'Maria',                 gift: '1 pacote de fralda + mimo do site' },
    { id: 'g41', name: 'Leandra',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g42', name: 'Gabrieli',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g43', name: 'Luciene',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g44', name: 'Irmã Tereza',           gift: '1 pacote de fralda + mimo do site' },
    { id: 'g45', name: 'Irmã Clarice',          gift: '1 pacote de fralda + mimo do site' },
    { id: 'g46', name: 'Eliene',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g47', name: 'Adriana Lima',          gift: '1 pacote de fralda + mimo do site' },
    { id: 'g48', name: 'Kenia',                 gift: '1 pacote de fralda + mimo do site' },
    { id: 'g49', name: 'Giseli Marquesine',     gift: '1 pacote de fralda + mimo do site' },
    { id: 'g50', name: 'Irmã Maria',            gift: '1 pacote de fralda + mimo do site' },
    { id: 'g51', name: 'Rose (3)',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g52', name: 'Elisangela',            gift: '1 pacote de fralda + mimo do site' },
    { id: 'g53', name: 'Mayara Nicoleti',       gift: '1 pacote de fralda + mimo do site' },
    { id: 'g54', name: 'Mayara',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g55', name: 'Tia Tamires',           gift: '1 pacote de fralda + mimo do site' },
    { id: 'g56', name: 'Stefany',               gift: '1 pacote de fralda + mimo do site' },
    { id: 'g57', name: 'Marcia',                gift: '1 pacote de fralda + mimo do site' },
    { id: 'g58', name: 'Irmã Daiser',           gift: '1 pacote de fralda + mimo do site' },
    { id: 'g59', name: 'Irmã Cristina',         gift: '1 pacote de fralda + mimo do site' },
    { id: 'g60', name: 'Maria (2)',              gift: '1 pacote de fralda + mimo do site' },
    { id: 'g61', name: 'Micheli',               gift: '1 pacote de fralda + mimo do site' },
];

// ─────────────────────────────────────────────
// FIREBASE CONFIGURATION
// ─────────────────────────────────────────────
const firebaseConfig = {
    apiKey: "AIzaSyBkzloRTtVAi8dmVKj5fqbToIRSiCuZLIs",
    authDomain: "cha-da-anny.firebaseapp.com",
    projectId: "cha-da-anny",
    storageBucket: "cha-da-anny.firebasestorage.app",
    messagingSenderId: "563640741317",
    appId: "1:563640741317:web:f9ce58c8b4947b0f28afac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Local cache for real-time data
let rsvpData = {};
let purchasedData = {};

// Listener for Realtime RSVP Data
database.ref('rsvps').on('value', (snapshot) => {
    rsvpData = snapshot.val() || {};
    if (typeof renderGuests === 'function') renderGuests(); // Re-render when data changes
});

// Listener for Realtime Purchases Data
database.ref('purchases').on('value', (snapshot) => {
    purchasedData = snapshot.val() || {};
    if (typeof filterGifts === 'function') filterGifts(); // Re-render when data changes
});

// ─────────────────────────────────────────────
// RSVP STORAGE (FIREBASE)
// ─────────────────────────────────────────────
function getRsvpData() {
    return rsvpData; // Reads from real-time local cache
}
function isConfirmed(id) {
    return getRsvpData()[id] === true;
}
function confirmRsvp(id) {
    database.ref('rsvps/' + id).set(true);
}
function cancelRsvp(id) {
    database.ref('rsvps/' + id).remove();
}

// ─────────────────────────────────────────────
// GUEST RENDERING
// ─────────────────────────────────────────────
let guestFilter = 'all';
let guestSearch = '';
let rsvpTargetId = null;

function getInitials(name) {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function getAvatarColor(id) {
    const colors = [
        ['#F4BACB','#C0527A'],['#F9D0DF','#D4698A'],['#FADDE5','#C0527A'],
        ['#E8CEC8','#A0614F'],['#D4E8CE','#4A7A3F'],['#CEE0E8','#3F6A7A'],
        ['#E8D4CE','#7A4A3F'],['#D4CEE8','#4A3F7A'],['#E8E4CE','#7A6A3F'],
    ];
    const idx = parseInt(id.replace('g','')) % colors.length;
    return colors[idx];
}

function renderGuests() {
    const grid = document.getElementById('guestsGrid');
    if (!grid) return;

    const filtered = guests.filter(g => {
        const confirmed = isConfirmed(g.id);
        const matchSearch = g.name.toLowerCase().includes(guestSearch.toLowerCase());
        const matchFilter = guestFilter === 'all'
            || (guestFilter === 'confirmed' && confirmed)
            || (guestFilter === 'pending' && !confirmed);
        return matchSearch && matchFilter;
    });

    updateStats();

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="guest-empty glass-panel"><i class="fa-solid fa-users-slash"></i><p>Nenhuma convidada encontrada.</p></div>`;
        return;
    }

    grid.innerHTML = filtered.map(g => {
        const confirmed = isConfirmed(g.id);
        const [bg, fg] = getAvatarColor(g.id);
        return `
        <div class="guest-card glass-panel ${confirmed ? 'guest-confirmed' : 'guest-pending'}">
            <div class="guest-avatar" style="background:${bg}; color:${fg};">${getInitials(g.name)}</div>
            <div class="guest-info">
                <h3 class="guest-name">${g.name}</h3>
                <p class="guest-gift"><i class="fa-solid fa-gift"></i> ${g.gift}</p>
            </div>
            <div class="guest-status">
                ${confirmed
                    ? `<span class="rsvp-badge rsvp-yes"><i class="fa-solid fa-circle-check"></i> Confirmada</span>
                       <button class="btn-undo" onclick="openUnconfirmModal('${g.id}')">Desfazer</button>`
                    : `<span class="rsvp-badge rsvp-no"><i class="fa-regular fa-clock"></i> Aguardando</span>
                       <button class="btn-confirm-rsvp" onclick="openRsvpModal('${g.id}')">Confirmar</button>`
                }
            </div>
        </div>`;
    }).join('');
}

function updateStats() {
    const total     = guests.length;
    const confirmed = guests.filter(g => isConfirmed(g.id)).length;
    const pending   = total - confirmed;

    document.getElementById('totalGuests').textContent     = total;
    document.getElementById('confirmedGuests').textContent = confirmed;
    document.getElementById('pendingGuests').textContent   = pending;
}

// ─────────────────────────────────────────────
// RSVP MODAL
// ─────────────────────────────────────────────
function openRsvpModal(id) {
    const guest = guests.find(g => g.id === id);
    if (!guest) return;
    rsvpTargetId = id;

    document.getElementById('rsvpModalTitle').textContent = `Confirmar Presença`;
    document.getElementById('rsvpModalBody').innerHTML = `
        <p>Olá, <strong>${guest.name}</strong>! 🎉</p>
        <p style="margin-top:0.75rem; color: var(--text-muted);">Ao confirmar, registraremos sua presença no Chá de Bebê da Anny. Nos vemos lá! 💕</p>
        <div class="selected-gift" style="margin-top:1.25rem;">
            <div class="selected-gift-icon"><i class="fa-solid fa-gift"></i></div>
            <div>
                <strong>Presente planejado</strong>
                <p class="text-sm text-muted" style="margin-top:0.25rem;">${guest.gift}</p>
            </div>
        </div>
    `;

    const confirmBtn = document.getElementById('confirmRsvpBtn');
    confirmBtn.style.background = 'linear-gradient(135deg, #4caf7d, #2e8b57)';
    confirmBtn.textContent = '✓ Confirmar Presença';
    confirmBtn.onclick = () => {
        confirmRsvp(rsvpTargetId);
        closeRsvpModal();
        // renderGuests() is now triggered automatically by Firebase onValue
    };

    document.getElementById('rsvpModal').classList.add('active');
}

function openUnconfirmModal(id) {
    const guest = guests.find(g => g.id === id);
    if (!guest) return;
    rsvpTargetId = id;

    document.getElementById('rsvpModalTitle').textContent = 'Cancelar Confirmação';
    document.getElementById('rsvpModalBody').innerHTML = `
        <p>Tem certeza que deseja <strong>remover a confirmação</strong> de presença de <strong>${guest.name}</strong>?</p>
        <p style="margin-top:0.75rem; color: var(--text-muted);">Você poderá confirmar novamente a qualquer momento.</p>
    `;

    const confirmBtn = document.getElementById('confirmRsvpBtn');
    confirmBtn.style.background = 'linear-gradient(135deg, #e57373, #c0392b)';
    confirmBtn.textContent = '✗ Remover Confirmação';
    confirmBtn.onclick = () => {
        cancelRsvp(rsvpTargetId);
        closeRsvpModal();
        // renderGuests() is now triggered automatically by Firebase onValue
    };

    document.getElementById('rsvpModal').classList.add('active');
}

function closeRsvpModal() {
    document.getElementById('rsvpModal').classList.remove('active');
    rsvpTargetId = null;
}

// RSVP Modal event listeners (set after DOM ready)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('closeRsvpModal').addEventListener('click', closeRsvpModal);
    document.getElementById('cancelRsvpBtn').addEventListener('click', closeRsvpModal);
    document.getElementById('rsvpModal').addEventListener('click', e => {
        if (e.target === document.getElementById('rsvpModal')) closeRsvpModal();
    });

    // Guest search
    document.getElementById('guestSearch').addEventListener('input', e => {
        guestSearch = e.target.value;
        renderGuests();
    });

    // Guest filter buttons
    document.querySelectorAll('[data-guest-filter]').forEach(btn => {
        btn.addEventListener('click', e => {
            document.querySelectorAll('[data-guest-filter]').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            guestFilter = e.target.getAttribute('data-guest-filter');
            renderGuests();
        });
    });

    renderGuests();
});

// ─────────────────────────────────────────────
// Gift Data
const gifts = [
    // 🧷 Fraldas
    { id: 1,  title: 'Fralda RN',                                category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Fraldas tamanho Recém Nascido.',                price: 40.00,  limit: 2  },
    { id: 2,  title: 'Fralda RN+',                               category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Fraldas tamanho RN+.',                         price: 45.00,  limit: 2  },
    { id: 3,  title: 'Fralda P',                                 category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Fraldas tamanho P.',                           price: 47.00,  limit: 6  },
    { id: 4,  title: 'Fralda M',                                 category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Fraldas tamanho M.',                           price: 50.00,  limit: 30 },
    { id: 5,  title: 'Fralda G',                                 category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Fraldas tamanho G.',                           price: 55.00,  limit: 10 },
    { id: 6,  title: 'Fralda XG',                                category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Fraldas tamanho XG.',                          price: 60.00,  limit: 10 },
    { id: 7,  title: 'Fralda XXG',                               category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Fraldas tamanho XXG.',                         price: 70.00,  limit: 10 },
    { id: 8,  title: 'Lenço Umedecido Kit',                      category: 'fraldas',     icon: 'fa-pump-soap',           desc: 'Kit de lenços umedecidos.',                    price: 35.00,  limit: 2  },
    { id: 9,  title: 'Kit Fralda de Pano',                       category: 'fraldas',     icon: 'fa-baby-carriage',       desc: 'Kit de fraldas de pano reutilizáveis.',        price: 35.00,  limit: 2  },

    // 🛏️ Quarto do Bebê
    { id: 10, title: 'Kit Lençol para Berço',                    category: 'quarto',      icon: 'fa-bed',                 desc: 'Kit de lençóis macios para berço.',            price: 65.00  },
    { id: 11, title: 'Trocador Portátil',                        category: 'quarto',      icon: 'fa-table-cells',         desc: 'Trocador portátil para bebê.',                 price: 75.00  },
    { id: 12, title: 'Protetor de Colchão',                      category: 'quarto',      icon: 'fa-bed',                 desc: 'Protetor impermeável para colchão.',           price: 40.00  },
    { id: 13, title: 'Mosquiteiro',                              category: 'quarto',      icon: 'fa-shield-halved',       desc: 'Mosquiteiro para berço.',                      price: 35.00  },
    { id: 14, title: 'Móbile de Berço',                          category: 'quarto',      icon: 'fa-shapes',              desc: 'Móbile musical para berço.',                   price: 80.00  },
    { id: 15, title: 'Travesseiro Antissufocante',               category: 'quarto',      icon: 'fa-bed',                 desc: 'Travesseiro seguro para bebê.',                price: 30.00  },
    { id: 16, title: 'Organizador de Fraldas',                   category: 'quarto',      icon: 'fa-box-open',            desc: 'Organizador para fraldas e acessórios.',       price: 45.00  },
    { id: 17, title: 'Cesto de Roupas Bebê',                     category: 'quarto',      icon: 'fa-basket-shopping',     desc: 'Cesto para roupas do bebê.',                   price: 40.00  },

    // 🧼 Higiene do Bebê
    { id: 18, title: 'Kit Banho (Shampoo + Condicionador + Sabonete)', category: 'higiene', icon: 'fa-bottle-droplet',   desc: 'Kit completo para banho do bebê.',             price: 75.00,  limit: 2  },
    { id: 19, title: 'Sabonete Líquido',                         category: 'higiene',     icon: 'fa-pump-soap',           desc: 'Sabonete líquido infantil.',                   price: 25.00,  limit: 2  },
    { id: 20, title: 'Shampoo Infantil',                         category: 'higiene',     icon: 'fa-bottle-droplet',      desc: 'Shampoo suave para bebê.',                     price: 27.00  },
    { id: 21, title: 'Condicionador Infantil',                   category: 'higiene',     icon: 'fa-bottle-droplet',      desc: 'Condicionador suave para bebê.',               price: 25.00  },
    { id: 22, title: 'Pomada para Assadura',                     category: 'higiene',     icon: 'fa-pump-medical',        desc: 'Pomada preventiva para assadura.',             price: 25.00,  limit: 2  },
    { id: 23, title: 'Creme Hidratante e Óleo',                  category: 'higiene',     icon: 'fa-bottle-droplet',      desc: 'Creme hidratante e óleo corporal para bebê.', price: 55.00  },
    { id: 24, title: 'Colônia Bebê',                             category: 'higiene',     icon: 'fa-spray-can-sparkles',  desc: 'Colônia suave para bebê.',                     price: 50.00  },
    { id: 25, title: 'Kit Higiene (Algodão + Cotonete + Álcool)',category: 'higiene',     icon: 'fa-cloud',               desc: 'Kit com algodão, cotonete e álcool.',          price: 25.00,  limit: 2  },
    { id: 26, title: 'Kit Escova e Pente de Cabelo',             category: 'higiene',     icon: 'fa-wand-magic-sparkles', desc: 'Kit escova e pente de cabelo para bebê.',      price: 30.00  },
    { id: 27, title: 'Kit Cortador de Unha Bebê',                category: 'higiene',     icon: 'fa-scissors',            desc: 'Kit cortador de unha para bebê.',              price: 35.00  },
    { id: 28, title: 'Termômetro Digital',                       category: 'higiene',     icon: 'fa-temperature-half',    desc: 'Termômetro digital preciso.',                  price: 35.00  },
    { id: 29, title: 'Aspirador Nasal',                          category: 'higiene',     icon: 'fa-wind',                desc: 'Aspirador nasal para bebê.',                   price: 25.00  },
    { id: 30, title: 'Kit Porta Cotonete e Algodão',             category: 'higiene',     icon: 'fa-box',                 desc: 'Kit porta cotonete e porta algodão.',          price: 32.00  },
    { id: 31, title: 'Kit Higiene Bebê',                         category: 'higiene',     icon: 'fa-kit-medical',         desc: 'Kit completo de higiene para bebê.',           price: 40.00  },

    // 🛁 Banho
    { id: 32, title: 'Toalha com Capuz',                         category: 'banho',       icon: 'fa-bath',                desc: 'Toalha felpuda com capuz.',                    price: 35.00,  limit: 2  },
    { id: 33, title: 'Toalha Fralda',                            category: 'banho',       icon: 'fa-bath',                desc: 'Toalha fralda macia.',                         price: 80.00  },
    { id: 34, title: 'Roupão Bebê',                              category: 'banho',       icon: 'fa-bath',                desc: 'Roupão macio para bebê.',                      price: 70.00  },
    { id: 35, title: 'Organizador de Banho',                     category: 'banho',       icon: 'fa-box-open',            desc: 'Organizador para produtos de banho.',          price: 30.00  },
    { id: 36, title: 'Banheira',                                 category: 'banho',       icon: 'fa-bath',                desc: 'Banheira para banho do bebê.',                 price: 420.00, soldOut: true },
    { id: 37, title: 'Almofada para Banheira',                   category: 'banho',       icon: 'fa-bath',                desc: 'Almofada de apoio para banheira.',             price: 45.00  },

    // 👕 Roupinhas
    { id: 38, title: 'Body RN com Mijão',                        category: 'roupas',      icon: 'fa-shirt',               desc: 'Body tamanho RN com mijão.',                   price: 35.00,  limit: 2  },
    { id: 39, title: 'Body P com Mijão',                         category: 'roupas',      icon: 'fa-shirt',               desc: 'Body tamanho P com mijão.',                    price: 40.00,  limit: 2  },
    { id: 40, title: 'Body M com Mijão',                         category: 'roupas',      icon: 'fa-shirt',               desc: 'Body tamanho M com mijão.',                    price: 43.00,  limit: 2  },
    { id: 66, title: 'Body G com Mijão',                         category: 'roupas',      icon: 'fa-shirt',               desc: 'Body tamanho G com mijão.',                    price: 46.00,  limit: 2  },
    { id: 41, title: 'Macacão RN',                               category: 'roupas',      icon: 'fa-shirt',               desc: 'Macacão tamanho RN.',                          price: 47.00  },
    { id: 42, title: 'Macacão P',                                category: 'roupas',      icon: 'fa-shirt',               desc: 'Macacão tamanho P.',                           price: 50.00,  limit: 2  },
    { id: 43, title: 'Macacão M',                                category: 'roupas',      icon: 'fa-shirt',               desc: 'Macacão tamanho M.',                           price: 55.00,  limit: 2  },
    { id: 44, title: 'Macacão G',                                category: 'roupas',      icon: 'fa-shirt',               desc: 'Macacão tamanho G.',                           price: 60.00,  limit: 2  },
    { id: 45, title: 'Conjunto Pagão',                           category: 'roupas',      icon: 'fa-shirt',               desc: 'Conjunto pagão para bebê.',                    price: 35.00,  limit: 2  },
    { id: 46, title: 'Kit Meias',                                category: 'roupas',      icon: 'fa-socks',               desc: 'Kit de meias para bebê.',                      price: 25.00  },
    { id: 47, title: 'Luvas e Touca Bebê',                       category: 'roupas',      icon: 'fa-hat-wizard',          desc: 'Kit luvas e touca para bebê.',                 price: 25.00  },
    { id: 48, title: 'Babador Impermeável e Paninho de Boca',    category: 'roupas',      icon: 'fa-shirt',               desc: 'Babador impermeável e paninho de boca.',       price: 30.00  },
    { id: 49, title: 'Manta Bebê',                               category: 'roupas',      icon: 'fa-bed',                 desc: 'Manta macia para bebê.',                       price: 60.00  },
    { id: 50, title: 'Cobertor Bebê',                            category: 'roupas',      icon: 'fa-bed',                 desc: 'Cobertor para bebê.',                          price: 70.00  },
    { id: 51, title: 'Kit Roupinha Bebê',                        category: 'roupas',      icon: 'fa-shirt',               desc: 'Kit completo de roupinhas.',                   price: 90.00,  limit: 2  },
    { id: 52, title: 'Saída Maternidade',                        category: 'roupas',      icon: 'fa-baby',                desc: 'Saída de maternidade para bebê.',              price: 300.00 },
    { id: 53, title: 'Kit Bolsa Maternidade',                    category: 'roupas',      icon: 'fa-bag-shopping',        desc: 'Kit completo para bolsa maternidade.',         price: 350.00, soldOut: true },

    // 🍼 Alimentação
    { id: 54, title: 'Mamadeira Pequena',                        category: 'alimentacao', icon: 'fa-baby',                desc: 'Mamadeira pequena anti-cólica.',               price: 35.00  },
    { id: 55, title: 'Mamadeira Média',                          category: 'alimentacao', icon: 'fa-baby',                desc: 'Mamadeira média anti-cólica.',                 price: 45.00  },
    { id: 56, title: 'Mamadeira Grande',                         category: 'alimentacao', icon: 'fa-baby',                desc: 'Mamadeira grande anti-cólica.',                price: 55.00  },
    { id: 57, title: 'Escova de Mamadeira',                      category: 'alimentacao', icon: 'fa-brush',               desc: 'Escova para limpeza de mamadeira.',            price: 20.00  },
    { id: 58, title: 'Esterilizador de Mamadeira',               category: 'alimentacao', icon: 'fa-fire-burner',         desc: 'Esterilizador elétrico.',                      price: 120.00 },
    { id: 59, title: 'Copo de Transição',                        category: 'alimentacao', icon: 'fa-mug-saucer',          desc: 'Copo de transição bico mole.',                 price: 35.00  },
    { id: 60, title: 'Babador Silicone',                         category: 'alimentacao', icon: 'fa-shield-halved',       desc: 'Babador de silicone com bolso.',               price: 25.00  },
    { id: 61, title: 'Almofada de Amamentação',                  category: 'alimentacao', icon: 'fa-heart',               desc: 'Almofada para amamentação.',                   price: 90.00,  soldOut: true },
    { id: 62, title: 'Bomba Tira Leite',                         category: 'alimentacao', icon: 'fa-droplet',             desc: 'Bomba extratora de leite materno.',            price: 120.00 },
    { id: 63, title: 'Pote para Leite Materno',                  category: 'alimentacao', icon: 'fa-jar',                 desc: 'Pote para armazenamento de leite.',            price: 30.00  },
    { id: 64, title: 'Porta Mamadeira',                          category: 'alimentacao', icon: 'fa-box',                 desc: 'Porta mamadeira térmico.',                     price: 35.00  },
    { id: 65, title: 'Almofada de Amamentação Premium',          category: 'alimentacao', icon: 'fa-heart',               desc: 'Almofada premium para amamentação.',           price: 100.00 },
];

// DOM Elements
const giftsGrid = document.getElementById('giftsGrid');
const searchInput = document.getElementById('searchInput');
const catBtns = document.querySelectorAll('.cat-btn');
const noResults = document.getElementById('noResults');

// Modal Elements
const modal = document.getElementById('purchaseModal');
const closeModal = document.querySelector('.close-modal');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');
const modalBody = document.getElementById('modalBody');

let currentFilter = 'all';
let currentModalGiftId = null;

// Purchased Items — updated via Firebase
function getCounts() {
    return purchasedData; // Reads from real-time local cache
}
function getCount(id) {
    return getCounts()[id] || 0;
}
function markPurchased(id) {
    const currentCount = getCount(id);
    database.ref('purchases/' + id).set(currentCount + 1);
}
function getLimit(gift) {
    // Explicit limit on the gift object, or 1 for non-fraldas, null = unlimited
    if (gift.limit !== undefined) return gift.limit;
    if (gift.category !== 'fraldas') return 1;
    return null; // no limit (lenço, fralda de pano)
}
function isPurchased(gift) {
    if (gift.soldOut) return true;         // manually marked as sold out
    const lim = getLimit(gift);
    if (lim === null) return false;        // truly unlimited
    return getCount(gift.id) >= lim;       // fully claimed
}

// Countdown Target Date: 05 July 2026 at 15:00
const eventDate = new Date('2026-07-05T15:00:00');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGifts(gifts);
    setupHeaderScroll();
    startCountdown();
});

// Countdown Timer
function startCountdown() {
    function tick() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            document.getElementById('cd-days').textContent = '00';
            document.getElementById('cd-hours').textContent = '00';
            document.getElementById('cd-minutes').textContent = '00';
            document.getElementById('cd-seconds').textContent = '00';
            return;
        }

        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('cd-days').textContent    = String(days).padStart(2, '0');
        document.getElementById('cd-hours').textContent   = String(hours).padStart(2, '0');
        document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');
    }

    tick(); // run immediately
    setInterval(tick, 1000); // update every second
}



// Render Gifts
function renderGifts(data) {
    giftsGrid.innerHTML = '';
    
    if (data.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        data.forEach(gift => {
            const card = document.createElement('div');
            card.className = 'gift-card';
            
            // Format category name for display
            const catMap = {
                fraldas:     '🧷 Fraldas',
                quarto:      '🛏️ Quarto',
                higiene:     '🧼 Higiene',
                banho:       '🛁 Banho',
                roupas:      '👕 Roupinhas',
                alimentacao: '🍼 Alimentação',
            };
            const catDisplay = catMap[gift.category] || gift.category;
            
            const lim      = getLimit(gift);
            const count    = getCount(gift.id);
            const purchased = isPurchased(gift);
            const hasProgress = lim !== null && lim > 1 && count > 0 && !purchased;

            if (purchased) card.classList.add('gift-purchased');

            // Progress bar for limited items with partial purchases
            const progressHTML = hasProgress ? `
                <div class="gift-progress">
                    <div class="gift-progress-bar" style="width: ${Math.round((count/lim)*100)}%"></div>
                </div>
                <div class="gift-progress-label">${count} de ${lim} presenteados</div>
            ` : (lim !== null && lim > 1 && !purchased ? `
                <div class="gift-progress-label gift-progress-empty">${lim} vagas disponíveis</div>
            ` : '');

            card.innerHTML = `
                <div class="gift-image">
                    <i class="fa-solid ${gift.icon}"></i>
                    <span class="gift-cat">${catDisplay}</span>
                    ${purchased ? '<span class="purchased-badge">✓ Esgotado</span>' : ''}
                </div>
                <div class="gift-content">
                    <h3 class="gift-title">${gift.title}</h3>
                    <p class="gift-desc">${gift.desc}</p>
                    <div class="gift-price">R$ ${gift.price.toFixed(2).replace('.', ',')}</div>
                    ${progressHTML}
                    ${purchased
                        ? '<div class="gift-claimed"><i class="fa-solid fa-circle-check"></i> Todas as vagas já foram preenchidas</div>'
                        : `<button class="btn-primary-small gift-action" onclick="openModal(${gift.id})">Presentear</button>`
                    }
                </div>
            `;
            giftsGrid.appendChild(card);
        });
    }
}

// Filter Logic
function filterGifts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filtered = gifts.filter(gift => {
        const matchesSearch = gift.title.toLowerCase().includes(searchTerm) || gift.desc.toLowerCase().includes(searchTerm);
        const matchesCategory = currentFilter === 'all' || gift.category === currentFilter;
        return matchesSearch && matchesCategory;
    });
    
    renderGifts(filtered);
}

// Event Listeners for Filters
searchInput.addEventListener('input', filterGifts);

catBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update active class
        catBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update filter and render
        currentFilter = e.target.getAttribute('data-filter');
        filterGifts();
    });
});

// Header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(253, 251, 249, 0.9)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(253, 251, 249, 0.7)';
            header.style.boxShadow = 'none';
        }
    });
}

// Modal Logic
function openModal(id) {
    const gift = gifts.find(g => g.id === id);
    if (!gift) return;

    currentModalGiftId = id;

    modalBody.innerHTML = `
        <p>Você está prestes a escolher este item para a Anny. Para confirmar e realizar o pagamento, clique abaixo.</p>
        <div class="selected-gift">
            <div class="selected-gift-icon">
                <i class="fa-solid ${gift.icon}"></i>
            </div>
            <div style="flex: 1;">
                <h4 style="margin-bottom: 0.25rem;">${gift.title}</h4>
                <p class="text-sm text-muted">${gift.desc}</p>
            </div>
            <div style="font-weight: 600; color: var(--rose-deep); font-size: 1.1rem;">
                R$ ${gift.price.toFixed(2).replace('.', ',')}
            </div>
        </div>
    `;

    document.getElementById('paymentSection').style.display = 'block';
    modal.classList.add('active');
}

function close() {
    modal.classList.remove('active');
    setTimeout(() => {
        document.getElementById('paymentSection').style.display = 'none';
        modalBody.innerHTML = '';
        // Reset radio button to default
        const creditRadio = document.querySelector('input[name="payment"][value="credit"]');
        if(creditRadio) creditRadio.checked = true;
    }, 300);
}

closeModal.addEventListener('click', close);
cancelBtn.addEventListener('click', close);

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        close();
    }
});

confirmBtn.addEventListener('click', () => {
    // Redireciona para o link do Mercado Pago fornecido
    window.open('https://link.mercadopago.com.br/jessicacarolinaalves', '_blank');

    // Mark item as purchased (only non-fraldas)
    if (currentModalGiftId !== null) {
        const gift = gifts.find(g => g.id === currentModalGiftId);
        if (gift && gift.category !== 'fraldas') {
            markPurchased(currentModalGiftId);
        }
        currentModalGiftId = null;
    }

    close();
    // filterGifts() is now triggered automatically by Firebase onValue
});
