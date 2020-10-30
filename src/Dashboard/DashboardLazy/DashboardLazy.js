import React, { Suspense } from 'react'
import './DashboardLazy.css'

const Item1 = React.lazy(() => import('../shared/Item1'))
const Item2 = React.lazy(() => import('../shared/Item2'))
const Item3 = React.lazy(() => import('../shared/Item3'))

export const DashboardLazy = () => {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Item1 />
      </Suspense>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Item2 />
      </Suspense>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Item3 />
      </Suspense>
    </div>
  )
}
