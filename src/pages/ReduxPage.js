import { PlaceholderList } from "../components/PlaceholderList";
import { useState } from "react";
import { useDispatch, useStore } from 'react-redux';
import { FETCH_DATA } from '../store/actions/appActions';
import { fetchPlaceholderPosts } from "../services/placeholderAPI";

export default function ReduxPage() {
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  const store = useStore();
  const { app: { data } } = store.getState()

  const handleFetchData = () => {
    setIsLoading(true);
    fetchPlaceholderPosts()
      .then((data) => {
        dispatch({type: FETCH_DATA, payload: data })
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
