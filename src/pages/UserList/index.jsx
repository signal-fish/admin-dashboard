import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users, editUser, deleteUser } = useGlobalContext();

  
  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <ImageWrapper>
            <Image src={params.row.avatar} alt={params.row.username} />
            {params.row.username}
          </ImageWrapper>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <Edit onClick={() => editUser(params.row.id)}>Edit</Edit>
            </Link>
            <DeleteWrapper>
              <DeleteOutline onClick={() => deleteUser(params.row.id)} />
            </DeleteWrapper>
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        rowsPerPageOptions={[12]}
        pageSize={12}
        autoHeight
        checkboxSelection
      />
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 20px);
  height: 100%;
  padding-left: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Edit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    opacity: .8;
  }
`;

const DeleteWrapper = styled.span`
  color: red;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
export default UserList;
