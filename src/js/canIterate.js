export default function canIterate(obj) {
  return Symbol.iterator in Object(obj);
}
