import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";

import styled from 'styled-components'

const TableSec = styled.section`
 box-sizing: border-box;
  padding: 25px 100px;
  border: solid thin #CDCDCD;
  color: #CDCDCD;
  width: 85%;
  margin: auto;
  border-radius: 5px;
  background-color: rgba(56, 56, 56, 0.3);
  font-size: 1.2rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
  
  table, th{
    color: #CDCDCD;
    font-size: 1.2rem;
  }

  th{
    height: 40px;
  }

  #tablehead{
    background: #CDCDCD;
  }

  #tablehead th{
    color: #334B48;
    font-weight: bold;
  }
`


const TablePlanets = (props) => {

 
  return (
    <TableSec>

      <h2>Tabela comparativa</h2>
    <TableContainer >
      <Table >
        <TableHead id='tablehead'>
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
            <TableCell component="th" align="center">{planet.area} km²</TableCell>
            <TableCell component="th" align="center">{planet.sunDistance} km</TableCell>
            <TableCell component="th" align="center">{planet.durationDay}</TableCell>
            <TableCell component="th" align="center">{planet.gravity}</TableCell>
          </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    </TableSec>

  );

};

export default TablePlanets;
