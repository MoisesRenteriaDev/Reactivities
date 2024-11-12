import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((res: AxiosResponse) => setActivities(res.data))
      .catch((error: AxiosError) => console.log(error.message));
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((act: any) => (
          <List.Item key={act.id}> {act.title} </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
