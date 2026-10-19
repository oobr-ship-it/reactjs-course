import TabButton from '../TabButton/TabButton';
import { EXAMPLES } from '../../data';
import { useState } from 'react';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();
  function handleSelect(tab) {
    setSelectedTab(tab);
  }

  let tabContent = !selectedTab ? (
    <p>Please select a tab</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTab]?.title}</h3>
      <p>{EXAMPLES[selectedTab]?.description}</p>
      <pre>
        <code>{EXAMPLES[selectedTab]?.code}</code>
      </pre>{' '}
    </div>
  );

  return (
    <Section id={'examples'} title={'Examples'}>
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
