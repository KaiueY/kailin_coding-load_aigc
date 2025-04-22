function containsRepeatingLetter(str) {
  if (typeof str !== "string") return null;
  let len = str.length;

  for (let i = 0; i < len; i++) {
    if (str[i]?.toLowerCase() == str[i + 1]?.toLowerCase()) {
        // 仅仅添加了toLowerCase() 80% --> 0%
      return true;
    }
  }
  return false;
}

console.log(containsRepeatingLetter("sdaa"));
