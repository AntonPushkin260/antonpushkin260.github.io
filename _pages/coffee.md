---
layout: page
title: "Coffee"
permalink: /coffee/
---

<style>
  .coffee-eq { font-family: monospace; text-align: center; background: rgba(44,123,182,0.05); border: 1px solid #2c7bb6; border-radius: 8px; padding: 1.2em; margin: 1.5em 0; }
  .coffee-eq b { color: #2c7bb6; }
  #coffee-wrap { max-width: 640px; margin: 0 auto; text-align: center; }
  #coffee-canvas { width: 100%; height: auto; background: rgba(0,0,0,0.02); border-radius: 8px; }
  #cups-range { width: 100%; margin: 1.2em 0; }
  #cups-readout { font-family: monospace; font-size: 1.4em; color: #2c7bb6; font-weight: 700; }
  #coffee-status { font-family: monospace; min-height: 2.6em; color: #555; line-height: 1.6; margin-top: 0.8em; }
</style>

# Coffee: The Physicist's Fuel

According to the **First Law of Research Thermodynamics**, coffee does not create energy —
it merely transfers it from future sleep into present equations.

<div class="coffee-eq">
  The Physicist's Equation of State:<br><br>
  <b>P = C · D / S</b><br><br>
  where <b>P</b> = productivity, <b>C</b> = coffee, <b>D</b> = deadline urgency, <b>S</b> = sleep
</div>

Below is the experimentally measured dependence of productivity on coffee intake.
Drag the slider to find your operating point.

<div id="coffee-wrap">
  <canvas id="coffee-canvas" width="640" height="240"></canvas>
  <input type="range" id="cups-range" min="0" max="7" step="1" value="3">
  <div id="cups-readout">3 cups</div>
  <div id="coffee-status"></div>
</div>

<div style="text-align:center; margin-top:2em; font-size:0.85em; color:#999; font-family:monospace;">
  Error bars intentionally omitted. This result has not been peer-reviewed.
</div>

<script>
(function () {
  var statuses = [
    'The wave function of sleep has not yet collapsed. Consciousness: undefined.',
    'First-order perturbation detected. Consciousness is slowly emerging from the vacuum.',
    'Approaching optimal operating conditions. Equations begin to commute.',
    'PEAK PRODUCTIVITY. The Standard Model of the mind is complete and stable.',
    'Minor instabilities detected. Hands now exhibit harmonic oscillation.',
    'WARNING: entropy increasing. Thoughts decohere faster than they are written down.',
    'DANGER: perceiving extra spatial dimensions. Do not submit anything today.',
    'Undefined behavior. Coffee has entered a superfluid phase. Seek help.'
  ];

  var range = document.getElementById('cups-range');
  var readout = document.getElementById('cups-readout');
  var status = document.getElementById('coffee-status');
  var canvas = document.getElementById('coffee-canvas');
  var ctx = canvas.getContext('2d');
  var W = canvas.width, H = canvas.height;
  var PAD = 40, MAX_CUPS = 7;

  function productivity(c) {
    return 100 * Math.exp(-Math.pow(c - 3, 2) / 4);
  }

  function toX(c) { return PAD + (c / MAX_CUPS) * (W - 2 * PAD); }
  function toY(p) { return H - PAD - (p / 100) * (H - 2 * PAD); }

  function draw(cups) {
    ctx.clearRect(0, 0, W, H);

    // axes
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(PAD, PAD - 10);
    ctx.lineTo(PAD, H - PAD);
    ctx.lineTo(W - PAD + 10, H - PAD);
    ctx.stroke();

    // axis labels
    ctx.fillStyle = '#888';
    ctx.font = '12px monospace';
    ctx.fillText('productivity', 8, PAD - 15);
    ctx.fillText('cups of coffee', W - PAD - 30, H - PAD + 30);
    ctx.fillText('100%', 5, toY(100) + 4);
    ctx.fillText('0%', 12, toY(0) + 4);

    // curve
    ctx.strokeStyle = '#2c7bb6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (var c = 0; c <= MAX_CUPS; c += 0.05) {
      var x = toX(c), y = toY(productivity(c));
      if (c === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // marker
    var mx = toX(cups), my = toY(productivity(cups));
    ctx.fillStyle = '#d7191c';
    ctx.beginPath();
    ctx.arc(mx, my, 6, 0, 6.283);
    ctx.fill();
    // dashed guide to axes
    ctx.strokeStyle = 'rgba(215,25,28,0.4)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(mx, my); ctx.lineTo(mx, H - PAD);
    ctx.moveTo(mx, my); ctx.lineTo(PAD, my);
    ctx.stroke();
    ctx.setLineDash([]);
    // marker value
    ctx.fillStyle = '#d7191c';
    ctx.fillText(Math.round(productivity(cups)) + '%', mx + 10, my - 8);
  }

  function update() {
    var c = parseInt(range.value, 10);
    readout.textContent = c + (c === 1 ? ' cup' : ' cups');
    status.textContent = statuses[c];
    draw(c);
  }

  range.addEventListener('input', update);
  update();
})();
</script>
