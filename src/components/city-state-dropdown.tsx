import { useState } from "react";

const countries = [
  { name: "India", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", cities: ["Dhaka", "Chittagong"] },
];

export default function CityStateDropdown() {
  const [active, setActive] = useState("India");
  const activeCities = countries.filter((country) => country.name === active);

  return (
    <div className="flex">
      <select onChange={(e) => setActive(e.target.value)}>
        {countries.map((country) => (
          <option key={country.name}>{country.name}</option>
        ))}
      </select>
      <select>
        {activeCities[0].cities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}
