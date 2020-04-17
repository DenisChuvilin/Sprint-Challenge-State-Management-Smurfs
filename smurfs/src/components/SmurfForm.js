import React, { useState } from 'react';
import { getSmurf } from '../store/actions/getSmurf';
import { postSmurf } from '../store/actions/postSmurf';
import { connect } from 'react-redux';

const SmurfForm = ({getSmurf}) => {
  getSmurf();
  const [formState, setFormState] = useState({
    name: '',
    age: '',
    height: '',
  });

  function handleChange(e) {
    e.persist();
    const updatedState = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    setFormState(updatedState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    postSmurf(e);
    setFormState({
      name: '',
      age: '',
      height: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="SmurfName">
        Name:
        <input name="name" value={formState.name} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="SmurfAge">
        Age:
        <input name="age" value={formState.age} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="SmurfHeight">
        Height:
        <input name="height" value={formState.height} onChange={handleChange} />
      </label>
      <br />
      <button>Add Smurf!</button>
    </form>
  );
};


export default connect(null, { getSmurf, postSmurf })(SmurfForm);
