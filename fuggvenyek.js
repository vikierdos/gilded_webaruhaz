export function kartyaLetrehoz(list){
    let txt = "";
    
    list.forEach((elem, index) => {
        txt += `
            <div class="kartya" id="${index}">
            <div class="kartya-header"><h2>${elem.name}</h2></div>
            <div class="kartya-body"><img src="${elem.pic}"></div>
            <div class="kartya-footer"><p id="description">${elem.color}</p><p class="price">${elem.price}</p></div>
            </div>
        `
    });
    return txt;
}

export function kartyaKiir(txt, div){
    const ELEM = $(`${div}`);
    ELEM.html(txt);
}

export function kartyaSzuro(list, keresoszoveg){
    var szurtlist = list.filter(function(dress){
        return dress.name.toUpperCase().includes(keresoszoveg.toUpperCase()) || dress.dsc.toUpperCase().includes(keresoszoveg.toUpperCase());
    });
    return szurtlist;
}

export function kartyaRendezo(list, kulcs, rendezes){
    var rlist = list.sort(function(d1, d2){
            d1[kulcs] < d2[kulcs] ? -1*rendezes: 1*rendezes;
        });
        console.log(rlist);
    return rlist;
}