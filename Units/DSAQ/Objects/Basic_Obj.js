const profile = {
  name: "Gokul",
  city: "Coimbatore",
  State: "Tamilnadu",
  Hobbie: ["shuttle", "Cricket", "Movies"],
  detail: {
    UG: true,
    PG: false,
  },
};
profile.age = 23;
profile.age = 21;

console.log(profile.age);
console.log(profile.Hobbie);
console.log(profile.detail.UG);
console.log(profile["city"]);
console.log(profile.Hobbie[2]);
