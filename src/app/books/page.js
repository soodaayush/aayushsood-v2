import styles from "../styles/books/books.module.css";

import nineteenEightyFour from "../../../public/assets/books/1984.jpg";
import oneHundredYearsOfSolitude from "../../../public/assets/books/one-hundred-years-of-solitude.jpg";
import moonwalkingWithEinstein from "../../../public/assets/books/moonwalking-with-einstein.jpg";
import dune from "../../../public/assets/books/dune.jpg";
import steveJobs from "../../../public/assets/books/steveJobs.jpg";
import animalFarm from "../../../public/assets/books/animalFarm.jpg";
import braveNewWorld from "../../../public/assets/books/braveNewWorld.jpg";
import theKiteRunner from "../../../public/assets/books/theKiteRunner.jpg";
import slaughterhouseFive from "../../../public/assets/books/slaughterhouseFive.jpg";
import allQuietOnTheWesternFront from "../../../public/assets/books/allQuietOnTheWesternFront.jpg";
import theAlchemist from "../../../public/assets/books/theAlchemist.jpg";
import theWarOfTheWorlds from "../../../public/assets/books/theWarOfTheWorlds.jpg";
import twelveYearsASlave from "../../../public/assets/books/twelveYearsASlave.jpg";
import thePsychologyOfMoney from "../../../public/assets/books/thePsychologyOfMoney.jpg";
import theMartian from "../../../public/assets/books/theMartian.jpg";
import projectHailMary from "../../../public/assets/books/projectHailMary.jpg";
import principles from "../../../public/assets/books/principles.jpg";
import lordOfTheFlies from "../../../public/assets/books/lordOfTheFlies.jpg";
import andThenThereWereNone from "../../../public/assets/books/andThenThereWereNone.jpg";
import theInvisibleMan from "../../../public/assets/books/theInvisibleMan.jpg";
import theOutsiders from "../../../public/assets/books/theOutsiders.jpg";
import duneMessiah from "../../../public/assets/books/duneMessiah.jpg";
import childrenOfDune from "../../../public/assets/books/childrenOfDune.jpg";
import theRoad from "../../../public/assets/books/theRoad.jpg";
import atomicHabits from "../../../public/assets/books/atomicHabits.jpg";
import theHotZone from "../../../public/assets/books/theHotZone.jpg";

import Book from "../components/books/book";

