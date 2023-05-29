import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export default function EmptyTextarea() {
  

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    display: block;
    width: 78%;
    line-height: 1.5;
    padding: 12px;
    background: #f5df4e;
    border: none;
    border-bottom: grey 1px solid;
  
    &:hover {
      border-bottom: black 2px solid;
    }
    
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  return <StyledTextarea aria-label="empty textarea" minRows={3} maxRows={6}/>;
}
