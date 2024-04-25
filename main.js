import { DRESSLIST } from "./adat.js";
import { kartyaKiir, kartyaLetrehoz } from "./fuggvenyek.js";

let txt = kartyaLetrehoz(DRESSLIST);
kartyaKiir(txt, ".adatok");
