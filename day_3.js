//Remove the duplicate character in the string

function removeDupStr(str) {
  let result = "";
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    // console.log(str);
    let char = str[i];
    // console.log(str[i]);
    if (freq[char]) {
      freq[char]++;
      freq;
    } else {
      freq[char] = 1;
      result = result + char;
      result;
    }
  }
  return result;
}
const output = removeDupStr("Hello");
output;
