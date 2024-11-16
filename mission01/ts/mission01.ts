function getValueAtObject(obj: { [key: string]: unknown }, key: string) {
  if (key in obj) {
    console.log(obj[key]);
  } else {
    console.error(`"${key}" 속성은 존재하지 않습니다`);
  }
}
