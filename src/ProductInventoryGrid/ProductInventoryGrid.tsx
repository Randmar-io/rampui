import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { Warehouse } from "@phosphor-icons/react";
import React from "react";

interface WarehouseInventory {
  RandmarSKU?: string;
  WarehouseId?: string;
  WarehouseType?: string;
  Name?: string;
  City?: string;
  Province?: string;
  Country?: string;
  AvailableQuantity?: number;
  PurchaseOrderQuantity?: number;
  BinLocation?: string;
}

interface ProductInventoryGridProps {
  warehouses: WarehouseInventory[];
}

export function ProductInventoryGrid({ warehouses: warehouses }: ProductInventoryGridProps) {
  const legacyEast = ["MTL", "TOR"];
  const legacyWest = ["VAN", "EDM"];

  warehouses.sort((a, b) => (a.Name || "").localeCompare(b.Name || ""));
  const usaWarehouses = warehouses.filter((x) => x.Country === "US");
  const canadaWarehouses = warehouses.filter((x) => x.Country === "CA");
  const westWarehouses = warehouses.filter((x) => legacyWest.includes(x.WarehouseId || ""));
  const eastWarehouses = warehouses.filter((x) => legacyEast.includes(x.WarehouseId || ""));
  const otherCanWarehouses = canadaWarehouses
    .filter((x) => !legacyEast.includes(x.WarehouseId || "") && !legacyWest.includes(x.WarehouseId || ""));

  const totalQuantity = (w: WarehouseInventory[]) => {
    return w.reduce((acc, wi) => acc + (wi.AvailableQuantity || 0), 0);
  }

  const totalCanada = totalQuantity(canadaWarehouses);
  const totalEast = totalQuantity(eastWarehouses);
  const totalWest = totalQuantity(westWarehouses);
  const totalUSA = totalQuantity(usaWarehouses);

  const renderWarehouseLocation = (warehouse: WarehouseInventory, index: number) => {
    return (
      <div key={index} style={{ borderTop: `1px solid ${grey[300]}`, padding: "12px 16px" }}>
        <WarehouseField name={warehouse.Name} value={warehouse.AvailableQuantity} fontWeight={500} />
        <WarehouseField name="Expecting" value={warehouse.PurchaseOrderQuantity || "-"} style={{ paddingTop: "4px" }} />
        <WarehouseField name="Bin" value={warehouse.BinLocation || "-"} style={{ paddingTop: "4px" }} />
      </div>
    );
  }

  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={1} p={2}>
        <Warehouse size={20} />
        <p style={{ fontSize: 14, fontWeight: 600 }}>Inventory</p>
      </Stack>
      <div style={{ borderTop: `1px solid ${grey[300]}` }}>
        <Grid container>
          {
            canadaWarehouses.length > 0 && usaWarehouses.length > 0 &&
            <>
              <Grid xs={6}>
                <WarehouseField
                  name="Total"
                  value={totalCanada + totalUSA}
                  style={{ padding: "16px 16px", borderBottom: `1px solid ${grey[300]}` }}
                  fontWeight={600} fontSize={14}
                />
              </Grid>
              <Grid xs={6} sx={{ borderBottom: `1px solid ${grey[300]}` }} />
            </>
          }

          <Grid xs={6}>
            <WarehouseField
              name="Canada"
              value={totalCanada}
              style={{ padding: "16px 16px", borderBottom: `1px solid ${grey[300]}`, backgroundColor: grey[50] }}
              fontWeight={600} fontSize={14}
            />
          </Grid>
          <Grid xs={6} sx={{ borderBottom: `1px solid ${grey[300]}`, backgroundColor: grey[50] }} />
          <Grid xs={6}>
            <div style={{ borderRight: `1px solid ${grey[300]}` }}>
              <WarehouseField
                name="West"
                value={totalWest}
                style={{ padding: "12px 16px" }}
                fontWeight={600}
              />
              {westWarehouses.map(renderWarehouseLocation)}
            </div>
          </Grid>
          <Grid xs={6}>
            <WarehouseField
              name="East" value={totalEast}
              style={{ padding: "12px 16px" }}
              fontWeight={600}
            />
            {eastWarehouses.map(renderWarehouseLocation)}
          </Grid>

          {
            otherCanWarehouses.length > 0 &&
            <>
              <Grid xs={12}>
                <WarehouseField
                  name="Other"
                  style={{ padding: "12px 16px", borderTop: `1px solid ${grey[300]}` }}
                  fontWeight={600}
                />

              </Grid>
              {otherCanWarehouses.map((warehouse, index) => (
                <Grid key={index} xs={6} sx={{ borderRight: index % 2 ? undefined : `1px solid ${grey[300]}` }}>
                  {renderWarehouseLocation(warehouse, index)}
                </Grid>
              ))}
            </>
          }

          {
            usaWarehouses.length > 0 &&
            <>
              <Grid xs={6}>
                <WarehouseField
                  name="United States"
                  value={totalUSA}
                  style={{ padding: "16px 16px", borderTop: `1px solid ${grey[300]}`, backgroundColor: grey[50] }}
                  fontWeight={600} fontSize={14}
                />
              </Grid>
              <Grid xs={6} sx={{ borderTop: `1px solid ${grey[300]}`, backgroundColor: grey[50] }} />
              {usaWarehouses.map((warehouse, index) => (
                <Grid key={index} xs={6} sx={{ borderRight: index % 2 ? undefined : `1px solid ${grey[300]}` }}>
                  {renderWarehouseLocation(warehouse, index)}
                </Grid>
              ))}
            </>
          }
        </Grid>
      </div>
    </div>
  )
}

interface WarehouseFieldProps {
  name?: string;
  value?: string | number;
  style?: React.CSSProperties;
  fontSize?: number | string;
  fontWeight?: number | string;
}

function WarehouseField({ name, value, style, fontSize, fontWeight }: WarehouseFieldProps) {
  return (
    <Stack direction="row" justifyContent="space-between" style={style}>
      <p style={{ fontSize: fontSize || 13, fontWeight }}>{name}</p>
      <p style={{ fontSize: fontSize || 13, fontWeight }}>{value}</p>
    </Stack>
  );
}