const organization = { name: "Acme Gooseberries", country: "GB" };

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);

class Organization {
  #name;
  #country;

  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});
