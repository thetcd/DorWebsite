import { ImageResponse } from 'next/og'

// Force dynamic rendering
export const runtime = 'edge'

// Image metadata
export const alt = 'Dor Cohen - MPC Wallet Expert & Web3 Professional'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: '#0D0D0D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 'bold',
              color: '#AB9FF2',
              marginBottom: '30px',
            }}
          >
            Dor Cohen
          </div>
          <div
            style={{
              fontSize: 38,
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: '600',
              marginBottom: '35px',
            }}
          >
            Web3 Professional & MPC Wallet Expert
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#A0A0A0',
              textAlign: 'center',
              display: 'flex',
            }}
          >
            ForDeFi • Utila • SeaSwap
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
