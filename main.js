import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("\nLista inicial:");
console.log(list.toString());

list.insertAt("frog", 3);
console.log("\nApós insertAt('frog', 3):");
console.log(list.toString());

list.removeAt(2);
console.log("\nApós removeAt(2):");
console.log(list.toString());

console.log("\nTamanho da lista:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());
console.log("Contém 'cat'?", list.contains("cat"));
console.log("Índice de 'hamster':", list.find("hamster"));