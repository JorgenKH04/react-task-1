import { projects } from "./data/data";

function App() {
  return (
    <>
      <h1>Test</h1>
      <ul>
        {projects.map((project) => (
          <ProjectShowcase
            key={project.key}
            name={project.name}
            info={project.info}
            image={project.image}
          />
        ))}
      </ul>
    </>
  );
}

function ProjectShowcase(props) {
  const { name, info, image } = props;
  return (
    <li>
      <h2>{name}</h2>
      <h4>{info}</h4>
      <img src={image.default} alt={name} />
    </li>
  );
}
console.log(projects[0].image);

export default App;
