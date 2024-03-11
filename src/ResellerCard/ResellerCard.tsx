import styled from "@emotion/styled";
import { Modal } from "@mui/base/Modal";
import { Box, Grid, Stack } from "@mui/material";
import { ArrowsInSimple, ArrowsOutSimple, Circle, EnvelopeSimple, GlobeSimple, Phone, Storefront, User } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Paper } from "../Paper";
import blue from "../colors/blue";
import red from "../colors/red";

interface SalesData {
  resellerId?: string | null;
  manufacturerId?: string | null;
  lastCalculated?: string;
  salesLast30Days?: number;
  salesYearToDay?: number;
  salesLast3Months?: number;
}

interface Statement {
  over45: number;
  over30: number;
  over0: number;
  total: number;
}

interface ResellerInfo {
  about?: string;
  resellerId?: string;
  publicName?: string;
  name?: string;
  onHold?: number;
  defaultWarehouse?: string;
  priority?: string;
  province?: string;
  shipVia?: string;
  shipViaDescription?: string;
  priceProfile?: number;
  shippingProfile?: string;
  arEmail?: string;
  poEmail?: string;
  contactName?: string;
  phone?: string;
  address1?: string;
  address2?: string;
  city?: string;
  creditLimit?: number;
  country?: string;
  lastInvoiceDate?: number;
  postalCode?: string;
  website?: string;
  shopifyWebsite?: string;
  domain?: string;
  terms?: string;
  creationDate?: number;
  fiscalYearMonthStart?: number;
  publicEmail?: string;
  salesData?: SalesData;
  statement?: Statement;
}

interface ResellerCardProps {
  reseller: ResellerInfo;
  actions?: React.ReactNode;
  expandable?: boolean;
}


