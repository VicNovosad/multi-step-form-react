import ServiceBlock from "./ServiceBlock";

const imgs = [
  "https://assets.codepen.io/6060109/agency-service-1.png",
  "https://assets.codepen.io/6060109/agency-service-2.png",
  "https://assets.codepen.io/6060109/agency-service-3.png"
];

const SERVICE_BLOCK_DATA = [
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-1.png",
    service: "web design"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-2.png",
    service: "ecomerce"
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-3.png",
    service: "automation"
  }
];

export default function ServicesSection() {
  return (
    <div className="services-section">
      <h1>our sevices</h1>
      {/* props method 1 with imgs Array */}
      <div className="wrap flex">
        <ServiceBlock block={{ imgURL: imgs[0], service: "web design" }} />
        <ServiceBlock block={{ imgURL: imgs[1], service: "ecomerce" }} />
        <ServiceBlock block={{ imgURL: imgs[2], service: "automation" }} />
        {/* <ServiceBlock imgURL={imgs[0]} service="web design" /> */}
        {/* <ServiceBlock imgURL={imgs[1]} service="ecomerce" /> */}
        {/* <ServiceBlock imgURL={imgs[2]} service="automation" /> */}
      </div>

      {/* mapping method with JSX inside*/}
      <div className="wrap flex">
        {SERVICE_BLOCK_DATA.map((block) => {
          return (
            <div
              className="agency-service-block flex"
              key={block.service.toString()}
            >
              <img src={block.imgURL} alt="{block.service}" />
              <p>{block.service}</p>
            </div>
          );
        })}
      </div>

      {/* ServiceBlock mapping*/}
      <div className="wrap flex">
        {SERVICE_BLOCK_DATA.map((block) => (
          <ServiceBlock block={block} key={block.service.toString()} />
        ))}
      </div>
    </div>
  );
}
