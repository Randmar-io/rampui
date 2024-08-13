import styled from "@emotion/styled";
import { Modal } from "@mui/base/Modal";
import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { ArrowsInSimple, ArrowsOutSimple, EnvelopeSimple, GlobeSimple, Phone, Prohibit, SealCheck, SealWarning, Storefront } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Chip, ChipProps } from "../Chip";
import { Paper } from "../Paper";
import { ProfileImage } from "../ProfileImage";
import blue from "../colors/blue";
import purple from "../colors/purple";
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
  over45?: number;
  over30?: number;
  over0?: number;
  total?: number;
}

interface OrderDetails {
  processing?: string;
  shipped?: string;
  delayed?: string;
}

interface ResellerInfo {
  about?: string;
  address1?: string;
  address2?: string;
  arEmail?: string;
  city?: string;
  contactName?: string;
  country?: string;
  creationDate?: number;
  creditLimit?: number;
  defaultWarehouse?: string;
  domain?: string;
  fiscalYearMonthStart?: number;
  isQualified?: boolean;
  lastInvoiceDate?: number;
  name?: string;
  onHold?: number;
  orderDetails?: OrderDetails;
  phone?: string;
  poEmail?: string;
  postalCode?: string;
  priceProfile?: number;
  priority?: string;
  province?: string;
  publicEmail?: string;
  publicName?: string;
  resellerId?: string;
  salesData?: SalesData;
  shippingProfile?: string;
  shipVia?: string;
  shipViaDescription?: string;
  shopifyWebsite?: string;
  statement?: Statement;
  terms?: string;
  website?: string;
}

interface ResellerCardProps {
  reseller: ResellerInfo;
  actions?: React.ReactNode;
  expandable?: boolean;
  detailView?: boolean;
  qualificationStatus?: string;
}


export function ResellerCard({ reseller, actions, expandable, detailView, qualificationStatus }: ResellerCardProps) {
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

  function getPropsFromQualification(qualificationStatus?: string): ChipProps | undefined {
    switch (qualificationStatus) {
      case "Qualified":
        return { color: purple, label: "Qualified", icon: SealCheck };
      case "Do Not Sell":
        return { color: red, label: "Do Not Sell", icon: Prohibit };
      case "Suspended":
        return { color: red, label: "Suspended", icon: Prohibit };
    }
  }

  let resellerName;
  if (reseller && reseller.publicName) {
    resellerName = reseller.publicName;
  } else {
    resellerName = reseller.name;
  }

  const cardTitle = reseller.publicName || reseller.name;
  const cardSubtitle = !reseller.publicName ? "" : reseller.name;

  const titleContent = (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box sx={{ flexShrink: 0 }}>
        <ProfileImage applicationId={reseller.resellerId || ""} size="md" />
      </Box>
      <Grid item xs={12} md={9}>
        <motion.div layout="position">
          <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={0.5} mb={0.75}>
            {
              !detailView &&
              <Chip color={blue} label={`Reseller | ${reseller.resellerId}`} icon={Storefront} />
            }
            {
              reseller.onHold !== 0 &&
              <Chip color={red} label="On Hold" icon={SealWarning} />
            }
            {
              qualificationStatus &&
              <Chip {...getPropsFromQualification(qualificationStatus)} />
            }
          </Stack>

          <div>
            <h3 style={{ fontSize: 16, fontWeight: 600 }}>{cardTitle}</h3>
            {
              cardSubtitle &&
              <h3 style={{ paddingTop: 2, fontSize: 14, fontWeight: 500, color: "#656565" }}>{reseller.name}</h3>
            }
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
    </Box>
  );

  const salesData = (
    reseller.salesData &&
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
    reseller.statement &&
    <div>
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

  const orderDetails = (
    reseller.orderDetails &&
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Order Details</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Processing</p>
            <p style={{ fontSize: 13 }}>{reseller.orderDetails?.processing}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Shipped</p>
            <p style={{ fontSize: 13 }}>{reseller.orderDetails?.shipped}</p>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack direction="column" spacing={0.5}>
            <p style={{ fontSize: 12, color: "#616161" }}>Delayed</p>
            <p style={{ fontSize: 13 }}>{reseller.orderDetails?.delayed}</p>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );


  const publicInformation = (
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>Public Information</p>
      <Grid container columnSpacing={1} rowSpacing={2}>
        <Grid item xs={12} md={reseller.about ? 6 : 12}>
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={12} sm={4} md={reseller.about ? 6 : 3}>
              <Stack direction="column" spacing={0.5}>
                <p style={{ fontSize: 12, color: "#616161" }}>Contact Name</p>
                <p style={{ fontSize: 13 }}>{reseller.contactName}</p>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={8} md={reseller.about ? 6 : 3}>
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
              {accountBalance}
              {orderDetails}
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
        <motion.div layoutId={`reseller-card-${reseller.resellerId}`} style={{ width: 1024, maxHeight: '100%', margin: 8 }}>
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
