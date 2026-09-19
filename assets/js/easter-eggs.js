/* ============================================================
   PHYSICS EASTER EGGS
   ============================================================ */

/* ---------- 1. Fundamental constants in the browser console ---------- */
(function () {
  var constants = [
    { quantity: 'speed of light in vacuum',          symbol: 'c',     value: '299792458 m/s (exact)' },
    { quantity: 'Planck constant',                   symbol: 'h',     value: '6.62607015e-34 J s (exact)' },
    { quantity: 'reduced Planck constant',           symbol: 'hbar',  value: '1.0545718176e-34 J s' },
    { quantity: 'elementary charge',                 symbol: 'e',     value: '1.602176634e-19 C (exact)' },
    { quantity: 'fine-structure constant',           symbol: 'alpha', value: '1/137.035999084' },
    { quantity: 'electron mass',                     symbol: 'm_e',   value: '9.1093837015e-31 kg' },
    { quantity: 'proton mass',                       symbol: 'm_p',   value: '1.67262192369e-27 kg' },
    { quantity: 'Avogadro constant',                 symbol: 'N_A',   value: '6.02214076e23 1/mol (exact)' },
    { quantity: 'Boltzmann constant',                symbol: 'k_B',   value: '1.380649e-23 J/K (exact)' },
    { quantity: 'gravitational constant',            symbol: 'G',     value: '6.67430e-11 m^3/(kg s^2)' },
    { quantity: 'age of the Universe',               symbol: 't_0',   value: '4.354e17 s (see /age/)' }
  ];
  console.log('%cFundamental physical constants', 'font-weight:bold;font-size:14px;color:#2c7bb6;');
  console.table(constants);
  console.log('%cPsst... curious URLs on this site: /age/', 'font-style:italic;color:#999;');
})();

