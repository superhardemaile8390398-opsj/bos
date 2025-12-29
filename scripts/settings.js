
window.settings={mode:'easy',ai:'ddg',tracking:true,theme:'#44aaff'};

mode.onchange=e=>settings.mode=e.target.value;
ai.onchange=e=>settings.ai=e.target.value;
tracking.onchange=e=>settings.tracking=e.target.checked;
themeColor.oninput=e=>document.documentElement.style.setProperty('--accent',e.target.value);

export.onclick=()=>{
 const blob=new Blob([JSON.stringify(settings)],{type:'application/json'});
 const a=document.createElement('a');
 a.href=URL.createObjectURL(blob);
 a.download='bos-settings.json';
 a.click();
}

import.onchange=e=>{
 const r=new FileReader();
 r.onload=()=>Object.assign(settings,JSON.parse(r.result));
 r.readAsText(e.target.files[0]);
}
