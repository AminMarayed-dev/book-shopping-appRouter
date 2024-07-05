import { useEffect, useState } from "react";

export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key)!) || [];
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [state, setState] = useState(JSON.parse(localStorage.getItem(key)));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
