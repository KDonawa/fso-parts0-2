function SearchFilter({ value, onChange }) {
  return (
    <div>
      filter: <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default SearchFilter;
