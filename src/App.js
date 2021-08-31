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

  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const [entryId, setEntryId] = useState();

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0)

  const entries = useSelector((state) => state.entries)

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      console.log('new entries!!!', newEntries)
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;

      const newEntries2 = entries;
      console.log("new entries 2!!!", newEntries2)
      newEntries2[index] = { description: description, value: value, isExpense: isExpense }

      // setEntries(newEntries);

      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

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

  function resetEntry() {
    setDescription('');
    setValue(0);
    setIsExpense(true)
  }

  function editEntry(id) {
    console.log(`edit entry with id ${id}`)
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setIsExpense(entry.isExpense);
      setValue(parseFloat(entry.value));
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense })
    console.log("entries", entries)
    console.log("result", result)
    // setEntries(result)
    resetEntry();
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} editEntry={editEntry} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

    </Container>
  );
}

export default App;