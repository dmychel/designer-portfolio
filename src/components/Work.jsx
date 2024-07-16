export default function Work() {
  const data = [
    {
      id: crypto.randomUUID(),
      image: "https://placehold.co/600x400",
      title: "Crucial Clothing",
      info: "Desgined a E-commerce website for a clothing brand startup.",
    },
    {
      id: crypto.randomUUID(),
      image: "https://placehold.co/600x400",
      title: "Ephemeral Photography",
      info: "Designed a Photography Portfolio",
    },
    {
      id: crypto.randomUUID(),
      image: "https://placehold.co/600x400",
      title: "BWH Video Archive",
      info: "Built and designed a video internal archive website for training videos.",
    },
    {
      id: crypto.randomUUID(),
      image: "https://placehold.co/600x400",
      title: "Nehemiah Yisrael Graphic Design",
      info: "Designed a portfolio website for a freelancer.",
    },
  ];
  return (
    <div className="work">
      {data.map((project) => (
        <div className="card" key={project.id}>
          <div className="preview">
            <img src={project.image} alt="" />
          </div>
          <div className="card_info">
            <div className="text">
              <h2>{project.title}</h2>
              <p>{project.info}</p>
              <button>View Case Study</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
