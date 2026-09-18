---
layout: page
title: "Age of the Universe"
permalink: /age/
---

# The Age of the Universe, Live

The Universe has existed for approximately

<div id="age-seconds" style="font-family: monospace; font-size: 1.8em; text-align: center; padding: 0.6em 0;">…</div>

seconds, in the rest frame of the Earth.

And while you have been reading this page, it has aged another

<div id="age-here" style="font-family: monospace; text-align: center; font-size: 1.2em;">0.0</div>

seconds. You are welcome.

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var AGE_SECONDS = 4.354e17; // ~13.8 Gyr expressed in seconds
    var total = document.getElementById('age-seconds');
    var here = document.getElementById('age-here');
    var t0 = Date.now();
    function tick() {
      var spent = (Date.now() - t0) / 1000;
      total.textContent = (AGE_SECONDS + spent).toExponential(6);
      here.textContent = spent.toFixed(1);
    }
    tick();
    setInterval(tick, 100);
  });
</script>

*A note for the pedantic: the age is quoted in the comoving frame of the cosmic microwave background. Your personal proper time may differ if you have been travelling at relativistic speeds. Gravitational time dilation near your device is neglected, as is dark energy's sense of humour.*

[Back to safer, slower physics]({{ '/' | relative_url }})
