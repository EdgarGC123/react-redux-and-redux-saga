import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalances from './components/DisplayBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0)

  const entries = useSelector((state) => state.entries)

  const [entry, setEntry] = useState({})

  const { isOpen, id } = useSelector(state => state.modals);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
  }, [isOpen, id])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return totalExpenses += parseFloat(entry.value)
      } else {
        return totalIncomes += parseFloat(entry.value)
      }
    })

    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);

  }, [entries])

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />

      <ModalEdit isOpen={isOpen} {...entry} />

    </Container>
  );
}

export default App;