// Inisialisasi Peta Leaflet untuk Distribusi
function initDistributionMap() {
  // CDN/local Leaflet gagal dimuat -> jangan biarkan map blank diam-diam
  if (typeof L === 'undefined') {
    const el = document.getElementById('distribution-map');
    if (el) el.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:8px;color:#64748b;font-size:14px;text-align:center;padding:20px">' +
      '<b style="color:#1e293b">Peta tidak dapat dimuat</b>' +
      '<span style="font-size:12.5px">File <code>asset/vendor/leaflet/leaflet.js</code> bermasalah.</span></div>';
    console.error('Leaflet (L) tidak terdefinisi — pastikan asset/vendor/leaflet/leaflet.js ada & termuat.');
    return;
  }
  const mapElement = document.getElementById('distribution-map');
  if (!mapElement) return;

  if (window.distributionMapInstance) {
    window.distributionMapInstance.remove();
  }

  const map = L.map('distribution-map', {
    center: [-2.548926, 118.014863],
    zoom: 5,
    minZoom: 4,
    maxZoom: 9,
    scrollWheelZoom: false
  });

  window.distributionMapInstance = map;

  // Bagian ubin (tile) dari internet. Kalau jaringan gagal, penanya tetap muncul.
  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  });
  tiles.on('tileerror', () => {
    const el = document.getElementById('distribution-map');
    if (el && !el.querySelector('.map-net-hint')) {
      const hint = document.createElement('div');
      hint.className = 'map-net-hint';
      hint.style.cssText = 'position:absolute;inset:auto 16px 16px 16px;z-index:500;background:rgba(255,255,255,.92);border:1px solid #e2e8f0;border-radius:10px;padding:8px 12px;font-size:12px;color:#475569;text-align:center';
      hint.textContent = 'Tembok peta butuh internet (tile.openstreetmap.org). Marker tetap tampil walau peta belum termuat.';
      el.appendChild(hint);
    }
  });
  tiles.addTo(map);

  // Ukuran kontainer 0 saat init = map blank -> paksa hitung ulang sampai ukuran valid
  const fix = () => map.invalidateSize();
  fix();
  [200, 500, 1000].forEach(t => setTimeout(fix, t));
  if (window.ResizeObserver) {
    new ResizeObserver(fix).observe(mapElement);
  } else {
    addEventListener('resize', fix);
  }
  
  const locations = [
    { name: "Palembang", region: "Sumatera", lat: -2.9761, lng: 104.7754 },
    { name: "Indralaya (Pusat)", region: "Sumatera", lat: -3.2251, lng: 104.6494, isHQ: true },
    { name: "Medan", region: "Sumatera", lat: 3.5952, lng: 98.6722 },
    { name: "Padang", region: "Sumatera", lat: -0.9471, lng: 100.4172 },
    { name: "Pekanbaru", region: "Sumatera", lat: 0.5071, lng: 101.4478 },
    { name: "Jambi", region: "Sumatera", lat: -1.6101, lng: 103.6131 },
    { name: "Bandar Lampung", region: "Sumatera", lat: -5.4500, lng: 105.2667 },
    { name: "Bengkulu", region: "Sumatera", lat: -3.8004, lng: 102.2655 },
    { name: "Jakarta", region: "Jawa", lat: -6.2088, lng: 106.8456 },
    { name: "Bandung", region: "Jawa", lat: -6.9175, lng: 107.6191 },
    { name: "Semarang", region: "Jawa", lat: -6.9667, lng: 110.4167 },
    { name: "Yogyakarta", region: "Jawa", lat: -7.7956, lng: 110.3695 },
    { name: "Surabaya", region: "Jawa", lat: -7.2575, lng: 112.7521 },
    { name: "Malang", region: "Jawa", lat: -7.9666, lng: 112.6326 },
    { name: "Solo", region: "Jawa", lat: -7.5755, lng: 110.8243 },
    { name: "Serang", region: "Jawa", lat: -6.1104, lng: 106.1625 },
    { name: "Denpasar", region: "Bali & Nusa Tenggara", lat: -8.6705, lng: 115.2126 },
    { name: "Mataram", region: "Bali & Nusa Tenggara", lat: -8.5833, lng: 116.1167 },
    { name: "Kupang", region: "Bali & Nusa Tenggara", lat: -10.1772, lng: 123.6070 },
    { name: "Pontianak", region: "Kalimantan", lat: -0.0263, lng: 109.3425 },
    { name: "Banjarmasin", region: "Kalimantan", lat: -3.3167, lng: 114.5900 },
    { name: "Balikpapan", region: "Kalimantan", lat: -1.2379, lng: 116.8529 },
    { name: "Samarinda", region: "Kalimantan", lat: -0.5022, lng: 117.1536 },
    { name: "Makassar", region: "Sulawesi", lat: -5.1477, lng: 119.4327 },
    { name: "Manado", region: "Sulawesi", lat: 1.4748, lng: 124.8428 },
    { name: "Palu", region: "Sulawesi", lat: -0.9003, lng: 119.8780 },
    { name: "Kendari", region: "Sulawesi", lat: -3.9985, lng: 122.5126 },
    { name: "Ambon", region: "Maluku & Papua", lat: -3.6554, lng: 128.1906 },
    { name: "Ternate", region: "Maluku & Papua", lat: 0.7900, lng: 127.3800 },
    { name: "Jayapura", region: "Maluku & Papua", lat: -2.5411, lng: 140.7186 },
    { name: "Sorong", region: "Maluku & Papua", lat: -0.8762, lng: 131.2558 }
  ];
  
  function createCustomIcon(label, isHQ = false) {
    const hqClass = isHQ ? 'hq' : '';
    return L.divIcon({
      className: 'custom-pin',
      html: `<div class="pin-head ${hqClass}"></div><div class="pin-line ${hqClass}"></div><div class="pin-label ${hqClass}">${label}</div>`,
      iconSize: [80, 50],
      iconAnchor: [40, 25]
    });
  }
  
  locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], {
      icon: createCustomIcon(loc.name, loc.isHQ)
    }).addTo(map);
    
    const statusTxt = loc.isHQ ? '<b style="color:#EA00D9;">Kantor Pusat</b>' : 'Cabang Distribusi';
    marker.bindPopup(`<div style="text-align:center;"><strong style="font-size:14px;color:#1e293b;">${loc.name}</strong><br><span style="font-size:12px;color:#64748b;">Wilayah: ${loc.region}</span><br><span style="font-size:11px;">Status: ${statusTxt}</span></div>`);
  });
}

addEventListener('hashchange', () => {
  if ((location.hash || '#beranda') === '#beranda') {
    setTimeout(initDistributionMap, 300);
  }
});

addEventListener('load', () => {
  if ((location.hash || '#beranda') === '#beranda') {
    setTimeout(initDistributionMap, 300);
  }
});
