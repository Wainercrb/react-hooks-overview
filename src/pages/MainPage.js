import { Link } from "react-router-dom";

const PAGES_LIST = [
  { name: "Context Example", path: "/context" },
  { name: "Redux Example", path: "/redux" },
  { name: "Context Search Memo", path: "/context-search" },
];

export default function MainPage() {
  return (
    <div>
      <h2>Pages awaitables</h2>
      <ul>
        {PAGES_LIST.map(({ name, path }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
