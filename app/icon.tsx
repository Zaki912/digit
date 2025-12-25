import { ImageResponse } from 'next/og'
 
// Configuration de l'image (carré standard)
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Génération de l'icône par le code
export default function Icon() {
  return new ImageResponse(
    (
      // On dessine un fond violet arrondi avec une goutte d'eau
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(to bottom right, #8b5cf6, #d946ef)', // Dégradé Violet/Rose
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '10px', // Bords un peu arrondis (style iOS)
        }}
      >
        💧
      </div>
    ),
    {
      ...size,
    }
  )
}