import styled from "@emotion/styled";
import { Modal } from "@mui/base/Modal";
import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { ArrowsInSimple, ArrowsOutSimple, Circle, EnvelopeSimple, GlobeSimple, Phone, Storefront } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Image } from "../Image";
import { Paper } from "../Paper";
import purple from "../colors/purple";
import red from "../colors/red";

interface SalesData {
  manufacturerId?: string | null;
  resellerId?: string | null;
  lastCalculated?: string;
  salesLast30Days?: number;
  salesYearToDay?: number;
  salesLast3Months?: number;
}

interface ManufacturerInfo {
  about?: string;
  manufacturerId?: string;
  onHold?: number;
  name?: string;
  address1?: string;
  address2?: string;
  city?: string;
  province?: string;
  country?: string;
  postalCode?: string;
  pOEmail?: string;
  representativeEmail?: string;
  contactName?: string;
  phone?: string;
  website?: string;
  creditLimit?: number;
  domain?: string;
  autoUpdate?: boolean;
  openToWork?: boolean;
  termsCode?: string;
  terms?: string;
  defaultMinimumOrder?: number;
  defaultLeadTime?: number;
  defaultWeeksOfStocking?: number;
  defaultMaxInventoryValue?: number;
  autoReorderDate?: number;
  publicName?: string;
  publicEmail?: string;
  creationDate?: number;
  lastUpdatedDate?: number;
  outstandingBalance?: number;
  tags?: string;
  fiscalYearMonthStart?: number;
  salesData?: SalesData;
}

interface ManufacturerCardProps {
  manufacturer: ManufacturerInfo;
  actions?: React.ReactNode;
  expandable?: boolean;
  detailView?: boolean;
}


