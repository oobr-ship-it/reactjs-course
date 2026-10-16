function TabButton({ children, isSelected, onSelect, ...props }) {
  return (
    <li>
      <button
        className={isSelected ? 'active' : undefined}
        onClick={onSelect}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}

export default TabButton;
