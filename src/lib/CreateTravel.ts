import fs from 'fs';
import path from 'path';

export async function CreateTravel(to: string) {
  const destinationsFullPath = path.join(process.cwd(), 'src', 'providers', 'destinations.json');
  const destinationsFile = fs.readFileSync(destinationsFullPath, 'utf-8');

  const destinations = JSON.parse(destinationsFile);

  for(let i in destinations.travels) {
    if(destinations.travels[i].name === to) {
      return destinations.travels[i];
    }
  }
}