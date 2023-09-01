import { projects } from "./data/data";
import { MainLayout } from "./layout/main-layout";

//Set types for project to avoid use of any type
type projectTypes = {
  name?: string;
  info?: string;
  image?: string;
};

export default function App() {
  return (
    <MainLayout>
      {projects.map(({ key, name, info, image }) => (
        <ProjectShowcase
          key={key}
          name={name}
          info={info}
          image={image.default}
        />
      ))}
    </MainLayout>
  );
}

function ProjectShowcase({ ...props }: projectTypes) {
  if (!props.image) return;
  return (
    <div className="project-card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <h4>{props.info}</h4>
    </div>
  );
}
