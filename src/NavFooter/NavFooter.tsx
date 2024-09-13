import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { PencilSimple, SignOut } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Button } from "../Button";
import { ProfileImage } from "../ProfileImage";
import { Typography } from "../Typography";
import { grey } from "../colors";

const ProfileNameLink = styled.a(({ theme }) => (`
  color: ${grey[500]};  
  &:hover {
    color: ${theme.color[500]};
  }
`))

interface LinkProps {
  url: string;
  external?: boolean;
}

export interface NavFooterProps {
  applicationId: string;
  profileName?: string;
  profileEmail?: string;
  profileTier?: string;
  profileNameLink?: LinkProps;
  onSignOut?: () => void;
  secondaryActions?: React.ReactNode[];
  loading?: boolean;
  onClickEdit?: () => void;
}

export function NavFooter({
  applicationId,
  profileName,
  profileEmail,
  profileTier,
  profileNameLink,
  onSignOut,
  secondaryActions,
  loading,
  onClickEdit
}: NavFooterProps) {
  const theme = useTheme();
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
          <ProfileImage applicationId={applicationId} />
          <Stack direction="row" justifyContent="space-between" spacing={1} width="100%">
            <Stack sx={{ flexGrow: 1 }} spacing={0.25}>
              {
                profileNameLink ?
                  <ProfileNameLink href={profileNameLink.url} target={profileNameLink.external ? "_blank" : "_self"}>
                    <Typography weight="semibold" style={{ lineHeight: 1.2, color: "inherit" }}>{profileName}</Typography>
                  </ProfileNameLink>
                  :
                  <Typography weight="semibold" style={{ lineHeight: 1.2 }}>{profileName}</Typography>
              }
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