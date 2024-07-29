import React from 'react';
import { green, grey, red } from '../colors';

const styles = {
  headingLg: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  headingMd: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '22px',
  },
  headingSm: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  headingXs: {
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: '20px',
  },
  bodyLg: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  bodyMd: {
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '20px',
  },
  bodySm: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
  },
  bodyXs: {
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: '12px',
  },

  colors: {
    success: {
      color: green[600],
    },
    error: {
      color: red[600],
    },
    subdued: {
      color: grey[400],
    },
    regular: {
      color: grey[500],
    },
  },
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'headingLg' | 'headingMd' | 'headingSm' | 'headingXs' | 'bodyLg' | 'bodyMd' | 'bodySm' | 'bodyXs';
  weight?: 'bold' | 'semibold' | 'regular';
  color?: 'success' | 'error' | 'subdued' | 'regular';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export const Typography = ({ variant, weight, color, align, children, style, ...props }: TypographyProps) => {
  const Tag =
    variant === 'headingLg' ? 'h2' :
      variant === 'headingMd' ? 'h3' :
        variant === 'headingSm' ? 'h4' :
          variant === 'headingXs' ? 'h5' :
            'p';

  const computedStyle = {
    ...styles[variant || 'bodyMd'],
    ...styles.colors[color || 'regular'],
    fontWeight:
      weight === 'bold' ? 600 :
        weight === 'semibold' ? 500 :
          weight === 'regular' ? 400 :
            variant?.includes('heading') ? 600 : 400,
    textAlign: align,
    ...style
  };

  return (
    <Tag style={computedStyle} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
