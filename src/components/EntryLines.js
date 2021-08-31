import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines({ entries, editEntry }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    // description={entry.description} 
                    // value={entry.value} 
                    // isExpense={entry.isExpense}
                    {...entry}
                    editEntry={editEntry}
                />
            ))}
        </Container>
    )
}

export default EntryLines
