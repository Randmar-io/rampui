import styled from "@emotion/styled";
import { ArrowUpRight, Headset } from "@phosphor-icons/react";
import React from "react";
import { Button } from "../../Button";
import Modal from "../../Modal/Modal";
import grey from "../../colors/grey";
import { EducationProps } from "../Education";

const Description = styled.p`
  color: ${grey[700]};
  line-height: 18px;
  margin-bottom: var(--r-spacing-30);
`

const BlogLink = styled.a`
  text-decoration: none;
  color: #CE2C31;
  border-bottom: 1px solid #CE2C31;
  display: flex;
  align-items: center;
  gap: var(--r-spacing-5);
  width: max-content;
  margin-bottom: var(--r-spacing-80);

  &:hover {
    border-color: transparent;
  }
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

export function Content({ show, setShow, title, description, blogPostLink, youtubeVideoLink }: ContentProps) {
  return (
    <Modal open={!!show} onClose={() => setShow(false)} title={title}>
      <div style={{ maxWidth: 520, margin: 'auto' }}>
        <Description>{description}</Description>
        <BlogLink href={blogPostLink} target="_blank">
          Read the blog post <ArrowUpRight size={16} />
        </BlogLink>
        <iframe
          width="100%"
          height="292"
          style={{ border: 0, borderRadius: 'var(--r-border-radius-md)' }}
          src={youtubeVideoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <Help>
          <div style={{ fontSize: 13 }}>Need help or have questions?</div>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2qldwIeWkcUVUN6CJ_WafW2gwTWhPbk3Od40voZYxGcoPajxRPVFfLDqCwG04DzWVknmHPYcXt"
            target="_blank"
          >
            <Button startIcon={Headset}>Book a call</Button>
          </a>
        </Help>
      </div>
    </Modal>
  )
}