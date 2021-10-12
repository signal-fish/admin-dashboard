import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useGlobalContext } from "../../context";

const UserList = () => {
  const { data, editUser, handleDelete } = useGlobalContext();

  
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
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => editUser(params.row.id)}>Edit</Button>
            <DeleteWrapper>
              <DeleteOutline onClick={() => handleDelete(params.row.id)} />
            </DeleteWrapper>
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        rowsPerPageOptions={[8]}
        pageSize={8}
        autoHeight
        checkboxSelection
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
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

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const DeleteWrapper = styled.span`
  color: red;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export default UserList;
