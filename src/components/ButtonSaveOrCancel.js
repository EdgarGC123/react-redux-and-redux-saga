import React from 'react'
import {Button} from 'semantic-ui-react'

function ButtonSaveOrCancel() {

    return (
        <Button.Group style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Okay</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel
