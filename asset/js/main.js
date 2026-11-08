const $=s=>document.querySelector(s);
const EMOJI_ICON_MAP = {
  "ðŸ”¬": "microscope", "ðŸ›¡ï¸": "shield-check", "ðŸ›¡": "shield-check", "ðŸŒ±": "sprout",
  "ðŸŒ¿": "leaf", "ðŸƒ": "leaf", "ðŸ¤": "handshake", "ðŸ’¡": "lightbulb", "ðŸ­": "factory",
  "ðŸ“‹": "clipboard-check", "âœ…": "check-circle-2", "ðŸ“¦": "package", "ðŸšš": "truck",
  "ðŸ“£": "megaphone", "ðŸ“¢": "megaphone", "ðŸ“‘": "file-text", "ðŸ“„": "file-text",
  "ðŸ‘¥": "users", "ðŸ‘¤": "user", "ðŸ“¥": "package", "ðŸ”": "search", "ðŸ”Ž": "search",
  "âš–ï¸": "scale", "âš–": "scale", "ðŸŒ€": "flask-conical", "ðŸ§ª": "flask-conical",
  "ðŸ’Š": "pill", "ðŸ§«": "microscope", "ðŸ’§": "droplets", "âœ¨": "sparkles",
  "ðŸŒ¸": "flower-2", "ðŸŒ¼": "flower-2", "ðŸ“œ": "file-text", "ðŸ…": "award",
  "ðŸŒ": "globe", "ðŸ¦º": "shield-check", "ðŸŽ“": "graduation-cap", "ðŸ¦ ": "microscope",
  "ðŸš¿": "droplets", "ðŸ“…": "calendar", "ðŸ¥¤": "droplets", "ðŸ’°": "briefcase",
  "ðŸ’¼": "briefcase", "ðŸ“¨": "mail", "âœ‰ï¸": "mail", "âœ‰": "mail", "ðŸ—£ï¸": "users",
  "ðŸ—£": "users", "ðŸ©º": "stethoscope", "ðŸŽ‰": "sparkles", "ðŸ§˜": "heart",
  "ðŸ“š": "book-open", "ðŸ†": "award", "ðŸŽ": "award", "ðŸ—“ï¸": "calendar", "ðŸ—“": "calendar",
  "â±ï¸": "clock", "â±": "clock", "ðŸŽ¯": "target", "ðŸ”’": "lock", "âš ï¸": "alert-triangle",
  "âš ": "alert-triangle", "ðŸ”—": "link", "ðŸ¥": "cross", "ðŸš€": "rocket", "ðŸŽ¨": "palette",
  "ðŸ–‹ï¸": "pen-tool", "ðŸ–‹": "pen-tool", "ðŸ…°ï¸": "pen-tool", "ðŸ…°": "pen-tool", "ðŸŒ": "globe",
  "ðŸ“Š": "bar-chart-2", "ðŸ“": "map-pin", "ðŸ¢": "building-2", "ðŸ“ž": "phone", "ðŸ•˜": "clock",
  "ðŸ“ˆ": "trending-up", "ðŸ’¬": "message-square", "ðŸ”„": "refresh-cw", "ðŸŸ¢": "circle-dot",
  "ðŸ§´": "sparkles"
};
function getIcon(name, cls="w-5 h-5") {
  const iconName = EMOJI_ICON_MAP[name] || name;
  return `<i data-lucide="${iconName}" class="${cls}"></i>`;
}