export function ResellerCard({ reseller, actions, expandable }: ResellerCardProps) {
  const [expanded, setExpanded] = useState(expandable ? false : true);
  const [hasImage, setHasImage] = useState(true);

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

  const titleContent = (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        {
          hasImage ?
            <motion.img
              layout="position"
              src={`https://api.randmar.io/V4/Application/${reseller.resellerId}/Account/Logo`}
              onError={() => setHasImage(false)}
              alt={`${reseller.publicName} logo`}
              style={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: "contain",
                borderRadius: 8,
                border: "1px solid #e3e3e3",
              }}
            />
            :
            <div
              style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: 8,
                border: "1px solid #e3e3e3",
                backgroundColor: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <User size={24} color="#949494" />
            </div>
        }
      </Grid>
      <Grid item xs={12} md={9}>
        <motion.div layout="position">
          <Stack direction="row" alignItems="center" spacing={0.5} mb={0.75}>
            {
              expandable &&
              <Stack direction="row" spacing={0.5} alignItems="center" style={{ backgroundColor: blue[100], padding: "4px 8px", borderRadius: 12, width: "max-content", height: "max-content" }}>
                <Storefront weight="fill" size={11} color={blue[500]} />
                <p style={{ fontSize: 11, fontWeight: 500, color: blue[500] }}>Reseller | {reseller.resellerId}</p>
              </Stack>
            }
            {
              reseller.onHold !== 0 &&
              <Stack direction="row" spacing={0.5} alignItems="center" style={{ backgroundColor: red[100], padding: "4px 8px", borderRadius: 12, width: "max-content", height: "max-content" }}>
                <Circle weight="fill" size={11} color={red[500]} />
                <p style={{ fontSize: 11, fontWeight: 500, color: red[500] }}>On Hold</p>
              </Stack>
            }
          </Stack>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600 }}>{reseller.publicName}</h3>
            <p style={{ paddingTop: 2, fontSize: 13, color: "#656565" }}>{reseller.city}, {reseller.province}, {reseller.country}</p>
          </div>


          <div>
            {
              reseller.phone &&
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 12 }}>
                <Phone size={16} color="#787878" />
                <p style={{ fontSize: 13, color: "#656565" }}>{reseller.phone}</p>
              </div>
            }
            {
              reseller.publicEmail &&
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
                <EnvelopeSimple size={16} color="#787878" />
                <p style={{ fontSize: 13, color: "#656565" }}>{reseller.publicEmail}</p>
              </div>
            }
            {
              reseller.website &&
              <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
                <GlobeSimple size={16} color="#787878" />
                <p style={{ fontSize: 13, color: "#656565" }}>{reseller.website?.replace(/^https:\/\//i, '')}</p>
              </div>
            }
          </div>
        </motion.div>
      </Grid>
    </Grid>
  );

  const salesData = (
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Sales</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Last 30 days</p>
            <p style={{ fontSize: 13 }}>{currency.format(reseller.salesData?.salesLast30Days || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Last 3 months</p>
            <p style={{ fontSize: 13 }}>{currency.format(reseller.salesData?.salesLast3Months || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Year to day</p>
            <p style={{ fontSize: 13 }}>{currency.format(reseller.salesData?.salesYearToDay || 0)}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );

  const accountBalance = (
    <div style={{ marginTop: 18 }}>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Account Balance</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>0 - 30 days</p>
            <p style={{ fontSize: 13 }}>{currency.format(reseller.statement?.over0 || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>31 - 45 days</p>
            <p style={{ fontSize: 13 }}>{currency.format(reseller.statement?.over30 || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>45+ days</p>
            <p style={{ fontSize: 13 }}>{currency.format(reseller.statement?.over45 || 0)}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );


  const publicInformation = (
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Public Information</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={12} sm={6} md={reseller.about ? 6 : 3}>
              <Stack direction="column" spacing={0.5}>
                <p style={{ fontSize: 12, color: "#616161" }}>Contact Name</p>
                <p style={{ fontSize: 13 }}>{reseller.contactName}</p>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={reseller.about ? 6 : 3}>
              <Stack direction="column" spacing={0.5}>
                <p style={{ fontSize: 12, color: "#616161" }}>Email</p>
                <p style={{ fontSize: 13 }}>{reseller.arEmail}</p>
              </Stack>
            </Grid>
            <Grid item xs={12} md={reseller.about ? 12 : 6}>
              <Stack direction="column" spacing={0.5}>
                <p style={{ fontSize: 12, color: "#616161" }}>Address</p>
                <p style={{ fontSize: 13 }}>{reseller.address1}, {reseller.city} {reseller.province}, {reseller.country} {reseller.postalCode}</p>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        {
          reseller.about &&
          <Grid item xs={12} md={6}>
            <Stack direction="column" spacing={0.5}>
              <p style={{ fontSize: 12, color: "#616161" }}>About</p>
              <p style={{ fontSize: 13 }}>{reseller.about}</p>
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
            <p style={{ fontSize: 13 }}>{formatDate(reseller.creationDate?.toString())}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Last Invoice</p>
            <p style={{ fontSize: 13 }}>{formatDate(reseller.lastInvoiceDate?.toString())}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Credit Limit</p>
            <p style={{ fontSize: 13 }}>{currency.format(reseller.creditLimit || 0)}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Shipping Profile</p>
            <p style={{ fontSize: 13 }}>{reseller.shippingProfile}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Price Profile</p>
            <p style={{ fontSize: 13 }}>{reseller.priceProfile}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Tier</p>
            <p style={{ fontSize: 13 }}>{reseller.priority} | {reseller.terms}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )


  const expandableCardContent = (
    <Paper style={{ position: 'relative' }}>
      <ExpandIconContainer onClick={() => setExpanded(!expanded)}>
        {
          expanded ?
            <ArrowsInSimple size={18} color="#5f5f5f" />
            :
            <ArrowsOutSimple size={18} color="#5f5f5f" />
        }
      </ExpandIconContainer>
      <Grid container spacing={0}>
        <Grid item xs={12} md={expanded ? 5 : 12}>
          {titleContent}
        </Grid>
        {
          expanded &&
          <Grid item xs={12} md={7} style={{ borderLeft: "1px solid #e1e1e1", margin: "-18px", padding: 18, paddingLeft: 24 }}>
            <Box sx={{ display: { xs: 'block', md: 'none' }, margin: "18px -18px", borderTop: "1px solid #e1e1e1" }} />
            {salesData}
            {accountBalance}
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

  if (!expandable) return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Paper style={{ height: '100%' }}>
          {titleContent}
        </Paper>
      </Grid>
      <Grid item xs={12} md={7}>
        <Paper style={{ height: '100%' }} padding="60">
          {salesData}
          {accountBalance}
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
      <motion.div layoutId={`reseller-card-${reseller.resellerId}`}>
        {expandableCardContent}
      </motion.div>
      <ExpandedView open={expanded} onClose={() => setExpanded(false)} disableAutoFocus slots={{ backdrop: Backdrop }}>
        <motion.div layoutId={`reseller-card-${reseller.resellerId}`} style={{ width: 1024, height: '100%', overflowY: 'scroll', margin: 8 }}>
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