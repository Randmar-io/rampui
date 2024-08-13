import { Tooltip } from '@mui/material';
import { Stack } from '@mui/system';
import { Check, CopySimple, DownloadSimple, Play } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Image, imgSizeMap } from '../Image';
import { Modal } from '../Modal';
import { Size } from '../utility/Types';

interface ProductImageProps {
  randmarSKU: string;
  size?: Size;
  alt?: string;
  secondaryContent?: React.ReactNode;
}

export function ProductImage({ randmarSKU, size, alt, secondaryContent }: ProductImageProps) {
  const [open, setOpen] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);
  const vidUrl = `https://api.randmar.io/Product/${randmarSKU}/Video`;

  const checkForVideo = async () => {
    const res = await fetch(vidUrl + "/Exists");
    const hasVideo: boolean = await res.json();
    setHasVideo(hasVideo);
  }

  useEffect(() => {
    checkForVideo();
  }, []);

  const modelWithSecondaryContent = (
    <Stack direction="row">
      <video style={{ borderRadius: 12, width: '100%', maxHeight: '90vh' }} controls autoPlay muted loop>
        <source src={`https://api.randmar.io/Product/${randmarSKU}/Video`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ flexGrow: 1, minWidth: 400, height: '70vh' }}>
        {secondaryContent}
      </div>
    </Stack>
  )

  async function handleDownload() {
    if (hasVideo) {
      setLoadingDownload(true);

      const response = await fetch(vidUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${randmarSKU || 'product'}-video.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setLoadingDownload(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(vidUrl);
    setCopyClicked(true);
    setTimeout(() => {
      setCopyClicked(false);
    }, 2000)
  }

  function handleOpenVideo() {
    setOpen(true);
  }

  const imgSize = imgSizeMap[size || "xl"];

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} flush maxWidth="xs" hideCloseIcon>
        {
          secondaryContent ?
            modelWithSecondaryContent
            :
            <div style={{ width: '100%', position: 'relative' }}>
              <video style={{ width: '100%' }} controls autoPlay>
                <source src={`https://api.randmar.io/Product/${randmarSKU}/Video`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Stack direction="row" spacing={0.5} p={1} alignItems="center" justifyContent="right" style={{ position: 'absolute', top: 0, right: 0 }}>
                <Tooltip title="Copy video link">
                  <Button variant="secondary" starticon={copyClicked ? Check : CopySimple} iconOnly onClick={handleCopy} />
                </Tooltip>
                <Tooltip title="Download video">
                  <Button variant="secondary" starticon={DownloadSimple} iconOnly onClick={handleDownload} loading={loadingDownload} />
                </Tooltip>
              </Stack>
            </div>
        }
      </Modal >

      <div style={{ position: 'relative', width: 'max-content', height: 'max-content' }}>
        <Image
          alt={alt}
          size={size || "xl"}
          zoomable={!hasVideo}
          onClick={hasVideo ? handleOpenVideo : undefined}
          hoverIcon={hasVideo ? Play : undefined}
          src={`https://api.randmar.io/Product/${randmarSKU}/Image?width=${imgSize * 1.5}&height=${imgSize * 1.5}`}
          fullSizeSrc={`https://api.randmar.io/Product/${randmarSKU}/Image`}
        />
        {
          hasVideo &&
          <Button
            variant="secondary"
            size="small"
            style={{ position: 'absolute', top: 4, right: 4 }}
            starticon={Play}
            iconOnly
            onClick={handleOpenVideo}
          />
        }
      </div>
    </>
  );
}