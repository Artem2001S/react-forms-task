import React from 'react';
import FormContainer from 'containers/FormContainer';
import PrintFormContainer from 'containers/PrintFormContainer';

function App() {
  return (
    <div className="App">
      <div className="no-print">
        <FormContainer />
      </div>
      <PrintFormContainer />
    </div>
  );
}

export default App;
