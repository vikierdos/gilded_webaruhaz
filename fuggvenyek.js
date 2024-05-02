export function kartyaLetrehoz(list) {
  let txt = "";

  list.forEach((elem, index) => {
    txt += `
            <div class="kartya">
            <div class="kartya-header"><h2>${elem.name}</h2></div>
            <div class="kartya-body"><img src="${elem.pic}"></div>
            <div class="kartya-footer"><p id="description">${elem.color}</p><p class="price">$ ${elem.price}</p><button id="${index}" class="kosarba"><i class="fa-solid fa-basket-shopping"></i></button></div>
            </div>
        `;
  });
  return txt;
}

export function kartyaKiir(txt, div) {
  const ELEM = $(`${div}`);
  ELEM.html(txt);
}

export function kartyaSzuro(list, keresoszoveg) {
  var szurtlist = list.filter(function (dress) {
    return (
      dress.name.toUpperCase().includes(keresoszoveg.toUpperCase()) ||
      dress.color.toUpperCase().includes(keresoszoveg.toUpperCase())
    );
  });
  return szurtlist;
}

export function kartyaRendezo(list, kulcs, rendezes) {
  const rlist = list.sort(function (d1, d2) {
    return d1[kulcs] < d2[kulcs] ? -1 * rendezes : 1 * rendezes;
  });
  return rlist;
}

export function kosarba(list, index, klist) {
    if(klist.length = 0){
        klist.push(list[index]);}
    else{
    klist.forEach((elem) => {
      if (elem.pieces > 0) {
        elem.pieces++;
      }
      else{
        elem.pieces = 1;
      }
      console.log(elem);
    });
  }
  
  return klist;
}

export function tablaLetrehoz(list) {
  let total = 0;
  let txt = `<table class="tablazat">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Color</th>
                  <th>Pieces<th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="kosar">`;
  list.forEach((elem, index) => {
    if (index > 0) {
      txt += `<tr>
        <td>${elem.name}</td>
        <td>${elem.color}</td>
        <td>${elem.pieces}</td>
        <td>$ ${elem.price*elem.pieces}</td>
        <td><button><i class="fa-solid fa-trash-can" id=${index}></i></button></td>
    </tr>`;
      total += elem.price*elem.pieces;
    }
  });
  txt += `<tr><td>Total:</td> <td></td> <td>$${total}</td></tr></tbody>
    </table>`;
  return txt;
}
