import { Link } from "react-router-dom";

const PAGES_LIST = [
  { name: "Context example", path: "/context" },
  { name: "Redux example", path: "/redux" },
];

export default function MainPage() {
  return (
    <div>
      <h2>Pages awaitables</h2>
      <ul>
        {PAGES_LIST.map(({ name, path }) => (
          <li>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
