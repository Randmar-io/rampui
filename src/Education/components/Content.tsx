import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import { Headset } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../../Button";
import { Link } from "../../Link";
import { Modal } from "../../Modal";
import { Typography } from "../../Typography";
import grey from "../../colors/grey";
import { EducationProps } from "../Education";

const Description = styled.p`
  color: ${grey[700]};
  line-height: 18px;
  margin-bottom: var(--r-spacing-30);
`

const Help = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--r-spacing-20);
  border-top: 1px solid #e3e3e3;
  padding: var(--r-spacing-30) 0;
  margin-top: var(--r-spacing-80);
`

export interface ContentProps extends EducationProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function Content({ show, setShow, title, description, academyLinks, youtubeVideoLink }: ContentProps) {
  return (
    <Modal open={!!show} onClose={() => setShow(false)} title={title} maxWidth="sm">
      <div>
        {description && <Description>{description}</Description>}
        {
          (academyLinks || []).length > 0 &&
          <Stack spacing={1} alignItems="center">
            {academyLinks?.map(({ title, url }) => (<Link key={url} href={url} external>{title}</Link>))}
          </Stack>
        }
        {
          youtubeVideoLink &&
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <iframe
              height={535}
              style={{ border: 0, borderRadius: 'var(--r-border-radius-md)' }}
              src={youtubeVideoLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        }
        <Help>
          <Typography variant="bodyMd">Need help or have questions?</Typography>
          <a
            href="https://calendar.app.google/38SnvM6vae622SNt6"
            target="_blank"
          >
            <Button starticon={Headset}>Book a call</Button>
          </a>
        </Help>
      </div>
    </Modal>
  )
}