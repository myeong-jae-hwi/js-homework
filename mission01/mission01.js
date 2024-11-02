function getValueAtObject(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    console.error(`"${key}" 속성은 존재하지 않습니다`);
  }
}
