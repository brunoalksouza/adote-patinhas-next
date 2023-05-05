import AnimalsUser from "@/components/AnimalsUser";
import CardUser from "@/components/CardUser";
import CustomHead from "@/components/CustomHead";
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
    name: "Toby",
    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "5km",
    race: "vira-lata",
    vacinade: "sim",
    age: "3 anos",
    castrated: "não",
    description:
      "Este é um cachorro macho de tamanho médio, com pelo marrom e branco macio e brilhante. Ele tem cerca de três anos de idade e é muito brincalhão e energético. Ele adora correr e brincar com seus brinquedos e está sempre animado para fazer atividades com seus donos. Ele é muito carinhoso e gosta de estar perto de seus donos, seja sentado ao lado deles ou recebendo carinho em seu colo. Ele é muito amigável e sociável, e gosta de conhecer novas pessoas e animais. Ele ainda não foi castrado, mas já foi vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e atividades. Se você estiver procurando por um companheiro fiel e divertido, este cachorro pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "médio",
  },
  {
    id: 2,
    name: "Lila",

    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "15km",
    race: "rajado",
    vacinade: "sim",
    age: "4 anos",
    castrated: "sim",
    description:
      "Esta é uma gata fêmea de tamanho pequeno, com pelo branco macio e sedoso. Ela tem cerca de quatro anos de idade e é muito calma e tranquila. Ela adora receber carinho e estar perto de seus donos, seja sentada no colo ou ao lado deles no sofá. Ela é muito carinhosa e gosta de estar perto de pessoas e animais que conhece. Ela já foi castrada, vacinada e recebeu todos os cuidados veterinários necessários. Ela está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e tranquilidade. Se você estiver procurando por uma companheira fiel e serena, esta cachorra pode ser perfeita para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "fêmea",
    port: "pequeno",
  },
  {
    id: 3,
    name: "Charlie",

    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "20km",
    race: "labrador",
    vacinade: "sim",
    age: "1 ano",
    castrated: "não",
    description:
      "Este é um cachorro macho de tamanho médio-grande, com pelo amarelo dourado brilhante. Ele tem cerca de um ano de idade e é muito brincalhão e ativo. Ele adora correr e brincar com seus brinquedos, especialmente jogando bola. Ele é muito carinhoso e gosta de estar perto de seus donos, seja recebendo carinho em seu colo ou dormindo ao seu lado. Ele é muito amigável e sociável, e adora conhecer novas pessoas e animais. Ele ainda não foi castrado, mas já foi vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e atividades. Se você estiver procurando por um companheiro fiel e divertido, este cachorro pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "médio-grande",
  },
  {
    id: 4,
    name: "Daisy",
    imageSrc:
      "https://s2.glbimg.com/kdUCx8YbFw24PKmk5l-h-5OR9_s=/0x0:1920x1279/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/k/Bea0ODQZiAkXsYYDmrvQ/ansiedade-canina.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "8km",
    race: "shih tzu",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Esta é uma cachorra fêmea de tamanho pequeno, com pelo marrom e branco macio e sedoso. Ela tem cerca de dois anos de idade e é muito meiga e dócil. Ela adora receber carinho e estar perto de seus donos, seja sentada no colo ou deitada ao seu lado. Ela é muito carinhosa e gosta de estar perto de pessoas e animais que conhece. Ela já foi castrada, vacinada e recebeu todos os cuidados veterinários necessários. Ela está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e tranquilidade. Se você estiver procurando por uma companheira fiel e serena, esta cachorra pode ser perfeita para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "fêmea",
    port: "pequeno",
  },
  {
    id: 5,
    name: "Max",
    imageSrc:
      "https://s2.glbimg.com/8Qm0ZoUOpOd0pmzfqKK475OrstU=/e.glbimg.com/og/ed/f/original/2015/10/28/cachorro-pets.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "15km",
    race: "rottweiler",
    vacinade: "sim",
    age: "3 anos",
    castrated: "sim",
    description:
      "Este é um cachorro macho de porte grande, com pelo preto e marrom macio e brilhante. Ele tem cerca de três anos de idade e é muito leal e protetor. Ele adora brincar com seus donos e se divertir com brinquedos, mas também é muito sério e determinado quando se trata de proteger sua família. Ele é muito carinhoso com aqueles que conhece bem, mas pode ser desconfiado com estranhos. Ele já foi castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e espaço para se exercitar. Se você estiver procurando por um cão fiel e protetor, este cachorro pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 6,
    name: "Luna",

    imageSrc:
      "https://www.petz.com.br/blog/wp-content/uploads/2022/02/gato-e-carnivoro2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "5km",
    race: "siames",
    vacinade: "sim",
    age: "4 anos",
    castrated: "sim",
    description:
      "Esta é uma gata fêmea de porte médio, com pelo branco macio e sedoso. Ela tem cerca de quatro anos de idade e é muito meiga e calma. Ela adora receber carinho e atenção, mas também é muito independente e tranquila. Ela é muito carinhosa com aqueles que conhece bem, mas pode ser tímida com estranhos. Ela já foi castrada, vacinada e recebeu todos os cuidados veterinários necessários. Ela está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e tranquilidade. Se você estiver procurando por uma companheira fiel e serena, esta cachorra pode ser perfeita para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "fêmea",
    port: "médio",
  },
  {
    id: 7,
    name: "Rex",
    imageSrc:
      "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "20km",
    race: "laranja",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
    description:
      "Este é um cachorro macho de porte grande, com pelo preto e marrom macio e brilhante. Ele tem cerca de dois anos de idade e é muito ativo e brincalhão. Ele adora correr e pular atrás de brinquedos e está sempre animado para brincar com seus donos. Ele é muito leal e protetor com sua família, mas pode ser desconfiado com estranhos. Ele já foi castrado, vacinado e recebeu todos os cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e espaço para se exercitar. Se você estiver procurando por um cão fiel e energético, este cachorro pode ser perfeito para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "macho",
    port: "grande",
  },
  {
    id: 8,
    name: "Bella",

    imageSrc:
      "https://img.freepik.com/psd-gratuitas/cena-com-adoravel-cachorro-marrom-e-branco_23-2150179291.jpg?w=740&t=st=1683288196~exp=1683288796~hmac=457302674f4d380109556263a1cf0a30b11de2759b4a0ee40a705e8f94e51246",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "8km",
    race: "pug",
    vacinade: "sim",
    age: "1 ano",
    castrated: "sim",
    description:
      "Esta é uma cachorra fêmea de porte pequeno, com pelo caramelo macio e sedoso. Ela tem cerca de um ano de idade e é muito divertida e engraçada. Ela adora brincar com seus donos e com outros cachorros, e é muito sociável e amigável. Ela é muito carinhosa e gosta de receber carinho e atenção o tempo todo. Ela já foi castrada, vacinada e recebeu todos os cuidados veterinários necessários. Ela está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção, carinho e brincadeiras. Se você estiver procurando por uma companheira divertida e fofa, esta cachorra pode ser perfeita para você!",
    email: "patinhas@gmail.com",
    telephone: "(00)90000-0000",
    sex: "fêmea",
    port: "pequeno",
  },
  {
    id: 9,
    name: "Buddy",

    imageSrc:
      "https://sougato.com.br/wp-content/uploads/2022/03/stepan-gato-famoso-1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "15km",
    race: "fino e elegante",
    vacinade: "sim",
    age: "1 ano e meio",
    castrated: "não",
    description:
      "Este é um cachorro macho de porte médio-grande, com pelo preto e brilhante. Ele tem cerca de um ano e meio de idade e é muito brincalhão e enérgico. Ele adora correr e brincar com seus donos, e é muito ativo e animado. Ele ainda não foi castrado e precisa receber todas as vacinas e cuidados veterinários necessários. Ele está procurando por um lar amoroso e responsável, com pessoas que possam lhe dar muita atenção e cuidados. Se você está procurando por um cachorro companheiro e cheio de energia, o Buddy pode ser perfeito para você!",
    email: "amigosdopet@gmail.com",
    telephone: "(00)88888-8888",
    sex: "macho",
    port: "médio-grande",
  },
];

export default function Perfil() {
  return (
    <>
      <CustomHead title="Perfil" />
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
