import React from 'react';

const Table = (data) => {

    return (
        <>
            {data &&
                <table>
                    <thead>
                    <tr>

                        <th>NAME</th>

                        {Object.keys(data.data.total).map(key => {
                            return <th key={key}>{key}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {data.data.stores.map(store => (
                         <tr key={store.name}>
                            <td>{store.name}</td>

                            {store.months.map(month => (
                                <td key={month.id}>{month.value}</td>
                            ))}

                            <td>{store.sum}</td>
                         </tr>
                    ))}
                    <tr>
                        <td>TOTAL</td>

                        {Object.keys(data.data.total).map(key => {
                            return <td key={key}>{data.data.total[key]}</td>
                        })}
                    </tr>
                    </tbody>
                </table>

            }
        </>
    );
};

export default Table;