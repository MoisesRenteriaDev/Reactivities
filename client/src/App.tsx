import { useEffect, useState } from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { ListItem, ListItemText } from "@mui/material";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get("https://localhost:5001/api/activities/")
      .then((data) => setActivities(data.data));
  }, []);

  return (
    <>
      <Typography variant="h4" className="app" style={{ color: "red" }}>
        Reactivities
      </Typography>
      <List>
          {activities.map((activity: Activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default App;
