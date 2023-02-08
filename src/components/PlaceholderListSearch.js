import React, { useState, useMemo } from "react";

export function PlaceholderListSearch({ data }) {
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => item.title.includes(filter));
  }, [data, filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredData.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
