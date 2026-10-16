import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState();
  function handleSelect(tab) {
    setSelectedTab(tab);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTab === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {!selectedTab ? (
            <p>Please select a tab</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab]?.title}</h3>
              <p>{EXAMPLES[selectedTab]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab]?.code}</code>
              </pre>{' '}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
