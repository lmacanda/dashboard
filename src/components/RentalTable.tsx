export default function RentalTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Car No.</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Earning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* first row */}
          <tr>
            <td>01</td>
            <td>6465</td>
            <td>
              <div className="driver-image"></div>
              Driver Name
            </td>
            <td>
              <div className="status-circle green"></div>
              Completed
            </td>
            <td>$35.44</td>
            <td>
              <button className="details-button">Details</button>
            </td>
          </tr>
          {/* second row */}
        </tbody>
      </table>
    </div>
  );
}
