import { GraduationCap, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Activator, Content } from "./components";

interface AcademyLink {
  title: string;
  url: string;
}

export interface EducationProps {
  title?: string;
  description?: React.ReactNode;
  academyLinks?: AcademyLink[];
  youtubeVideoLink?: string;
}

export function Education({ ...rest }: EducationProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Activator onClick={() => setShow(prev => !prev)} icon={show ? X : GraduationCap} />
      <Content show={show} setShow={setShow} {...rest} />
    </>
  )
}