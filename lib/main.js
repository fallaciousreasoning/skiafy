import skiafy from "./skiafy.js"
import fs from 'fs'
import path from 'path'

export const run = () => {
  if (process.argv.length !== 4) {
    console.log(process.argv)
    throw new Error('Usage is skiafy [INPUT] [OUTPUT]');
  }

  const input = process.argv[2];
  const output = process.argv[3];
  const svgContent = fs.readFileSync(input);
  const resultContent = skiafy(svgContent);

  // Make sure the output folder exists
  fs.mkdirSync(path.resolve(resultContent, '..'), { recursive: true });
  fs.writeFileSync(output, resultContent);
}
