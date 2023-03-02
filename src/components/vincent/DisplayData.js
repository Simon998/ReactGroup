const DisplayData = ({ names }) => {
    return (
      <div>
        <h1>Names</h1>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </div>
    );
  };
  
  export default DisplayData;