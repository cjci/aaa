import { Button, Card } from 'antd';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>quiero vacaciones</h1>
      <Button type="primary">Primary Button</Button>

      <Card style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default App;
