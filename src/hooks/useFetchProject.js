import { useState, useEffect } from "react";

export function useFetchProject(projectId) {
  const [project, setProject] = useState(null);

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

          const project = projects.data.find(
            (project) => project.path === projectId
          );
          setProject(project);
        })
      );
    };

    getJson();
  }, [projectId]);

  return project;
}