export function ManufacturerCard({ manufacturer, actions, expandable, detailView }: ManufacturerCardProps) {
  const [expanded, setExpanded] = useState(false);

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function formatDate(date?: string) {
    if (!date) return "";
    const year = date.substring(0, 4);
    const month = date.substring(4, 6);
    const day = date.substring(6, 8);
    return new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  let manufacturerName;
  if (manufacturer && manufacturer.publicName) {
    manufacturerName = manufacturer.publicName;
  } else {
    manufacturerName = manufacturer.name;
  }

  const cardTitle = manufacturer.publicName || manufacturer.name;
  const cardSubtitle = !manufacturer.publicName ? "" : manufacturer.name;

  const titleContent = (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box sx={{ flexShrink: 0 }}>
        <Image
          src={`https://api.randmar.io/V4/Application/${manufacturer.manufacturerId}/Account/Logo`}
          alt={`${manufacturerName} logo`}
          altIcon={Storefront}
        />
      </Box>
      <Grid item xs={12} md={9}>
        <motion.div layout="position">
          <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={0.5} mb={0.75}>
            {
              !detailView &&
              <Stack direction="row" spacing={0.5} alignItems="center" style={{ backgroundColor: purple[100], padding: "4px 8px", borderRadius: 12, width: "max-content", height: "max-content" }}>
                <Storefront weight="fill" size={11} color={purple[600]} />
                <p style={{ fontSize: 11, fontWeight: 500, color: purple[600] }}>Manufacturer | {manufacturer.manufacturerId}</p>
              </Stack>
            }
            {
              manufacturer.onHold !== 0 &&
              <Stack direction="row" spacing={0.5} alignItems="center" style={{ backgroundColor: red[100], padding: "4px 8px", borderRadius: 12, width: "max-content", height: "max-content" }}>
                <Circle weight="fill" size={11} color={red[600]} />
                <p style={{ fontSize: 11, fontWeight: 500, color: red[600] }}>On Hold</p>
              </Stack>
            }
          </Stack>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600 }}>{cardTitle}</h3>
            {
              cardSubtitle &&
              <h3 style={{ paddingTop: 2, fontSize: 14, fontWeight: 500, color: "#656565" }}>{manufacturer.name}</h3>
            }
            <p style={{ paddingTop: 2, fontSize: 13, color: "#656565" }}>{manufacturer.city}, {manufacturer.province}, {manufacturer.country}</p>
          </div>

          <div>
            {
              manufacturer.phone &&
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 12 }}>
                <Phone size={16} color="#787878" />
                <p style={{ fontSize: 13, color: "#656565" }}>{manufacturer.phone}</p>
              </div>
            }
            {
              manufacturer.publicEmail &&
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
                <EnvelopeSimple size={16} color="#787878" />
                <p style={{ fontSize: 13, color: "#656565" }}>{manufacturer.publicEmail}</p>
              </div>
            }
            {
              manufacturer.website &&
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
                <GlobeSimple size={16} color="#787878" />
                <p style={{ fontSize: 13, color: "#656565" }}>{manufacturer.website?.replace(/^https:\/\//i, '')}</p>
              </div>
            }
          </div>
        </motion.div>
      </Grid>
    </Box>
  );

  const salesData = (
    manufacturer.salesData &&
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Sales</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Last 30 days</p>
            <p style={{ fontSize: 13 }}>{currency.format(manufacturer.salesData?.salesLast30Days || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Last 3 months</p>
            <p style={{ fontSize: 13 }}>{currency.format(manufacturer.salesData?.salesLast3Months || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Year to day</p>
            <p style={{ fontSize: 13 }}>{currency.format(manufacturer.salesData?.salesYearToDay || 0)}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );

  const orderingDetails = (
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Ordering Details</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={3}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Minimum order</p>
            <p style={{ fontSize: 13 }}>{currency.format(manufacturer.defaultMinimumOrder || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Weeks of stocking</p>
            <p style={{ fontSize: 13 }}>{manufacturer.defaultWeeksOfStocking}</p>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Lead time</p>
            <p style={{ fontSize: 13 }}>{manufacturer.defaultLeadTime} days</p>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Auto reorder date</p>
            <p style={{ fontSize: 13 }}>{manufacturer.autoUpdate ? manufacturer.autoReorderDate : "No automatic reording"}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );


  const publicInformation = (
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Public Information</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={12} md={manufacturer.about ? 6 : 12}>
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={12} sm={4} md={manufacturer.about ? 6 : 3}>
              <Stack direction="column" spacing={0.5}>
                <p style={{ fontSize: 12, color: "#616161" }}>Contact Name</p>
                <p style={{ fontSize: 13 }}>{manufacturer.contactName}</p>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8} md={manufacturer.about ? 6 : 3}>
              <Stack direction="column" spacing={0.5}>
                <p style={{ fontSize: 12, color: "#616161" }}>Rep Email</p>
                <p style={{ fontSize: 13 }}>{manufacturer.representativeEmail}</p>
              </Stack>
            </Grid>
            <Grid item xs={12} md={manufacturer.about ? 12 : 6}>
              <Stack direction="column" spacing={0.5}>
                <p style={{ fontSize: 12, color: "#616161" }}>Address</p>
                <p style={{ fontSize: 13 }}>{manufacturer.address1}, {manufacturer.city} {manufacturer.province}, {manufacturer.country} {manufacturer.postalCode}</p>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        {
          manufacturer.about &&
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={0.5}>
              <p style={{ fontSize: 12, color: "#616161" }}>About</p>
              <p style={{ fontSize: 13 }}>{manufacturer.about}</p>
            </Stack>
          </Grid>
        }
      </Grid>
    </div>
  );

  const businessInformation = (
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Business Information</p>
      <Grid container columnSpacing={1} rowSpacing={3}>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Account Created</p>
            <p style={{ fontSize: 13 }}>{formatDate(manufacturer.creationDate?.toString())}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Terms</p>
            <p style={{ fontSize: 13 }}>{manufacturer.terms}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )


  const expandableCardContent = (
    <Paper style={{ position: 'relative' }}>
      {
        expandable &&
        <ExpandIconContainer onClick={() => setExpanded(!expanded)}>
          {
            expanded ?
              <ArrowsInSimple size={18} color="#5f5f5f" />
              :
              <ArrowsOutSimple size={18} color="#5f5f5f" />
          }
        </ExpandIconContainer>
      }
      <Grid container spacing={2}>
        <Grid item xs={12} md={expanded ? 5 : 12}>
          {titleContent}
        </Grid>
        {
          expanded &&
          <Grid item xs={12} md={7} style={{ borderLeft: "1px solid #e1e1e1", marginBottom: "-18px" }}>
            <Box sx={{ display: { xs: 'block', md: 'none' }, margin: "18px -18px", borderTop: "1px solid #e1e1e1" }} />
            <Stack spacing={2}>
              {salesData}
              {orderingDetails}
            </Stack>
          </Grid>
        }
      </Grid>

      {
        expanded &&
        <div style={{ marginBottom: 24 }}>
          <div style={{ margin: "18px -18px", borderTop: "1px solid #e1e1e1" }} />
          {publicInformation}
          <div style={{ margin: "18px -18px", borderTop: "1px solid #e1e1e1" }} />
          {businessInformation}
        </div>
      }

      {
        actions &&
        <>
          {expanded && <div style={{ margin: "18px -18px", borderTop: "1px solid #e1e1e1" }} />}
          {<motion.div layout="position" style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: 4, paddingTop: expanded ? 0 : 8 }}>
            {actions}
          </motion.div>}
        </>
      }
    </Paper>
  )

  if (detailView) return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Paper style={{ height: '100%' }}>
          {titleContent}
        </Paper>
      </Grid>
      <Grid item xs={12} md={7}>
        <Paper style={{ height: '100%' }} padding="60">
          {salesData}
          {orderingDetails}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper padding="60">
          {publicInformation}
          <div style={{ margin: "24px -24px", borderTop: "1px solid #e1e1e1" }} />
          {businessInformation}
        </Paper>
      </Grid>
    </Grid>
  );

  return (
    <>
      <motion.div layoutId={`manufacturer-card-${manufacturer.manufacturerId}`}>
        {expandableCardContent}
      </motion.div>
      <ExpandedView open={expanded} onClose={() => setExpanded(false)} disableAutoFocus slots={{ backdrop: Backdrop }}>
        <motion.div layoutId={`manufacturer-card-${manufacturer.manufacturerId}`} style={{ width: 1024, maxHeight: '100%', margin: 8 }}>
          {expandableCardContent}
        </motion.div>
      </ExpandedView>
    </>
  )
}

const ExpandIconContainer = styled.div`
  position: absolute; 
  top: 8px; 
  right: 8px; 
  height: 24px; 
  width: 24px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  &:active {
    background-color: #e3e3e3;
  }
`;

const ExpandedView = styled(Modal)`
  position: fixed;
  z-index: 50;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.1);
  backdrop-filter: blur(2px);
  -webkit-tap-highlight-color: transparent;
  transition: all 150ms ease;
`;
