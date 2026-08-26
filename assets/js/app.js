const toast=document.getElementById("toast");
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800);}
async function copyText(text){
  try{await navigator.clipboard.writeText(text);showToast("Copiado: "+text);}
  catch(e){const t=document.createElement("textarea");t.value=text;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove();showToast("Copiado: "+text);}
}
document.querySelectorAll(".copy-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{const el=document.getElementById(btn.dataset.copy);copyText(el.textContent.trim());});
});
document.getElementById("copyJavaBottom")?.addEventListener("click",()=>copyText("209.222.97.218:25613"));
document.querySelector(".nav-toggle")?.addEventListener("click",()=>document.querySelector(".nav").classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav").classList.remove("open")));
