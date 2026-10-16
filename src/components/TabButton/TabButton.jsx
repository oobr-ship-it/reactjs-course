function TabButton({ children, isSelected, onSelect, ...props }) {
  return (
    <li>
      <button onClick={onSelect} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
