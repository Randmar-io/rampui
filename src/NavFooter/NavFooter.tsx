import { Stack } from "@mui/system";
import { SignOut } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../Button";
import { Image } from "../Image";
import { grey } from "../colors";

interface NavFooterProps {
  profileImageUrl?: string;
  profileName?: string;
  profileEmail?: string;
  onSignOut?: () => void;
  secondaryActions?: React.ReactNode[];
}

export function NavFooter({ profileImageUrl, profileName, profileEmail, onSignOut, secondaryActions }: NavFooterProps) {
  return (
    <>
      {
        secondaryActions &&
        <Stack spacing={1} py={1.5}>
          {secondaryActions}
        </Stack>
      }
      <Stack spacing={1.5} >
        <Stack direction="row" spacing={1.5} sx={{ borderTop: `1px solid ${grey[200]}`, pt: 1.5 }}>
          <Image style={{ flexShrink: 0 }} size="xs" src={profileImageUrl} />
          <Stack>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{profileName}</div>
            <div style={{ fontSize: 12, color: '#646464' }}>{profileEmail}</div>
          </Stack>
        </Stack>
        <Button fullWidth starticon={SignOut} onClick={onSignOut}>
          Sign out
        </Button>
      </Stack>
    </>
  )
}