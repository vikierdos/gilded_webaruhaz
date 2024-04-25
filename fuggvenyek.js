export function kartyaLetrehoz(list){
    let txt = "";
    
    list.forEach((elem, index) => {
        txt += `
            <div class="kartya" id="${index}">
            <div class="kartya-header"><h2>${elem.name}</h2></div>
            <div class="kartya-body"><img src="${elem.pic}"></div>
            <div class="kartya-footer"><p id="description">${elem.dsc}</p><p class="color">${elem.color}</p></div>
            </div>
        `
    });
    return txt;
}

export function kartyaKiir(txt, div){
    const ELEM = $(`${div}`);
    ELEM.html(txt);
}