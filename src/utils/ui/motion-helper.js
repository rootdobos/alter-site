import { useTransform } from "framer-motion";

 export function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  export function splitStringUsingRegex(inputString){
    const characters=[];
    const regex=/[\s\S]/gu;
    let match;
    while ((match=regex.exec(inputString))!==null){
      characters.push(match[0])
    }
    return characters
  }