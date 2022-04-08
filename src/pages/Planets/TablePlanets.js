import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { TableSec } from "./Style";

const TablePlanets = (props) => {
  return (
    <TableSec>
      <h2>Tabela comparativa</h2>
      <TableContainer>
        <Table>
          <TableHead id="tablehead">
            <TableRow>
              <TableCell>Planeta</TableCell>
              <TableCell align="center">Área de Superfície</TableCell>
              <TableCell align="center">Distância do Sol</TableCell>
              <TableCell align="center">Duração do dia</TableCell>
              <TableCell align="center">Gravidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.planets.map((planet) => {
              return (
                <TableRow
                  key={planet.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {planet.name}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {planet.surfaceArea
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    km²
                  </TableCell>
                  <TableCell component="th" align="center">
                    {planet.sunDistance
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    km
                  </TableCell>
                  <TableCell component="th" align="center">
                    {planet.day}
                  </TableCell>
                  <TableCell component="th" align="center">
                    {(planet.gravity / 3.6).toFixed(2)} m/s²
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </TableSec>
  );
};

export default TablePlanets;
