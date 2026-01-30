// Row Transposition Cipher
function rowTransEncrypt(text, key) {
  text = text.replace(/ /g, "");
  let numCols = key.length;
  let numRows = Math.ceil(text.length / numCols);
  let paddedText = text.padEnd(numRows * numCols, "_"); // padding
  let grid = [];
  for (let r = 0; r < numRows; r++) {
    grid.push(paddedText.slice(r * numCols, (r + 1) * numCols).split(""));
  }
  // Read columns in key order
  let result = "";
  for (let k of key) {
    let col = Number(k) - 1; // key is numeric e.g. "3 1 2"
    for (let r = 0; r < numRows; r++) {
      result += grid[r][col];
    }
  }
  return result;
}

function rowTransDecrypt(cipher, key) {
  cipher = cipher.replace(/ /g, "");
  let numCols = key.length;
  let numRows = Math.ceil(cipher.length / numCols);
  let grid = Array.from({ length: numRows }, () => Array(numCols).fill(""));
  let index = 0;
  for (let k of key) {
    let col = Number(k) - 1;
    for (let r = 0; r < numRows; r++) {
      grid[r][col] = cipher[index++] || "_";
    }
  }
  return grid.map(r => r.join("")).join("").replace(/_/g, ""); // remove padding
}

export { rowTransEncrypt, rowTransDecrypt };