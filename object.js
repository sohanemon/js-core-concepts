/* --------------------------------------------------------------------- */
/*                            rock with Object                           */
/* --------------------------------------------------------------------- */

/* ------------------------- object declaration ------------------------ */
var object = {
  name: "South Hall",
  seat: 160,
  cost: 3000,
  available: true,
  color: "white",
  visit: (object) => {
    console.log("hi, i am south hall");
    return { ...object };
  },
};

console.log(object);
console.log(object.visit(object));
