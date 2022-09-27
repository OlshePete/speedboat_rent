import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

function ButtonGroupSpot({handleClick}) {
  return (
            <ButtonGroup size="small" aria-label="small button group">
              <Button
                key="one"
                onClick={(e) => handleClick(e)}
                id="1"
              >
                1
              </Button>
              <Button
                key="two"
                onClick={(e) => handleClick(e)}
                id="2"
              >
                2
              </Button>
              <Button
                key="three"
                onClick={(e) => handleClick(e)}
                id="3"
              >
                3
              </Button>
              <Button
                key="four"
                onClick={(e) => handleClick(e)}
                id="4"
              >
                4
              </Button>
              <Button
                key="five"
                onClick={(e) => handleClick(e)}
                id="5"
              >
                5
              </Button>
              <Button
                key="six"
                onClick={(e) => handleClick(e)}
                id="6"
              >
                6
              </Button>
            </ButtonGroup>
  )
}

export default ButtonGroupSpot