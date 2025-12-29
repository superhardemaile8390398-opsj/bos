
document.addEventListener('keydown',e=>{
 if(e.ctrlKey&&e.key==='t'){e.preventDefault();newTab.click()}
 if(e.ctrlKey&&e.key===','){e.preventDefault();openSettings.click()}
});
