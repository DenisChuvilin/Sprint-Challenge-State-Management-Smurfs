import React, { useState } from 'react';
import { getSmurf } from '../store/actions/getSmurf';
import { postSmurf } from '../store/actions/postSmurf';
import { connect } from 'react-redux';

const SmurfForm = ({ getSmurf, postSmurf, postError, fetchError, currentVillage}) => {
console.log(currentVillage)
  const [formState, setFormState] = useState({
    name: '',
    age: '',
    height: '',
  });
    console.log(formState);

  function handleChange(e) {
    e.persist();
    const updatedState = {
      ...formState,
      [e.target.name]: 
      e.target.name === 'age' ? Number((e.target.value)) : e.target.value,
    };
    setFormState(updatedState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getSmurf();
    postSmurf(formState);
    setFormState({
      name: '',
      age: '',
      height: '',
    });
  }

  return (
      <div className="form-container">
      {fetchError && <p className = 'error'>{fetchError}</p> }
<form className = "form" onSubmit={handleSubmit}>
      {postError && <p className = 'error'>{postError}</p>}
      <label htmlFor="SmurfName">
        Name:
        <input name="name" value={formState.name} onChange={handleChange} />
      </label>
      <br />
      <br/>
      <label htmlFor="SmurfAge">
        Age:
        <input name="age" value={formState.age} onChange={handleChange} />
      </label>
      <br />
      <br/>
      <label htmlFor="SmurfHeight">
        Height:
        <input name="height" value={formState.height} onChange={handleChange} />
      </label>
      <br />
      <br/>
      <button>Add Smurf!</button>
    </form>
    <h4>My Village</h4>
    {JSON.stringify(currentVillage)}
      </div>
    
  );
};
const mapStateToProps = (state) => {
  return {
    fetchError: state.fetchError,
    postError: state.postError,
    currentVillage: state.currentVillage
  };
};

export default connect(mapStateToProps, { getSmurf, postSmurf })(SmurfForm);
