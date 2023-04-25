import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import LabelPage from "@/components/LabelPage";

const registeredAnimals = [
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

export default function Home() {
  return (
    <>
      <Navbar />
      <Filter />
      <div className="bg-[#A5C282] pt-4">
        <LabelPage titlePage="Principal" />
        <Card
          animals={registeredAnimals}
          close="adicionar interesse"
          open="remover interesse"
          corClose="#516953"
          corOpen="#5A3938"
        />
      </div>
      <Footer />
    </>
  );
}
