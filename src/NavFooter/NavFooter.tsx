import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { PencilSimple, SignOut } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Button } from "../Button";
import { Image } from "../Image";
import { Typography } from "../Typography";
import { grey } from "../colors";

interface NavFooterProps {
  profileImageUrl?: string;
  profileName?: string;
  profileEmail?: string;
  profileTier?: string;
  onSignOut?: () => void;
  secondaryActions?: React.ReactNode[];
  loading?: boolean;
  onClickEdit?: () => void;
}

export function NavFooter({ profileImageUrl, profileName, profileEmail, profileTier, onSignOut, secondaryActions, loading, onClickEdit }: NavFooterProps) {
  const [showEditButton, setShowEditButton] = useState(false);

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
      <Stack spacing={1.5} onMouseEnter={() => setShowEditButton(true)} onMouseLeave={() => setShowEditButton(false)}>
        <Stack direction="row" spacing={1.5} sx={{ borderTop: `1px solid ${grey[200]}`, pt: 1.5 }}>
          <Image
            style={{ flexShrink: 0 }}
            size="xs"
            src={profileImageUrl}
          />
          <Stack direction="row" justifyContent="space-between" spacing={1} width="100%">
            <Stack sx={{ flexGrow: 1 }} spacing={0.25}>
              <Typography weight="semibold" style={{ lineHeight: 1.2 }}>{profileName}</Typography>
              {profileTier && <div style={{ fontSize: 12 }}>{profileTier}</div>}
              <div style={{ fontSize: 12, color: '#646464' }}>{profileEmail}</div>
            </Stack>
            {
              !!onClickEdit &&
              <Button
                variant="tertiary"
                iconOnly
                starticon={PencilSimple}
                size="small"
                onClick={onClickEdit}
                style={{
                  flexShrink: 0,
                  visibility: showEditButton ? 'visible' : 'hidden'
                }}
              />
            }
          </Stack>
        </Stack>
        <Button fullWidth starticon={SignOut} onClick={onSignOut}>
          Sign out
        </Button>
      </Stack>
    </>
  )
}