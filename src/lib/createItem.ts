import fs from 'fs';
import path from 'path';

export function setItem(props: string, servicePath: string) {
  const serviceFullPath = path.join(process.cwd(), 'src', 'providers', servicePath);
  const serviceFile = fs.readFileSync(serviceFullPath, 'utf-8');

  const service = JSON.parse(serviceFile);

  for(let i in service) {
    if(service[i].name === props) {
      return service[i];
    }
  }
}

export async function CreateTravel(to: string) {
  return setItem(to, 'destinations.json');
}

export async function CreateProduct(product: string) {
  return setItem(product, 'products.json');
}