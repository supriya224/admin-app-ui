import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import { Colors } from "../../styles/theme";
// dialog
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
// dialog
import Grid from "@mui/material/Unstable_Grid2";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Formik, Form, Field, ErrorMessage } from "formik";

const products = [
  {
    id: 1,
    name: "nega",
    price: 12,
    qty: 1,
    sku: 21234,
    discription: "ncvj sdjhdfh asfddf",
    // action: "complete",
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .required(" Price is required")
    .positive("price must be positive value"),
  qty: Yup.number().required("quantity  is required"),
  // sku: Yup.number().required("sku is required"),
  discription: Yup.string().required("discription is required"),
  // action: Yup.string().required("action is required"),
});
export default function Products() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({
    _id: 1,
    name: "",
    price: "",
    qty: "",
    discription: "",
  });

  const handleAddProduct = () => {
    setInitialValues({
      _id: 1,
      name: "",
      price: "",
      qty: "",
      discription: "",
    });
    setOpen(true);
  };
  const handleProductEdit = (product) => {
    setInitialValues(product);
    setOpen(true);
    console.log("edit", product);
  };

  const handleProductDelete = (product) => {
    console.log("delete", product);
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Typography sx={{ mb: 1 }} variant="h4">
        Products
      </Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleAddProduct}
      >
        Add Products
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Discription</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p._id}>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.qty}</TableCell>
                <TableCell>{p.sku}</TableCell>
                <TableCell>{p.discription}</TableCell>
                <TableCell>{p.action}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleProductEdit(p)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleProductDelete(p)}>
                    <DeleteForever sx={{ color: Colors.danger }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle>{" Add Products"}</DialogTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid, getFieldProps }) => (
            <Form>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid xs={22}>
                    <Field
                      as={TextField}
                      name="name"
                      label="name"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="name">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid>

                  <Grid xs={22}>
                    <Field
                      as={TextField}
                      name="price"
                      label="price"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="price">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="quality"
                      label="quality"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="quality">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid>
               
                  <Grid xs={12}>
                    <Field
                      as={TextField}
                      name="description"
                      label="description"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="description">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid>
                 
                </Grid>
              </DialogContent>

              <DialogActions>
                {getFieldProps("_id").value !== -1 ? (
                  <Button
                    disabled={!dirty || isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Save Edit
                  </Button>
                ) : (
                  <Button
                    disabled={!dirty || isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Save
                  </Button>
                )}
                <Button onClick={() => setOpen(false)} autoFocus>
                  cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};