const cats=["Herbal & Fitofarmaka","Vitamin & Suplemen","Nyeri & Demam","Saluran Cerna","Pernapasan","Kulit & Topikal"];
const forms=["Kapsul","Tablet","Sirup","Salep/Krim","Tetes Mata","Sachet","Larutan Kumur","Balsem","Oral Drops","Hand Sanitizer","Shampo","Kosmetik","Infus","Intranasal Spray"];const gol=["Herbal Terstandar &amp; Fitofarmaka","Obat Bebas &amp; Bebas Terbatas","Obat Keras (Resep)","Suplemen &amp; Perawatan"];
const cc=["#7C13A4","#2AAEB6","#0B4784","#EA00D9","#0B0A4E","#7C13A4"];
const raw="ARTEVIA:0,SIRVANA:6,NETRABIRU:4,AMERTAVIA:0,CENTELIA:0,JAHENDRA:5,HEPARUNA:0,KURKUFLEX:1,NIRAGARD:2,ANDRAGO:0,CIRAVITA:1,SOLARIS D3:0,ZINCARA:1,ENERVIA B:1,OMEGAVELA:0,KIDORA:2,OSTEVA:1,FERROLA:1,TOKOVERA:0,IONARA:5,PARANOVA 500:1,PROFENIA 200:1,BUPRIKID:2,REDARA GEL:3,OLIGA:7,SUHURA:8,MEFENIA 500:1,MIGRELA:1,HANGARA BALM:7,BACORA:0,LAMBUNGIA:2,FLORABIO:5,BEHINDRA:5,GALANGA:0,DIMENVIA:1,LANCARA:1,TENANGA DROPS:8,SILIMARA:0,GASLEGA:1,ADASARI:2,SIRILEGA:2,TUSFRIA:2,PILEXA:1,NASALEGA:13,EKSPEKTRA:2,NAFASIA:0,FLUNOCTA:1,IODARA:3,LUKARA:3,GATARA:3,MIKORA:3,SURYAVEIL:11,TELANGLOW:11,KLARISA:3,AMERTA DEW:11,ZIPIRA:10,TANGARA CLEAN:9,GUAVINE:9,ASCORBIA:12";
const P=raw.split(",").map((s,i)=>{const[n,f]=s.split(":");return{n,f:+f,c:Math.floor(i/10),i,g:+"000000000033333333331111112210131011101001111121011112332313"[i]}});
const prodDetails={
"ARTEVIA":{comp:"Ekstrak Artemisia annua 200 mg",ind:"Membantu memelihara daya tahan tubuh",dose:"1 kapsul 2x sehari",bpom:"DTL2324001234"},
"SIRVANA":{comp:"Ekstrak daun sirih 100 mg",ind:"Obat kumur herbal untuk kesehatan mulut",dose:"Kumur 15 ml, 2-3x sehari",bpom:"DBL2324001235"},
"NETRABIRU":{comp:"Ekstrak bunga telang 50 mg",ind:"Membantu menjaga kesehatan mata",dose:"1 tetes pada mata 2-3x sehari",bpom:"DBL2324001236"},
"AMERTAVIA":{comp:"Echinacea extract 250 mg, Zinc 10 mg",ind:"Membantu meningkatkan sistem imun",dose:"1 kapsul 1x sehari",bpom:"DTL2324001237"},
"CENTELIA":{comp:"Ekstrak Centella asiatica 300 mg",ind:"Membantu menenangkan pikiran dan meningkatkan konsentrasi",dose:"1 kapsul 2x sehari",bpom:"DTL2324001238"},
"JAHENDRA":{comp:"Ekstrak jahe merah 500 mg",ind:"Membantu menghangatkan badan dan meredakan masuk angin",dose:"1 sachet dalam 150 ml air panas",bpom:"DBL2324001239"},
"HEPARUNA":{comp:"Ekstrak temulawak 400 mg",ind:"Membantu memelihara fungsi hati",dose:"1 kapsul 2x sehari",bpom:"DTL2324001240"},
"KURKUFLEX":{comp:"Ekstrak kunyit 300 mg, Piperin 5 mg",ind:"Membantu meredakan nyeri sendi dan meningkatkan fleksibilitas",dose:"1 tablet 2x sehari",bpom:"DBL2324001241"},
"NIRAGARD":{comp:"Ekstrak meniran 250 mg",ind:"Membantu memelihara kesehatan hati dan ginjal",dose:"10 ml sirup 3x sehari",bpom:"DBL2324001242"},
"ANDRAGO":{comp:"Ekstrak sambiloto 200 mg",ind:"Membantu menurunkan demam",dose:"1 kapsul 3x sehari",bpom:"DTL2324001243"},
"CIRAVITA":{comp:"Vitamin C 500 mg",ind:"Suplemen vitamin C untuk daya tahan tubuh",dose:"1 tablet 1x sehari",bpom:"DBL2324001244"},
"SOLARIS D3":{comp:"Vitamin D3 1000 IU",ind:"Membantu memelihara kesehatan tulang",dose:"1 kapsul 1x sehari",bpom:"DTL2324001245"},
"ZINCARA":{comp:"Zinc sulfate 20 mg",ind:"Suplemen zinc untuk sistem imun",dose:"1 tablet 1x sehari",bpom:"DBL2324001246"},
"ENERVIA B":{comp:"Vitamin B Complex",ind:"Membantu metabolisme energi",dose:"1 tablet 1x sehari",bpom:"DBL2324001247"},
"OMEGAVELA":{comp:"Omega-3 1000 mg (EPA 180mg, DHA 120mg)",ind:"Membantu kesehatan jantung dan otak",dose:"1 kapsul 1-2x sehari",bpom:"DTL2324001248"},
"KIDORA":{comp:"Multivitamin + Mineral untuk anak",ind:"Suplemen untuk tumbuh kembang anak",dose:"5 ml sirup 1x sehari",bpom:"DBL2324001249"},
"OSTEVA":{comp:"Kalsium karbonat 500 mg, Vitamin D3 200 IU",ind:"Membantu memelihara kepadatan tulang",dose:"1 tablet 1-2x sehari",bpom:"DBL2324001250"},
"FERROLA":{comp:"Ferrous fumarate 200 mg, Asam folat 400 mcg",ind:"Suplemen zat besi untuk mencegah anemia",dose:"1 tablet 1x sehari",bpom:"DBL2324001251"},
"TOKOVERA":{comp:"Vitamin E natural 400 IU",ind:"Antioksidan untuk kesehatan kulit",dose:"1 kapsul 1x sehari",bpom:"DTL2324001252"},
"IONARA":{comp:"Elektrolit (Na, K, Cl)",ind:"Menggantikan cairan dan elektrolit tubuh",dose:"1 sachet dalam 200 ml air",bpom:"DBL2324001253"},
"PARANOVA 500":{comp:"Paracetamol 500 mg",ind:"Meredakan nyeri dan menurunkan demam",dose:"1 tablet 3-4x sehari",bpom:"DBL2324001254"},
"PROFENIA 200":{comp:"Ibuprofen 200 mg",ind:"Meredakan nyeri dan inflamasi ringan hingga sedang",dose:"1 tablet 3-4x sehari",bpom:"DBL2324001255"},
"BUPRIKID":{comp:"Ibuprofen 100 mg/5ml",ind:"Pereda nyeri dan penurun demam untuk anak",dose:"5-10 ml sesuai berat badan, 3-4x sehari",bpom:"DBL2324001256"},
"REDARA GEL":{comp:"Diclofenac diethylamine 1%",ind:"Meredakan nyeri otot dan sendi",dose:"Oleskan tipis 3-4x sehari",bpom:"DBL2324001257"},
"OLIGA":{comp:"Methyl salicylate 10%, Menthol 5%",ind:"Meredakan nyeri otot dan pegal",dose:"Oleskan pada area nyeri 2-3x sehari",bpom:"DBL2324001258"},
"SUHURA":{comp:"Paracetamol 120 mg/ml",ind:"Penurun demam untuk bayi dan anak",dose:"0.5-1 ml per kg BB, maksimal 4x sehari",bpom:"DBL2324001259"},
"MEFENIA 500":{comp:"Mefenamic acid 500 mg",ind:"Meredakan nyeri sedang hingga berat",dose:"1 tablet 3x sehari setelah makan",bpom:"DKL2324001260"},
"MIGRELA":{comp:"Paracetamol 500 mg, Caffeine 50 mg",ind:"Meredakan sakit kepala dan migrain",dose:"1 tablet saat sakit kepala, maksimal 4x sehari",bpom:"DBL2324001261"},
"HANGARA BALM":{comp:"Camphor 10%, Menthol 8%, Eucalyptus oil 5%",ind:"Menghangatkan dan meredakan gejala masuk angin",dose:"Oleskan pada dada, punggung, leher",bpom:"DBL2324001262"},
"BACORA":{comp:"Bacopa monnieri extract 300 mg",ind:"Membantu meningkatkan fungsi kognitif",dose:"1 kapsul 2x sehari",bpom:"DTL2324001263"},
"LAMBUNGIA":{comp:"Antasida (Al hidroksida 200mg, Mg hidroksida 200mg)",ind:"Meredakan gejala maag dan kelebihan asam lambung",dose:"1 sendok takar (5ml) 3-4x sehari",bpom:"DBL2324001264"},
"FLORABIO":{comp:"Lactobacillus acidophilus 1x10^9 CFU",ind:"Probiotik untuk kesehatan saluran cerna",dose:"1 sachet 1-2x sehari",bpom:"DBL2324001265"},
"BEHINDRA":{comp:"Oralit (Na, K, Cl, Glukosa)",ind:"Mengatasi dehidrasi akibat diare",dose:"1 sachet dalam 200 ml air, minum setelah BAB",bpom:"DBL2324001266"},
"GALANGA":{comp:"Ekstrak lengkuas 300 mg",ind:"Membantu meredakan mual dan gangguan pencernaan",dose:"1 kapsul 2-3x sehari",bpom:"DTL2324001267"},
"DIMENVIA":{comp:"Dimenhydrinate 50 mg",ind:"Mencegah dan meredakan mual muntah",dose:"1 tablet 3-4x sehari",bpom:"DBL2324001268"},
"LANCARA":{comp:"Bisacodyl 5 mg",ind:"Melancarkan BAB pada konstipasi",dose:"1-2 tablet sebelum tidur",bpom:"DBL2324001269"},
"TENANGA DROPS":{comp:"Simethicone 20 mg/ml",ind:"Meredakan kembung dan kolik pada bayi",dose:"0.6 ml (12 tetes) 3-4x sehari",bpom:"DBL2324001270"},
"SILIMARA":{comp:"Silymarin 140 mg",ind:"Hepatoprotektor untuk melindungi fungsi hati",dose:"1 kapsul 2-3x sehari",bpom:"DTL2324001271"},
"GASLEGA":{comp:"Simethicone 80 mg",ind:"Meredakan perut kembung akibat gas",dose:"1 tablet 3-4x sehari setelah makan",bpom:"DBL2324001272"},
"ADASARI":{comp:"Ekstrak adas 150 mg",ind:"Membantu meredakan perut kembung dan gangguan pencernaan",dose:"10 ml sirup 3x sehari",bpom:"DBL2324001273"},
"SIRILEGA":{comp:"Ekstrak daun sirih 200 mg, Madu",ind:"Meredakan batuk dan membantu melegakan tenggorokan",dose:"10 ml sirup 3x sehari",bpom:"DBL2324001274"},
"TUSFRIA":{comp:"Dextromethorphan HBr 10 mg/5ml",ind:"Meredakan batuk kering",dose:"5-10 ml 3-4x sehari",bpom:"DBL2324001275"},
"PILEXA":{comp:"Pseudoephedrine 30 mg, Triprolidine 2.5 mg",ind:"Meredakan hidung tersumbat dan bersin-bersin",dose:"1 tablet 3x sehari",bpom:"DBL2324001276"},
"NASALEGA":{comp:"Xylometazoline HCl 0.1%",ind:"Melegakan hidung tersumbat",dose:"1-2 semprotan pada setiap lubang hidung, 2-3x sehari",bpom:"DBL2324001277"},
"EKSPEKTRA":{comp:"Guaifenesin 100 mg/5ml, Bromhexine 4 mg/5ml",ind:"Mengencerkan dahak dan melegakan pernapasan",dose:"10 ml sirup 3x sehari",bpom:"DBL2324001279"},

"NAFASIA":{comp:"Ekstrak mint, Eucalyptus",ind:"Membantu melegakan pernapasan",dose:"1 kapsul 2-3x sehari",bpom:"DTL2324001282"},
"FLUNOCTA":{comp:"Paracetamol 500mg, Pseudoephedrine 30mg, Chlorpheniramine 2mg",ind:"Meredakan gejala flu",dose:"1 tablet 3x sehari sebelum tidur",bpom:"DBL2324001283"},
"IODARA":{comp:"Povidone iodine 10%",ind:"Antiseptik untuk luka ringan",dose:"Oleskan pada luka 2-3x sehari",bpom:"DBL2324001284"},
"LUKARA":{comp:"Silver sulfadiazine 1%",ind:"Membantu penyembuhan luka bakar dan luka terbuka",dose:"Oleskan tipis 1-2x sehari",bpom:"DKL2324001285"},
"GATARA":{comp:"Hydrocortisone 1%, Diphenhydramine 1%",ind:"Meredakan gatal dan iritasi kulit ringan",dose:"Oleskan tipis pada area gatal 2-3x sehari",bpom:"DBL2324001286"},
"MIKORA":{comp:"Miconazole nitrate 2%",ind:"Mengatasi infeksi jamur kulit",dose:"Oleskan 2x sehari selama 2-4 minggu",bpom:"DKL2324001287"},
"SURYAVEIL":{comp:"Octyl methoxycinnamate 7.5%, Zinc oxide 5%",ind:"Melindungi kulit dari sinar UV",dose:"Oleskan 15 menit sebelum terpapar matahari",bpom:"DBL2324001288"},
"TELANGLOW":{comp:"Ekstrak bunga telang, Niacinamide 3%",ind:"Membantu mencerahkan dan merawat kulit",dose:"Teteskan 3-4 tetes, aplikasikan pada wajah 2x sehari",bpom:"DBL2324001289"},
"KLARISA":{comp:"Salicylic acid 2%, Tea tree oil 1%",ind:"Membantu mengatasi jerawat",dose:"Oleskan pada area jerawat 2x sehari",bpom:"DBL2324001290"},
"AMERTA DEW":{comp:"Hyaluronic acid, Aloe vera extract",ind:"Melembapkan dan menutrisi kulit",dose:"Oleskan pada wajah dan leher 2x sehari",bpom:"DBL2324001291"},
"ZIPIRA":{comp:"Zinc pyrithione 1%, Ketoconazole 1%",ind:"Mengatasi ketombe dan gatal pada kulit kepala",dose:"Gunakan 2-3x seminggu, diamkan 3-5 menit lalu bilas",bpom:"DBL2324001292"},
"TANGARA CLEAN":{comp:"Alcohol 70%, Aloe vera extract",ind:"Antiseptik pembersih tangan",dose:"Tuang secukupnya, gosok hingga kering",bpom:"DBL2324001293"},
"GUAVINE":{comp:"Alcohol 70%, Ekstrak jambu biji, Glycerin",ind:"Hand sanitizer gel dengan ekstrak jambu biji untuk kesehatan tangan",dose:"Tuang secukupnya pada telapak tangan, gosok hingga merata dan kering",bpom:"DBL2324001294"},
"ASCORBIA":{comp:"Vitamin C (Asam askorbat) 1000 mg dalam 10 ml",ind:"Suplemen vitamin C intravena untuk pasien yang memerlukan dosis tinggi",dose:"Sesuai petunjuk dokter, diberikan secara intravena",bpom:"DKL2324001295"}
};
function img(p){
  const folders=[
    "kapsul",           // 0
    "tablet",           // 1
    "sirup",            // 2
    "salep krim",       // 3
    "tetes mata",       // 4
    "shacet",           // 5
    "larutan kumur",    // 6
    "balsem",           // 7
    "oral drops",       // 8
    "handsanitazer",    // 9
    "shampo",           // 10
    "kosmetik",         // 11
    "infus",            // 12
    "intranasal"        // 13
  ];
  const folder=folders[p.f]||"produk";
  const u=`${folder}/${p.n}.png`;
  return medIMG(u,p.n);
}
function card(p){return `<div class="pc" onclick="openP(${p.i})"><div class="im">${img(p)}</div><div class="t"><b>${p.n}</b><small>${cats[p.c]}</small><br><span class="pill">${forms[p.f]}</span> <span class="pill">${gol[p.g]}</span></div></div>`}
function render(){const q=$("#q").value.toLowerCase(),c=$("#fc").value,f=$("#ff").value,g=$("#fg").value;
const r=P.filter(p=>p.n.toLowerCase().includes(q)&&(c==="*"||p.c==c)&&(f==="*"||p.f==f)&&(g==="*"||p.g==g));
$("#grid").innerHTML=r.map(card).join("")||"<p>Produk tidak ditemukan.</p>";$("#cnt").textContent=`Menampilkan ${r.length} dari 60 produk`}
function openP(i){
  try{
    const p=P[i];
    const d=prodDetails[p.n]||{comp:"[Data sedang dilengkapi]",ind:"[Data sedang dilengkapi]",dose:"[Data sedang dilengkapi]",bpom:"[Data sedang dilengkapi]"};
    $("#mb").innerHTML=`<div class="mbi">${img(p)}</div><div><button class="x" onclick="closeP()" aria-label="Tutup"><i data-lucide="x" class="w-5 h-5"></i></button><h3 style="font-size:1.3rem;margin-bottom:8px">${p.n}</h3><span class="pill">${cats[p.c]}</span> <span class="pill">${forms[p.f]}</span> <span class="pill">${gol[p.g]}</span><div style="margin-top:20px;font-size:13.5px"><p style="margin:10px 0"><b><i data-lucide="pill" class="w-4 h-4 text-pu inline-block mr-1"></i> Komposisi:</b><br><span style="color:var(--tx)">${d.comp}</span></p><p style="margin:10px 0"><b><i data-lucide="target" class="w-4 h-4 text-pu inline-block mr-1"></i> Indikasi:</b><br><span style="color:var(--tx)">${d.ind}</span></p><p style="margin:10px 0"><b><i data-lucide="clipboard-list" class="w-4 h-4 text-pu inline-block mr-1"></i> Dosis &amp; Aturan Pakai:</b><br><span style="color:var(--tx)">${d.dose}</span></p><p style="margin:10px 0"><b><i data-lucide="check-circle-2" class="w-4 h-4 text-tl inline-block mr-1"></i> No. Registrasi BPOM:</b><br><span style="color:var(--tx)">${d.bpom}</span></p></div></div>`;
    $("#mo").classList.add("on");
    if(window.lucide) lucide.createIcons();
  }catch(err){
    console.error("Error in openP:", err);
  }
}
function closeP(){$("#mo").classList.remove("on")}
$("#mo").onclick=e=>{if(e.target.id==="mo")closeP()};document.onkeydown=e=>{if(e.key==="Escape")closeP()};
$("#fc").innerHTML='<option value="*">Semua kategori</option>'+cats.map((c,i)=>`<option value="${i}">${c}</option>`).join("");
$("#ff").innerHTML='<option value="*">Semua bentuk sediaan</option>'+forms.map((c,i)=>`<option value="${i}">${c}</option>`).join("");
["q","fc","ff"].forEach(id=>$("#"+id).oninput=render);render();
$("#feat").innerHTML=[0,3,10,40,50,56].map(i=>card(P[i])).join("");
// $("#vals") dihapus - ARTEMA VALUES dipindah ke halaman Visi Misi
// $("#phil").innerHTML removed - filosofi logo section deleted from tentang page
// $("#dirs"/"#board").innerHTML removed - organisasi pakai org chart statis di HTML
$("#flow").innerHTML=[["package","Penerimaan Bahan"],["search","QC Bahan Baku"],["scale","Penimbangan"],["flask-conical","Pencampuran"],["pill","Pencetakan / Pengisian"],["microscope","IPC &amp; QC Produk"],["package","Pengemasan"],["truck","Rilis &amp; Distribusi"]].map((s,i,a)=>`<div class="c"><div class="ic">${getIcon(s[0])}</div><b>${s[1]}</b></div>${i<a.length-1?`<span class="ar">${getIcon("arrow-right")}</span>`:""}`).join("");

