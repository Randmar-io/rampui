import { GraduationCap, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Activator, Content } from "./components";

export interface EducationProps {
  title?: string;
  description?: string;
  blogPostLink?: string;
  youtubeVideoLink?: string;
}

export function Education({ ...rest }: EducationProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Activator onClick={() => setShow(prev => !prev)} icon={show ? X : GraduationCap} />
      <Content show={show} {...rest} />
    </>
  )
}