import { Button, ButtonGroup } from '@mui/material'
import React, { useEffect, useRef } from 'react'

function ButtonGroupSpot({handleClick, value}) {
    const groupRef = useRef(null)
    useEffect(() => {
        console.log( groupRef);
      
    }, [ value])
    
  return (
            <ButtonGroup ref={groupRef} size="small" aria-label="small button group" className='button-group-spot'>
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