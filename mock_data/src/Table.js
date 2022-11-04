import React from 'react';
import './Table.css';

const Table = (data) => {

    return (
        <>
            {data &&
                <table className="table table-striped table-hover main-table">
                    <thead className="table-light sticky-thead">
                    <tr>

                        <th className="text-uppercase"><h5>Name</h5></th>

                        {Object.keys(data.data.total).map(key => {
                            return <th key={key}><h5>{key}</h5></th>
                        })}
                    </tr>
                    </thead>

                    <tbody>
                    {data.data.stores.map(store => (
                        <tr key={store.name}>
                            <th scope="row">{store.name}</th>

                            {store.months.map(month => (
                                <td key={month.id}>{month.value}</td>))}

                            <td className="text-danger">{store.sum}</td>
                        </tr>))}
                    </tbody>

                    <tfoot>
                    <tr>
                        <th scope="row" className="text-danger text-uppercase">Total</th>

                        {Object.keys(data.data.total).map(key => {
                            return <td key={key} className="text-danger">{data.data.total[key]}</td>
                        })}
                    </tr>
                    </tfoot>

                </table>

            }
        </>
    );
};

export default Table;