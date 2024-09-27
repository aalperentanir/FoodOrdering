import { Box, Card, CardActions, CardHeader, IconButton } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import { Delete } from "@mui/icons-material";

const orders = [1, 1, 1, 1, 1];
export const MenuTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"All Menu Items"}
          sx={{ pt: 2, alignItems: "center" }}
          action={
            <IconButton aria-label="settings">
              <CreateIcon />
            </IconButton>
          }
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Avalibility</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{"image"}</TableCell>
                  <TableCell align="right">{"Ali Alperen TANIR"}</TableCell>
                  <TableCell align="right">{"$25"}</TableCell>
                  <TableCell align="right">{"Hamburger"}</TableCell>
                  <TableCell align="right">{"PENDING"}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default MenuTable;
