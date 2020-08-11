import React from 'react';
import './App.css';
import { fetchDog } from './actions';
import { connect } from 'react-redux';

function App({fetchDog, src}) {
  return (
    <div style={{ width: 500 }}>
      <button
        onClick={() => {fetchDog()}}
        type="button"
      >
        Novo Doguinho
      </button>
      <img style={{ width: '100%' }} src={src || ''} alt="dog" />
    </div>
  );
}

const mapStateToProps = (state) => (
  { src: state.imagePath }
);

const mapDispatchToProps = (dispatch) => (
  { fetchDog: () => { dispatch(fetchDog()); } }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
