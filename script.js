/* ==========================================================================
   OBSOLETO GDD - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initRainCanvas();
  initScrollSpyAndProgress();
  initDailyLoopTabs();
  initNodeMapSimulator();
  initAudioAmbience();
  initMobileMenu();
  initMermaidDiagram();
});

/* --------------------------------------------------------------------------
   1. Rain Animation Canvas (Atmospheric Lo-Fi Rain)
   -------------------------------------------------------------------------- */
function initRainCanvas() {
  const canvas = document.getElementById('rain-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const dropsCount = 75;
  const drops = [];

  for (let i = 0; i < dropsCount; i++) {
    drops.push({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 18 + 10,
      speed: Math.random() * 4 + 7,
      opacity: Math.random() * 0.4 + 0.15
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = '#93c5fd';
    ctx.lineWidth = 1;

    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      ctx.beginPath();
      ctx.globalAlpha = d.opacity;
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - 1, d.y + d.length);
      ctx.stroke();

      d.y += d.speed;
      d.x -= 0.4; // slight slant

      if (d.y > height) {
        d.y = -d.length;
        d.x = Math.random() * width;
      }
      if (d.x < 0) {
        d.x = width;
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* --------------------------------------------------------------------------
   2. Scroll Progress & Sidebar Spy
   -------------------------------------------------------------------------- */
function initScrollSpyAndProgress() {
  const progressBar = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('.doc-section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Daily Loop Interactive Explorer
   -------------------------------------------------------------------------- */
function initDailyLoopTabs() {
  const tabs = document.querySelectorAll('.loop-tab-btn');
  const stages = document.querySelectorAll('.loop-stage-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      stages.forEach((s) => s.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.target;
      const targetStage = document.getElementById(targetId);
      if (targetStage) {
        targetStage.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Node Map Route Simulator
   -------------------------------------------------------------------------- */
function initNodeMapSimulator() {
  const nodes = document.querySelectorAll('.route-node');
  const infoTitle = document.getElementById('node-info-title');
  const infoDesc = document.getElementById('node-info-desc');
  const infoStats = document.getElementById('node-info-stats');

  const nodeData = {
    chiba: {
      title: 'Nodo 1: Muelle Industrial & Zona Portuaria',
      desc: 'Salida de turno obrero a las 22:00. Alta afluencia de trabajadores agotados que buscan sopa hirviendo y caldo espeso. Clima costero húmedo, vigilancia policial moderada.',
      stats: 'Demanda de Fideos: Alta | Riesgo de Multa: Medio | Clima: Llovizna y viento marino'
    },
    fabrica: {
      title: 'Nodo 2: Cruce de Polígonos Industriales',
      desc: 'Carreteras de hormigón desgastadas por camiones pesados. Gasolinera 24 horas con refacciones básicas para motor. Buena oportunidad para comprar cartuchos de gas baratos.',
      stats: 'Demanda de Fideos: Media-Alta | Refacciones: Baratas | Clima: Niebla con hollín'
    },
    estacion: {
      title: 'Nodo 3: Apeadero Rural & Vía Muerta',
      desc: 'Población envejecida y ritmo detenido en el tiempo. Venta escasa pero diálogos profundos; trueque de cebollino y huevos frescos con un anciano jubilado de ferrocarriles.',
      stats: 'Demanda de Fideos: Baja (Trueque) | Inspiración Literaria: +40% | Clima: Viento frío'
    },
    onsen: {
      title: 'Nodo 4: Valle Termal & Paso de Niebla',
      desc: 'Carretera de montaña con curvas cerradas de 180°. El radiador sufre en tercera marcha. Turistas de fin de semana dispuestos a pagar buenas propinas por un tazón caliente.',
      stats: 'Demanda de Fideos: Muy Alta | Desgaste Radiador: Severo | Clima: Niebla densa y vapor'
    },
    soya: {
      title: 'Nodo 5: Cabo Sōya (Fin de Trayecto)',
      desc: 'El punto más septentrional de Japón. El asfalto muere frente al mar helado. Momento de apagar el motor, contemplar el horizonte con el retrato en el tablero y esparcir las cenizas.',
      stats: 'Destino Final | Catarsis Narrativa | Clima: Temporal del mar del Norte'
    }
  };

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      nodes.forEach((n) => n.classList.remove('active'));
      node.classList.add('active');

      const key = node.dataset.node;
      const data = nodeData[key];
      if (data && infoTitle && infoDesc && infoStats) {
        infoTitle.textContent = data.title;
        infoDesc.textContent = data.desc;
        infoStats.textContent = data.stats;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Lo-Fi Generative Web Audio (Atmospheric Rain Hiss)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let rainNoiseNode = null;
let rainGainNode = null;
let isAudioPlaying = false;

function initAudioAmbience() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isAudioPlaying) {
      startAmbientRain(audioCtx);
      toggleBtn.innerHTML = '<span>🌧️</span> <span>Lluvia: Activa</span>';
      toggleBtn.classList.add('btn-primary');
      isAudioPlaying = true;
      showToast('Ambiente sonoro de lluvia encendido 🌧️');
    } else {
      stopAmbientRain();
      toggleBtn.innerHTML = '<span>🌧️</span> <span>Ambiente: Apagado</span>';
      toggleBtn.classList.remove('btn-primary');
      isAudioPlaying = false;
      showToast('Ambiente sonoro en silencio');
    }
  });
}

function startAmbientRain(ctx) {
  // Generate filtered pink/brown noise for rain ambience
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let lastOut = 0.0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    // Brown noise integration
    data[i] = (lastOut + 0.02 * white) / 1.02;
    lastOut = data[i];
    data[i] *= 3.5;
  }

  rainNoiseNode = ctx.createBufferSource();
  rainNoiseNode.buffer = buffer;
  rainNoiseNode.loop = true;

  // Lowpass filter for muffled rain against car glass
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, ctx.currentTime);

  rainGainNode = ctx.createGain();
  rainGainNode.gain.setValueAtTime(0.08, ctx.currentTime);

  rainNoiseNode.connect(filter);
  filter.connect(rainGainNode);
  rainGainNode.connect(ctx.destination);

  rainNoiseNode.start(0);
}

function stopAmbientRain() {
  if (rainNoiseNode) {
    try {
      rainNoiseNode.stop();
      rainNoiseNode.disconnect();
    } catch (e) {
      console.warn(e);
    }
    rainNoiseNode = null;
  }
}


/* --------------------------------------------------------------------------
   7. Mobile Navigation Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    const links = sidebar.querySelectorAll('a');
    links.forEach((l) => {
      l.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Toast Utility
   -------------------------------------------------------------------------- */
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* --------------------------------------------------------------------------
   8. Mermaid Diagram Initialization
   -------------------------------------------------------------------------- */
function initMermaidDiagram() {
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        darkMode: true,
        background: '#090c10',
        primaryColor: '#1e293b',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#38bdf8',
        lineColor: '#f59e0b',
        secondaryColor: '#1a2332',
        tertiaryColor: '#0f141c',
        fontFamily: "'Inter', sans-serif"
      }
    });
  }
}

