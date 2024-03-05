import { ArrowSquareOut, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../Button";
import { Paper } from "../Paper";

interface ResellerInfo {
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
  country?: string;
  lastInvoiceDate?: number;
  postalCode?: string;
  website?: string;
  shopifyWebsite?: string;
  domain?: string;
  terms?: string;
  creationDate?: number;
  fiscalYearMonthStart?: number;
}

interface ResellerCardProps {
  reseller: ResellerInfo;
}

export function ResellerCard({ reseller }: ResellerCardProps) {
  return (
    <Paper>
      <div style={{ display: "flex", gap: 16 }}>
        <img
          src={`https://api.randmar.io/V4/Application/${reseller.resellerId}/Account/Logo`}
          alt={`${reseller.publicName} logo`}
          style={{
            width: 72,
            height: 72,
            objectFit: "contain",
            borderRadius: 8,
            border: "1px solid #e3e3e3",
          }}
        />
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 600 }}>{reseller.publicName}</h3>
          <p style={{ paddingTop: 2, color: "#656565" }}>{reseller.city}, {reseller.province}, {reseller.country}</p>

          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 16 }}>
            <Phone size={16} color="#787878" />
            <p style={{ color: "#656565" }}>{reseller.phone}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
            <EnvelopeSimple size={16} color="#787878" />
            <p style={{ color: "#656565" }}>{reseller.arEmail}</p>
            {/* <p style={{ fontSize: 12 }}>Copy</p> */}
          </div>

        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: 4, paddingTop: 16 }}>
        <a href={`https://reseller.randmar.io/${reseller.resellerId}`} target="_blank">
          <Button variant="primary" color="reseller" endicon={ArrowSquareOut}>View in Reseller</Button>
        </a>
      </div>
    </Paper>
  )
}