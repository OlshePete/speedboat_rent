import { Button, ButtonGroup } from '@mui/material'
import React, { useEffect, useRef } from 'react'

function ButtonGroupSpot({handleClick, value}) {
    const groupRef = useRef(null)
    useEffect(() => {
        if (groupRef.current) {
            const elem = groupRef.current.children[+value-1]
            const elemActive = document.getElementsByClassName("active")
            console.log(elemActive.length);
            for (let item of elemActive) {
                item.classList.remove("active")
            }
            
            if (elem) {
                elem.className=elem.className + " active"
            // console.log(elem);
            }
            // elem.classList.add("active$$$")
            // console.log( groupRef.current.children[+value-1]);
            // console.log( groupRef.current.children.find(button => button.id === value));
        }
      
    }, [ value])
    
  return (
            <ButtonGroup ref={groupRef} size="small" aria-label="spot button group" className='button-group-spot'>
                {
                    [1,2,3,4,5,6].map((el,index)=>{
                        return  <Button
                                    key={`button-${index}`}
                                    onClick={(e) => handleClick(e)}
                                    variant="contained"
                                    // color={+value===el?"green":'primary'}
                                    id={String(el)}
                                >
                                {el}
                            </Button>
                    })
                }
              {/* <Button
                key="one"
                onClick={(e) => handleClick(e)}
                color={value===}
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
              </Button> */}
            </ButtonGroup>
  )
}

export default ButtonGroupSpot