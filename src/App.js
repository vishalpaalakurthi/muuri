import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuuriGrid from './customgrid/MuuriGrid';


function App() {
  var items = [{"key":"key1", "value":"value1"}, {"key":"key2", "value":"value2"}
,{"key":"key3", "value":"ble it and... that's it 🤯! The Items are the components that can be dragged, the MuuriComponent represents the container in which the Items can be dropped."}
, {"key":"key4", "value":"value2"}
,{"key":"key5", "value":"value1"}, {"key":"key6", "value":"value2"},
{"key":"key7", "value":"value1"}, {"key":"key2", "value":"value2"}
,{"key":"key1", "value":"value1"}, {"key":"key2", "value":"value2"}
,{"key":"key1", "value":"value1"}, {"key":"key2", "value":"value2"}
,{"key":"key1", "value":"value1"}, {"key":"key2", "value":"value2"}];
  return (
    <div className="App">
        <MuuriGrid items={items} />
    </div>
  );
}

export default App;
