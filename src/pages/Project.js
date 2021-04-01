import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Project.scss";
import { Link, useParams } from "react-router-dom";
import { useFetchProject } from "../hooks/useFetchProject";
import classNames from "classnames";

const Project = () => {
  let { id } = useParams();
  const projectData = useFetchProject(id);
  const hasVideo = projectData?.video;
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const constructImageGallery = () => {
      if (!projectData || !projectData.images) return null;

      console.log("gallery");

      const images = projectData.images.map((image) => image);
      const gallery = !hasVideo ? images.slice(1) : images;

      setGallery(gallery);
    };

    constructImageGallery();
  }, [hasVideo, projectData]);

  return (
    <>
      <motion.div
        className={classNames("Overlay", projectData?.color)}
        initial={{
          y: "calc(100vh)",
        }}
        animate={{
          y: "calc(0vh)",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 1],
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link className="Back" to={"/"}>
          Back
        </Link>
        <h1 className="Title">{projectData?.headline}</h1>
        <motion.div
          className="Body"
          initial={{
            y: "calc(100vh)",
          }}
          animate={{
            y: "calc(0vh)",
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 1],
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          }}
        >
          {hasVideo &&
            projectData?.video?.map((filename) => (
              <video
                className={classNames("Image", projectData.color)}
                src={`${process.env.PUBLIC_URL}/assets/${filename}`}
                autoPlay
                playsInline
                muted
                loop
              />
            ))}

          {!hasVideo && projectData?.images && (
            <img
              alt="things"
              className={classNames("Image", projectData.color)}
              src={`${process.env.PUBLIC_URL}/assets/${projectData.images[0]}`}
            />
          )}

          <div className="Text">
            {projectData?.intro && (
              <div className="Project__Intro">{projectData?.intro}</div>
            )}
            {projectData?.role && (
              <div className="Project__Panel">
                <p className="Project__Label">Role:</p>
                <p className="Project__Info">{projectData?.role}</p>
              </div>
            )}
            {projectData?.tech && (
              <div className="Project__Panel">
                <p className="Project__Label">Technologies:</p>
                <p className="Project__Info">{projectData?.tech}</p>
              </div>
            )}
            {projectData?.highlights && (
              <div className="Project__Panel">
                <p className="Project__Label">Highlights:</p>
                <p className="Project__Info">{projectData?.highlights}</p>
              </div>
            )}
            {projectData?.link && (
              <div className="Project__Panel">
                <p className="Project__Label">Link:</p>
                <p className="Project__Info">
                  <a target="_blank" rel="noreferrer" href={projectData?.link}>
                    {projectData?.link}
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="Gallery">
            {gallery &&
              gallery.map((image) => (
                <img
                  key={image}
                  className={classNames("Gallery__Image")}
                  src={`${process.env.PUBLIC_URL}/assets/${image}`}
                />
              ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;
