import React from 'react'
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'

const RankingItem = ({ position, name }: { position: number; name: string }) => {
  const medalColors = ['text-yellow-500', 'text-gray-500', 'text-orange-500']
  const medalColor = medalColors[position - 1] || ''

  return (
    <div className="relative">
      <Container>
        {position <= 3 && <MedalIcon className={`absolute -left-5 -top-1 h-10 w-10 fill-white ${medalColor}`} />}
        <p>{name}</p>
      </Container>
    </div>
  )
}

export default RankingItem
