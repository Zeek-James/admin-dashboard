import "./table.scss";
import { Table as MyTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Table = () => {
  const rows = [
    {
      id: 104499484,
      product: "Acer Nitro 5",
      img: "https://images.pexels.com/photos/2906849/pexels-photo-2906849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 11419834,
      product: "Playstation 5 Controller",
      img: "https://images.pexels.com/photos/9408470/pexels-photo-9408470.jpeg?auto=compress&cs=tinysrgb&w=400",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 27831321,
      product: "Razer Blade 15",
      img: "https://images.pexels.com/photos/8789602/pexels-photo-8789602.jpeg?auto=compress&cs=tinysrgb&w=400",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 1141321,
      product: "ASUS ROG Strix",
      img: "https://images.pexels.com/photos/3654937/pexels-photo-3654937.jpeg?auto=compress&cs=tinysrgb&w=400,",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
    {
      id: 323422331,
      product: "Acer Nitro 5",
      img: "https://images.pexels.com/photos/2906849/pexels-photo-2906849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <MyTable sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row?.id}>
              <TableCell>{row?.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row?.img} alt={row?.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row?.customer}</TableCell>
              <TableCell className="tableCell">{row?.date}</TableCell>
              <TableCell className="tableCell">{row?.amount}</TableCell>
              <TableCell className="tableCell">{row?.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row?.status}`}>{row?.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MyTable>
    </TableContainer>
  );
};

export default Table;
