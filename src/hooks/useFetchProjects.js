import { useState, useEffect } from "react";

export function useFetchProjects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getJson = () => {
      fetch("../projects.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) =>
        res.json().then((projects) => {
          if (!projects || !projects.data) return;

          setProjects(projects.data);
        })
      );
    };

    getJson();
  }, []);

  return projects;
}
