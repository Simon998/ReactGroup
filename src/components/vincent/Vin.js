import './vin.scss';
let vin = ({ name, job, year }) => {
  return (
    <>
      <div className='box'>
        <h1>{name}</h1>
        <h2>{job}</h2>
        <h3>{year}</h3>
      </div>
    </>
  );
};
export default vin;