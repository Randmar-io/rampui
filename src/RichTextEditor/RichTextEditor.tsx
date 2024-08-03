import styled from '@emotion/styled';
import { ToggleButton, ToggleButtonGroup, toggleButtonGroupClasses } from '@mui/material';
import { Stack } from '@mui/system';
import { ListBullets, ListNumbers, TextB, TextItalic, TextStrikethrough, TextUnderline } from '@phosphor-icons/react';
import Underline from '@tiptap/extension-underline';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { BaseSelect } from '../Select/BaseSelect';
import { MenuItem } from '../Select/MenuItem';
import { grey } from '../colors';
import "./styles.css";

const extensions = [StarterKit, Underline];

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: "white",
  border: `1px solid ${grey[200]}`,
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: 3,
    border: 0,
    borderRadius: 8,
    padding: "3px 5px",
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
  {
    marginLeft: -1,
    borderLeft: '1px solid transparent',
  },
}));

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <>
      <Stack direction="row" spacing={1} p={1} sx={{ backgroundColor: "#fafafa", borderRadius: "12px 12px 0 0", borderBottom: "1px solid #eaeaea" }}>
        <BaseSelect
          size="small"
          value={editor.isActive('paragraph') ? 0 : (editor.getAttributes('heading').level || '')}
          onChange={(e) => {
            if (e.target.value === 0) {
              editor.chain().focus().setParagraph().run()
              return
            }
            editor.chain().focus().toggleHeading({ level: e.target.value as any }).run()
          }}
        >
          <MenuItem value={0}>Paragraph</MenuItem>
          <MenuItem value={1} sx={{ fontSize: "26px !important", fontWeight: "bold !important" }}>Heading 1</MenuItem>
          <MenuItem value={2} sx={{ fontSize: "20px !important", fontWeight: "bold !important" }}>Heading 2</MenuItem>
          <MenuItem value={3} sx={{ fontSize: "15px !important", fontWeight: "bold !important" }}>Heading 3</MenuItem>
          <MenuItem value={4} sx={{ fontSize: "13px !important", fontWeight: "bold !important" }}>Heading 4</MenuItem>
          <MenuItem value={5} sx={{ fontSize: "11px !important", fontWeight: "bold !important" }}>Heading 5</MenuItem>
          <MenuItem value={6} sx={{ fontSize: "9px !important", fontWeight: "bold !important" }}>Heading 6</MenuItem>
        </BaseSelect>
        <StyledToggleButtonGroup size="small" sx={{ backgroundColor: "white" }}>
          <ToggleButton value="bold" selected={editor.isActive('bold')} onChange={() => editor.chain().focus().toggleBold().run()} disableRipple>
            <TextB weight='bold' size={18} />
          </ToggleButton>
          <ToggleButton value="italic" selected={editor.isActive('italic')} onChange={() => editor.chain().focus().toggleItalic().run()} disableRipple>
            <TextItalic size={18} />
          </ToggleButton>
          <ToggleButton value="underline" selected={editor.isActive('underline')} onChange={() => editor.chain().focus().toggleUnderline().run()} disableRipple>
            <TextUnderline size={18} />
          </ToggleButton>
          <ToggleButton value="strike" selected={editor.isActive('strike')} onChange={() => editor.chain().focus().toggleStrike().run()} disableRipple>
            <TextStrikethrough size={18} />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup size="small" sx={{ backgroundColor: "white" }}>
          <ToggleButton value="bulletList" selected={editor.isActive('bulletList')} onChange={() => editor.chain().focus().toggleBulletList().run()} disableRipple>
            <ListBullets size={18} />
          </ToggleButton>
          <ToggleButton value="orderedList" selected={editor.isActive('orderedList')} onChange={() => editor.chain().focus().toggleOrderedList().run()} disableRipple>
            <ListNumbers size={18} />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Stack>
    </>
  )
}

const Container = styled('div')(({ theme }) => `
  border: 1px solid;
  border-radius: 12px;
  box-sizing: border-box;
  border-color: ${grey[200]};
  &:hover:not(:focus-within) {
    border-color: #c4c4c4;
  }
  &:focus-within {
    border-color: #aeaeae;
  }
`)

interface RichTextEditorProps {
  initialContent: string;
  setContent: (content: string) => void;
}

export const RichTextEditor = ({ initialContent, setContent }: RichTextEditorProps) => {
  return (
    <Container>
      <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={initialContent} onUpdate={({ editor }) => setContent(editor.getHTML())}>
        <></>
      </EditorProvider>
    </Container>
  )
}