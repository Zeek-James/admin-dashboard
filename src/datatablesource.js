export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/7483607/pexels-photo-7483607.jpeg?auto=compress&cs=tinysrgb&w=400  ",
    status: "active",
    email: "isnow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/3655920/pexels-photo-3655920.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/11442138/pexels-photo-11442138.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "pending",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/3655920/pexels-photo-3655920.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "active",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/11442138/pexels-photo-11442138.jpeg?auto=compress&cs=tinysrgb&w=400",
    status: "passive",
    email: "5snow@gmail.com",
    age: 22,
  },
];