/* ---------- 2. Calendar & night-sky easter eggs ---------- */
(function () {
  var now = new Date();
  var month = now.getMonth();
  var day = now.getDate();
  var hour = now.getHours();

  /* ===== 14 March — Pi Day: digits of pi march across the header ===== */
  if (month === 2 && day === 14) {
    var PI_DIGITS = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
    var style = document.createElement('style');
    style.textContent = '@keyframes pi-march { from { transform: translateX(0); } to { transform: translateX(-50%); } } body { padding-top: 26px !important; } nav.fixed-top, nav.navbar { top: 26px !important; }';
    document.head.appendChild(style);
    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:26px;overflow:hidden;background:#101418;color:#7fd4ff;font-family:monospace;font-size:15px;line-height:26px;z-index:2000;pointer-events:none;';
    var track = document.createElement('span');
    track.style.cssText = 'display:inline-block;white-space:nowrap;padding-left:100%;animation:pi-march 40s linear infinite;';
    track.textContent = PI_DIGITS + '   ...   Happy Pi Day, and happy birthday, Albert!   ...   ' + PI_DIGITS + '   ...   Happy Pi Day, and happy birthday, Albert!   ...   ';
    bar.appendChild(track);
    document.body.appendChild(bar);
  }

  /* ===== 1 April — Newton's Day: an apple falls onto the header ===== */
  if (month === 3 && day === 1) {
    window.addEventListener('load', function () {
      var navbar = document.querySelector('nav.navbar, nav, header');
      var landTop = navbar ? navbar.getBoundingClientRect().bottom - 34 : 40;
      var apple = document.createElement('div');
      apple.textContent = '🍎';
      apple.style.cssText = 'position:fixed;top:-70px;left:50%;font-size:44px;z-index:3000;pointer-events:none;transition:top 1.1s cubic-bezier(.55,0,1,.45);';
      document.body.appendChild(apple);
      setTimeout(function () { apple.style.top = landTop + 'px'; }, 800);
      setTimeout(function () {
        apple.style.transition = 'transform .25s';
        apple.style.transform = 'scale(1.35,0.65)';
        var note = document.createElement('div');
        note.textContent = "Happy Newton's Day! Gravity still works. F = G m1 m2 / r^2";
        note.style.cssText = 'position:fixed;top:' + (landTop + 46) + 'px;left:50%;transform:translateX(-50%);background:#101418;color:#ffd76e;padding:6px 16px;border-radius:6px;font-family:monospace;font-size:13px;z-index:3000;white-space:nowrap;';
        document.body.appendChild(note);
        setTimeout(function () { note.remove(); apple.remove(); }, 4500);
      }, 1950);
    });
  }

  /* ===== 14 December — Quantum Day: reality becomes discrete ===== */
  if (month === 11 && day === 14) {
    var lattice = document.createElement('div');
    lattice.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:1500;opacity:.22;background-image:linear-gradient(#4aa3ff 1px, transparent 1px),linear-gradient(90deg,#4aa3ff 1px, transparent 1px);background-size:24px 24px;';
    document.body.appendChild(lattice);
    var q = document.createElement('style');
    q.textContent = '*, *::before, *::after { transition-timing-function: steps(6, end) !important; animation-timing-function: steps(6, end) !important; scroll-behavior: auto !important; }';
    document.head.appendChild(q);
    document.body.insertAdjacentHTML('afterbegin', '<svg style="position:absolute;width:0;height:0" aria-hidden="true"><filter id="quantize"><feComponentTransfer><feFuncR type="discrete" tableValues="0 0.25 0.5 0.75 1"/><feFuncG type="discrete" tableValues="0 0.25 0.5 0.75 1"/><feFuncB type="discrete" tableValues="0 0.25 0.5 0.75 1"/></feComponentTransfer></filter></svg>');
    ['main', '#content', 'footer'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) el.style.filter = 'url(#quantize)';
    });
    var badge = document.createElement('div');
    badge.textContent = '14 December — Quantum Day. Today reality is discrete: colour and motion come in quanta.';
    badge.style.cssText = 'position:fixed;bottom:12px;left:50%;transform:translateX(-50%);background:#101418;color:#7fd4ff;border:1px solid #4aa3ff;padding:6px 16px;border-radius:6px;font-family:monospace;font-size:12px;z-index:2000;white-space:nowrap;';
    document.body.appendChild(badge);
  }

  /* ===== Night hours (22:00–05:00): starry sky with a constellation ===== */
  if (hour >= 22 || hour < 5) {
    var navEl = document.querySelector('nav.navbar, nav');
    if (navEl) navEl.style.background = 'rgba(8,12,32,0.88)';
    var sky = document.createElement('canvas');
    sky.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:42vh;z-index:-1;pointer-events:none;';
    document.body.appendChild(sky);
    var ctx = sky.getContext('2d');
    var stars = [];
    function resize() {
      sky.width = window.innerWidth;
      sky.height = window.innerHeight * 0.42;
      stars = [];
      for (var i = 0; i < 140; i++) {
        stars.push({ x: Math.random() * sky.width, y: Math.random() * sky.height, r: Math.random() * 1.4 + 0.3, p: Math.random() * 6.283, s: 0.5 + Math.random() * 1.5 });
      }
    }
    resize();
    window.addEventListener('resize', resize);
    var dipper = [[0.12,0.30],[0.20,0.34],[0.28,0.36],[0.36,0.35],[0.45,0.42],[0.44,0.55],[0.34,0.56]];
    function draw(t) {
      ctx.clearRect(0, 0, sky.width, sky.height);
      var g = ctx.createLinearGradient(0, 0, 0, sky.height);
      g.addColorStop(0, 'rgba(6,10,28,0.92)');
      g.addColorStop(1, 'rgba(6,10,28,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, sky.width, sky.height);
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        ctx.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(t / 1000 * st.s + st.p));
        ctx.fillStyle = '#dfe9ff';
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 0.9;
      ctx.strokeStyle = 'rgba(140,180,255,0.55)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (var j = 0; j < dipper.length; j++) {
        var x = dipper[j][0] * sky.width, y = dipper[j][1] * sky.height;
        if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.fillStyle = '#bcd4ff';
      for (var k = 0; k < dipper.length; k++) {
        ctx.beginPath();
        ctx.arc(dipper[k][0] * sky.width, dipper[k][1] * sky.height, 2.2, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }
})();
