/* --------------------------------------------------------------------- */
/*              finding some data using javascript functions             */
/* --------------------------------------------------------------------- */

const data = [
  "includes may work here",
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Bob" },
];

const isPersonThere = (data, name) => {
  const matches = data.filter(
    (e) => e.name?.toLowerCase() === name.toLowerCase()
    /* ----------------- note: question mark is important. ----------------- */
    /**
     * .toLoweCase function may not show because it can't guess the string
     * name isn't loaded in the map function
     * ? optional keyword determines whether the function is loaded or not
     * if the function is not loaded then the function may not be called
     */
  );

  matches.length > 0 && console.log("\nId\t\t\t Name\n");
  matches.length > 0 &&
    matches.forEach((e) => {
      console.log(e.id, "\t\t\t", e.name, "\n");
    });
};
console.log(isPersonThere(data, "bob"));
