import { useAppContext } from "../contexts/AppContext";
import { PlaceholderList } from "../components/PlaceholderList";
import { useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function ContextPage() {
  const { data, dispatch } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = () => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_DATA", value: data });
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2>Context Page</h2>
      {isLoading && <span>Fetching data....</span>}
      {!data.length && <button onClick={handleFetchData}>Fetch data</button>}
      <PlaceholderList data={data} />
    </div>
  );
}
