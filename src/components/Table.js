export const Table = ({data, fields}) => {
    return (
      <table>
        <tbody>
          <tr>
            {
              fields.map(headerItem => {
                return(
                  <th key={headerItem.key}>{headerItem.label}</th>
                )
              })
            }
          </tr>
          {data.map((row, indx) => (
            <tr key={`Row-${indx+1}`}>
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
