import React from "react";
import { Accordion } from "native-base";
export default function test() {
  return (
    <Accordion index={[0]}>
      <Accordion.Item>
        <Accordion.Button>
          First Element
          <Accordion.Icon />
        </Accordion.Button>
        <Accordion.Panel>Lorem ipsum dolor sit amet</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Button>
          Second Element
          <Accordion.Icon />
        </Accordion.Button>
        <Accordion.Panel>Lorem ipsum dolor sit amet</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Button>
          Third Element
          <Accordion.Icon />
        </Accordion.Button>
        <Accordion.Panel>Lorem ipsum dolor sit amet</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