const books = [
  {
    title: "1984",
    author: "George Orwell",
    cover: nineteenEightyFour,
    bookLink: "https://a.co/d/1f1wlKi",
    authorLink: "https://www.amazon.ca/stores/George-Orwell/author/B000AQ0KKY",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    cover: oneHundredYearsOfSolitude,
    bookLink: "https://a.co/d/2uLHEjo",
    authorLink:
      "https://www.amazon.ca/stores/Gabriel-García-Márquez/author/B00MBVAZZQ",
  },
  {
    title: "Moonwalking with Einstein",
    author: "Joshua Foer",
    cover: moonwalkingWithEinstein,
    bookLink: "https://a.co/d/chyGiZZ",
    authorLink: "https://www.amazon.ca/stores/Joshua-Foer/author/B003Z9NQW2",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover: dune,
    bookLink: "https://a.co/d/fkVEtny",
    authorLink: "https://www.amazon.ca/stores/Frank-Herbert/author/B000APO5OM",
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    cover: steveJobs,
    bookLink: "https://a.co/d/5MzbkMM",
    authorLink:
      "https://www.amazon.ca/stores/Walter-Isaacson/author/B000APFLB8",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    cover: animalFarm,
    bookLink: "https://a.co/d/71bQPGj",
    authorLink: "https://www.amazon.ca/stores/George-Orwell/author/B000AQ0KKY",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    cover: braveNewWorld,
    bookLink: "https://a.co/d/e9HWaqr",
    authorLink: "https://www.amazon.ca/stores/Aldous-Huxley/author/B000APWRRY",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    cover: theKiteRunner,
    bookLink: "https://a.co/d/0dpcblj",
    authorLink:
      "https://www.amazon.ca/stores/Khaled-Hosseini/author/B001HCX9N0",
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    cover: slaughterhouseFive,
    bookLink: "https://a.co/d/2LTz1RJ",
    authorLink: "https://www.amazon.ca/stores/Kurt-Vonnegut/author/B000APYE16",
  },
  {
    title: "All Quiet on the Western Front",
    author: "Erich Maria Remarque",
    cover: allQuietOnTheWesternFront,
    bookLink: "https://a.co/d/fiT4Pl1",
    authorLink:
      "https://www.amazon.ca/stores/Erich-M.-Remarque/author/B004N8ACZI",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: theAlchemist,
    bookLink: "https://a.co/d/g1TicqC",
    authorLink: "https://www.amazon.ca/stores/Paulo-Coelho/author/B000AQ3HB8",
  },
  {
    title: "The War of the Worlds",
    author: "H.G. Wells",
    cover: theWarOfTheWorlds,
    bookLink: "https://a.co/d/dEF8aQs",
    authorLink: "https://www.amazon.ca/stores/H.-G.-Wells/author/B000AQ4FBE",
  },
  {
    title: "Twelve Years a Slave",
    author: "Solomon Northup",
    cover: twelveYearsASlave,
    bookLink: "https://a.co/d/cG45QIM",
    authorLink:
      "https://www.amazon.ca/stores/Solomon-Northup/author/B00KJKV848",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: thePsychologyOfMoney,
    bookLink: "https://a.co/d/8m0fY7s",
    authorLink: "https://www.amazon.ca/stores/Morgan-Housel/author/B084ZNV1LR",
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    cover: theMartian,
    bookLink: "https://a.co/d/4Od0Kj8",
    authorLink: "https://www.amazon.ca/stores/Andy-Weir/author/B00G0WYW92",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: projectHailMary,
    bookLink: "https://a.co/d/cSk7cZx",
    authorLink: "https://www.amazon.ca/stores/Andy-Weir/author/B00G0WYW92",
  },
  {
    title: "Principles",
    author: "Ray Dalio",
    cover: principles,
    bookLink: "https://a.co/d/8CNJuyb",
    authorLink: "https://www.amazon.ca/stores/Ray-Dalio/author/B0711LQ9G4",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    cover: lordOfTheFlies,
    bookLink: "https://a.co/d/fWB4VBC",
    authorLink:
      "https://www.amazon.ca/stores/William-Golding/author/B000APSP20",
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    cover: andThenThereWereNone,
    bookLink: "https://a.co/d/7Ka4Hzq",
    authorLink:
      "https://www.amazon.ca/stores/Agatha-Christie/author/B000APENBC",
  },
  {
    title: "The Invisible Man",
    author: "H.G. Wells",
    cover: theInvisibleMan,
    bookLink: "https://a.co/d/6oYaTuH",
    authorLink: "https://www.amazon.ca/stores/H.-G.-Wells/author/B000AQ4FBE",
  },
  {
    title: "The Outsiders",
    author: "S.E. Hinton",
    cover: theOutsiders,
    bookLink: "https://a.co/d/9gMGJBT",
    authorLink: "https://www.amazon.ca/stores/S.-E.-Hinton/author/B000AQ1R5G",
  },
  {
    title: "Dune Messiah",
    author: "Frank Herbert",
    cover: duneMessiah,
    bookLink: "https://a.co/d/7Q4lOrV",
    authorLink: "https://www.amazon.ca/stores/Frank-Herbert/author/B000APO5OM",
  },
  {
    title: "Children of Dune",
    author: "Frank Herbert",
    cover: childrenOfDune,
    bookLink: "https://a.co/d/ao2Ia6n",
    authorLink: "https://www.amazon.ca/stores/Frank-Herbert/author/B000APO5OM",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    cover: theRoad,
    bookLink: "https://a.co/d/f4wds28",
    authorLink:
      "https://www.amazon.ca/stores/Cormac-McCarthy/author/B000APT0OW",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: atomicHabits,
    bookLink: "https://a.co/d/8dsmlqm",
    authorLink: "https://www.amazon.ca/stores/James-Clear/author/B07DJTJC3X",
  },
  {
    title: "The Hot Zone",
    author: "Richard Preston",
    cover: theHotZone,
    bookLink: "https://a.co/d/1MMeVNL",
    authorLink:
      "https://www.amazon.ca/stores/Richard-Preston/author/B000AQ793U",
  },
];

export default function Books() {
  return (
    <div className={styles.booksContainer}>
      <div className={`content ${styles.booksContent}`}>
        <h1 className={styles.booksTitle}>Reading List</h1>
        <div className={styles.booksList}>
          {books.map((book, index) => (
            <Book {...book} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
