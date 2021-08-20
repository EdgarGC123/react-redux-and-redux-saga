import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines({entries, deleteEntry, editEntry}) {
    return (
        <Container>
            {entries.map((entry)=>(
                <EntryLine
                key={entry.id} 
                // description={entry.description} 
                // value={entry.value} 
                // isExpense={entry.isExpense}
                {...entry}
                delete={deleteEntry}
                editEntry={editEntry}
                />
            ))}
        </Container>
    )
}

export default EntryLines
