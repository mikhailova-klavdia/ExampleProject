import { Dog } from './entities/dog';
import { Cat } from './entities/cat';
import { AnimalService } from './service/animal-service';
import { capitalize, format, CaseType } from './utils/formatter';

async function main() {
  const svc = new AnimalService();

  svc.add({ id: 1, ...new Dog('fido', 'Labrador') });
  svc.add({ id: 2, ...new Cat('whiskers', 'Tabby') });

  console.log(capitalize('hello world'));             // Hello world
  console.log(format('GoodBye', CaseType.UPPER));     // GOODBYE

  svc.list().forEach(a => console.log(a.info()));     // class method
  console.log(svc.speakAll());                        // inherited + overridden

  // direct lookup
  const cat = svc.findById(2);
  if (cat) console.log(`Found: ${cat.name}`);
}

main().catch(console.error);
