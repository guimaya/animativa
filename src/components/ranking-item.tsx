import React from 'react'
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'

interface RankingProps {
  name: string
  position: number
}

export const Ranking: React.FC<RankingProps> = ({ name, position }) => {
  const medalColors: Record<number, string> = {
    1: 'text-yellow-500',
    2: 'text-gray-500',
    3: 'text-orange-500'
  }

  return (
    <div className="relative" key={position}>
      {position <= 3 && (
        <Container>
          <MedalIcon className={`absolute -top-2 left-2 h-10 w-10 fill-white ${medalColors[position] || ''}`} />
          <p>{name}</p>
        </Container>
      )}
      {position > 3 && <p>{name}</p>}
    </div>
  )
}
