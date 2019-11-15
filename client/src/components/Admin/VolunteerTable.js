import React from 'react';

// function component
const TicketTable = props => {
  return (
    <div>
      <table className="table table-bordered shadow p-3 mb-5 bg-white rounded">
        <thead className="thead-dark">
          <tr>
            <th> Code </th>
            <th> Name </th>
            <th> Department </th>
            <th> Priority </th>
            <th> Message </th>
            <th> Status </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {props.tickets.map(ticket => {
            return (
              <tr key={ticket.ticket_code}>
                <td> {ticket.ticket_code} </td>
                <td> {ticket.name} </td>
                <td> {ticket.department} </td>
                <td> {ticket.priority} </td>
                <td> {ticket.message} </td>
                <td>
                  {' '}
                  <input
                    type="checkbox"
                    checked={ticket.status === 'completed' ? true : false}
                    onChange={() => {
                      props.handleChecked(ticket);
                    }}
                  />{' '}
                </td>
                <td>
                  {' '}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      const confirmDelete = window.confirm('Are you sure?');
                      if (confirmDelete) {
                        props.handleRemove(ticket);
                      }
                    }}
                  >
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
