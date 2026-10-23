import { ImageResponse } from 'next/og';

export const alt = 'Serge Harb — AI platforms and software for real businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#080f0b', color: '#eaf0e8', fontFamily: 'sans-serif' }}>
      <div style={{ color: '#9aec50', fontSize: 24, marginBottom: 32 }}>~/serge-harb $ whoami</div>
      <div style={{ fontSize: 88, fontWeight: 700 }}>Serge Harb</div>
      <div style={{ fontSize: 44, color: '#929b90', marginTop: 12 }}>AI platforms. Software for real businesses.</div>
      <div style={{ fontSize: 24, color: '#9aec50', marginTop: 56 }}>sergeharb.com</div>
    </div>,
    size,
  );
}
