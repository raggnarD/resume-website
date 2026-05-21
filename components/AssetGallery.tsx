'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Asset } from '@/content/experience';

type Orientation = 'horizontal' | 'vertical';

function getEmbedUrl(href: string): string {
  const yt = href.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;
  const ytShort = href.match(/youtube\.com\/shorts\/([^?&/]+)/);
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}?autoplay=1&rel=0`;
  const ytShared = href.match(/youtu\.be\/([^?&/]+)/);
  if (ytShared) return `https://www.youtube.com/embed/${ytShared[1]}?autoplay=1&rel=0`;
  const vm = href.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
  return href;
}

function isYouTubeShort(href: string): boolean {
  return /youtube\.com\/shorts\//.test(href);
}

function PlayIcon() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/55 ring-1 ring-white/30 backdrop-blur-sm transition-transform group-hover:scale-110">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );
}

function Thumb({
  asset,
  fullWidth,
  onOpen,
}: {
  asset: Asset;
  fullWidth: boolean;
  onOpen: (a: Asset) => void;
}) {
  const src = asset.kind === 'image' ? asset.src : asset.poster;
  const isVideo = asset.kind === 'video';

  const sizeCls = fullWidth ? 'w-full' : 'w-56 sm:w-64 shrink-0 snap-start';
  const baseClasses = `group relative block ${sizeCls} text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg cursor-zoom-in`;

  return (
    <button
      type="button"
      onClick={() => onOpen(asset)}
      className={baseClasses}
      aria-label={`Open ${asset.caption}`}
    >
      <div className="relative overflow-hidden rounded-lg border border-ink-100 bg-ink-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={asset.alt}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {isVideo && <PlayIcon />}
      </div>
      <p className="mt-1.5 text-[11px] text-ink-500 leading-snug">
        {asset.caption}
      </p>
    </button>
  );
}

function Modal({ asset, onClose }: { asset: Asset; onClose: () => void }) {
  const isVideo = asset.kind === 'video';
  const isShort = isVideo && isYouTubeShort(asset.href);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={asset.caption}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm animate-[fadeIn_.15s_ease-out]"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {asset.kind === 'image' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset.src}
            alt={asset.alt}
            className="block mx-auto max-h-[82vh] max-w-full w-auto rounded-md shadow-2xl"
          />
        ) : (
          <div
            className={`relative mx-auto rounded-md overflow-hidden shadow-2xl bg-black ${
              isShort
                ? 'aspect-[9/16] max-h-[82vh] max-w-[min(46vh,100%)]'
                : 'aspect-video max-h-[82vh] w-full'
            }`}
          >
            <iframe
              src={getEmbedUrl(asset.href)}
              title={asset.caption}
              className="absolute inset-0 h-full w-full"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
            />
          </div>
        )}
        <p className="mt-3 text-center text-sm text-white/70">
          {asset.caption}
        </p>
      </div>
    </div>
  );
}

export default function AssetGallery({
  assets,
  orientation = 'horizontal',
}: {
  assets: Asset[];
  orientation?: Orientation;
}) {
  const [active, setActive] = useState<Asset | null>(null);
  const [mounted, setMounted] = useState(false);
  const open = useCallback((a: Asset) => setActive(a), []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  const gallery =
    orientation === 'vertical' ? (
      <ul className="space-y-3 text-left">
        {assets.map((a) => (
          <li key={a.kind === 'image' ? a.src : a.poster}>
            <Thumb asset={a} fullWidth onOpen={open} />
          </li>
        ))}
      </ul>
    ) : (
      <div className="mt-4 relative">
        <ul className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
          {assets.map((a) => (
            <li key={a.kind === 'image' ? a.src : a.poster}>
              <Thumb asset={a} fullWidth={false} onOpen={open} />
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <>
      {gallery}
      {mounted && active &&
        createPortal(
          <Modal asset={active} onClose={close} />,
          document.body,
        )}
    </>
  );
}
