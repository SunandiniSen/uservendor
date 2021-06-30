import "./Table.css";

export const Table = ({ data, fields }) => {
  return (
    <table className="table">
      <thead>
        <tr className="row">
          {fields.map((headerItem) => {
            return <th key={headerItem.key}>{headerItem.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, indx) => (
          <tr key={`row-${row[fields[0].key]}`} className="row">
            <td> {row[fields[0].key]} </td>
            <td> {row[fields[1].key]} </td>
            <td> {row[fields[2].key]} </td>
            <td> {row[fields[3].key]} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
