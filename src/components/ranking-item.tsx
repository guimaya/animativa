import React from 'react'
import { Container } from './container'
import { MedalIcon } from '../../public/icon-medal'

const RankingItem = ({ position, name }: { position: number; name: string }) => {
  const medalColors = ['text-yellow-500', 'text-gray-500', 'text-orange-500']
  const medalColor = medalColors[position - 1] || 'white'

  return (
    <div className="relative">
      <Container>
        {position <= 3 && <MedalIcon className={`fill-whit absolute -top-2 left-2 h-10 w-10 ${medalColor}`} />}
        <p>{name}</p>
      </Container>
    </div>
  )
}

export default RankingItem
