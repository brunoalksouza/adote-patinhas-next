import AnimalsUser from "@/components/AnimalsUser";
import CardUser from "@/components/CardUser";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const user = [
  {
    id: 1,
    name: "Lurdes Aparecida da Silva",
    email: "lurdinha77@gmail.com",
    contact: "(99) 9 9999-7777",
    imageSrc:
      "https://media.gazetadopovo.com.br/viver-bem/2016/09/cat-e1474480323245-fc48cf70.jpg",
  },
];

const animals = [
  {
    id: 1,
    name: "Mayllon",
    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "rajado",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 2,
    name: "Bruno",

    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "caramelo",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 3,
    name: "Talles",

    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "22km",
    race: "bulldog frances",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 4,
    name: "Mayllon",

    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "rajado",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 5,
    name: "Bruno",

    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "caramelo",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 6,
    name: "Talles",

    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "22km",
    race: "bulldog frances",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 7,
    name: "Mayllon",

    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "rajado",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 8,
    name: "Bruno",

    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "caramelo",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 9,
    name: "Talles",

    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "22km",
    race: "bulldog frances",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um gato macho de tamanho médio, com pelo preto e branco macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele já está castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por um companheiro fiel e divertido, este gato pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
];

export default function Perfil() {
  return (
    <>
      <Navbar />
      <div className="bg-[#A5C282]">
        <div className="bg-[#A5C282] items-center mx-auto flex max-w-7xl flex-col sm:flex-row  sm:justify-between ">
          <CardUser user={user} />
          <AnimalsUser animals={animals} />
        </div>
      </div>
      <Footer />
    </>
  );
}
