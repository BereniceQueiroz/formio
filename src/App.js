import './App.css';
import { useState, useEffect } from 'react';
import { FormBuilder } from 'react-formio';
import {
  Bootstrap,
  FontAwesome,
  BootswatchSelect,
} from 'react-bootswatch-select';

export default function App() {
  const [display, setDisplay] = useState('form');
  const [schema, setSchema] = useState({
    display: 'form',
    components: [
      { type: 'textfield', label: 'First Name', key: 'firstName' },
      { type: 'textfield', label: 'Last Name', key: 'lastName' },
    ],
  });

  useEffect(() => {
    if (schema && schema.display !== display) {
      setSchema({ ...schema, display });
    }
  }, [schema, display]);

  return (
    <div className="App container py-3">
      <div className="row">
        <div className="col col-sm-6 offset-sm-3 mb-3 text-center">
          <Bootstrap versão={'4.4.1'} />
          <FontAwesome version={'4.7.0'} />
          <BootswatchSelect version={'4.4.1'} className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-6 offset-sm-3 mb-3 text-center">
          <label className="form-label">Display:</label>
          <select
            className="form-control"
            onChange={(e) => setDisplay(e.target.value)}
            value={display}
          >
            <option value="form">Form</option>
            <option value="wizard">Wizard</option>
            <option value="pdf">PDF Form</option>
          </select>
        </div>
      </div>
      <FormBuilder form={schema} onChange={setSchema} />
    </div>
  );
}
