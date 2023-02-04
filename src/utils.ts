export function getRandom(array: any[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function save(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function load(key: string, defaultValue = null) {
  return JSON.parse(String(localStorage.getItem(key))) || defaultValue;
}
