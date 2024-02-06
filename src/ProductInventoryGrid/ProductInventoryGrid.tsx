import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, styled } from "@mui/material";
import red from "@mui/material/colors/red";
import { ExpandPanelIcon } from "../ExpandPanelIcon";
import React from "react";

const RegionContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 2,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  justifyContent: "center",
  fontSize: "1.3rem",
  fontWeight: 500,
}));

const RegionCount = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  marginLeft: theme.spacing(),
  display: "flex",
  justifyContent: "center",
  minWidth: 60,
  borderRadius: theme.spacing(),
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  fontWeight: 600,
}));

const LocationContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: red[50],
  borderRadius: theme.spacing(),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const LocationTitle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: 1,
  border: "1px solid transparent",
  borderRadius: "8px 8px 0 0",
}));

const LocationTitleText = styled(Box)({
  color: "white",
  fontWeight: 500,
});

const LocationCount = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  margin: 6,
  paddingTop: theme.spacing(),
  paddingBottom: theme.spacing(),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderRadius: theme.spacing(),
}));

const LocationDetailsWhite = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "white",
  border: "1px solid transparent",
  borderRadius: "0 0 8px 8px",
}));

const LocationDetail = styled(Grid)({
  textAlign: "center",
});

interface WarehouseViewInfo {
  Name: string;
  WarehouseId: string;
  Province: string;
  Country: string;
  AvailableQuantity: number;
  PurchaseOrderQuantity: number;
  BinLocation: string;
}

interface ViewrProps {
  warehouses: WarehouseViewInfo[];
}

export const ProductInventoryGrid = (props: ViewrProps) => {
  const { warehouses } = props;

  const legacyEast = ["MTL", "TOR"]
  const legacyWest = ["VAN", "EDM"]

  const usaWarehouses = warehouses.filter((x) => x.Country === "US");
  const canadaWarehouses = warehouses.filter((x) => x.Country === "CA");
  const westWarehouses = warehouses.filter((x) => legacyWest.includes(x.WarehouseId || ""));
  const eastWarehouses = warehouses.filter((x) => legacyEast.includes(x.WarehouseId || ""));
  const otherWarehouses = canadaWarehouses
    .filter((x) => !legacyEast.includes(x.WarehouseId || "") && !legacyWest.includes(x.WarehouseId || ""));

  const renderLoc = (wi: WarehouseViewInfo, index: number, xs: number, sm: number) => {
    return <LocationContainer item xs={xs} sm={sm} key={index}>
      <LocationTitle>
        <LocationTitleText>{wi.Name} ({wi.Province})</LocationTitleText>
        <LocationCount>
          <b>{wi.AvailableQuantity || 0}</b>
        </LocationCount>
      </LocationTitle>
      <LocationDetailsWhite container>
        <LocationDetail item xs={6}>
          Bin
        </LocationDetail>
        <LocationDetail item xs={6}>
          {(wi.BinLocation || "-")}
        </LocationDetail>
        <LocationDetail item xs={6}>
          Expecting
        </LocationDetail>
        <LocationDetail item xs={6}>
          {`${wi.PurchaseOrderQuantity || "-"}`}
        </LocationDetail>
      </LocationDetailsWhite>
    </LocationContainer>
  }

  const totalQuantity = (warehouses: WarehouseViewInfo[]) => {
    return warehouses.reduce((acc, wi) => acc + (wi.AvailableQuantity || 0), 0);
  }

  const totalAll = totalQuantity(warehouses);
  const totalCanada = totalQuantity(canadaWarehouses);
  const totalUSA = totalQuantity(usaWarehouses);

  const renderLocAlwaysFull = (wi: WarehouseViewInfo, index: number,) => renderLoc(wi, index, 12, 12);
  const renderLocNormal = (wi: WarehouseViewInfo, index: number,) => renderLoc(wi, index, 12, 6);

  return (
    <>
      {totalCanada > 0 && totalUSA > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
            gap: 2,
            fontSize: "1.5rem",
            fontWeight: 500,
          }}
        >
          <Box>Total</Box>
          <Box
            sx={{
              py: 1 / 2,
              display: "flex",
              justifyContent: "center",
              minWidth: 60,
              borderRadius: 1,
              backgroundColor: "secondary.main",
              color: "white",
              fontWeight: 600,
            }}
          >
            {totalAll}
          </Box>
        </Box>
      )}
      <Grid container justifyContent="space-around" sx={{ mb: 1 }}>
        {totalCanada > 0 && (
          <Grid item sm={10} >
            <Accordion sx={{ backgroundColor: red[50], pl: 1 }} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandPanelIcon />}
                sx={{ fontSize: "1.3rem" }}
              >  { /* todo give secondary to ExpandPanelIcon */ }
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    color: "secondary.main",
                  }}
                >
                  <Box sx={{ fontWeight: 500 }}>Canada</Box>
                  <LocationCount sx={{ color: "secondary.main" }}>
                    <b>{totalCanada}</b>
                  </LocationCount>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ backgroundColor: red[50], py: 2 }}  >
                <Grid container justifyContent="space-around" sx={{ mb: 1 }}>
                  <Grid item sm={5}>
                    <Grid container justifyContent="center">
                      <RegionContainer item xs={12}>
                        <Box>West</Box>
                        <RegionCount>{totalQuantity(westWarehouses)}</RegionCount>
                      </RegionContainer>
                      {westWarehouses.map(renderLocAlwaysFull)}
                    </Grid>
                  </Grid>
                  <Grid item sm={5}>
                    <Grid container justifyContent="center">
                      <RegionContainer item xs={12}>
                        <Box>East</Box>
                        <RegionCount>{totalQuantity(eastWarehouses)}</RegionCount>
                      </RegionContainer>
                      {eastWarehouses.map(renderLocAlwaysFull)}
                    </Grid>
                  </Grid>

                  {otherWarehouses.length > 0 && (
                    <Grid container spacing={2}>
                      {otherWarehouses.sort((a, b) => (b.AvailableQuantity || 0) - (a.AvailableQuantity || 0)).map(renderLocNormal)}
                    </Grid>
                  )}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        )}

        {totalUSA > 0 && (
          <Grid item sm={4}>
            <Accordion sx={{ backgroundColor: red[50], pl: 1 }} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandPanelIcon />}
                sx={{ fontSize: "1.3rem" }}
              > { /* todo give secondary to ExpandPanelIcon */ }
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    color: "secondary.main",
                  }}
                >
                  <Box sx={{ fontWeight: 500 }}>USA</Box>
                  <LocationCount sx={{ color: "secondary.main" }}>
                    <b>{totalUSA}</b>
                  </LocationCount>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ py: 2 }}>
                <Grid container spacing={2}>
                  {usaWarehouses
                    .sort((a, b) => (b.AvailableQuantity || 0) - (a.AvailableQuantity || 0))
                    .map(renderLocNormal)}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        )}
      </Grid>
    </>
  );
};