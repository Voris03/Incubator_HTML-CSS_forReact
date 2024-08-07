import React from "react";

type AccodrionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccodrionPropsType) {
    console.log("Accordion rendering")

    if ( props.collapsed === false ) {
        return (
            <div>
              <AccordionTitle title={props.titleValue}/>
              <AccordionBody />
            </div>
        );
    } else {
        return (
            <div>
              <AccordionTitle title={props.titleValue}/>
            </div>
        );
    }
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
      <h3>--{ props.title }--</h3>
    );
  }
  
  function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    );
  }

  

export default Accordion;