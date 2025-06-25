document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  if (page === 'servicos') carregarServicos();
  else if (page === 'galeria') carregarGaleria();
  else if (page === 'equipe') carregarEquipe();
  else if (page === 'contato') carregarContato();
  
});

// Serviço
function carregarServicos() {
  fetch('data/servicos.json')
    .then(res => res.json())
    .then(servicos => {
      const container = document.getElementById('servicos-container');
      servicos.forEach(servico => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${servico.titulo}</h3>
          <p>${servico.descricao}</p>
          ${servico.destaque ? '<span style="color: var(--laranja); font-weight: bold;">★ Destaque</span>' : ''}
        `;
        container.appendChild(card);
      });
    });
}

// Galeria
function carregarGaleria() {
  fetch('data/galeria.json')
    .then(res => res.json())
    .then(fotos => {
      const container = document.getElementById('galeria-container');
      fotos.forEach(foto => {
        const wrapper = document.createElement('div');
        wrapper.className = 'card';
        wrapper.style.maxWidth = '300px';

        wrapper.innerHTML = `
          <img src="${foto.imagem}" alt="${foto.descricao}" style="width: 100%; border-radius: 6px;">
          <h4>${foto.descricao}</h4>
          <p><strong>Local:</strong> ${foto.local}</p>
        `;
        container.appendChild(wrapper);
      });
    });
}

// Equipe
function carregarEquipe() {
  fetch('data/equipe.json')
    .then(res => res.json())
    .then(membros => {
      const container = document.getElementById('equipe-container');
      membros.forEach(membro => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.display = 'flex';
        card.style.alignItems = 'center';
        card.style.gap = '1rem';

        card.innerHTML = `
          <img src="${membro.foto}" alt="${membro.nome}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%;">
          <div>
            <h3>${membro.nome}</h3>
            <p><strong>${membro.cargo}</strong></p>
          </div>
        `;
        container.appendChild(card);
      });
    });
}

// Contato
function carregarContato() {
  fetch('data/contato.json')
    .then(res => res.json())
    .then(contato => {
      const container = document.getElementById('contato-container');
      container.innerHTML = `
        <p>📞 <strong>Telefone:</strong> ${contato.telefone}</p>
        <p>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/${contato.whatsapp}" target="_blank">Converse conosco</a></p>
        <p>✉️ <strong>Email:</strong> <a href="mailto:${contato.email}">${contato.email}</a></p>
        <p>📍 <strong>Endereço:</strong> ${contato.endereco}</p>
        <p>🕓 <strong>Horário de atendimento:</strong> ${contato.horario_funcionamento}</p>
        <p>🌐 <strong>Redes sociais:</strong> 
          <a href="${contato.instagram}" target="_blank">Instagram</a> | 
          <a href="${contato.facebook}" target="_blank">Facebook</a>
        </p>
      `;
    });
}
