export function PlaceholderList({ data }) {
  return (
    <div>
      <ul>
        {data.map(({ id, title, body }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
