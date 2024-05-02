import { DRESSLIST } from "./adat.js";
import { kartyaKiir, kartyaLetrehoz, kartyaSzuro, kartyaRendezo, kosarba, tablaLetrehoz} from "./fuggvenyek.js";

init(DRESSLIST);
kartyaSzures(DRESSLIST);

function init(list){
    let txt = kartyaLetrehoz(list);
    kartyaKiir(txt,".adatok");
    kartyaRendezes(list);
    kosarbaTenni(list);
}

function kartyaSzures(list){
    const szuroELEM = $("#filter");
    szuroELEM.on("keyup", function () {
        let szoveg = szuroELEM.val();
        init(kartyaSzuro(list, szoveg))
    });
}

function kartyaRendezes(list){
    const rendezELEM = $("#sorting");

    var rendezes = 1;
    rendezELEM.on("change", function (){
        let rval = rendezELEM.val().split("_");
        if( rval[1] == "desc"){
            rendezes = -1;
        }
        else{
            rendezes = 1;
        }
        let szoveg = kartyaRendezo(list, rval[0], rendezes)
        init(szoveg)
    });
}
let klist = [];
function kosarbaTenni(list){
    const kosarbaELEM = $(".kosarba");
    kosarbaELEM.on("click", function(event){
        let index = event.target.closest("button").id;
        klist = kosarba(list, index, klist);
        let txt = tablaLetrehoz(klist);
        kartyaKiir(txt, "#cart");
    });
}
