import './App.css';
import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
<Container>
      <MainHeader title="Budget"/>
      <DisplayBalance title="Your Balance" value="2,555.53" size="small"/>
      <DisplayBalances/>

      <MainHeader title="History" type="h3"/>
      <EntryLine description="Income" value="$10.00"/>
      <EntryLine description="Expense" value="$10.00" isExpense/>

      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryForm/>
    </Container>
  );
}

export default App;
