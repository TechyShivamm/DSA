//String Anagram
//"SHIVAM"-->"MAVIHS"//No of latter same & arrangement change
// Ex-> Cool->oocl
//Hello=>lloeH

// condition
//length check(For both string)
// string "hello"
//{h:1,e:1,l:2,o:1} 2nd sting m jo value h usko first string m -1 kr dena h

function isAnagram(Str1, Str2) {
  if (Str1.length != Str2.length) {
    return false;
  }
  let Counter = {};
  for (let letter of Str1) {
    Counter[letter] = (Counter[letter] || 0) + 1;
    Counter;
    console.log(letter);
  }
  console.log(Counter);

  for (let items of Str2) {
    if (!Counter[items]) {
      console.log(items);
      return false;
    }
    Counter[items] -= 1;
  }
  return true;
}
const result = isAnagram("hello", "lloello");
result;
