/* ====== SISTEM ASSET FOTO/VIDEO ======
   Prinsip: tulis saja src="asset/..." di HTML/Javascript.
   - File ADA      -> foto/video tampil normal
   - File BELUM ADA-> otomatis muncul kotak berisi path file (jadi tahu nama file apa yang harus ditambahkan)   */
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const medIMG=(src,alt="")=>`<img class="aml" src="${src}" alt="${alt}" loading="lazy">`;
function fileErr(el){
  const src=el.getAttribute("src")||"";
  const isHdr=el.classList.contains("hdr-bg")||!!el.closest(".page-hdr, .hero");
  const d=document.createElement("div");
  d.className=isHdr?"asset-fb hdr-fb":"asset-fb";
  if(isHdr){
    d.innerHTML=`<div class="hdr-ph-box"><span class="hdr-ph-icon"><i data-lucide="image"></i></span><div class="hdr-ph-text"><span class="hdr-ph-label">Foto Header Belum Terdeteksi</span><code class="hdr-ph-path">${src}</code><small class="hdr-ph-hint"><i data-lucide="folder" class="w-3.5 h-3.5 inline mr-1 text-tl"></i> Letakkan file foto format <b>.jpeg</b> pada lokasi folder &amp; nama file di atas</small></div></div>`;
  }else{
    d.innerHTML=`<span style="font-size:20px">${el.tagName==="VIDEO"?"<i data-lucide='video' class='w-5 h-5 text-pu'></i>":"<i data-lucide='image' class='w-5 h-5 text-pu'></i>"}</span><span class="p">${src}</span><small>file belum ada atau tidak bisa dimuat — periksa: 1) File ada di folder yang benar, 2) Format file benar (PNG/JPG), 3) Tidak corrupt</small>`;
  }
  el.replaceWith(d);
  console.error("Asset failed to load:",src);
}
document.addEventListener("error",e=>{const t=e.target;if(t&&(t.tagName==="IMG"||t.tagName==="VIDEO")&&(t.getAttribute("src")||"").startsWith("asset/"))fileErr(t)},true);
