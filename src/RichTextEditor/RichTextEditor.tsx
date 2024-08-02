import styled from '@emotion/styled';
import { FormatBold, FormatItalic, FormatListBulleted, FormatListNumbered, FormatStrikethrough, FormatUnderlined } from '@mui/icons-material';
import { MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Stack } from '@mui/system';
import Underline from '@tiptap/extension-underline';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { grey } from '../colors';
import "./styles.css";

const extensions = [StarterKit, Underline];

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <>
      <Stack direction="row" spacing={1} p={1} sx={{ backgroundColor: "#fafafa", borderRadius: "12px 12px 0 0" }}>
        <Select
          sx={{ backgroundColor: "white" }}
          size="small"
          value={editor.isActive('paragraph') ? 0 : (editor.getAttributes('heading').level || '')}
          onChange={(e) => {
            if (e.target.value === 0) {
              editor.chain().focus().setParagraph().run()
              return
            }
            editor.chain().focus().toggleHeading({ level: e.target.value }).run()
          }}
        >
          <MenuItem value={0}>Paragraph</MenuItem>
          <MenuItem value={1}>Heading 1</MenuItem>
          <MenuItem value={2}>Heading 2</MenuItem>
          <MenuItem value={3}>Heading 3</MenuItem>
          <MenuItem value={4}>Heading 4</MenuItem>
          <MenuItem value={5}>Heading 5</MenuItem>
          <MenuItem value={6}>Heading 6</MenuItem>
        </Select>
        <ToggleButtonGroup size="small" sx={{ backgroundColor: "white" }}>
          <ToggleButton value="bold" selected={editor.isActive('bold')} onChange={() => editor.chain().focus().toggleBold().run()}>
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" selected={editor.isActive('italic')} onChange={() => editor.chain().focus().toggleItalic().run()}>
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underline" selected={editor.isActive('underline')} onChange={() => editor.chain().focus().toggleUnderline().run()}>
            <FormatUnderlined />
          </ToggleButton>
          <ToggleButton value="strike" selected={editor.isActive('strike')} onChange={() => editor.chain().focus().toggleStrike().run()}>
            <FormatStrikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup size="small" sx={{ backgroundColor: "white" }}>
          <ToggleButton value="bulletList" selected={editor.isActive('bulletList')} onChange={() => editor.chain().focus().toggleBulletList().run()}>
            <FormatListBulleted />
          </ToggleButton>
          <ToggleButton value="orderedList" selected={editor.isActive('orderedList')} onChange={() => editor.chain().focus().toggleOrderedList().run()}>
            <FormatListNumbered />
          </ToggleButton>
        </ToggleButtonGroup>
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