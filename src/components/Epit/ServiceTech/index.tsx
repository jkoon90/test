import Wrapper from "./style";

const ServiceTech: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <div className="breadcrumbs">
        {["home", "epit", "servieTech", "network"].map((item) => {
          return (
            <div className="breadcrumbs-item" key={item}>
              {item}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ServiceTech;
