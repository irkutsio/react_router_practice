

export const FormFiterToDo = ({ setSearchParams, filterText }) => {


  const handleChange = ({ target }) => {
  
    setSearchParams({ filter: target.value });
  };



  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Filter: </label>
        <input
        value={filterText}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
