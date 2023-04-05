import { useState } from 'react';

export default function TableSorting() {
  const columns = [
    { label: 'First Name', accessor: 'first_name' },
    { label: 'Last Name', accessor: 'last_name' },
    { label: 'Email', accessor: 'email' },
    { label: 'Gender', accessor: 'gender' },
    { label: 'IP Adress', accessor: 'ip_address' },
  ];
  const [tableData, setTableData] = useState([
    { id: 1, first_name: 'Leeanne', last_name: 'Kneaphsey', email: 'lkneaphsey0@linkedin.com', gender: 'Female', ip_address: '184.163.83.169' },
    { id: 2, first_name: 'Beatrisa', last_name: 'Cowthard', email: 'bcowthard1@people.com.cn', gender: 'Female', ip_address: '161.168.51.146' },
    { id: 3, first_name: 'Hasheem', last_name: 'Aubert', email: 'haubert2@google.co.uk', gender: 'Male', ip_address: '63.132.39.183' },
    { id: 4, first_name: 'Reade', last_name: 'Luckin', email: 'rluckin3@fc2.com', gender: 'Male', ip_address: '78.101.129.127' },
    { id: 5, first_name: 'Clarabelle', last_name: 'Ferrarin', email: 'cferrarin4@bizjournals.com', gender: 'Female', ip_address: '76.222.165.125' },
    { id: 6, first_name: 'Giusto', last_name: 'Hucquart', email: 'ghucquart5@dell.com', gender: 'Male', ip_address: '75.202.151.238' },
    { id: 7, first_name: 'Filmore', last_name: 'Killford', email: 'fkillford6@webnode.com', gender: 'Male', ip_address: '119.233.24.47' },
    { id: 8, first_name: 'Judon', last_name: 'Kepling', email: 'jkepling7@sourceforge.net', gender: 'Male', ip_address: '63.26.51.61' },
    { id: 9, first_name: 'Curt', last_name: 'Dowley', email: 'cdowley8@apache.org', gender: 'Male', ip_address: '148.254.116.253' },
    { id: 10, first_name: 'Silvain', last_name: 'Wallis', email: 'swallis9@blog.com', gender: 'Male', ip_address: '222.128.216.125' },
  ]);
  const [newData, setNewData] = useState(false);
  const [params, setParams] = useState('');

  const handleSort = (nilai) => {
    // console.log(nilai);
    // console.log(params);
    if (params === nilai) {
      setNewData(!newData);
    } else {
      setParams(nilai);
      setNewData(true);
    }
    const data1 = newData ? [...tableData].sort((a, b) => (a[nilai] < b[nilai] ? -1 : 1)) : [...tableData].sort((a, b) => (a[nilai] < b[nilai] ? 1 : -1));
    setTableData(data1);
  };

  return (
    <div>
      <h1 style={{ marginBottom: '5rem' }}>Table With Ascending Descending</h1>
      <table className="table" style={{ border: '2px solid black', borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto' }}>
        <thead>
          <tr style={{}}>
            {columns.map(({ label, accessor }) => {
              return (
                <th key={accessor} style={{ backgroundColor: '#96D4D4', border: '2px solid black', padding: '1rem 3rem', position: 'relative' }}>
                  {label}
                  <button style={{ position: 'absolute', right: 0, bottom: 0, margin: '2px' }} onClick={() => handleSort(accessor)}>
                    sort
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.id} style={{ backgroundColor: 'white' }}>
                <td style={{ border: '2px solid black', padding: '3px 5px' }}>{data.first_name} </td>
                <td style={{ border: '2px solid black', padding: '3px 5px' }}>{data.last_name} </td>
                <td style={{ border: '2px solid black', padding: '3px 5px' }}>{data.email} </td>
                <td style={{ border: '2px solid black', padding: '3px 5px' }}>{data.gender} </td>
                <td style={{ border: '2px solid black', padding: '3px 5px' }}>{data.ip_address} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
