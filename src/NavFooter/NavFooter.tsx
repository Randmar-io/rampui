import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { PencilSimple, SignOut } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../Button";
import { Image } from "../Image";
import { grey } from "../colors";

interface NavFooterProps {
  profileImageUrl?: string;
  profileName?: string;
  profileEmail?: string;
  profileTier?: string;
  onSignOut?: () => void;
  secondaryActions?: React.ReactNode[];
  loading?: boolean;
  onClickProfileImg?: () => void;
}

export function NavFooter({ profileImageUrl, profileName, profileEmail, profileTier, onSignOut, secondaryActions, loading, onClickProfileImg }: NavFooterProps) {
  if (loading) return (
    <Stack spacing={1.5} >
      <Stack direction="row" spacing={1.5} sx={{ borderTop: `1px solid ${grey[200]}`, pt: 1.5 }}>
        <Skeleton width={48} height={48} variant="rounded" />
        <Stack>
          <Skeleton width={60} height={16} />
          <Skeleton width={120} height={16} />
        </Stack>
      </Stack>
      <Skeleton width={'100%'} height={32} variant="rounded" />
    </Stack>
  )

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
          <Image
            style={{ flexShrink: 0 }}
            size="xs"
            src={profileImageUrl}
            onClick={onClickProfileImg}
            hoverIcon={PencilSimple}
          />
          <Stack>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{profileName}</div>
            {profileTier && <div style={{ fontSize: 12 }}>{profileTier}</div>}
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