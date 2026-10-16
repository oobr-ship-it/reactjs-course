import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState('please select a tab');
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
              isSelected={true}
              onSelect={() => handleSelect('Components')}
            >
              Components
            </TabButton>
            <TabButton isSelected={true} onSelect={() => handleSelect('JSX')}>
              JSX
            </TabButton>
            <TabButton isSelected={true} onSelect={() => handleSelect('Props')}>
              Props
            </TabButton>
            <TabButton isSelected={true} onSelect={() => handleSelect('State')}>
              State
            </TabButton>
          </menu>
          {selectedTab}
        </section>
      </main>
    </div>
  );
}

export default App;
