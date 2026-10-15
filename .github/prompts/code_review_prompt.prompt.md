---
name: code_review_prompt
description: Performs a code review of the selected React code, focusing on clean code, patterns, and potential bugs
---

Please review the selected code or the current open file.

Pay special attention to the following aspects:
1. **Bugs:** Are there any potential infinite loops (especially inside `useEffect`), memory leaks, or incorrect hook usage?
2. **State Management:** Is state being updated correctly? (e.g., using updater functions if the new state depends on the previous one).
3. **Performance:** Are there any unnecessary re-renders? Should `useMemo` or `useCallback` be implemented here?
4. **Styling & Conventions:** Does the code follow the project rules (2 spaces, semicolons, props destructuring)?
5. **Readability:** Can this code be simplified or split into smaller, more manageable sub-components?

Provide constructive feedback and suggest an refactored version of the code if necessary.