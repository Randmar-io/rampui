import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, styled } from "@mui/material";
import { Theme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { ExpandPanelIcon } from "../ExpandPanelIcon";

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
    backgroundColor: theme.palette.secondary.light, 
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
    colorTheme: Theme; // todo: themeing should be done within RampUI. Update Provider.
}

export const ProductInventoryGrid = (props: ViewrProps) => {
    const { warehouses, colorTheme } = props;

    const legacyEast = ["MTL", "TOR"]
    const legacyWest = ["VAN", "EDM"]

    warehouses.sort((a, b) => a.Name.localeCompare(b.Name));
    const usaWarehouses = warehouses.filter((x) => x.Country === "US");
    const canadaWarehouses = warehouses.filter((x) => x.Country === "CA");
    const westWarehouses = warehouses.filter((x) => legacyWest.includes(x.WarehouseId || ""));
    const eastWarehouses = warehouses.filter((x) => legacyEast.includes(x.WarehouseId || ""));
    const otherCanWarehouses = canadaWarehouses
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
                    Expecting
                </LocationDetail>
                <LocationDetail item xs={6}>
                    {`${wi.PurchaseOrderQuantity || "-"}`}
                </LocationDetail>
                <LocationDetail item xs={6}>
                    Bin
                </LocationDetail>
                <LocationDetail item xs={6}>
                    {(wi.BinLocation || "-")}
                </LocationDetail>
            </LocationDetailsWhite>
        </LocationContainer>
    }

    const totalQuantity = (w: WarehouseViewInfo[]) => {
        return w.reduce((acc, wi) => acc + (wi.AvailableQuantity || 0), 0);
    }

    const totalCanada = totalQuantity(canadaWarehouses);
    const totalUSA = totalQuantity(usaWarehouses);

    const renderLocAlwaysFull = (wi: WarehouseViewInfo, index: number,) => renderLoc(wi, index, 12, 12);
    const renderLocNormal = (wi: WarehouseViewInfo, index: number,) => renderLoc(wi, index, 12, 6);

    return (
        <ThemeProvider theme={colorTheme}>
            {canadaWarehouses.length > 0 && usaWarehouses.length > 0 && (
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
                        {totalCanada + totalUSA}
                    </Box>
                </Box>
            )}
            <Grid container justifyContent="space-around" rowSpacing={2} sx={{ mb: 1 }}>
                {canadaWarehouses.length > 0 && (
                    <Grid item sm={10} >
                        <Accordion sx={{ backgroundColor: colorTheme.palette.secondary.light, pl: 1 }} defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandPanelIcon color={colorTheme.palette.secondary.main} />}
                                sx={{ fontSize: "1.3rem" }}>
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

                            <AccordionDetails sx={{ backgroundColor: colorTheme.palette.secondary.light, py: 2 }}  >
                                <Grid container justifyContent="space-around" sx={{ mb: 1 }} rowSpacing={8}>
                                    <Grid item sm={5}>
                                        <Grid container justifyContent="center" rowSpacing={1}>
                                            <RegionContainer item xs={12}>
                                                <Box>West</Box>
                                                <RegionCount>{totalQuantity(westWarehouses)}</RegionCount>
                                            </RegionContainer>
                                            {westWarehouses.map(renderLocAlwaysFull)}
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={5}>
                                        <Grid container justifyContent="center" rowSpacing={1}>
                                            <RegionContainer item xs={12}>
                                                <Box>East</Box>
                                                <RegionCount>{totalQuantity(eastWarehouses)}</RegionCount>
                                            </RegionContainer>
                                            {eastWarehouses.map(renderLocAlwaysFull)}
                                        </Grid>
                                    </Grid>

                                    {otherCanWarehouses.length > 0 && (
                                        <>
                                            <Grid item xs={12}>
                                                <br />
                                            </Grid>

                                            <Grid container spacing={1}>
                                                {otherCanWarehouses.map(renderLocNormal)}
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                )}

                {usaWarehouses.length > 0 && (
                    <Grid item sm={10}>
                        <Accordion sx={{ backgroundColor: colorTheme.palette.secondary.light, pl: 1 }} defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandPanelIcon color={colorTheme.palette.secondary.main} />}
                                sx={{ fontSize: "1.3rem" }}>
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
                                    {usaWarehouses.map(renderLocNormal)}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                )}
            </Grid>
        </ThemeProvider>
    );
};