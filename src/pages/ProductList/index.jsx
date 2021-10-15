import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, editProduct, deleteProducts } = useGlobalContext();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductImage src={params.row.img} alt={params.row.name} />
            {params.row.name}
          </ProductListItem>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <Edit onClick={() => editProduct(params.row.id)}>Edit</Edit>
            </Link>
            <DeleteWrapper>
              <DeleteOutline onClick={() => deleteProducts(params.row.id)} />
            </DeleteWrapper>
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        rowsPerPageOptions={[8]}
        pageSize={8}
        checkboxSelection
        autoHeight
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: calc(100% - 20px);
  padding-left: 20px;
`;

const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  background: #fff;
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
    opacity: 0.8;
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

export default ProductList;