const stats=[[120,"Tenaga Profesional Farmasi"],[60,"Produk Terdaftar*"],[5,"Riset dan Paten*"],[45,"Mitra Distribusi Nasional"],[6,"Mitra Distribusi Internasional"],[40,"Izin BPOM Aktif*"]];
$("#stats").innerHTML=stats.map(s=>`<div class="c"><b data-n="${s[0]}">0</b>${s[1]}</div>`).join("");
let tm;function count(){clearInterval(tm);const bs=document.querySelectorAll("#stats b");let k=0;tm=setInterval(()=>{k++;bs.forEach(e=>{const num=Math.min(+e.dataset.n,Math.ceil(+e.dataset.n*k/30));e.textContent=num+(e.dataset.plus==='true'?'+':'')});if(k>=30)clearInterval(tm)},35)}
addEventListener("hashchange",()=>{if((location.hash||"#beranda")==="#beranda")count()});count();

const K=a=>a.map(x=>`<div class="c"><div class="ic">${getIcon(x[0])}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join("");
const put=(id,a)=>$("#"+id).innerHTML=K(a);
const pl=(id,a)=>$("#"+id).innerHTML=a.map(x=>`<div class="c" style="text-align:center"><div class="ic">${getIcon("user")}</div><h3 style="font-size:16px">${x[0]}</h3><small>${x[1]}</small></div>`).join("");
// $("#dirs" versi 12 departemen + deskripsi foto) removed - organisasi pakai org chart statis di HTML
put("prog",[["droplets","Amerta Edukasi","Kelas obat yang ramah: DAGUSIBU, antibiotik, dan obat anak bersama apoteker kami."],["sprout","Tanah Sembada","Kebun TOGA percontohan dan pemeriksaan kesehatan dasar di desa."],["flower-2","Telang Hijau","Tanam pohon, kotak obat kedaluwarsa, dan edukasi napas sehat saat kabut asap."],["graduation-cap","Generasi Artema","Magang, beasiswa, dan festival sains untuk calon farmasis muda."]]);

put("kat",[["leaf","Herbal Terstandar &amp; Fitofarmaka","Bahan alam teruji, fokus unggulan kami."],["circle-dot","Obat Bebas &amp; Bebas Terbatas","Tanpa resep, dengan peringatan di kemasan."],["pill","Obat Keras (Resep)","Hanya dengan resep dokter."],["sparkles","Suplemen &amp; Perawatan Kulit","Pelengkap harian dan topikal."]]);
$("#cert").innerHTML=[["file-text","CPOB"],["award","ISO 9001:2015"],["globe","ISO 14001:2015"],["shield-check","ISO 45001:2018"],["check-circle-2","Sertifikat Halal BPJPH"]].map(x=>`<div class="c"><div class="ic">${getIcon(x[0])}</div><h3>${x[1]}</h3><span class="pill">Target</span></div>`).join("");
$("#act").innerHTML=[["Meracik di laboratorium","Tim R&amp;D menguji ekstrak tanaman sebelum jadi formula.","asset/kegiatan/kegiatan-lab.jpeg"],["Memproduksi dengan teliti","Setiap batch dicek berlapis sebelum dikemas.","asset/kegiatan/kegiatan-produksi.jpeg"],["Berbagi di masyarakat","Kelas obat dan kebun TOGA langsung di desa.","asset/kegiatan/kegiatan-edukasi.jpeg"],["Mendidik calon farmasis","Magang dan beasiswa bagi mahasiswa berprestasi.","asset/kegiatan/kegiatan-magang.jpeg"]].map(x=>`<div class="c"><div class="ph" style="aspect-ratio:16/10;background:var(--lav)">${medIMG(x[2],x[0])}</div><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("");
put("fact",[["leaf","Obat malaria lahir dari tanaman","Artemisinin berasal dari Artemisia annua; penemuannya meraih Nobel 2015."],["microscope","Flu bukan urusan antibiotik","Flu disebabkan virus, sedangkan antibiotik hanya melawan bakteri."],["droplets","Kamar mandi bukan tempat obat","Lembap dan panas bisa merusak obat; simpan di tempat sejuk dan kering."],["droplets","Air putih sahabat obat","Sebagian obat terganggu oleh teh, kopi, atau susu; baca aturan pakai."],["calendar","Sirup sudah dibuka? Cek batas pakai","Obat cair yang dibuka bisa lebih cepat kedaluwarsa; ikuti petunjuk label."],["droplets","Tubuh kita banyak air","Sekitar separuh hingga 60% berat badan dewasa adalah air."]]);

put("bidang",[["briefcase","Penjualan &amp; Pemasaran","Sales, account, product, brand."],["factory","Produksi &amp; Operasional","Produksi, pengemasan, plant ops."],["check-circle-2","Mutu &amp; Regulatory","QA, QC, registrasi produk."],["microscope","Riset &amp; Teknik","R&amp;D, laboratorium, teknisi."],["truck","Rantai Pasok","Pengadaan, gudang, logistik."],["users","SDM &amp; Umum","HR, pelatihan, GA, TI."]]);
$("#rek").innerHTML=[["file-text","Kirim lamaran"],["clipboard-check","Seleksi berkas"],["users","Tes &amp; wawancara"],["stethoscope","Pemeriksaan kesehatan"],["handshake","Tawaran kerja"]].map((s,i,a)=>`<div class="c"><div class="ic">${getIcon(s[0])}</div><b>${s[1]}</b></div>${i<a.length-1?`<span class="ar">${getIcon("arrow-right")}</span>`:""}`).join("");
put("mag",[["clipboard-list","Syarat","Mahasiswa aktif Farmasi, Kimia, Biologi, Teknik Kimia, atau Profesi Apoteker; IPK min. 3,00; surat pengantar kampus, CV, dan transkrip."],["award","Yang kamu dapat","Mentor, sertifikat, uang saku, proyek mini, dan peluang jalur prioritas rekrutmen."],["calendar","Kegiatan","Orientasi CPOB, rotasi QC/Produksi/R&amp;D, proyek mini, presentasi akhir."],["clock","Durasi","1-3 bulan; pendaftaran dibuka tiap semester."]]);
put("staf",[["sparkles","Temu Akrab Artema","Gathering tahunan, olahraga, dan lomba antar-departemen."],["heart","Jumat Sehat","Senam pagi dan cek tensi gratis."],["book-open","Kelas Tumbuh","Pelatihan CPOB dan kepemimpinan."],["shield-check","Perlindungan lengkap","BPJS, asuransi tambahan, dan klinik perusahaan."],["award","Insan Mutu","Penghargaan untuk tim dengan inovasi mutu."],["leaf","Ruang Santai Kebun","Area istirahat dikelilingi tanaman obat."]]);
put("coop",[["award","Sponsorship","Dukung acara kesehatan, seminar, atau lomba sains bersama kami."],["graduation-cap","Donatur Beasiswa","Jadi mitra pendana ARTEMA Scholar."],["handshake","Kemitraan Distribusi","Apotek, toko obat, dan distributor yang ingin tumbuh bersama."],["microscope","Riset Bersama","Dosen dan peneliti: ayo uji potensi bahan alam Sumatera Selatan."]]);
$("#soc").innerHTML=[{name:"Instagram",icon:"instagram",url:"#"},{name:"LinkedIn",icon:"linkedin",url:"#"},{name:"Facebook",icon:"facebook",url:"#"},{name:"YouTube",icon:"youtube",url:"#"}].map(s=>`<a target="_blank" rel="noopener" href="${s.url}" class="w-10 h-10 rounded-full" style="background:rgba(255,255,255,0.08)" onmouseover="this.style.background='#2AAEB6'" onmouseout="this.style.background='rgba(255,255,255,0.08)'" title="${s.name}" aria-label="${s.name}"><i data-lucide="${s.icon}" class="w-5 h-5"></i></a>`).join("");if(window.lucide)lucide.createIcons();
function sendF(){const n=$("#fn").value.trim(),e=$("#fe").value.trim(),m=$("#fm").value.trim();if(!n||!e||!m){$("#fs").textContent="Mohon lengkapi nama, email, dan pesan.";return}location.href=`mailto:contact@artemapharma.example?subject=${encodeURIComponent($("#ft").value+" - "+n)}&body=${encodeURIComponent(m+"\n\nDari: "+n+" ("+e+")")}`;$("#fs").textContent="Terima kasih! Aplikasi email Anda akan terbuka (demo, belum terhubung server)."}
$("#faqs").innerHTML=[["Apakah produk ARTEMA bisa dibeli tanpa resep?","Tergantung golongannya. Obat bebas dan herbal dapat dibeli tanpa resep, sedangkan obat keras wajib dengan resep dokter. Cek logo di kemasan."],["Di mana saya bisa membeli produk ARTEMA?","Melalui apotek dan toko obat mitra distribusi kami. Hubungi tim kami untuk daftar mitra terdekat."],["Bagaimana cara menyimpan obat yang benar?","Simpan di tempat sejuk, kering, terhindar dari sinar matahari, dan jauh dari jangkauan anak. Hindari kamar mandi."],["Bagaimana membuang obat kedaluwarsa?","Jangan dibuang utuh ke tempat sampah. Gunakan kotak obat kedaluwarsa atau ikuti prinsip DAGUSIBU."],["Saya mengalami efek yang tidak nyaman setelah minum obat. Apa yang harus dilakukan?","Hentikan penggunaan bila perlu, konsultasikan ke dokter atau apoteker, lalu laporkan melalui halaman Informasi Medis &amp; MESO."],["Apakah ARTEMA menerima mahasiswa magang?","Ya. Lihat syarat dan alurnya di halaman Karir."],["Bagaimana menjadi mitra, sponsor, atau donatur beasiswa?","Pilih topik kerja sama di halaman Hubungi Kami dan tim kami akan menanggapi."],["Apakah informasi di situs ini pengganti saran dokter?","Tidak. Informasi di sini bersifat umum dan tidak menggantikan penilaian tenaga kesehatan."]].map(f=>`<details class="c" style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:700">${f[0]}</summary><p>${f[1]}</p></details>`).join("");
put("meso",[["shield-check","Apa itu MESO?","Monitoring Efek Samping Obat: pemantauan keamanan obat setelah beredar. Laporan Anda membantu kami dan regulator menjaga mutu serta keamanan."],["file-text","Kapan perlu melapor?","Bila muncul reaksi tak diharapkan seperti ruam, mual berat, pusing, atau gejala lain setelah memakai produk."],["stethoscope","Layanan Informasi Medis untuk Nakes","Dokter dan apoteker dapat menanyakan data produk, stabilitas, dan interaksi obat kepada tim ilmiah kami."]]);
$("#mp").innerHTML=P.map(p=>`<option>${p.n}</option>`).join("");
function sendM(){const n=$("#mn").value.trim(),d=$("#md").value.trim();if(!n||!d){$("#mf").textContent="Mohon isi nama dan deskripsi efek samping.";return}location.href=`mailto:farmakovigilans@artemapharma.example?subject=${encodeURIComponent("Laporan MESO: "+$("#mp").value)}&body=${encodeURIComponent("Pelapor: "+n+" ("+$("#ms").value+")\nBatch: "+$("#mbatch").value+"\n\n"+d)}`;$("#mf").textContent="Terima kasih. Aplikasi email Anda akan terbuka (demo, belum terhubung server)."}
const CK={"ART-2601-001":"PARANOVA 500","ART-2601-002":"SIRVANA","ART-2601-003":"AMERTAVIA"};
function chk(){const v=$("#ck").value.trim().toUpperCase(),nm=CK[v],p=P.find(x=>x.n===nm);if(!p){$("#cr").innerHTML=`${getIcon("alert-triangle")} Kode tidak ditemukan. Periksa penulisan atau hubungi kami melalui halaman Hubungi Kami.`;$("#cd").innerHTML="";return}const d=prodDetails[p.n]||{comp:"-",ind:"-",dose:"-",bpom:"-"};$("#cr").innerHTML=`${getIcon("check-circle-2")} Kode terdaftar: <b>${p.n}</b>`;$("#cd").innerHTML=`<div class="c" style="margin-top:16px;padding:16px;border:1px solid var(--ln);border-radius:16px;background:var(--card);display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start"><div style="flex:0 0 auto"><div class="ph" style="width:140px;height:140px;background:var(--lav);border-radius:12px;overflow:hidden">${img(p)}</div></div><div style="flex:1 1 auto"><h3 style="margin:0 0 8px;font-size:1.25rem">${p.n}</h3><p style="margin:0 0 4px;color:var(--mu);font-size:13px">${cats[p.c]} · ${forms[p.f]} · ${gol[p.g]}</p><p style="margin:4px 0"><b>Komposisi:</b> ${d.comp}</p><p style="margin:4px 0"><b>Indikasi:</b> ${d.ind}</p><p style="margin:4px 0"><b>Dosis &amp; Aturan Pakai:</b> ${d.dose}</p><p style="margin:4px 0"><b>No. Registrasi BPOM:</b> ${d.bpom}</p></div></div>`}
put("priv",[["clipboard-list","Data yang kami kumpulkan","Nama, email, dan isi pesan yang Anda kirim melalui formulir."],["target","Untuk apa","Menjawab pertanyaan, memproses laporan efek samping, dan menindaklanjuti kerja sama."],["lock","Keamanan","Data dijaga dan hanya diakses pihak berwenang di perusahaan."],["handshake","Pembagian data","Tidak dijual. Laporan keamanan obat dapat diteruskan ke regulator sesuai aturan."],["mail","Hak Anda","Anda dapat meminta akses, koreksi, atau penghapusan data lewat halaman Hubungi Kami."]]);
$("#smap").innerHTML=[["Utama",[["Beranda","beranda"],["Tentang Kami","tentang"],["Filosofi Logo","filosofi-logo"],["Visi, Misi &amp; Nilai","visi-misi"],["Organisasi","organisasi"],["Legalitas","legalitas"]]],["Produk &amp; Riset",[["Produk &amp; Jasa","produk"],["Riset &amp; Produksi","riset"],["Cek Keaslian","asli"]]],["Peduli &amp; Karir",[["ARTEMA Peduli","csr"],["Peluang Karir","karir"],["Program Magang","magang"],["Pengembangan Karyawan","pengembangan-karyawan"],["Kirim Lamaran","kirim-lamaran"],["Apa Kata Mereka","apa-kata-mereka"]]],["Bantuan",[["Lokasi","lokasi"],["Hubungi Kami","kontak"],["FAQ","faq"],["Informasi Medis &amp; MESO","medis"],["Kebijakan Privasi","privasi"]]]].map(s=>`<div class="c"><h3>${s[0]}</h3>${s[1].map(l=>`<p style="margin:.3em 0"><a href="#${l[1]}">${l[0]}</a></p>`).join("")}</div>`).join("");
$("#fg").innerHTML='<option value="*">Semua golongan obat</option>'+gol.map((c,i)=>`<option value="${i}">${c}</option>`).join("");$("#fg").oninput=render;render();
function setG(i){$("#fg").value=i;render();$("#grid").scrollIntoView({behavior:"smooth",block:"start"})}
{const ic=["leaf","circle-dot","pill","sparkles"],ds=["Bahan alam teruji, fokus unggulan kami.","Dijual tanpa resep, dengan peringatan di kemasan.","Hanya dengan resep dokter.","Pelengkap harian dan perawatan kulit."];$("#kat").innerHTML=gol.map((n,i)=>`<div class="c" style="cursor:pointer" onclick="setG(${i})"><div class="ic">${getIcon(ic[i])}</div><h3>${n}</h3><p>${ds[i]}</p><span class="pill">Lihat ${P.filter(p=>p.g==i).length} produk</span></div>`).join("")}
$('#story').innerHTML=['Berawal dari sebuah visi yang dibangun oleh <b>Sabita Alfariha</b> pada tahun 2018, PT. ARTEMA PHARMA hadir dengan keyakinan bahwa inovasi di bidang kesehatan tidak selalu dimulai dari sesuatu yang besar, melainkan dari keberanian untuk bertanya, mengeksplorasi potensi, dan menghadirkan perubahan melalui ilmu pengetahuan.','Nama ARTEMA terinspirasi dari <i>Artemisia annua</i>, tanaman yang memiliki peran penting dalam sejarah penemuan artemisinin. Sebuah inspirasi yang merepresentasikan semangat eksplorasi dan pemanfaatan ilmu pengetahuan untuk menjawab tantangan kesehatan. Sementara itu, PHARMA mencerminkan landasan perusahaan dalam menjunjung tinggi ilmu kefarmasian, kualitas, keamanan, serta tanggung jawab terhadap setiap produk yang dihasilkan.','Sejak awal berdirinya, ARTEMA terus membangun fondasi perusahaan melalui pengembangan arah bisnis, eksplorasi kebutuhan produk, serta penguatan budaya kerja yang berorientasi pada ketelitian dan kualitas. Perjalanan tersebut kemudian berkembang menuju penelitian dan pengembangan produk, optimalisasi formulasi, serta eksplorasi bahan alam, termasuk potensi kekayaan flora Sumatera Selatan.','Memasuki periode 2023-2026, ARTEMA memperluas langkah pengembangannya melalui penguatan inovasi produk, peningkatan proses manufaktur, digitalisasi informasi, edukasi kesehatan, hingga kolaborasi dengan berbagai pihak. Perusahaan juga terus mendorong terciptanya kegiatan yang memberikan dampak positif melalui program sosial dan kepedulian terhadap lingkungan.','Kini, PT. ARTEMA PHARMA mengembangkan portofolio yang terdiri atas <b>60 produk farmasi</b> dengan dukungan proses pengembangan dan manufaktur yang berorientasi pada mutu. Setiap produk menjadi bagian dari upaya perusahaan untuk menghadirkan solusi kesehatan yang relevan, berkualitas, dan dapat diandalkan oleh masyarakat.','Bagi ARTEMA, pertumbuhan bukan hanya tentang seberapa jauh perusahaan berkembang, tetapi juga tentang seberapa besar nilai yang dapat diberikan. Dengan semangat inovasi, kolaborasi, dan perbaikan berkelanjutan, ARTEMA berkomitmen untuk terus bertumbuh bersama perkembangan ilmu pengetahuan dan industri farmasi Indonesia.','Karena bagi kami, <b>perubahan besar selalu berawal dari langkah kecil yang dilakukan dengan tujuan dan konsistensi.</b>'].map(t=>`<p>${t}</p>`).join('');
$('#tl').innerHTML=[[2018,'The Beginning','Langkah Pertama','Perusahaan didirikan dengan visi mengembangkan produk kesehatan lewat pendekatan ilmiah dan budaya mutu.'],[2019,'Laying the Foundation','Membangun Fondasi','Pemetaan kebutuhan produk, konsep formulasi, penelusuran bahan baku, dan rancangan dokumentasi. Mutu menjadi bagian perencanaan.'],[2020,'Resilience in Change','Bertumbuh dalam Perubahan','Mengembangkan komunikasi informasi kesehatan dan meninjau prioritas produk dengan fokus ketahanan rantai pasok.'],[2021,'Research Takes Shape','Riset Mulai Terarah','Memetakan portofolio pengembangan dan rencana evaluasi mutu, serta menjajaki kerja sama.'],[2022,'Building Connections','Membuka Kolaborasi','Merancang jejaring dengan calon pemasok, mitra distribusi, institusi pendidikan, dan komunitas kesehatan.'],[2023,'Nature Meets Science','Alam Bertemu Sains','Amerta Bumandhala dan identitas Farmasi UNSRI Angkatan 2023 memperkaya narasi; bunga telang dan flora Sumsel menjadi elemen utama.'],[2024,'Quality by Design','Mutu Sejak Awal','Memperkuat konsep manajemen mutu, evaluasi risiko, dan alur produksi, serta merancang edukasi kesehatan.'],[2025,'Connecting the Value Chain','Memperkuat Rantai Pasok','Merancang kemitraan distribusi, pengelolaan informasi produk, dan komunikasi pelanggan.'],[2026,'Growing with Purpose','Bertumbuh dengan Tujuan','Menyatukan pengembangan produk, digitalisasi, kolaborasi, dan program sosial-lingkungan dalam satu arah strategis.']].map(t=>`<div class='c'><b>${t[0]}</b><small>${t[1]}</small><h3 style='font-size:16px;margin:4px 0'>${t[2]}</h3><p style='font-size:14px;margin:0'>${t[3]}</p></div>`).join('');
$('#stats').innerHTML=[[350,'Tenaga Profesional','SDM dan tenaga ahli di berbagai bidang.',true],[60,'Produk Farmasi','Portofolio produk dalam berbagai kategori.',false],[25,'Proyek Penelitian','Penelitian dan pengembangan produk.',true],[45,'Mitra Distribusi','Jaringan mitra distribusi dan penyaluran.',true],[12,'Mitra Kolaborasi','Institusi dan mitra strategis.',true],[32,'Kota Jangkauan','Jangkauan distribusi dan layanan.',false]].map(s=>`<div class='c'><b data-n='${s[0]}' data-plus='${s[3]}'>0</b><strong>${s[1]}</strong><br>${s[2]}</div>`).join('');count();
put('dist',[['truck','Mitra Distribusi Farmasi','Penyaluran produk lewat jalur yang sesuai jenis produk dan ketentuan. <i>Contoh: Artema Distribusi Sejahtera</i>'],['cross','Mitra Apotek &amp; Pelayanan Kefarmasian','Bagian dari ekosistem informasi obat dan penyaluran sesuai kewenangan. <i>Contoh: Sahabat Sehat Farma</i>'],['graduation-cap','Mitra Riset &amp; Perguruan Tinggi','Pertukaran pengetahuan, formulasi, dan kajian bahan alam. <i>Kategori: perguruan tinggi dan laboratorium penelitian</i>'],['package','Mitra Pengadaan &amp; Logistik','Ketersediaan bahan, penyimpanan, dan pengiriman sesuai persyaratan. <i>Kategori: pemasok dan penyedia logistik</i>']]);
put('prog',[['pill','Sahabat Obat','<b>Kenali obatnya, pahami penggunaannya, jaga kesehatannya.</b><br>Edukasi literasi obat: membaca kemasan, beda obat bebas dan resep, serta pentingnya bertanya ke apoteker.'],['handshake','Langkah Sehat Bersama','<b>Lebih dekat, lebih peduli, lebih sehat bersama.</b><br>Pendampingan komunitas lewat penyuluhan promotif-preventif bersama tenaga kesehatan dan mitra berwenang.'],['leaf','Rimba Lestari','<b>Menjaga alam, merawat sumber kehidupan.</b><br>Pengenalan tanaman obat lokal, penanaman yang sesuai, pengurangan sampah kegiatan, dan edukasi biodiversitas.'],['sprout','Tunas Cendekia','<b>Rasa ingin tahu hari ini, inovasi untuk masa depan.</b><br>Literasi sains dan kefarmasian untuk pelajar lewat permainan edukatif dan eksperimen sederhana yang aman.']]);
const CSRD=[
{f:"penyuluhan-puding-susu-jahe",t:"Puding Susu Herbal Berbasis Jahe",pill:"Kegiatan Pengabdian Masyarakat",d:"Pengabdian masyarakat bersama LPPM Unsri: pelatihan pengembangan puding susu herbal berbasis jahe untuk warga Desa Ulak Kerbau Baru, 5 September 2026.",m:[["Tanggal","5 September 2026"],["Lokasi","Desa Ulak Kerbau Baru"],["Mitra","LPPM Universitas Sriwijaya"],["Pelaksana","Tim Pengabdian Masyarakat Farmasi UNSRI"]],b:[["Profil Kegiatan","Program pengabdian masyarakat yang mengangkat penganekaran pangan berbasis bahan lokal: jahe dipadukan dengan susu menjadi puding  -  contoh sederhana pangan fungsional yang mudah dibuat di rumah."],["Apa yang Dilakukan","Penyuluhan tentang manfaat jahe dan pangan fungsional, pelatihan praktik membuat puding susu herbal, serta diskusi bagaimana resep ini dapat dikembangkan menjadi olahan rumahan yang bernilai tambah."],["Manfaat &amp; Harapan","Warga mendapat resep yang murah dan mudah direplikasi, sekaligus gambaran cara mengolah bahan lokal menjadi pangan fungsional."],["Catatan","Kegiatan nyata (dokumentasi tersedia). Tanpa angka peserta atau klaim dampak."]]},
{f:"hkmf-peduli-2026",t:"HKMF Peduli 2026: Kita Cerita",pill:"Kegiatan Sosial 2026",d:"Kunjungan sosial ke Panti Asuhan Aisyiyah Humairoh Palembang: cerita, permainan, dan inspirasi cita-cita bersama anak-anak panti.",m:[["Tahun","2026"],["Lokasi","Panti Asuhan Aisyiyah Humairoh, Palembang"],["Tema","Kasih Tawa dan Cita-cita"],["Pelaksana","HKMF Peduli"]],b:[["Profil Kegiatan","Kunjungan sosial HKMF Peduli 2026 ke Panti Asuhan Aisyiyah Humairoh Palembang dengan tema 'Kita Cerita: Kasih Tawa dan Cita-cita'."],["Apa yang Dilakukan","Membaca dongeng dan bermain bersama, sesi bercerita bebas, serta obrolan ringan tentang mimpi dan cita-cita anak-anak panti."],["Manfaat &amp; Harapan","Menghadirkan keceriaan dan perhatian, menumbuhkan keberanian anak untuk bercerita di depan teman-temannya, dan membangun hubungan baik untuk kunjungan berikutnya."],["Catatan","Kegiatan nyata. Tanpa angka peserta atau klaim dampak."]]},
{f:"bank-sampah-pelangi",t:"Monitoring Biokomposter &amp; Pilah Sampah",pill:"Kegiatan Sosial 2025",d:"Community development bersama tim KSE Unsri dan warga Bank Sampah Pelangi: pemantauan biokomposter dan edukasi pemilahan sampah, Sabtu 25 Oktober 2025.",m:[["Tanggal","Sabtu, 25 Oktober 2025"],["Lokasi","Bank Sampah Pelangi"],["Pelaksana","Community Development KSE Unsri"]],b:[["Profil Kegiatan","Rangkaian community development di Bank Sampah Pelangi: pemantauan berkala instalasi biokomposter dan penguatan kebiasaan pemilahan sampah."],["Apa yang Dilakukan","Memeriksa kondisi biokomposer (aroma, kelembapan, dan hasil kompos), membahas pemilahan sampah organik dan anorganik, serta mencatat perkembangan agar perbaikan berjalan bertahap."],["Manfaat &amp; Harapan","Kualitas kompos yang lebih stabil, kebiasaan memilah yang lebih konsisten, dan catatan pemantauan yang dapat dilanjutkan warga secara mandiri."],["Catatan","Kegiatan nyata (dokumentasi tersedia). Tanpa angka atau klaim dampak."]]},
{f:"penyuluhan-langkah-sehat",t:"Langkah Sehat Bersama",pill:"Program Kesehatan Komunitas",d:"Penyuluhan kesehatan promotif-preventif untuk komunitas desa bersama tenaga kesehatan berwenang.",m:[["Sasaran","Komunitas desa"],["Mitra","Tenaga kesehatan berwenang"]],b:[["Profil Program","Penyuluhan kesehatan promotif-preventif untuk komunitas desa, diselenggarakan bersama tenaga kesehatan berwenang."],["Agenda Kegiatan","Topik disesuaikan kebutuhan setempat, antara lain penggunaan obat yang baik dan benar, pola hidup bersih, serta pemeriksaan kesehatan dasar oleh petugas yang berwenang."],["Sasaran &amp; Manfaat","Warga lebih memahami kapan perlu ke fasilitas kesehatan dan cara memakai obat dengan tepat."]]},
{f:"eco-brick",t:"Eco Brick",pill:"Program Lingkungan",d:"Botol plastik bekas dipadatkan menjadi bata ekologis untuk taman dan sarana menanam tanaman obat bersama warga.",m:[["Sasaran","Warga & pelajar"]],b:[["Profil Program","Kegiatan lingkungan yang mengubah botol plastik bekas menjadi ecobrick  -  bata ekologis buatan sendiri."],["Tahapan Kegiatan","1) Mengumpulkan botol yang bersih dan kering.<br>2) Memilah plastik yang dapat dipadatkan.<br>3) Memadatkan plastik ke dalam botol secara bertahap sampai padat.<br>4) Merangkai ecobrick menjadi bangku taman, meja kecil, atau dinding kebun tanaman obat."],["Semangat Kegiatan","'Merawat Lingkungan Hari Ini, untuk Kehidupan yang Lebih Baik Besok'  -  sampah yang dikelola hari ini dapat menjadi furnitur yang berguna esok."]]},
{f:"pojok-sains-tunas-cendekia",t:"Pojok Sains Tunas Cendekia",pill:"Program Edukasi Pelajar",d:"Eksperimen aman dan pengenalan profesi apoteker untuk pelajar, dalam kerja sama dengan sekolah.",m:[["Sasaran","Pelajar"],["Mitra","Sekolah"]],b:[["Profil Program","Pojok sains untuk pelajar: permainan eksperimen aman sekaligus pengenalan profesi apoteker."],["Agenda Kegiatan","Eksperimen perubahan warna ekstrak kunyit dan bunga telang sebagai indikator asam-basa, permainan tebak kemasan obat, serta tanya jawab seru 'apa sih kerja seorang apoteker?'."],["Sasaran &amp; Manfaat","Pelajar mengenal sains secara menyenangkan dan mulai mengenal pilihan karier di bidang kefarmasian."]]}];
$('#csrg').innerHTML=CSRD.map(x=>`<a class='c' href='#kegiatan-${x.f}'><div class='vid' style='aspect-ratio:16/9;background:var(--lav)'>${medIMG("asset/csr/"+x.f+".jpeg",x.t)}</div><h3>${x.t}</h3><p>${x.d}</p><span class='pill'>${x.pill}</span></a>`).join('');
function renderKD(x){$("#kdBody").innerHTML=`<div style='max-width:840px;margin:auto'><a href='#csr' style='color:var(--t);font-weight:700;text-decoration:none'>Kembali ke ARTEMA Peduli</a><div class='ph' style='aspect-ratio:16/9;background:var(--lav);margin:18px 0'>${medIMG("asset/csr/"+x.f+".jpeg",x.t)}</div><span class='pill'>${x.pill}</span><h1 style='font-size:clamp(1.7rem,4vw,2.4rem);margin:10px 0 0'>${x.t}</h1><div style='display:grid;grid-template-columns:auto 1fr;gap:4px 16px;margin:14px 0;font-size:14px;color:var(--mu)'>${x.m.map(m=>`<b style='color:var(--tx)'>${m[0]}</b><span>${m[1]}</span>`).join("")}</div>${x.b.map(s=>`<h3 style='margin:18px 0 6px'>${s[0]}</h3><p style='margin:0 0 8px'>${s[1]}</p>`).join("")}<div class='dot' style='margin:26px 0 18px'></div><h3 style='margin:0 0 10px'>Kegiatan lainnya</h3><div class='row'>${CSRD.filter(c=>c.f!==x.f).map(c=>`<a class='pill' style='text-decoration:none' href='#kegiatan-${c.f}'>${c.t}</a>`).join("")}</div></div>`}
const NW3=[['Riset &amp; Inovasi','Bunga telang dan peluang penelitian bahan alam Indonesia','Bunga telang (Clitoria ternatea) adalah tanaman lokal yang kaya akan antosianin, senyawa antioksidan alami dengan potensi aplikasi farmasi dan nutraceutical. Penelitian terhadap bunga telang membuka peluang pengembangan produk kesehatan berbasis biodiversitas Nusantara, mulai dari ekstraksi hingga formulasi sediaan. Riset bahan alam seperti ini memperkuat posisi Indonesia sebagai laboratorium alam terbesar di dunia, sekaligus mendukung keberlanjutan ekonomi lokal dan pelestarian pengetahuan etnobotani.'],['Literasi Kesehatan','Membaca label obat dengan lebih cermat','Label obat berisi informasi penting: nama produk, kandungan zat aktif, indikasi, aturan pakai, dosis, kontraindikasi, peringatan, efek samping, nomor registrasi BPOM, nomor batch, dan tanggal kedaluwarsa. Membaca label dengan cermat membantu memastikan obat digunakan dengan benar dan aman sesuai petunjuk tenaga kesehatan. BPOM menghadirkan program CEK KLIK untuk memverifikasi keaslian produk obat dan kosmetik melalui aplikasi mobile. Prinsip DAGUSIBU (DApatkan, GUnakan, SImpan, BUang obat dengan benar) juga menekankan pentingnya literasi kesehatan dalam penggunaan obat yang bertanggung jawab dan rasional.'],['Keberlanjutan &amp; Riset','Menjaga biodiversitas lokal sebagai bagian dari masa depan riset','Biodiversitas lokal adalah aset strategis untuk riset kefarmasian masa depan. Keanekaragaman hayati Indonesia menyimpan ribuan spesies tumbuhan dan mikroorganisme yang belum dieksplorasi potensi terapeutiknya. Menjaga ekosistem alami, mendokumentasikan pengetahuan etnofarmasi, dan mengembangkan metode budidaya berkelanjutan adalah langkah krusial agar generasi mendatang tetap dapat mengakses sumber daya hayati ini. Kolaborasi antara peneliti, komunitas lokal, dan pelaku industri diperlukan untuk memastikan pemanfaatan biodiversitas yang adil, etis, dan berkelanjutan dalam mendukung inovasi kesehatan nasional.']];
const BF=["bungatalang","membacalabel","biodiversitas"];$('#news').innerHTML=NW3.map((n,i)=>`<div class='c nw' onclick='openN(${i})'><div class='ph' style='aspect-ratio:16/8;background:var(--lav)'>${medIMG("asset/berita/"+BF[i]+".png",n[1])}</div><small>${n[0]} · Artikel edukatif</small><h3>${n[1]}</h3></div>`).join('');
function openN(i){const n=NW3[i];$('#mb').innerHTML=`<div style='grid-column:1/-1'><button class='x' onclick='closeP()' aria-label='Tutup'><i data-lucide='x' class='w-5 h-5'></i></button><small>${n[0]} · Artikel edukatif</small><h3>${n[1]}</h3><div class='ph' style='background:var(--lav)'>${medIMG("asset/berita/"+BF[i]+".png",n[1])}</div><p>${n[2]}</p><p style='color:var(--mu);font-size:13px'>Informasi umum, bukan pengganti saran tenaga kesehatan.</p></div>`;$('#mo').classList.add('on')}
// $('#board' foto pimpinan) removed - organisasi pakai org chart statis di HTML
$('#flow').innerHTML=[['package','Penerimaan bahan','Pemeriksaan dokumen dan kondisi awal'],['search','Sampling &amp; QC','Evaluasi sesuai spesifikasi'],['scale','Penimbangan','Verifikasi identitas dan jumlah'],['flask-conical','Pencampuran &amp; proses','Sesuai formulasi dan prosedur'],['microscope','Pemeriksaan selama proses','Pemantauan parameter kritis'],['package','Pengemasan','Cek kemasan dan label'],['check-circle-2','Evaluasi akhir &amp; pelulusan','Oleh fungsi berwenang'],['truck','Penyimpanan &amp; distribusi','Sesuai persyaratan produk']].map((s,i,a)=>`<div class='c'><div class='ic'>${getIcon(s[0])}</div><b>${s[1]}</b><br><small>${s[2]}</small></div>${i<a.length-1?`<span class='ar'>${getIcon('arrow-right')}</span>`:''}`).join('');
$('#flow').insertAdjacentHTML('afterend','<div class="g" style="margin-top:20px" id="rk"></div>');put('rk',[['leaf','R&amp;D','Merancang formulasi dan menilai kelayakan pengembangan.'],['file-text','QA','Mengawal sistem mutu dan konsistensi dokumentasi.'],['flask-conical','QC','Menguji berdasarkan spesifikasi dan metode yang sesuai.'],['truck','Supply Chain','Menghubungkan perencanaan, penyimpanan, dan distribusi.']]);
$('#rek').innerHTML=[['file-text','Pendaftaran'],['clipboard-check','Pemeriksaan berkas'],['search','Seleksi awal'],['users','Wawancara'],['megaphone','Pengumuman']].map((s,i,a)=>`<div class='c'><div class='ic'>${getIcon(s[0])}</div><b>${s[1]}</b></div>${i<a.length-1?`<span class='ar'>${getIcon('arrow-right')}</span>`:''}`).join('');
$('#faqs').innerHTML=[['Apa itu ARTEMA PHARMA?','Perusahaan farmasi berinspirasi alam yang menghubungkan riset bahan alam, mutu, edukasi kesehatan, dan pemberdayaan masyarakat.'],['Apa fokus pengembangan ARTEMA?','Riset bahan alam dan pengembangan produk kesehatan, dengan mutu sebagai dasar.'],['Bagaimana cara menjajaki kerja sama distribusi?','Isi formulir di halaman Hubungi Kami dengan topik Kerja sama distribusi.'],['Apakah ARTEMA membuka kolaborasi penelitian?','Pilih topik Kolaborasi riset.'],['Bagaimana mengetahui informasi penggunaan obat yang tepat?','Baca label, ikuti resep dokter, dan tanyakan kepada apoteker. Informasi di situs ini bersifat umum.'],['Apakah tersedia program magang?','Ada sebagai rancangan program; lihat halaman Karir.'],['Bagaimana berpartisipasi dalam ARTEMA Peduli?','Pilih topik Program sosial dan lingkungan pada formulir kontak.'],['Bagaimana menghubungi tim informasi produk?','Gunakan formulir dengan topik Informasi produk atau Informasi keamanan obat.']].map(f=>`<details class='c' style='margin-bottom:10px'><summary style='cursor:pointer;font-weight:700'>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
function sendLamaran(){
  const n=$("#lNama")?$("#lNama").value.trim():"",e=$("#lEmail")?$("#lEmail").value.trim():"",h=$("#lHp")?$("#lHp").value.trim():"",k=$("#lKampus")?$("#lKampus").value.trim():"",j=$("#lJalur")?$("#lJalur").value:"",d=$("#lDivisi")?$("#lDivisi").value:"",dr=$("#lDrive")?$("#lDrive").value.trim():"",p=$("#lPesan")?$("#lPesan").value.trim():"";
  if(!n||!e||!h||!k){
    $("#lStatus").style.color="var(--m)";
    $("#lStatus").textContent="Mohon lengkapi Nama, Email, No. HP/WhatsApp, dan Asal Kampus/Institusi.";
    return;
  }
  $("#lStatus").style.color="var(--t)";
  $("#lStatus").textContent="Pendaftaran berhasil disiapkan! Aplikasi email Anda akan terbuka untuk konfirmasi pengiriman dokumen.";
  location.href=`mailto:recruitment@artemapharma.example?subject=${encodeURIComponent("Lamaran "+j+" - "+d+" - "+n)}&body=${encodeURIComponent("Yth. Tim Human Capital PT. ARTEMA PHARMA,\n\nBerikut data lamaran/magang saya:\nNama Lengkap: "+n+"\nEmail: "+e+"\nNo. WhatsApp: "+h+"\nInstitusi/Kampus: "+k+"\nJalur Pendaftaran: "+j+"\nDivisi yang Dituju: "+d+"\nTautan Dokumen/CV/Drive: "+dr+"\n\nMotivasi Singkat:\n"+p+"\n\nTerima kasih.")}`;
}
function go(){const h=(location.hash||"#beranda").slice(1);let id=document.getElementById(h)&&document.getElementById(h).classList.contains("pg")?h:"beranda";
if(h==="tentang-filosofi") id="filosofi-logo";
if(h==="tentang-visi-misi") id="visi-misi";
if(h==="tentang-legalitas") id="legalitas";
if(h==="karir-magang") id="magang";
if(h==="karir-pengembangan") id="pengembangan-karyawan";
if(h==="karir-lamaran") id="kirim-lamaran";
if(h==="karir-kata-mereka") id="apa-kata-mereka";
if(h.startsWith("kegiatan-")){id="kegiatan";const x=CSRD.find(c=>c.f===h.slice(9));if(!x){id="csr"}else renderKD(x)}
document.querySelectorAll(".pg").forEach(e=>e.classList.toggle("on",e.id===id));document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+(id==="kegiatan"?"csr":id)));scrollTo(0,0);if(window.lucide)lucide.createIcons();}
addEventListener("hashchange",go);go();

// Scroll Animation Initialization
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Add animation classes to elements
  document.querySelectorAll('.c, .card, .note, h2, h3, .g > div, section > .w > p, section > .w > h2').forEach((el, index) => {
    // Skip if already has animation class
    if (el.classList.contains('animate-on-scroll') || 
        el.classList.contains('animate-fade') || 
        el.classList.contains('animate-slide-left') || 
        el.classList.contains('animate-slide-right') ||
        el.classList.contains('animate-scale')) {
      return;
    }
    
    // Alternate animation styles for variety
    const animations = ['animate-on-scroll', 'animate-fade', 'animate-slide-left', 'animate-slide-right'];
    const animationClass = animations[index % animations.length];
    
    el.classList.add(animationClass);
    el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    observer.observe(el);
  });
}

// Initialize animations after page load and on navigation
addEventListener('load', initScrollAnimations);
addEventListener('hashchange', () => {
  setTimeout(initScrollAnimations, 100);
});
initScrollAnimations();



