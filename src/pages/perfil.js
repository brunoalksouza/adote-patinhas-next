import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardUser from "@/components/CardUser";
import AnimalsUser from "@/components/AnimalsUser";

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
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "rajado",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 2,
    name: "Bruno",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "caramelo",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 3,
    name: "Talles",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "22km",
    race: "bulldog frances",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 4,
    name: "Mayllon",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "rajado",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 5,
    name: "Bruno",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "caramelo",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 6,
    name: "Talles",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "22km",
    race: "bulldog frances",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 7,
    name: "Mayllon",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "rajado",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 8,
    name: "Bruno",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "10km",
    race: "caramelo",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
  {
    id: 9,
    name: "Talles",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Front of men's Basic Tee in black.",
    distance: "22km",
    race: "bulldog frances",
    vacinade: "sim",
    age: "2 anos",
    castrated: "sim",
  },
];

export default function Perfil() {
  return (
    <>
      <Navbar />
      <div className="bg-[#A5C282]">
        <div className="bg-[#A5C282] mx-auto flex max-w-7xl justify-between flex-wrap flex-1">
            <div className="float-left">
                <CardUser user={user} />
            </div>
          

          <AnimalsUser animals={animals} />
        </div>
      </div>
      <Footer />
    </>
  );
}
