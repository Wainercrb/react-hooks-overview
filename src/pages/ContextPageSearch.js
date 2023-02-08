import { useAppContext } from "../contexts/AppContext";
import { PlaceholderListSearch } from "../components/PlaceholderListSearch";

export default function ContextPageSearch() {
  const { data } = useAppContext();

  return (
    <div>
      <h2>Context Page Search</h2>
      {!data.length && (
        <span>No data, make sure the data was fetched before</span>
      )}
      <br></br>
      <br></br>
      {data.length ? <PlaceholderListSearch data={data} /> : <></>}
    </div>
  );
}
