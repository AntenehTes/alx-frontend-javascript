export default function returnHowManyArguments(...args) {
  let argNum = 0;
  // eslint-disable-next-line
  for (const arg of args) {
    argNum += 1;
  }
  return argNum;
}
