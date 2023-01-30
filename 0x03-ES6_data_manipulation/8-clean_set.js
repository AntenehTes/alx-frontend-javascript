export default function cleanSet(set, startString) {
  let str = '';
  let flag = false;
  if (startString && typeof startString === 'string') {
    for (const stringSet of set) {
      flag = false;
      if (stringSet) {
        for (let i = 0; i < startString.length; i += 1) {
          if (startString[i] !== stringSet[i]) {
            break;
          }
          if (i === startString.length - 1) {
            flag = true;
          }
        }
        if (str !== '' && flag !== false) {
          str = str.concat('-');
        }
        if (flag === true) {
          str = str.concat(stringSet.substr(startString.length));
        }
      }
    }
  }
  return str;
}
