const Service = (props) => {
  return (
    <div className="single-service">
      <h2>{props.serviceName}</h2>
      <p>{props.serviceText}</p>
    </div>
  );
};
export default Service;
