function letRepeat(str) {
    let letArray = {};
    for (letcd i = 0; i < str.length; i++) {
        letArray[str[i]] = (letArray[str[i]] || 0) + 1;
    }
    let max = 0;
    for (i in letArray) {
        max = Math.max(max, letArray[i]);
    }
    return letArray;
}

console.log(letRepeat("Не секрет, что во многих местах земного шара Церковь Христова находится далеко не добром здравии. Она теряет силы, потому что ее кормят какой-то неполноценной пищей, вкоторой много всевозможных искусственных добавок, консервантов и суррогатов. Как"));
// function repCount (word) {
//     let orig = word,
//         len = word.length,
//         mem = {},
//         max = 0,
//         char, i;
  
//     word = word.toLowerCase();
  
//     for (i = 0; i < len; i++) {
//       char = word[i];
  
//       mem[char] = mem[char] + 1 || 1;
  
//       if (mem[char] > max) {
//         max = mem[char];
//       } 
//     }
  
//     return [orig, max];
//   }
//   console.log(repCount("Hello my name Roman Dubine"));