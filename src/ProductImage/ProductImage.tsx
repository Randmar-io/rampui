import { Stack } from '@mui/system';
import { Basket, CubeFocus, Download } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Image } from '../Image';
import { Modal } from '../Modal';
import { ModelViewer } from '../ModelViewer';

interface ProductImageProps {
  randmarSKU: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
  secondaryContent?: React.ReactNode;
}

export function ProductImage({ randmarSKU, size, alt, secondaryContent }: ProductImageProps) {
  const [open, setOpen] = useState(false);
  const [has3DModel, setHas3DModel] = useState(false);

  const checkFor3DModel = async () => {
    const res = await fetch(`https://api.randmar.io/Product/${randmarSKU}/3DModel/Exists`)
    const has3DModel: boolean = await res.json();
    setHas3DModel(has3DModel);
  }

  useEffect(() => {
    checkFor3DModel();
  }, []);

  const modelWithSecondaryContent = (
    <Stack direction="row">
      <ModelViewer source={`https://api.randmar.io/Product/${randmarSKU}/3DModel`} />
      <div style={{ flexGrow: 1, minWidth: 400, height: '70vh' }}>
        {secondaryContent}
      </div>
    </Stack>
  )

  const download3DModel = async () => {
    const filename = `${randmarSKU}_3DModel.glb`; // adjust the filename as needed
    const response = await fetch(`https://api.randmar.io/Product/${randmarSKU}/3DModel`);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const buttonSize = (size === "xl" || size === undefined) ? "medium" : "small";
  const spacing = (size === "xl" || size === undefined) ? 2 : 1;

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        {
          secondaryContent ?
            modelWithSecondaryContent
            :
            <ModelViewer source={`https://api.randmar.io/Product/${randmarSKU}/3DModel`} />
        }
      </Modal >

      <Stack alignItems="center" spacing={spacing}>
        {
          has3DModel &&
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Button variant="secondary" size={buttonSize} starticon={CubeFocus} onClick={() => setOpen(true)}>
              View 3D Model
            </Button>
            <Button
              variant="secondary"
              size={buttonSize}
              starticon={Download}
              style={{ height: buttonSize === "small" ? 26.1 : 31.6 }}
              onClick={download3DModel}
            />
          </Stack>
        }
        <Image
          alt={alt}
          size={size || "xl"}
          zoomable
          src={`https://api.randmar.io/Product/${randmarSKU}/Image`}
          altIcon={Basket}
        />
      </Stack>
    </>
  );
}