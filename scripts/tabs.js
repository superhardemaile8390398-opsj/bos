
let tabsEl=tabs;
let tabsData=[];
newTab.onclick=()=>{
 tabsData.push({incognito:false});
 let d=document.createElement('div');
 d.textContent='Tab '+tabsData.length;
 tabsEl.appendChild(d);
}
